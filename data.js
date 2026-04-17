// Product model to Product line mapping
// line: Product Line No, name: Name of Product Line, type: Product Line Type, spare: Spare Sales Per Year
const productModelMapping = {
    // 1101 - Standardised pumps ISO 2858 / 5199
    'BETA': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'BETALINE': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'BETABLOC': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'ETALINE': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'ETALINE-L': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'ETALINE-Z': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'ETALINE-P': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    'ISORIA': { line: '1101', name: 'Standardised pumps ISO', type: 'S', spare: '150,00 €' },
    // 1102 - Standardised pumps EN 733
    'CPK': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'CPKN': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'CPKE': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'HPK': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'HPKL': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'HPKD': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    'AQUABLOC': { line: '1102', name: 'Standardised pumps EN', type: 'S', spare: '150,00 €' },
    // 1103 - Sealless pumps
    'MAC': { line: '1103', name: 'Sealless pumps', type: 'S', spare: '200,00 €' },
    'MACE': { line: '1103', name: 'Sealless pumps', type: 'S', spare: '200,00 €' },
    'ISOMAG': { line: '1103', name: 'Sealless pumps', type: 'S', spare: '200,00 €' },
    // 1104 - Vertical immersion pumps
    'STG': { line: '1104', name: 'Vertical immersion pumps', type: 'S', spare: '180,00 €' },
    'STS': { line: '1104', name: 'Vertical immersion pumps', type: 'S', spare: '180,00 €' },
    'SISTO': { line: '1104', name: 'Vertical immersion pumps', type: 'S', spare: '180,00 €' },
    // 1201 - Fire fighting systems
    'COBRA': { line: '1201', name: 'Fire fighting systems', type: 'S', spare: '200,00 €' },
    'COBRA-E': { line: '1201', name: 'Fire fighting systems', type: 'S', spare: '200,00 €' },
    'MULTITEC': { line: '1201', name: 'Fire fighting systems', type: 'S', spare: '250,00 €' },
    // 1301 - Borehole pumps
    'UPA': { line: '1301', name: 'Borehole pumps', type: 'S', spare: '150,00 €' },
    'UPS': { line: '1301', name: 'Borehole pumps', type: 'S', spare: '150,00 €' },
    'UPAIO': { line: '1301', name: 'Borehole pumps', type: 'S', spare: '150,00 €' },
    // 1401 - Building services / HVAC
    'CALIO': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'CALIO-S': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'CALIO-THERM': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'CALIO-Z': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'ECOBRIGHT': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'HELIFLOW': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'RIO-ECO': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    'RIO-ECO-Z': { line: '1401', name: 'Building services pumps', type: 'S', spare: '100,00 €' },
    // 1501 - Sewage centrifugal pumps
    'AMAREX': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '320,00 €' },
    'AMAREX-N': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '320,00 €' },
    'AMAREX-K': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '320,00 €' },
    'AMAREX-KRT': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '350,00 €' },
    'SEWATEC': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '300,00 €' },
    'SEWABLOC': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '280,00 €' },
    'AMAMIX': { line: '1501', name: 'Sewage centrifugal pumps', type: 'S', spare: '280,00 €' },
    // 1601 - Process pumps
    'SEZ': { line: '1601', name: 'Process pumps', type: 'S', spare: '250,00 €' },
    'SEZT': { line: '1601', name: 'Process pumps', type: 'S', spare: '250,00 €' },
    'SEWN': { line: '1601', name: 'Process pumps', type: 'S', spare: '250,00 €' },
    'MEGACHEM': { line: '1601', name: 'Process pumps', type: 'S', spare: '300,00 €' },
    'WKL': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'WKLa': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'WKT': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'ETA': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'ETANORM': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'ETANORM-R': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    'ETANORM-G': { line: '1601', name: 'Process pumps', type: 'S', spare: '220,00 €' },
    // 1701 - High pressure pumps
    'MULTITEC-RO': { line: '1701', name: 'High pressure pumps', type: 'S', spare: '350,00 €' },
    'HSP': { line: '1701', name: 'High pressure pumps', type: 'S', spare: '350,00 €' },
    'MOVITEC': { line: '1701', name: 'High pressure pumps', type: 'S', spare: '280,00 €' },
    'MOVITEC-F': { line: '1701', name: 'High pressure pumps', type: 'S', spare: '280,00 €' },
    'MOVITEC-V': { line: '1701', name: 'High pressure pumps', type: 'S', spare: '280,00 €' },
    // 1801 - Water supply & irrigation
    'HYDROBLOC': { line: '1801', name: 'Water supply & irrigation', type: 'S', spare: '150,00 €' },
    'HYDROCELL': { line: '1801', name: 'Water supply & irrigation', type: 'S', spare: '150,00 €' },
    'AQUADUO': { line: '1801', name: 'Water supply & irrigation', type: 'S', spare: '150,00 €' },
    'AQUA': { line: '1801', name: 'Water supply & irrigation', type: 'S', spare: '150,00 €' },
    'PUMPA': { line: '1801', name: 'Water supply & irrigation', type: 'S', spare: '150,00 €' },
    // 1901 - Special duty pumps
    'BOA-H': { line: '1901', name: 'Special duty pumps', type: 'S', spare: '200,00 €' },
    'HYTA': { line: '1901', name: 'Special duty pumps', type: 'S', spare: '200,00 €' },
    'RDLO': { line: '1901', name: 'Special duty pumps', type: 'S', spare: '200,00 €' },
    'RDLM': { line: '1901', name: 'Special duty pumps', type: 'S', spare: '200,00 €' },
    'RDL': { line: '1901', name: 'Special duty pumps', type: 'S', spare: '200,00 €' },
    // 2101 - Axial flow pumps
    'AXIAL': { line: '2101', name: 'Axial flow pumps', type: 'S', spare: '400,00 €' },
    'AXENTRIX': { line: '2101', name: 'Axial flow pumps', type: 'S', spare: '400,00 €' },
    // 2201 - Mixed flow pumps
    'MIXED-FLOW': { line: '2201', name: 'Mixed flow pumps', type: 'S', spare: '350,00 €' },
    // 2301 - Centrifugal pumps (general)
    'OMEGA': { line: '2301', name: 'Centrifugal pumps', type: 'S', spare: '300,00 €' },
    'OMEGAFLOW': { line: '2301', name: 'Centrifugal pumps', type: 'S', spare: '300,00 €' },
    'OMEGAPLEX': { line: '2301', name: 'Centrifugal pumps', type: 'S', spare: '300,00 €' },
    // 3101 - Valves
    'BOA-COMPACT': { line: '3101', name: 'Globe valves', type: 'V', spare: '80,00 €' },
    'BOA-COMPACT-H': { line: '3101', name: 'Globe valves', type: 'V', spare: '80,00 €' },
    'BOA-TRIO-H': { line: '3101', name: 'Globe valves', type: 'V', spare: '80,00 €' },
    'BOA-TRIO-P': { line: '3101', name: 'Globe valves', type: 'V', spare: '80,00 €' },
    // 4101 - Pumping stations
    'HEBE': { line: '4101', name: 'Pumping stations', type: 'S', spare: '500,00 €' },
    'HEBE-TWIN': { line: '4101', name: 'Pumping stations', type: 'S', spare: '500,00 €' },
    'MINI-COMPACTA': { line: '4101', name: 'Pumping stations', type: 'S', spare: '400,00 €' },
    'COMPACTA': { line: '4101', name: 'Pumping stations', type: 'S', spare: '400,00 €' },
    'SANIMAX': { line: '4101', name: 'Pumping stations', type: 'S', spare: '400,00 €' },
    // 5101 - Controllers / drives
    'PumpDrive': { line: '5101', name: 'Variable speed drives', type: 'E', spare: '250,00 €' },
    'PumpDrive-2': { line: '5101', name: 'Variable speed drives', type: 'E', spare: '250,00 €' },
    'PumpMeter': { line: '5101', name: 'Variable speed drives', type: 'E', spare: '200,00 €' },
    'AMAPROP': { line: '5101', name: 'Variable speed drives', type: 'E', spare: '250,00 €' },
    // 5201 - Monitoring
    'SEnERGy': { line: '5201', name: 'Monitoring systems', type: 'E', spare: '150,00 €' },
    'SupraSafe': { line: '5201', name: 'Monitoring systems', type: 'E', spare: '150,00 €' },
    // 6101 - Slurry pumps
    'WKG': { line: '6101', name: 'Slurry pumps', type: 'S', spare: '400,00 €' },
    'GIW': { line: '6101', name: 'Slurry pumps', type: 'S', spare: '400,00 €' },
    // 6201 - Pulp & paper
    'BISO': { line: '6201', name: 'Pulp & paper pumps', type: 'S', spare: '350,00 €' },
    'BISOBLOCK': { line: '6201', name: 'Pulp & paper pumps', type: 'S', spare: '350,00 €' },
    // 7101 - Nuclear grade
    'NORIMAT': { line: '7101', name: 'Nuclear grade pumps', type: 'S', spare: '800,00 €' },
};

// End User Database (150+ entries)
// Fields: installationPoint, endUserNo, endUserName
const endUserDatabase = [
    // --- Water Utilities & Municipalities ---
    { installationPoint: '7922947', endUserNo: '900181457', endUserName: 'İSU SAPANCA GÖLÜ-YUVACIK BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7923001', endUserNo: '900181458', endUserName: 'İSKİ - İSTANBUL SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923002', endUserNo: '900181459', endUserName: 'İSKİ - ÖMERLI BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7923003', endUserNo: '900181460', endUserName: 'İSKİ - BÜYÜKÇEKMECE TERFİ İSTASYONU' },
    { installationPoint: '7923004', endUserNo: '900181461', endUserName: 'İSKİ - ALIBEYKÖY BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7923100', endUserNo: '900182001', endUserName: 'ASKİ - ANKARA SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923101', endUserNo: '900182002', endUserName: 'ASKİ - ÇAMLICA TERFİ İSTASYONU' },
    { installationPoint: '7923102', endUserNo: '900182003', endUserName: 'ASKİ - KIZILCAHAMAM TERFİ İSTASYONU' },
    { installationPoint: '7923200', endUserNo: '900183001', endUserName: 'İZSU - İZMİR SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923201', endUserNo: '900183002', endUserName: 'İZSU - BALÇOVA TERFİ İSTASYONU' },
    { installationPoint: '7923202', endUserNo: '900183003', endUserName: 'İZSU - TAHTALI BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7923300', endUserNo: '900184001', endUserName: 'BUSKİ - BURSA SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923301', endUserNo: '900184002', endUserName: 'BUSKİ - NILÜFER TERFİ İSTASYONU' },
    { installationPoint: '7923400', endUserNo: '900185001', endUserName: 'ASAT - ANTALYA SU VE ATIKSU İDARESİ' },
    { installationPoint: '7923401', endUserNo: '900185002', endUserName: 'ASAT - DÜDEN BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7923500', endUserNo: '900186001', endUserName: 'KOSKİ - KONYA SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923600', endUserNo: '900187001', endUserName: 'GASKİ - GAZİANTEP SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923700', endUserNo: '900188001', endUserName: 'MASKİ - MANİSA SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923800', endUserNo: '900189001', endUserName: 'DİSKİ - DİYARBAKIR SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7923900', endUserNo: '900190001', endUserName: 'KAYSERİ SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924000', endUserNo: '900191001', endUserName: 'MERSİN SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924100', endUserNo: '900192001', endUserName: 'SAMSU - SAMSUN SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924200', endUserNo: '900193001', endUserName: 'TRASKİ - TRABZON SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924300', endUserNo: '900194001', endUserName: 'VASKİ - VAN SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924400', endUserNo: '900195001', endUserName: 'HATAY SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924500', endUserNo: '900196001', endUserName: 'SAKARYA SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924600', endUserNo: '900197001', endUserName: 'ESKİŞEHİR SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924700', endUserNo: '900198001', endUserName: 'BALIKESİR SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924800', endUserNo: '900199001', endUserName: 'DENİZLİ SU VE KANALİZASYON İDARESİ' },
    { installationPoint: '7924900', endUserNo: '900200001', endUserName: 'ÇORUM BELEDİYESİ SU MÜDÜRLÜĞÜ' },

    // --- DSİ (State Hydraulic Works) ---
    { installationPoint: '7925001', endUserNo: '900201001', endUserName: 'DSİ - DEVLET SU İŞLERİ GENEL MÜDÜRLÜĞÜ' },
    { installationPoint: '7925002', endUserNo: '900201002', endUserName: 'DSİ - ATATÜRK BARAJI SULAMA TERFİ İSTASYONU' },
    { installationPoint: '7925003', endUserNo: '900201003', endUserName: 'DSİ - KEBAN BARAJI HES TERFİ İSTASYONU' },
    { installationPoint: '7925004', endUserNo: '900201004', endUserName: 'DSİ - KARAKAYA BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7925005', endUserNo: '900201005', endUserName: 'DSİ - BIRECIK BARAJI TERFİ İSTASYONU' },
    { installationPoint: '7925006', endUserNo: '900201006', endUserName: 'DSİ - ILISU BARAJI TERFİ İSTASYONU' },

    // --- Breweries & Beverages ---
    { installationPoint: '7982966', endUserNo: '900168905', endUserName: 'ANADOLU EFES - İZMİR FABRİKASI' },
    { installationPoint: '7982967', endUserNo: '900168906', endUserName: 'ANADOLU EFES - İSTANBUL FABRİKASI' },
    { installationPoint: '7982968', endUserNo: '900168907', endUserName: 'ANADOLU EFES - ANKARA FABRİKASI' },
    { installationPoint: '7982969', endUserNo: '900168908', endUserName: 'ANADOLU EFES - ADANA FABRİKASI' },
    { installationPoint: '7982970', endUserNo: '900168909', endUserName: 'ANADOLU EFES - AFYON FABRİKASI' },
    { installationPoint: '7983001', endUserNo: '900170001', endUserName: 'COCA-COLA İÇECEK - İSTANBUL FABRİKASI' },
    { installationPoint: '7983002', endUserNo: '900170002', endUserName: 'COCA-COLA İÇECEK - ANKARA FABRİKASI' },
    { installationPoint: '7983003', endUserNo: '900170003', endUserName: 'COCA-COLA İÇECEK - İZMİR FABRİKASI' },
    { installationPoint: '7983100', endUserNo: '900171001', endUserName: 'TURK TUBORG - İZMİR BİRA FABRİKASI' },
    { installationPoint: '7983200', endUserNo: '900172001', endUserName: 'PEPSI - ANKARA FABRİKASI' },

    // --- Oil & Gas / Petrochemicals ---
    { installationPoint: '7984001', endUserNo: '900173001', endUserName: 'TÜPRAŞ - İZMİT RAFİNERİSİ' },
    { installationPoint: '7984002', endUserNo: '900173002', endUserName: 'TÜPRAŞ - KIRIKKALE RAFİNERİSİ' },
    { installationPoint: '7984003', endUserNo: '900173003', endUserName: 'TÜPRAŞ - İZMİR RAFİNERİSİ' },
    { installationPoint: '7984004', endUserNo: '900173004', endUserName: 'TÜPRAŞ - BATMAN RAFİNERİSİ' },
    { installationPoint: '7984100', endUserNo: '900174001', endUserName: 'PETKİM PETROKİMYA HOLDİNG A.Ş.' },
    { installationPoint: '7984101', endUserNo: '900174002', endUserName: 'PETKİM - ALİAĞA TESİSLERİ' },
    { installationPoint: '7984200', endUserNo: '900175001', endUserName: 'BOTAŞ - BORU HATLARI İLE PETROL TAŞIMA A.Ş.' },
    { installationPoint: '7984201', endUserNo: '900175002', endUserName: 'BOTAŞ - CEYHAN TERMINAL TERFİ İSTASYONU' },
    { installationPoint: '7984300', endUserNo: '900176001', endUserName: 'STFA PETROKİMYA A.Ş.' },
    { installationPoint: '7984400', endUserNo: '900177001', endUserName: 'DÖRTYOL PETROKIMYA - HATAY' },

    // --- Steel & Mining ---
    { installationPoint: '7985001', endUserNo: '900178001', endUserName: 'ERDEMİR - EREĞLİ DEMİR VE ÇELİK FABRİKALARI' },
    { installationPoint: '7985002', endUserNo: '900178002', endUserName: 'İSDEMİR - İSKENDERUN DEMİR VE ÇELİK A.Ş.' },
    { installationPoint: '7985003', endUserNo: '900178003', endUserName: 'KARDEMIR - KARABÜK DEMİR ÇELİK SANAYİ' },
    { installationPoint: '7985100', endUserNo: '900179001', endUserName: 'ETİ BAKIR - SAMSUN BAKIR FABRİKASI' },
    { installationPoint: '7985101', endUserNo: '900179002', endUserName: 'ETİ BAKIR - MURGUl MADENİ' },
    { installationPoint: '7985200', endUserNo: '900180001', endUserName: 'TKİ - TÜRKIYE KÖMÜR İŞLETMELERİ' },
    { installationPoint: '7985201', endUserNo: '900180002', endUserName: 'TKİ - EGE LİNYİTLERİ' },
    { installationPoint: '7985300', endUserNo: '900181001', endUserName: 'ÇAYELI BAKIR İŞLETMELERİ A.Ş.' },

    // --- Power Plants ---
    { installationPoint: '7986001', endUserNo: '900182101', endUserName: 'EÜAŞ - SEYITÖMER TERMİK SANTRAL' },
    { installationPoint: '7986002', endUserNo: '900182102', endUserName: 'EÜAŞ - TUNÇBILEK TERMİK SANTRAL' },
    { installationPoint: '7986003', endUserNo: '900182103', endUserName: 'EÜAŞ - ORHANELI TERMİK SANTRAL' },
    { installationPoint: '7986004', endUserNo: '900182104', endUserName: 'EÜAŞ - YATAĞAN TERMİK SANTRAL' },
    { installationPoint: '7986005', endUserNo: '900182105', endUserName: 'EÜAŞ - AFŞIN-ELBİSTAN TERMİK SANTRAL' },
    { installationPoint: '7986006', endUserNo: '900182106', endUserName: 'EÜAŞ - SOMA TERMİK SANTRAL' },
    { installationPoint: '7986100', endUserNo: '900183101', endUserName: 'AKSA ENERJİ - ESENYURT DOĞALGAZ SANTRALİ' },
    { installationPoint: '7986101', endUserNo: '900183102', endUserName: 'AKSA ENERJİ - BOZÜYÜK DOĞALGAZ SANTRALİ' },
    { installationPoint: '7986200', endUserNo: '900184101', endUserName: 'SABANCI ENERJİ - ENERJİSA SANTRALİ' },
    { installationPoint: '7986300', endUserNo: '900185101', endUserName: 'AYDEM ENERJİ - AYDEDE HES' },
    { installationPoint: '7986400', endUserNo: '900186101', endUserName: 'IC ENERJİ - KAVŞAKKAYA HES' },

    // --- Chemical & Pharmaceutical ---
    { installationPoint: '7987001', endUserNo: '900187101', endUserName: 'BAYER TÜRK KİMYA SANAYİİ LTD. ŞTİ.' },
    { installationPoint: '7987002', endUserNo: '900187102', endUserName: 'BASF TÜRK KİMYA SAN. TİC. A.Ş.' },
    { installationPoint: '7987003', endUserNo: '900187103', endUserName: 'DOW CHEMICAL - TÜRKİYE' },
    { installationPoint: '7987100', endUserNo: '900188101', endUserName: 'ABDI İBRAHIM İLAÇ SANAYİ VE TİC. A.Ş.' },
    { installationPoint: '7987101', endUserNo: '900188102', endUserName: 'ECZACIBASI İLAÇ SANAYİ VE TİCARET A.Ş.' },
    { installationPoint: '7987102', endUserNo: '900188103', endUserName: 'NOVARTIS TÜRKİYE İLAÇ SANAYİ' },
    { installationPoint: '7987200', endUserNo: '900189101', endUserName: 'ARÇELİK KİMYA SANAYİİ A.Ş.' },
    { installationPoint: '7987300', endUserNo: '900190101', endUserName: 'GÜBRE FABRİKALARI T.A.Ş. - TOROS' },

    // --- Food & Dairy ---
    { installationPoint: '7988001', endUserNo: '900191101', endUserName: 'SEK - ULUSAL SÜT VE BESİN MADDELERİ' },
    { installationPoint: '7988002', endUserNo: '900191102', endUserName: 'PINAR SÜT MAMÜLLERİ SANAYİİ A.Ş.' },
    { installationPoint: '7988003', endUserNo: '900191103', endUserName: 'DANONE - TÜRKIYE GIDA A.Ş.' },
    { installationPoint: '7988100', endUserNo: '900192101', endUserName: 'ULKer BiSKÜVİ SANAYİ A.Ş.' },
    { installationPoint: '7988101', endUserNo: '900192102', endUserName: 'ETİ GIDA SANAYİ VE TİCARET A.Ş.' },
    { installationPoint: '7988200', endUserNo: '900193101', endUserName: 'KOSKA HELVACISI - İSTANBUL' },
    { installationPoint: '7988300', endUserNo: '900194101', endUserName: 'SIMİT SARAYI - İSTANBUL MERKEZİ ÜRETİM TESİSİ' },

    // --- Textile ---
    { installationPoint: '7989001', endUserNo: '900195101', endUserName: 'ISKO DENIM - BURSA DOKUMA FABRİKASI' },
    { installationPoint: '7989002', endUserNo: '900195102', endUserName: 'KIPAS TEKSTIL - KAHRAMANMARAŞ FABRİKASI' },
    { installationPoint: '7989003', endUserNo: '900195103', endUserName: 'YÜNSA YÜNLÜ SANAYİ VE TİCARET A.Ş.' },

    // --- Paper & Pulp ---
    { installationPoint: '7990001', endUserNo: '900196101', endUserName: 'HAYAT KAĞIT SANAYİİ A.Ş.' },
    { installationPoint: '7990002', endUserNo: '900196102', endUserName: 'MONDI TIRE KUTSAN KAĞIT VE AMB.' },
    { installationPoint: '7990003', endUserNo: '900196103', endUserName: 'SINAR MAS KAĞIT VE AMBALAJ SANAYİİ' },

    // --- Cement ---
    { installationPoint: '7991001', endUserNo: '900197101', endUserName: 'ÇİMSA ÇİMENTO SANAYİ VE TİCARET A.Ş.' },
    { installationPoint: '7991002', endUserNo: '900197102', endUserName: 'OYAK ÇİMENTO FABRİKALARI A.Ş.' },
    { installationPoint: '7991003', endUserNo: '900197103', endUserName: 'LAFARGE BORAL TÜRKİYE ÇİMENTO SANAYİİ' },
    { installationPoint: '7991004', endUserNo: '900197104', endUserName: 'AKCANSA ÇİMENTO SANAYİ VE TİCARET A.Ş.' },

    // --- Glass ---
    { installationPoint: '7992001', endUserNo: '900198101', endUserName: 'ŞIŞECAM - TOPKAPILI CAM FABRİKASI' },
    { installationPoint: '7992002', endUserNo: '900198102', endUserName: 'ŞIŞECAM - MERSIN CAM FABRİKASI' },
    { installationPoint: '7992003', endUserNo: '900198103', endUserName: 'TRAKYA CAM SANAYİİ A.Ş.' },

    // --- Automotive ---
    { installationPoint: '7993001', endUserNo: '900199101', endUserName: 'FORD OTOMOTIV SANAYİ A.Ş. - KOCAELI' },
    { installationPoint: '7993002', endUserNo: '900199102', endUserName: 'OYAK RENAULT - BURSA OTOMOBİL FABRİKASI' },
    { installationPoint: '7993003', endUserNo: '900199103', endUserName: 'TOFAŞ TÜRK OTOMOBİL FABRİKASI A.Ş.' },
    { installationPoint: '7993004', endUserNo: '900199104', endUserName: 'TOYOTA TÜRKIYE - ADAPAZARI FABRİKASI' },
    { installationPoint: '7993005', endUserNo: '900199105', endUserName: 'MAN TÜRKİYE A.Ş. - ANKARA OTOBÜS FABRİKASI' },

    // --- Airports & Logistics ---
    { installationPoint: '7994001', endUserNo: '900200101', endUserName: 'İSTANBUL HAVALİMANI İŞLETME A.Ş.' },
    { installationPoint: '7994002', endUserNo: '900200102', endUserName: 'SABİHA GÖKÇEN HAVALIMANI A.Ş.' },
    { installationPoint: '7994003', endUserNo: '900200103', endUserName: 'ANKARA ESENBOĞA HAVALIMANI' },
    { installationPoint: '7994004', endUserNo: '900200104', endUserName: 'ANTALYA HAVALIMANI İŞLETME A.Ş.' },
    { installationPoint: '7994005', endUserNo: '900200105', endUserName: 'İZMİR ADNAN MENDERES HAVALIMANI' },

    // --- Healthcare ---
    { installationPoint: '7995001', endUserNo: '900201101', endUserName: 'HACETTEPE ÜNİVERSİTESİ HASTANESİ' },
    { installationPoint: '7995002', endUserNo: '900201102', endUserName: 'İSTANBUL ÜNİVERSİTESİ CERRAHPAŞA TIP FAKÜLTESİ' },
    { installationPoint: '7995003', endUserNo: '900201103', endUserName: 'ANKARA ŞEHİR HASTANESİ' },
    { installationPoint: '7995004', endUserNo: '900201104', endUserName: 'ACIBABEM SAĞLIK HİZMETLERİ A.Ş.' },

    // --- Hotels & Tourism ---
    { installationPoint: '7996001', endUserNo: '900202101', endUserName: 'SWISSOTEL THE BOSPHORUS İSTANBUL' },
    { installationPoint: '7996002', endUserNo: '900202102', endUserName: 'HILTON ISTANBUL BOSPHORUS' },
    { installationPoint: '7996003', endUserNo: '900202103', endUserName: 'ÇIRAĞAN PALACE KEMPINSKI ISTANBUL' },
    { installationPoint: '7996004', endUserNo: '900202104', endUserName: 'RIXOS PREMIUM BELEK - ANTALYA' },
    { installationPoint: '7996005', endUserNo: '900202105', endUserName: 'MAXX ROYAL BELEK - ANTALYA' },

    // --- Shopping Malls ---
    { installationPoint: '7997001', endUserNo: '900203101', endUserName: 'CEVAHIR ALIŞVERİŞ MERKEZİ - İSTANBUL' },
    { installationPoint: '7997002', endUserNo: '900203102', endUserName: 'İSTINYEPARK ALIŞVERİŞ MERKEZİ - İSTANBUL' },
    { installationPoint: '7997003', endUserNo: '900203103', endUserName: 'ANKAMALL ALIŞVERİŞ MERKEZİ - ANKARA' },

    // --- Universities & Research ---
    { installationPoint: '7998001', endUserNo: '900204101', endUserName: 'ORTA DOĞU TEKNİK ÜNİVERSİTESİ - ODTÜ' },
    { installationPoint: '7998002', endUserNo: '900204102', endUserName: 'BOĞAZİÇİ ÜNİVERSİTESİ' },
    { installationPoint: '7998003', endUserNo: '900204103', endUserName: 'İSTANBUL TEKNİK ÜNİVERSİTESİ - İTÜ' },
    { installationPoint: '7998004', endUserNo: '900204104', endUserName: 'EGE ÜNİVERSİTESİ - İZMİR' },

    // --- Defense & Military ---
    { installationPoint: '7999001', endUserNo: '900205101', endUserName: 'ASELSAN A.Ş. - MACUNKOY TESİSLERİ' },
    { installationPoint: '7999002', endUserNo: '900205102', endUserName: 'HAVELSAN A.Ş.' },
    { installationPoint: '7999003', endUserNo: '900205103', endUserName: 'ROKETSAN A.Ş. - ELMADAG TESİSLERİ' },

    // --- International Entries ---
    { installationPoint: '22700', endUserNo: '1000168733', endUserName: 'Kostromskaya Gres' },
    { installationPoint: '22701', endUserNo: '1000168734', endUserName: 'Beloyarskaya NPP - Russia' },
    { installationPoint: '22702', endUserNo: '1000168735', endUserName: 'Leningrad Combine Paper Mill' },
    { installationPoint: '22703', endUserNo: '1000168736', endUserName: 'Surgutneftegas - Siberia' },
    { installationPoint: '22704', endUserNo: '1000168737', endUserName: 'Lukoil - Perm Refinery' },
    { installationPoint: '30001', endUserNo: '1000200001', endUserName: 'SOCAR - State Oil Company of Azerbaijan' },
    { installationPoint: '30002', endUserNo: '1000200002', endUserName: 'BTC Pipeline - Azerbaijan' },
    { installationPoint: '30003', endUserNo: '1000200003', endUserName: 'STAR Rafineri - İzmir (SOCAR Turkey)' },
    { installationPoint: '30100', endUserNo: '1000201001', endUserName: 'BOTAS International Limited - Iraq' },
    { installationPoint: '30101', endUserNo: '1000201002', endUserName: 'Iraq Crude Oil Export Terminal - Basra' },
    { installationPoint: '30200', endUserNo: '1000202001', endUserName: 'Saudi Aramco - Ras Tanura Refinery' },
    { installationPoint: '30300', endUserNo: '1000203001', endUserName: 'Quatar Petrochemical Company' },
    { installationPoint: '30400', endUserNo: '1000204001', endUserName: 'ADNOC - Abu Dhabi National Oil Company' },
    { installationPoint: '30500', endUserNo: '1000205001', endUserName: 'OCP Group - Morocco Phosphate' },
    { installationPoint: '30600', endUserNo: '1000206001', endUserName: 'Sonangol - Angola' },
    { installationPoint: '30700', endUserNo: '1000207001', endUserName: 'Algerian Energy Company - AEC' },
    { installationPoint: '40001', endUserNo: '1000300001', endUserName: 'Veolia Water - Paris Operations' },
    { installationPoint: '40002', endUserNo: '1000300002', endUserName: 'Thames Water - London' },
    { installationPoint: '40003', endUserNo: '1000300003', endUserName: 'Berliner Wasserbetriebe - Berlin' },
    { installationPoint: '40004', endUserNo: '1000300004', endUserName: 'Eaux de Paris - France' },
    { installationPoint: '40005', endUserNo: '1000300005', endUserName: 'Amsterdam Water Supply' },
    { installationPoint: '40100', endUserNo: '1000301001', endUserName: 'BASF SE - Ludwigshafen' },
    { installationPoint: '40101', endUserNo: '1000301002', endUserName: 'BASF SE - Antwerp' },
    { installationPoint: '40200', endUserNo: '1000302001', endUserName: 'Bayer AG - Leverkusen' },
    { installationPoint: '40300', endUserNo: '1000303001', endUserName: 'Evonik Industries AG' },
    { installationPoint: '40400', endUserNo: '1000304001', endUserName: 'ArcelorMittal - Luxembourg' },
    { installationPoint: '40500', endUserNo: '1000305001', endUserName: 'Thyssenkrupp Steel - Duisburg' },
    { installationPoint: '40600', endUserNo: '1000306001', endUserName: 'Vattenfall - Sweden Power Plants' },
    { installationPoint: '40700', endUserNo: '1000307001', endUserName: 'E.ON Energy - Germany' },
    { installationPoint: '40800', endUserNo: '1000308001', endUserName: 'RWE Power AG - Cologne' },
    { installationPoint: '40900', endUserNo: '1000309001', endUserName: 'Enel Green Power - Italy' },
    { installationPoint: '41000', endUserNo: '1000310001', endUserName: 'EDF - Electricite de France' },
    { installationPoint: '41100', endUserNo: '1000311001', endUserName: 'Heineken - Netherlands Brewery' },
    { installationPoint: '41200', endUserNo: '1000312001', endUserName: 'AB InBev - Leuven Brewery' },
    { installationPoint: '41300', endUserNo: '1000313001', endUserName: 'Nestle - Vevey Switzerland' },
    { installationPoint: '41400', endUserNo: '1000314001', endUserName: 'Danone - Paris France' },
    { installationPoint: '41500', endUserNo: '1000315001', endUserName: 'Mondi Paper - Austria' },
];

// Turkish Provinces (81 provinces)
const turkishCities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa',
    'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan',
    'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta',
    'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir',
    'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla',
    'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt',
    'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
    'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
    'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
];

// Turkish Regions
const turkishRegions = [
    'Marmara', 'Aegean', 'Mediterranean', 'Black Sea',
    'Central Anatolia', 'Eastern Anatolia', 'Southeastern Anatolia'
];

// Countries
const countries = [
    'Turkey', 'Germany', 'France', 'United Kingdom', 'Italy', 'Spain', 'Netherlands',
    'Belgium', 'Austria', 'Switzerland', 'Russia', 'Ukraine', 'Azerbaijan', 'Georgia',
    'Iraq', 'Iran', 'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'Egypt', 'Algeria', 'Morocco', 'Libya', 'Tunisia', 'Nigeria', 'Angola', 'South Africa',
    'India', 'China', 'Japan', 'South Korea', 'Indonesia', 'Thailand', 'Malaysia',
    'USA', 'Canada', 'Brazil', 'Argentina', 'Mexico', 'Australia', 'New Zealand'
];

// Industries
const industries = [
    'Water & Wastewater', 'Oil & Gas', 'Petrochemical', 'Chemical', 'Power Generation',
    'Food & Beverage', 'Pharmaceutical', 'Textile', 'Paper & Pulp', 'Mining & Minerals',
    'Steel & Metal', 'Cement', 'Glass', 'Automotive', 'Aerospace & Defense',
    'HVAC & Building Services', 'Agriculture & Irrigation', 'Marine & Offshore',
    'District Heating', 'Nuclear', 'Other'
];

// Applications
const applications = [
    'Water Treatment', 'Wastewater Treatment', 'Water Supply', 'Irrigation',
    'Cooling Water', 'Boiler Feed', 'Condensate Return', 'Fire Fighting',
    'Process Fluid Transfer', 'Chemical Transfer', 'Slurry Handling',
    'Sewage Pumping', 'Flood Control', 'Drainage', 'Reverse Osmosis',
    'Desalination', 'Hot Water Circulation', 'Chilled Water', 'District Heating',
    'Pipeline Boosting', 'Tank Farm Transfer', 'Offshore Platform', 'Other'
];

// Product Types
const productTypes = [
    'Centrifugal Pump', 'Submersible Pump', 'Vertical Turbine Pump', 'Axial Flow Pump',
    'Mixed Flow Pump', 'Multistage Pump', 'Self-Priming Pump', 'Diaphragm Pump',
    'Peristaltic Pump', 'Gear Pump', 'Screw Pump', 'Magnetic Drive Pump',
    'Borehole Pump', 'Sewage Pump', 'Sump Pump', 'Booster Pump',
    'Circulation Pump', 'Dosing Pump', 'High Pressure Pump', 'In-Line Pump',
    'Back Pull-Out Pump', 'Double Suction Pump', 'Split Case Pump', 'Other'
];

// Mechanical Seal Types
const mechanicalSeals = [
    'Single Mechanical Seal', 'Double Mechanical Seal', 'Tandem Mechanical Seal',
    'Cartridge Mechanical Seal', 'Split Mechanical Seal', 'Seal-less (Magnetic Drive)',
    'Seal-less (Canned Motor)', 'Gland Packing', 'Lip Seal', 'None / Not Applicable'
];

// Distribution Channels
const distributionChannels = [
    'Direct', 'Distributor', 'Agent', 'EPC Contractor', 'System Integrator',
    'OEM', 'End User Direct', 'Framework Agreement', 'Tender', 'Other'
];

// Visit Types
const visitTypes = [
    'Cold Call', 'Follow-up Visit', 'Technical Support', 'Installation Visit',
    'Maintenance Visit', 'Quotation Follow-up', 'Training', 'Inspection',
    'Warranty Claim', 'Exhibition / Trade Show', 'Phone Call', 'Video Call', 'Other'
];

// Order Status
const orderStatuses = [
    'Prospecting', 'Qualified', 'Proposal Sent', 'Negotiation',
    'Order Expected', 'Order Won', 'Order Lost', 'On Hold', 'Not Interested'
];

// Priority Levels
const priorityLevels = ['High', 'Medium', 'Low'];

// Currencies
const currencies = ['EUR €', 'USD $', 'GBP £', 'TRY ₺', 'CHF', 'JPY ¥', 'RUB ₽'];
