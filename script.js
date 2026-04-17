/* ===================================================
   Equipment Inventory Management - script.js
   =================================================== */

'use strict';

// --------------------------------------------------
// State
// --------------------------------------------------
let records = [];
let endUsers = [];

// --------------------------------------------------
// Initialisation
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    populateStaticDropdowns();
    populateProductModelDropdown();
    populateEndUserDropdown();
    setupTabSwitching();
    setupFormListeners();
    setupModalListeners();
    setupRecordsTabListeners();
    setupSettingsListeners();

    // Set today's date as default for visit date
    const visitDateEl = document.getElementById('visitDate');
    if (visitDateEl) visitDateEl.value = new Date().toISOString().split('T')[0];
});

// --------------------------------------------------
// Data persistence (localStorage)
// --------------------------------------------------
function loadData() {
    try {
        const savedRecords = localStorage.getItem('inventoryRecords');
        records = savedRecords ? JSON.parse(savedRecords) : [];
    } catch (e) {
        console.error('Failed to load records:', e);
        records = [];
    }

    try {
        const savedEndUsers = localStorage.getItem('customEndUsers');
        const customEndUsers = savedEndUsers ? JSON.parse(savedEndUsers) : [];
        // Merge built-in database with custom entries, custom entries take precedence
        const builtinPoints = new Set(endUserDatabase.map(u => u.installationPoint));
        endUsers = [
            ...endUserDatabase,
            ...customEndUsers.filter(u => !builtinPoints.has(u.installationPoint))
        ];
    } catch (e) {
        console.error('Failed to load end users:', e);
        endUsers = [...endUserDatabase];
    }
}

function saveRecords() {
    try {
        localStorage.setItem('inventoryRecords', JSON.stringify(records));
    } catch (e) {
        console.error('Failed to save records:', e);
        alert('Warning: Could not save records. Storage may be full.');
    }
}

function saveCustomEndUsers() {
    try {
        const builtinPoints = new Set(endUserDatabase.map(u => u.installationPoint));
        const custom = endUsers.filter(u => !builtinPoints.has(u.installationPoint));
        localStorage.setItem('customEndUsers', JSON.stringify(custom));
    } catch (e) {
        console.error('Failed to save custom end users:', e);
    }
}

// --------------------------------------------------
// Populate dropdowns from data.js
// --------------------------------------------------
function populateStaticDropdowns() {
    populateSelect('visitType', visitTypes);
    populateSelect('distributionChannel', distributionChannels);
    populateSelect('country', countries);
    populateSelect('region', turkishRegions);
    populateSelect('city', turkishCities);
    populateSelect('industry', industries);
    populateSelect('application', applications);
    populateSelect('productType', productTypes);
    populateSelect('mechanicalSeal', mechanicalSeals);
    populateSelect('currency', currencies);
    populateSelect('orderStatus', orderStatuses);
    populateSelect('priority', priorityLevels);

    updateSettingsEndUserCount();
}

function populateSelect(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    items.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        el.appendChild(opt);
    });
}

function populateProductModelDropdown() {
    const sel = document.getElementById('productModel');
    if (!sel) return;
    Object.keys(productModelMapping).sort().forEach(model => {
        const opt = document.createElement('option');
        opt.value = model;
        opt.textContent = model + ' — ' + productModelMapping[model].name;
        sel.appendChild(opt);
    });
}

function populateEndUserDropdown() {
    const sel = document.getElementById('installationPointDropdown');
    if (!sel) return;
    // Remove all options except the first placeholder
    while (sel.options.length > 1) sel.remove(1);

    // Sort by end user name for easier searching
    const sorted = [...endUsers].sort((a, b) =>
        a.endUserName.localeCompare(b.endUserName, 'tr', { sensitivity: 'base' })
    );
    sorted.forEach(user => {
        const opt = document.createElement('option');
        opt.value = user.installationPoint;
        opt.textContent = user.endUserName + ' (' + user.installationPoint + ')';
        sel.appendChild(opt);
    });
}

// --------------------------------------------------
// Tab switching
// --------------------------------------------------
function setupTabSwitching() {
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tab = document.getElementById(btn.dataset.tab);
            if (tab) tab.classList.add('active');
            if (btn.dataset.tab === 'records') displayRecords();
        });
    });
}

// --------------------------------------------------
// Form event listeners
// --------------------------------------------------
function setupFormListeners() {
    // End User auto-fill
    const ipDropdown = document.getElementById('installationPointDropdown');
    if (ipDropdown) {
        ipDropdown.addEventListener('change', onInstallationPointChange);
    }

    // Product model auto-fill
    const modelSel = document.getElementById('productModel');
    if (modelSel) {
        modelSel.addEventListener('change', onProductModelChange);
    }

    // Quantity change → recalculate potential order sales
    const quantityEl = document.getElementById('quantity');
    if (quantityEl) {
        quantityEl.addEventListener('input', recalculatePotentialSales);
    }

    // Form submit
    const form = document.getElementById('inventoryForm');
    if (form) {
        form.addEventListener('submit', onFormSubmit);
    }

    // Reset form button
    const resetBtn = document.getElementById('resetFormBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset the form? All unsaved data will be lost.')) {
                document.getElementById('inventoryForm').reset();
                clearAutoFilledFields();
            }
        });
    }

    // Add new end user button
    const addBtn = document.getElementById('addNewEndUserBtn');
    if (addBtn) {
        addBtn.addEventListener('click', openModal);
    }
}

function onInstallationPointChange(e) {
    const ip = e.target.value;
    const user = endUsers.find(u => u.installationPoint === ip);
    document.getElementById('endUserNo').value = user ? user.endUserNo : '';
    document.getElementById('endUser').value = user ? user.endUserName : '';
}

function onProductModelChange(e) {
    const model = e.target.value;
    const data = productModelMapping[model];
    document.getElementById('productLineNo').value = data ? data.line : '';
    document.getElementById('productLineName').value = data ? data.name : '';
    document.getElementById('productLineType').value = data ? data.type : '';
    document.getElementById('sparePartsPerYear').value = data ? data.spare : '';
    recalculatePotentialSales();
}

function recalculatePotentialSales() {
    const spareStr = document.getElementById('sparePartsPerYear').value || '';
    const qty = parseFloat(document.getElementById('quantity').value) || 0;

    // Parse numeric value from spare string like "150,00 €" or "150.00 €"
    // Strip all non-numeric characters except the last comma or period (decimal separator)
    const spareClean = spareStr.replace(/[^\d]/g, '').slice(0, -2) + '.' + spareStr.replace(/[^\d]/g, '').slice(-2);
    const numericSpare = parseFloat(spareClean) || 0;
    const total = numericSpare * qty;

    const currencyEl = document.getElementById('currency');
    const currency = currencyEl && currencyEl.value ? currencyEl.value.split(' ')[1] || '' : '€';
    document.getElementById('potentialOrderSales').value =
        total > 0 ? total.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency : '';
}

function clearAutoFilledFields() {
    ['endUserNo', 'endUser', 'productLineNo', 'productLineName', 'productLineType', 'sparePartsPerYear', 'potentialOrderSales'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

// --------------------------------------------------
// Form submit → save record
// --------------------------------------------------
function onFormSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const record = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        // Section 1
        salesRepName: val('salesRepName'),
        visitDate: val('visitDate'),
        visitType: val('visitType'),
        distributionChannel: val('distributionChannel'),
        emailAddress: val('emailAddress'),
        mobileNumber: val('mobileNumber'),
        // Section 2
        installationPointNo: val('installationPointDropdown'),
        endUserNo: val('endUserNo'),
        endUser: val('endUser'),
        country: val('country'),
        region: val('region'),
        // Section 3
        city: val('city'),
        district: val('district'),
        industry: val('industry'),
        application: val('application'),
        // Section 4
        productModel: val('productModel'),
        productLineNo: val('productLineNo'),
        productLineName: val('productLineName'),
        productLineType: val('productLineType'),
        serialNumber: val('serialNumber'),
        yearOfManufacture: val('yearOfManufacture'),
        productType: val('productType'),
        mechanicalSeal: val('mechanicalSeal'),
        // Section 5
        sparePartsPerYear: val('sparePartsPerYear'),
        quantity: val('quantity'),
        potentialOrderSales: val('potentialOrderSales'),
        currency: val('currency'),
        orderStatus: val('orderStatus'),
        followUpDate: val('followUpDate'),
        // Section 6
        priority: val('priority'),
        nextAction: val('nextAction'),
        technicalNotes: val('technicalNotes'),
        applicationNotes: val('applicationNotes'),
    };

    // Duplicate check
    const isDuplicate = records.some(r =>
        r.installationPointNo === record.installationPointNo &&
        r.serialNumber === record.serialNumber
    );
    if (isDuplicate) {
        if (!confirm('A record with the same Installation Point No and Serial Number already exists. Add anyway?')) {
            return;
        }
    }

    records.push(record);
    saveRecords();

    showNotification('✅ Record added successfully!', 'success');
    document.getElementById('inventoryForm').reset();
    clearAutoFilledFields();
}

function val(id) {
    const el = document.getElementById(id);
    return el ? (el.value || '').trim() : '';
}

function validateForm() {
    const installationPoint = val('installationPointDropdown');
    const serialNumber = val('serialNumber');
    const productModel = val('productModel');

    if (!installationPoint) {
        showNotification('⚠️ Please select an Installation Point.', 'error');
        document.getElementById('installationPointDropdown').focus();
        return false;
    }
    if (!serialNumber) {
        showNotification('⚠️ Serial Number is required.', 'error');
        document.getElementById('serialNumber').focus();
        return false;
    }
    if (!productModel) {
        showNotification('⚠️ Please select a Product Model.', 'error');
        document.getElementById('productModel').focus();
        return false;
    }
    return true;
}

// --------------------------------------------------
// Records tab
// --------------------------------------------------
function setupRecordsTabListeners() {
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);

    const clearBtn = document.getElementById('clearAllBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (records.length === 0) { alert('No records to clear.'); return; }
            if (confirm('Are you sure you want to delete ALL records? This cannot be undone.')) {
                records = [];
                saveRecords();
                displayRecords();
                showNotification('🗑️ All records cleared.', 'warning');
            }
        });
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', displayRecords);
    }
}

function displayRecords() {
    const container = document.getElementById('recordsList');
    const countEl = document.getElementById('recordsCount');
    if (!container) return;

    const searchTerm = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const filtered = searchTerm
        ? records.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(searchTerm)))
        : records;

    if (countEl) {
        countEl.textContent = filtered.length + ' record' + (filtered.length !== 1 ? 's' : '') +
            (searchTerm ? ' (filtered from ' + records.length + ' total)' : ' total');
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state">📭 No records found.' +
            (searchTerm ? ' Try a different search term.' : ' Add records using the "Add Record" tab.') + '</div>';
        return;
    }

    const columns = [
        { key: 'visitDate', label: 'Visit Date' },
        { key: 'installationPointNo', label: 'Inst. Point No' },
        { key: 'endUser', label: 'End User' },
        { key: 'productModel', label: 'Model' },
        { key: 'serialNumber', label: 'Serial No' },
        { key: 'city', label: 'City' },
        { key: 'industry', label: 'Industry' },
        { key: 'orderStatus', label: 'Status' },
        { key: 'priority', label: 'Priority' },
        { key: 'potentialOrderSales', label: 'Pot. Sales' },
    ];

    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'table-scroll';

    const table = document.createElement('table');
    table.className = 'records-table';

    // Build header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    columns.forEach(c => {
        const th = document.createElement('th');
        th.textContent = c.label;
        headerRow.appendChild(th);
    });
    const actionTh = document.createElement('th');
    actionTh.textContent = 'Actions';
    headerRow.appendChild(actionTh);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Build body
    const tbody = document.createElement('tbody');

    filtered.forEach(r => {
        const row = document.createElement('tr');
        columns.forEach(c => {
            const td = document.createElement('td');
            const v = r[c.key] || '';
            if (c.key === 'priority') td.className = 'priority-' + v.toLowerCase();
            td.textContent = v;
            row.appendChild(td);
        });
        const actionTd = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.className = 'btn-icon-danger';
        delBtn.title = 'Delete record';
        delBtn.textContent = '🗑️';
        delBtn.addEventListener('click', () => deleteRecord(r.id));
        actionTd.appendChild(delBtn);
        row.appendChild(actionTd);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    scrollDiv.appendChild(table);
    container.appendChild(scrollDiv);
}

function deleteRecord(id) {
    if (!confirm('Delete this record?')) return;
    records = records.filter(r => r.id !== id);
    saveRecords();
    displayRecords();
    showNotification('🗑️ Record deleted.', 'warning');
}

// --------------------------------------------------
// Export to CSV
// --------------------------------------------------
function exportToCSV() {
    if (records.length === 0) {
        alert('No records to export.');
        return;
    }

    const headers = [
        'ID', 'Timestamp', 'Sales Rep', 'Visit Date', 'Visit Type', 'Distribution Channel',
        'Email', 'Mobile', 'Installation Point No', 'End User No', 'End User Name',
        'Country', 'Region', 'City', 'District', 'Industry', 'Application',
        'Product Model', 'Product Line No', 'Name of Product Line', 'Product Line Type',
        'Serial Number', 'Year of Manufacture', 'Product Type', 'Mechanical Seal',
        'Spare Sales/Year', 'Quantity', 'Potential Order Sales', 'Currency',
        'Order Status', 'Follow-up Date', 'Priority', 'Next Action',
        'Technical Notes', 'Application Notes'
    ];

    const keys = [
        'id', 'timestamp', 'salesRepName', 'visitDate', 'visitType', 'distributionChannel',
        'emailAddress', 'mobileNumber', 'installationPointNo', 'endUserNo', 'endUser',
        'country', 'region', 'city', 'district', 'industry', 'application',
        'productModel', 'productLineNo', 'productLineName', 'productLineType',
        'serialNumber', 'yearOfManufacture', 'productType', 'mechanicalSeal',
        'sparePartsPerYear', 'quantity', 'potentialOrderSales', 'currency',
        'orderStatus', 'followUpDate', 'priority', 'nextAction',
        'technicalNotes', 'applicationNotes'
    ];

    const csvRows = [headers.join(',')];
    records.forEach(r => {
        const row = keys.map(k => {
            const v = r[k] != null ? String(r[k]) : '';
            return '"' + v.replace(/"/g, '""') + '"';
        });
        csvRows.push(row.join(','));
    });

    const csv = '\uFEFF' + csvRows.join('\n'); // BOM for Excel UTF-8
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'inventory_' + new Date().toISOString().split('T')[0] + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('📊 Export complete! File downloaded.', 'success');
}

// --------------------------------------------------
// Modal: Add New End User
// --------------------------------------------------
function setupModalListeners() {
    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    document.getElementById('cancelModalBtn')?.addEventListener('click', closeModal);
    document.getElementById('saveNewEndUserBtn')?.addEventListener('click', saveNewEndUser);

    // Close on overlay click
    document.getElementById('addEndUserModal')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal() {
    const modal = document.getElementById('addEndUserModal');
    if (modal) {
        modal.style.display = 'flex';
        ['newInstallationPoint', 'newEndUserNo', 'newEndUserName'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        const errEl = document.getElementById('modalError');
        if (errEl) errEl.style.display = 'none';
        document.getElementById('newInstallationPoint')?.focus();
    }
}

function closeModal() {
    const modal = document.getElementById('addEndUserModal');
    if (modal) modal.style.display = 'none';
}

function saveNewEndUser() {
    const ip = (document.getElementById('newInstallationPoint')?.value || '').trim();
    const no = (document.getElementById('newEndUserNo')?.value || '').trim();
    const name = (document.getElementById('newEndUserName')?.value || '').trim();

    const errEl = document.getElementById('modalError');

    if (!ip || !no || !name) {
        if (errEl) { errEl.textContent = '⚠️ All fields are required.'; errEl.style.display = 'block'; }
        return;
    }

    if (endUsers.some(u => u.installationPoint === ip)) {
        if (errEl) { errEl.textContent = '⚠️ Installation Point "' + ip + '" already exists.'; errEl.style.display = 'block'; }
        return;
    }

    const newUser = { installationPoint: ip, endUserNo: no, endUserName: name };
    endUsers.push(newUser);
    saveCustomEndUsers();
    populateEndUserDropdown();
    updateSettingsEndUserCount();

    // Auto-select newly added end user in the form
    const ipDropdown = document.getElementById('installationPointDropdown');
    if (ipDropdown) {
        ipDropdown.value = ip;
        document.getElementById('endUserNo').value = no;
        document.getElementById('endUser').value = name;
    }

    closeModal();
    showNotification('✅ New end user "' + name + '" added successfully!', 'success');
}

// --------------------------------------------------
// Settings tab
// --------------------------------------------------
function setupSettingsListeners() {
    document.getElementById('exportDataBtn')?.addEventListener('click', exportDataBackup);
    document.getElementById('importDataBtn')?.addEventListener('click', () => {
        document.getElementById('importFile')?.click();
    });
    document.getElementById('importFile')?.addEventListener('change', importDataBackup);
    document.getElementById('manageEndUsersBtn')?.addEventListener('click', () => {
        showNotification('ℹ️ Use "Add New End User" button on the Add Record tab to add end users.', 'info');
    });
}

function updateSettingsEndUserCount() {
    const el = document.getElementById('endUserCount');
    if (el) {
        const builtinCount = endUserDatabase.length;
        const customCount = endUsers.length - builtinCount;
        el.textContent = 'Built-in entries: ' + builtinCount +
            ' | Custom entries added: ' + (customCount > 0 ? customCount : 0) +
            ' | Total: ' + endUsers.length;
    }
}

function exportDataBackup() {
    const backup = {
        records: records,
        customEndUsers: endUsers.filter(u =>
            !endUserDatabase.some(b => b.installationPoint === u.installationPoint)
        ),
        exportedAt: new Date().toISOString(),
        version: '2.0'
    };
    const json = JSON.stringify(backup, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'inventory_backup_' + new Date().toISOString().split('T')[0] + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('💾 Backup downloaded successfully.', 'success');
}

function importDataBackup(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
        try {
            const backup = JSON.parse(evt.target.result);
            if (!backup.records || !Array.isArray(backup.records)) {
                throw new Error('Invalid backup file format.');
            }
            if (!confirm('Import will REPLACE all current records. Continue?')) return;
            records = backup.records;
            saveRecords();
            if (backup.customEndUsers && Array.isArray(backup.customEndUsers)) {
                const builtinPoints = new Set(endUserDatabase.map(u => u.installationPoint));
                const custom = backup.customEndUsers.filter(u => !builtinPoints.has(u.installationPoint));
                localStorage.setItem('customEndUsers', JSON.stringify(custom));
                loadData();
                populateEndUserDropdown();
                updateSettingsEndUserCount();
            }
            showNotification('✅ ' + records.length + ' records imported successfully.', 'success');
        } catch (err) {
            showNotification('❌ Import failed: ' + err.message, 'error');
        }
        e.target.value = ''; // reset file input
    };
    reader.readAsText(file);
}

// --------------------------------------------------
// Utilities
// --------------------------------------------------
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showNotification(message, type) {
    // Remove any existing notification
    const existing = document.getElementById('notification');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'notification';
    div.className = 'notification notification-' + (type || 'info');
    div.textContent = message;
    document.body.appendChild(div);

    setTimeout(() => { if (div.parentNode) div.remove(); }, 3500);
}
