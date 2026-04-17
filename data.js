// Product model to Product line mapping
const productModelMapping = {
    'AMAREX': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '320,00 €' },
    'BETA': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'BETALINE': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'BETABLOC': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'CPK': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'HPK': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'MAC': { line: '1103', name: 'Seal less pumps', type: 'S', spare: '150,00 €' },
    'STG': { line: '1104', name: 'Vertical immersion pumps', type: 'S', spare: '150,00 €' },
    'COBRA': { line: '1201', name: 'Fire fighting systems', type: 'S', spare: '150,00 €' },
    'UPA': { line: '1301', name: 'Borehole pumps', type: 'S', spare: '150,00 €' },
    // Add more models...
};

// End User Database
const endUserDatabase = [
    { installationPoint: '7922947', endUserNo: '900181457', endUserName: 'İSU SAPANCA GÖLÜ-YUVACIK BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7922947', endUserNo: '900181457', endUserName: 'İSU' },
    { installationPoint: '7982966', endUserNo: '900168905', endUserName: 'ANADOLU EFES - İZMİR FABRİKASI' },
    { installationPoint: '22700', endUserNo: '1000168733', endUserName: 'Kostromskaya Gres' },
    // Add more end users...
];

// Turkish Cities
const turkishCities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Konya', 'Gaziantep', 'Şanlıurfa',
    'Kayseri', 'Samsun', 'Erzurum', 'Diyarbakır', 'Trabzon', 'Van', 'Mersin', 'Manisa',
    'Malatya', 'Balikesir', 'Adana', 'Denizli'
];

// Turkish Regions
const turkishRegions = [
    'Marmara', 'Aegean', 'Mediterranean', 'Black Sea', 'Central Anatolia', 'Eastern Anatolia', 'Southeastern Anatolia'
];
