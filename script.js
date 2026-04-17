let records = JSON.parse(localStorage.getItem('records')) || [];
let endUsers = JSON.parse(localStorage.getItem('endUsers')) || [...endUserDatabase];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateEndUserDropdown();
    setupEventListeners();
});

function populateEndUserDropdown() {
    const dropdown = document.getElementById('installationPointDropdown');
    const unique = [...new Set(endUsers.map(u => u.installationPoint))];
    unique.forEach(ip => {
        const option = document.createElement('option');
        option.value = ip;
        option.textContent = ip;
        dropdown.appendChild(option);
    });
}

function setupEventListeners() {
    document.getElementById('installationPointDropdown').addEventListener('change', (e) => {
        const selected = endUsers.find(u => u.installationPoint === e.target.value);
        if (selected) {
            document.getElementById('endUserNo').value = selected.endUserNo;
            document.getElementById('endUser').value = selected.endUserName;
        }
    });

    document.getElementById('inventoryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveRecord();
    });

    document.getElementById('exportBtn').addEventListener('click', exportToExcel);
}

function saveRecord() {
    const record = {
        installationPointNo: document.getElementById('installationPointNo').value,
        serialNumber: document.getElementById('serialNumber').value,
        email: document.getElementById('emailAddress').value,
        mobile: document.getElementById('mobileNumber').value,
        endUserNo: document.getElementById('endUserNo').value,
        endUser: document.getElementById('endUser').value,
        timestamp: new Date().toISOString()
    };

    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
    alert('Record saved!');
    document.getElementById('inventoryForm').reset();
    displayRecords();
}

function displayRecords() {
    const container = document.getElementById('recordsList');
    container.innerHTML = '<table><tr><th>Installation Point</th><th>Serial No</th><th>Email</th><th>Mobile</th><th>End User</th></tr>';
    records.forEach(r => {
        container.innerHTML += `<tr>
            <td>${r.installationPointNo}</td>
            <td>${r.serialNumber}</td>
            <td>${r.email}</td>
            <td>${r.mobile}</td>
            <td>${r.endUser}</td>
        </tr>`;
    });
    container.innerHTML += '</table>';
}

function exportToExcel() {
    let csv = 'Installation Point No,Serial Number,Email,Mobile,End User No,End User\n';
    records.forEach(r => {
        csv += `${r.installationPointNo},${r.serialNumber},${r.email},${r.mobile},${r.endUserNo},${r.endUser}\n`;
    });

    const link = document.createElement('a');
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    link.download = 'inventory_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
}

// Tab switching
document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        if(btn.dataset.tab === 'records') displayRecords();
    });
});
