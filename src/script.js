// Timezone names to abbreviations map.
// TODO: Add more timezones as needed.
const tzMap = {
  'Africa/Abidjan': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Accra': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Addis_Ababa': {
    long: 'East Africa Time',
    short: 'Ethiopia Time',
  },
  'Africa/Algiers': {
    long: 'Central European Standard Time',
    short: 'Algeria Time',
  },
  'Africa/Asmara': {
    long: 'East Africa Time',
    short: 'Eritrea Time',
  },
  'Africa/Asmera': {
    long: 'East Africa Time',
    short: 'Eritrea Time',
  },
  'Africa/Bamako': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Bangui': {
    long: 'West Africa Standard Time',
    short: 'Central African Republic Time',
  },
  'Africa/Banjul': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Bissau': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Blantyre': {
    long: 'Central Africa Time',
    short: 'Malawi Time',
  },
  'Africa/Brazzaville': {
    long: 'West Africa Standard Time',
    short: 'Congo - Brazzaville Time',
  },
  'Africa/Bujumbura': {
    long: 'Central Africa Time',
    short: 'Burundi Time',
  },
  'Africa/Cairo': {
    long: 'Eastern European Standard Time',
    short: 'Egypt Time',
  },
  'Africa/Casablanca': {
    long: 'Morocco Time',
    short: 'Morocco Time',
  },
  'Africa/Ceuta': {
    long: 'Central European Time',
    short: 'Ceuta Time',
  },
  'Africa/Conakry': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Dakar': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Dar_es_Salaam': {
    long: 'East Africa Time',
    short: 'Tanzania Time',
  },
  'Africa/Djibouti': {
    long: 'East Africa Time',
    short: 'Djibouti Time',
  },
  'Africa/Douala': {
    long: 'West Africa Standard Time',
    short: 'Cameroon Time',
  },
  'Africa/El_Aaiun': {
    long: 'Western Sahara Time',
    short: 'Western Sahara Time',
  },
  'Africa/Freetown': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Gaborone': {
    long: 'Central Africa Time',
    short: 'Botswana Time',
  },
  'Africa/Harare': {
    long: 'Central Africa Time',
    short: 'Zimbabwe Time',
  },
  'Africa/Johannesburg': {
    long: 'South Africa Standard Time',
    short: 'South Africa Time',
  },
  'Africa/Juba': {
    long: 'Central Africa Time',
    short: 'South Sudan Time',
  },
  'Africa/Kampala': {
    long: 'East Africa Time',
    short: 'Uganda Time',
  },
  'Africa/Khartoum': {
    long: 'Central Africa Time',
    short: 'Sudan Time',
  },
  'Africa/Kigali': {
    long: 'Central Africa Time',
    short: 'Rwanda Time',
  },
  'Africa/Kinshasa': {
    long: 'West Africa Standard Time',
    short: 'Kinshasa Time',
  },
  'Africa/Lagos': {
    long: 'West Africa Standard Time',
    short: 'Nigeria Time',
  },
  'Africa/Libreville': {
    long: 'West Africa Standard Time',
    short: 'Gabon Time',
  },
  'Africa/Lome': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Luanda': {
    long: 'West Africa Standard Time',
    short: 'Angola Time',
  },
  'Africa/Lubumbashi': {
    long: 'Central Africa Time',
    short: 'Lubumbashi Time',
  },
  'Africa/Lusaka': {
    long: 'Central Africa Time',
    short: 'Zambia Time',
  },
  'Africa/Malabo': {
    long: 'West Africa Standard Time',
    short: 'Equatorial Guinea Time',
  },
  'Africa/Maputo': {
    long: 'Central Africa Time',
    short: 'Mozambique Time',
  },
  'Africa/Maseru': {
    long: 'South Africa Standard Time',
    short: 'Lesotho Time',
  },
  'Africa/Mbabane': {
    long: 'South Africa Standard Time',
    short: 'Eswatini Time',
  },
  'Africa/Mogadishu': {
    long: 'East Africa Time',
    short: 'Somalia Time',
  },
  'Africa/Monrovia': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Nairobi': {
    long: 'East Africa Time',
    short: 'Kenya Time',
  },
  'Africa/Ndjamena': {
    long: 'West Africa Standard Time',
    short: 'Chad Time',
  },
  'Africa/Niamey': {
    long: 'West Africa Standard Time',
    short: 'Niger Time',
  },
  'Africa/Nouakchott': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Ouagadougou': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Porto-Novo': {
    long: 'West Africa Standard Time',
    short: 'Benin Time',
  },
  'Africa/Sao_Tome': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Timbuktu': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Africa/Tripoli': {
    long: 'Eastern European Standard Time',
    short: 'Libya Time',
  },
  'Africa/Tunis': {
    long: 'Central European Standard Time',
    short: 'Tunisia Time',
  },
  'Africa/Windhoek': {
    long: 'Central Africa Time',
    short: 'Namibia Time',
  },
  'America/Adak': {
    long: 'Hawaii-Aleutian Time',
    short: 'HAT',
  },
  'America/Anchorage': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/Anguilla': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Antigua': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Araguaina': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Argentina/Buenos_Aires': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Catamarca': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/ComodRivadavia': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Cordoba': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Jujuy': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/La_Rioja': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Mendoza': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Rio_Gallegos': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Salta': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/San_Juan': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/San_Luis': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Tucuman': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Argentina/Ushuaia': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Aruba': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Asuncion': {
    long: 'Paraguay Time',
    short: 'PYT',
  },
  'America/Atikokan': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Atka': {
    long: 'Hawaii-Aleutian Time',
    short: 'HAT',
  },
  'America/Bahia': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Bahia_Banderas': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Barbados': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Belem': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Belize': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Blanc-Sablon': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Boa_Vista': {
    long: 'Amazon Standard Time',
    short: 'Boa Vista Time',
  },
  'America/Bogota': {
    long: 'Colombia Standard Time',
    short: 'Colombia Time',
  },
  'America/Boise': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Buenos_Aires': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Cambridge_Bay': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Campo_Grande': {
    long: 'Amazon Standard Time',
    short: 'Campo Grande Time',
  },
  'America/Cancun': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Caracas': {
    long: 'Venezuela Time',
    short: 'VET',
  },
  'America/Catamarca': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Cayenne': {
    long: 'French Guiana Time',
    short: 'French Guiana Time',
  },
  'America/Cayman': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Chicago': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Chicago': {
    long: 'Central Time',
    short: 'CDT',
  },
  'America/Chihuahua': {
    long: 'Mexican Pacific Time',
    short: 'Chihuahua Time',
  },
  'America/Coral_Harbour': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Cordoba': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Costa_Rica': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Creston': {
    long: 'Mountain Standard Time',
    short: 'MST',
  },
  'America/Cuiaba': {
    long: 'Amazon Standard Time',
    short: 'Cuiaba Time',
  },
  'America/Curacao': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Danmarkshavn': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'America/Dawson': {
    long: 'Yukon Time',
    short: 'Dawson Time',
  },
  'America/Dawson_Creek': {
    long: 'Mountain Standard Time',
    short: 'MST',
  },
  'America/Denver': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Detroit': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Dominica': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Edmonton': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Eirunepe': {
    long: 'Acre Standard Time',
    short: 'Eirunepe Time',
  },
  'America/El_Salvador': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Ensenada': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'America/Ensenada': {
    long: 'Pacific Time',
    short: 'PDT',
  },
  'America/Fort_Nelson': {
    long: 'Mountain Standard Time',
    short: 'MST',
  },
  'America/Fort_Wayne': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Fort_Wayne': {
    long: 'Eastern Time',
    short: 'EST',
  },
  'America/Fortaleza': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Glace_Bay': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'America/Godthab': {
    long: 'West Greenland Time',
    short: 'Godthab Time',
  },
  'America/Goose_Bay': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'America/Grand_Turk': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Grenada': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Guadeloupe': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Guatemala': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Guayaquil': {
    long: 'Ecuador Time',
    short: 'ECT',
  },
  'America/Guyana': {
    long: 'Guyana Time',
    short: 'GYT',
  },
  'America/Halifax': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'America/Havana': {
    long: 'Cuba Time',
    short: 'Cuba Time',
  },
  'America/Hermosillo': {
    long: 'Mexican Pacific Standard Time',
    short: 'Hermosillo Time',
  },
  'America/Indiana/Indianapolis': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indiana/Knox': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Indiana/Marengo': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indiana/Petersburg': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indiana/Tell_City': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Indiana/Vevay': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indiana/Vincennes': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indiana/Winamac': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Indianapolis': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Inuvik': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Iqaluit': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Jamaica': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Jujuy': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Juneau': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/Kentucky/Louisville': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Kentucky/Monticello': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Knox_IN': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Kralendijk': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/La_Paz': {
    long: 'Bolivia Time',
    short: 'Bolivia Time',
  },
  'America/Lima': {
    long: 'Peru Standard Time',
    short: 'PET',
  },
  'America/Los_Angeles': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'America/Louisville': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Lower_Princes': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Maceio': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Managua': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Manaus': {
    long: 'Amazon Standard Time',
    short: 'Manaus Time',
  },
  'America/Marigot': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Martinique': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Matamoros': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Mazatlan': {
    long: 'Mexican Pacific Time',
    short: 'Mazatlan Time',
  },
  'America/Mendoza': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Menominee': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Merida': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Metlakatla': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/Mexico_City': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Miquelon': {
    long: 'Saint-Pierre-et-Miquelon Time',
    short: 'PMT',
  },
  'America/Moncton': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'America/Monterrey': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Montevideo': {
    long: 'Uruguay Standard Time',
    short: 'UYT',
  },
  'America/Montreal': {
    long: 'Montreal Time',
    short: 'Montreal Time',
  },
  'America/Montserrat': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Nassau': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/New_York': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Nipigon': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Nome': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/Noronha': {
    long: 'Fernando de Noronha Standard Time',
    short: 'FNT',
  },
  'America/North_Dakota/Beulah': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/North_Dakota/Center': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/North_Dakota/New_Salem': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Nuuk': {
    long: 'West Greenland Time',
    short: 'Godthab Time',
  },
  'America/Ojinaga': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Panama': {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  'America/Pangnirtung': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Paramaribo': {
    long: 'Suriname Time',
    short: 'Suriname Time',
  },
  'America/Phoenix': {
    long: 'Mountain Standard Time',
    short: 'MST',
  },
  'America/Port-au-Prince': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Port_of_Spain': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Porto_Acre': {
    long: 'Acre Standard Time',
    short: 'Rio Branco Time',
  },
  'America/Porto_Velho': {
    long: 'Amazon Standard Time',
    short: 'Porto Velho Time',
  },
  'America/Puerto_Rico': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Punta_Arenas': {
    long: 'Punta Arenas Time',
    short: 'Punta Arenas Time',
  },
  'America/Rainy_River': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Rankin_Inlet': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Recife': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Regina': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Resolute': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Rio_Branco': {
    long: 'Acre Standard Time',
    short: 'Rio Branco Time',
  },
  'America/Rosario': {
    long: 'Argentina Standard Time',
    short: 'ART',
  },
  'America/Santa_Isabel': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'America/Santarem': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Santiago': {
    long: 'Chile Time',
    short: 'Chile Time',
  },
  'America/Santo_Domingo': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Sao_Paulo': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'America/Scoresbysund': {
    long: 'East Greenland Time',
    short: 'EGT',
  },
  'America/Shiprock': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'America/Sitka': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/St_Barthelemy': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/St_Johns': {
    long: 'Newfoundland Time',
    short: 'NT',
  },
  'America/St_Kitts': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/St_Lucia': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/St_Thomas': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/St_Vincent': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Swift_Current': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Tegucigalpa': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'America/Thule': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'America/Thunder_Bay': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Tijuana': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'America/Toronto': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'America/Tortola': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Vancouver': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'America/Virgin': {
    long: 'Atlantic Standard Time',
    short: 'AST',
  },
  'America/Whitehorse': {
    long: 'Yukon Time',
    short: 'Whitehorse Time',
  },
  'America/Winnipeg': {
    long: 'Central Time',
    short: 'CT',
  },
  'America/Yakutat': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'America/Yellowknife': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'Antarctica/Casey': {
    long: 'Casey Time',
    short: 'Casey Time',
  },
  'Antarctica/Davis': {
    long: 'Davis Time',
    short: 'Davis Time',
  },
  'Antarctica/DumontDUrville': {
    long: 'Dumont-d’Urville Time',
    short: 'DumontDUrville Time',
  },
  'Antarctica/Macquarie': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Antarctica/Mawson': {
    long: 'Mawson Time',
    short: 'Mawson Time',
  },
  'Antarctica/McMurdo': {
    long: 'New Zealand Time',
    short: 'McMurdo Time',
  },
  'Antarctica/Palmer': {
    long: 'Palmer Time',
    short: 'Palmer Time',
  },
  'Antarctica/Rothera': {
    long: 'Rothera Time',
    short: 'Rothera Time',
  },
  'Antarctica/South_Pole': {
    long: 'New Zealand Time',
    short: 'McMurdo Time',
  },
  'Antarctica/Syowa': {
    long: 'Syowa Time',
    short: 'Syowa Time',
  },
  'Antarctica/Troll': {
    long: 'Troll Time',
    short: 'Troll Time',
  },
  'Antarctica/Vostok': {
    long: 'Vostok Time',
    short: 'Vostok Time',
  },
  'Arctic/Longyearbyen': {
    long: 'Central European Time',
    short: 'Norway Time',
  },
  'Asia/Aden': {
    long: 'Arabian Standard Time',
    short: 'Yemen Time',
  },
  'Asia/Almaty': {
    long: 'East Kazakhstan Time',
    short: 'Almaty Time',
  },
  'Asia/Amman': {
    long: 'Eastern European Time',
    short: 'Jordan Time',
  },
  'Asia/Anadyr': {
    long: 'Anadyr Standard Time',
    short: 'Anadyr Time',
  },
  'Asia/Aqtau': {
    long: 'West Kazakhstan Time',
    short: 'Aqtau Time',
  },
  'Asia/Aqtobe': {
    long: 'West Kazakhstan Time',
    short: 'Aqtobe Time',
  },
  'Asia/Ashgabat': {
    long: 'Turkmenistan Standard Time',
    short: 'Turkmenistan Time',
  },
  'Asia/Ashkhabad': {
    long: 'Turkmenistan Standard Time',
    short: 'Turkmenistan Time',
  },
  'Asia/Atyrau': {
    long: 'West Kazakhstan Time',
    short: 'Atyrau Time',
  },
  'Asia/Baghdad': {
    long: 'Arabian Standard Time',
    short: 'Iraq Time',
  },
  'Asia/Bahrain': {
    long: 'Arabian Standard Time',
    short: 'Bahrain Time',
  },
  'Asia/Baku': {
    long: 'Azerbaijan Standard Time',
    short: 'Azerbaijan Time',
  },
  'Asia/Bangkok': {
    long: 'Indochina Time',
    short: 'ICT',
  },
  'Asia/Barnaul': {
    long: 'Barnaul Time',
    short: 'Barnaul Time',
  },
  'Asia/Beirut': {
    long: 'Eastern European Time',
    short: 'Lebanon Time',
  },
  'Asia/Bishkek': {
    long: 'Kyrgyzstan Time',
    short: 'Kyrgyzstan Time',
  },
  'Asia/Brunei': {
    long: 'Brunei Darussalam Time',
    short: 'BNT',
  },
  'Asia/Calcutta': {
    long: 'India Standard Time',
    short: 'IST',
  },
  'Asia/Chita': {
    long: 'Yakutsk Standard Time',
    short: 'Chita Time',
  },
  'Asia/Choibalsan': {
    long: 'Ulaanbaatar Standard Time',
    short: 'Choibalsan Time',
  },
  'Asia/Chongqing': {
    long: 'China Standard Time',
    short: 'China Time',
  },
  'Asia/Chungking': {
    long: 'China Standard Time',
    short: 'China Time',
  },
  'Asia/Colombo': {
    long: 'India Standard Time',
    short: 'IST',
  },
  'Asia/Dacca': {
    long: 'Bangladesh Standard Time',
    short: 'BST',
  },
  'Asia/Damascus': {
    long: 'Eastern European Time',
    short: 'Syria Time',
  },
  'Asia/Dhaka': {
    long: 'Bangladesh Standard Time',
    short: 'BST',
  },
  'Asia/Dili': {
    long: 'East Timor Time',
    short: 'TLT',
  },
  'Asia/Dubai': {
    long: 'Gulf Standard Time',
    short: 'United Arab Emirates Time',
  },
  'Asia/Dushanbe': {
    long: 'Tajikistan Time',
    short: 'Tajikistan Time',
  },
  'Asia/Famagusta': {
    long: 'Famagusta Time',
    short: 'Famagusta Time',
  },
  'Asia/Gaza': {
    long: 'Eastern European Time',
    short: 'Gaza Time',
  },
  'Asia/Harbin': {
    long: 'China Standard Time',
    short: 'China Time',
  },
  'Asia/Hebron': {
    long: 'Eastern European Time',
    short: 'Hebron Time',
  },
  'Asia/Ho_Chi_Minh': {
    long: 'Indochina Time',
    short: 'ICT',
  },
  'Asia/Hong_Kong': {
    long: 'Hong Kong Standard Time',
    short: 'Hong Kong SAR China Time',
  },
  'Asia/Hovd': {
    long: 'Hovd Standard Time',
    short: 'Hovd Time',
  },
  'Asia/Irkutsk': {
    long: 'Irkutsk Standard Time',
    short: 'Irkutsk Time',
  },
  'Asia/Istanbul': {
    long: 'Turkey Time',
    short: 'Turkey Time',
  },
  'Asia/Jakarta': {
    long: 'Western Indonesia Time',
    short: 'WIB',
  },
  'Asia/Jayapura': {
    long: 'Eastern Indonesia Time',
    short: 'WIT',
  },
  'Asia/Jerusalem': {
    long: 'Israel Time',
    short: 'Israel Time',
  },
  'Asia/Kabul': {
    long: 'Afghanistan Time',
    short: 'AFT',
  },
  'Asia/Kamchatka': {
    long: 'Petropavlovsk-Kamchatski Standard Time',
    short: 'Kamchatka Time',
  },
  'Asia/Karachi': {
    long: 'Pakistan Standard Time',
    short: 'PKT',
  },
  'Asia/Kashgar': {
    long: 'Urumqi Time',
    short: 'Urumqi Time',
  },
  'Asia/Kathmandu': {
    long: 'Nepal Time',
    short: 'NPT',
  },
  'Asia/Katmandu': {
    long: 'Nepal Time',
    short: 'NPT',
  },
  'Asia/Khandyga': {
    long: 'Yakutsk Standard Time',
    short: 'Khandyga Time',
  },
  'Asia/Kolkata': {
    long: 'India Standard Time',
    short: 'IST',
  },
  'Asia/Krasnoyarsk': {
    long: 'Krasnoyarsk Standard Time',
    short: 'Krasnoyarsk Time',
  },
  'Asia/Kuala_Lumpur': {
    long: 'Malaysia Time',
    short: 'MYT',
  },
  'Asia/Kuching': {
    long: 'Malaysia Time',
    short: 'MYT',
  },
  'Asia/Kuwait': {
    long: 'Arabian Standard Time',
    short: 'Kuwait Time',
  },
  'Asia/Macao': {
    long: 'China Standard Time',
    short: 'Macao SAR China Time',
  },
  'Asia/Macau': {
    long: 'China Standard Time',
    short: 'Macao SAR China Time',
  },
  'Asia/Magadan': {
    long: 'Magadan Standard Time',
    short: 'Magadan Time',
  },
  'Asia/Makassar': {
    long: 'Central Indonesia Time',
    short: 'WITA',
  },
  'Asia/Manila': {
    long: 'Philippine Standard Time',
    short: 'Philippines Time',
  },
  'Asia/Muscat': {
    long: 'Gulf Standard Time',
    short: 'Oman Time',
  },
  'Asia/Nicosia': {
    long: 'Eastern European Time',
    short: 'Nicosia Time',
  },
  'Asia/Novokuznetsk': {
    long: 'Krasnoyarsk Standard Time',
    short: 'Novokuznetsk Time',
  },
  'Asia/Novosibirsk': {
    long: 'Novosibirsk Standard Time',
    short: 'Novosibirsk Time',
  },
  'Asia/Omsk': {
    long: 'Omsk Standard Time',
    short: 'Omsk Time',
  },
  'Asia/Oral': {
    long: 'West Kazakhstan Time',
    short: 'Oral Time',
  },
  'Asia/Phnom_Penh': {
    long: 'Indochina Time',
    short: 'ICT',
  },
  'Asia/Pontianak': {
    long: 'Western Indonesia Time',
    short: 'WIB',
  },
  'Asia/Pyongyang': {
    long: 'Korean Standard Time',
    short: 'North Korea Time',
  },
  'Asia/Qatar': {
    long: 'Arabian Standard Time',
    short: 'Qatar Time',
  },
  'Asia/Qostanay': {
    long: 'East Kazakhstan Time',
    short: 'Qostanay Time',
  },
  'Asia/Qyzylorda': {
    long: 'West Kazakhstan Time',
    short: 'Qyzylorda Time',
  },
  'Asia/Rangoon': {
    long: 'Myanmar Time',
    short: 'Myanmar (Burma) Time',
  },
  'Asia/Riyadh': {
    long: 'Arabian Standard Time',
    short: 'Saudi Arabia Time',
  },
  'Asia/Saigon': {
    long: 'Indochina Time',
    short: 'ICT',
  },
  'Asia/Sakhalin': {
    long: 'Sakhalin Standard Time',
    short: 'Sakhalin Time',
  },
  'Asia/Samarkand': {
    long: 'Uzbekistan Standard Time',
    short: 'Samarkand Time',
  },
  'Asia/Seoul': {
    long: 'Korean Standard Time',
    short: 'South Korea Time',
  },
  'Asia/Shanghai': {
    long: 'China Standard Time',
    short: 'China Time',
  },
  'Asia/Singapore': {
    long: 'Singapore Standard Time',
    short: 'Singapore Time',
  },
  'Asia/Srednekolymsk': {
    long: 'Srednekolymsk Time',
    short: 'Srednekolymsk Time',
  },
  'Asia/Taipei': {
    long: 'Taipei Standard Time',
    short: 'Taiwan Time',
  },
  'Asia/Tashkent': {
    long: 'Uzbekistan Standard Time',
    short: 'Uzbekistan Time',
  },
  'Asia/Tbilisi': {
    long: 'Georgia Standard Time',
    short: 'Georgia Time',
  },
  'Asia/Tehran': {
    long: 'Iran Time',
    short: 'Iran Time',
  },
  'Asia/Tel_Aviv': {
    long: 'Israel Time',
    short: 'Israel Time',
  },
  'Asia/Thimbu': {
    long: 'Bhutan Time',
    short: 'BTT',
  },
  'Asia/Thimphu': {
    long: 'Bhutan Time',
    short: 'BTT',
  },
  'Asia/Tokyo': {
    long: 'Japan Standard Time',
    short: 'Japan Time',
  },
  'Asia/Tomsk': {
    long: 'Tomsk Time',
    short: 'Tomsk Time',
  },
  'Asia/Ujung_Pandang': {
    long: 'Central Indonesia Time',
    short: 'WITA',
  },
  'Asia/Ulaanbaatar': {
    long: 'Ulaanbaatar Standard Time',
    short: 'Ulaanbaatar Time',
  },
  'Asia/Ulan_Bator': {
    long: 'Ulaanbaatar Standard Time',
    short: 'Ulaanbaatar Time',
  },
  'Asia/Urumqi': {
    long: 'Urumqi Time',
    short: 'Urumqi Time',
  },
  'Asia/Ust-Nera': {
    long: 'Vladivostok Standard Time',
    short: 'Ust-Nera Time',
  },
  'Asia/Vientiane': {
    long: 'Indochina Time',
    short: 'ICT',
  },
  'Asia/Vladivostok': {
    long: 'Vladivostok Standard Time',
    short: 'Vladivostok Time',
  },
  'Asia/Yakutsk': {
    long: 'Yakutsk Standard Time',
    short: 'Yakutsk Time',
  },
  'Asia/Yangon': {
    long: 'Myanmar Time',
    short: 'Myanmar (Burma) Time',
  },
  'Asia/Yekaterinburg': {
    long: 'Yekaterinburg Standard Time',
    short: 'Yekaterinburg Time',
  },
  'Asia/Yerevan': {
    long: 'Armenia Standard Time',
    short: 'Armenia Time',
  },
  'Atlantic/Azores': {
    long: 'Azores Time',
    short: 'Azores Time',
  },
  'Atlantic/Bermuda': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'Atlantic/Canary': {
    long: 'Western European Time',
    short: 'Canary Time',
  },
  'Atlantic/Cape_Verde': {
    long: 'Cape Verde Standard Time',
    short: 'Cape Verde Time',
  },
  'Atlantic/Faeroe': {
    long: 'Western European Time',
    short: 'Faroe Islands Time',
  },
  'Atlantic/Faroe': {
    long: 'Western European Time',
    short: 'Faroe Islands Time',
  },
  'Atlantic/Jan_Mayen': {
    long: 'Central European Time',
    short: 'Svalbard and Jan Mayen Time',
  },
  'Atlantic/Madeira': {
    long: 'Western European Time',
    short: 'Madeira Time',
  },
  'Atlantic/Reykjavik': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Atlantic/South_Georgia': {
    long: 'South Georgia Time',
    short: 'South Georgia and South Sandwich Islands Time',
  },
  'Atlantic/St_Helena': {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Atlantic/Stanley': {
    long: 'Falkland Islands Standard Time',
    short: 'FKT',
  },
  'Australia/ACT': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/Adelaide': {
    long: 'Central Australia Time',
    short: 'Adelaide Time',
  },
  'Australia/Brisbane': {
    long: 'Australian Eastern Standard Time',
    short: 'AEST',
  },
  'Australia/Broken_Hill': {
    long: 'Central Australia Time',
    short: 'Broken Hill Time',
  },
  'Australia/Canberra': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/Currie': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/Darwin': {
    long: 'Australian Central Standard Time',
    short: 'Darwin Time',
  },
  'Australia/Eucla': {
    long: 'Australian Central Western Standard Time',
    short: 'ACWST',
  },
  'Australia/Hobart': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/LHI': {
    long: 'Lord Howe Time',
    short: 'Lord Howe Time',
  },
  'Australia/Lindeman': {
    long: 'Australian Eastern Standard Time',
    short: 'AEST',
  },
  'Australia/Lord_Howe': {
    long: 'Lord Howe Time',
    short: 'Lord Howe Time',
  },
  'Australia/Melbourne': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/NSW': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/North': {
    long: 'Australian Central Standard Time',
    short: 'Darwin Time',
  },
  'Australia/Perth': {
    long: 'Australian Western Standard Time',
    short: 'AWST',
  },
  'Australia/Queensland': {
    long: 'Australian Eastern Standard Time',
    short: 'AEST',
  },
  'Australia/South': {
    long: 'Central Australia Time',
    short: 'Adelaide Time',
  },
  'Australia/Sydney': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/Tasmania': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/Victoria': {
    long: 'Eastern Australia Time',
    short: 'AET',
  },
  'Australia/West': {
    long: 'Australian Western Standard Time',
    short: 'AWST',
  },
  'Australia/Yancowinna': {
    long: 'Central Australia Time',
    short: 'Broken Hill Time',
  },
  'Brazil/Acre': {
    long: 'Acre Standard Time',
    short: 'Rio Branco Time',
  },
  'Brazil/DeNoronha': {
    long: 'Fernando de Noronha Standard Time',
    short: 'FNT',
  },
  'Brazil/East': {
    long: 'Brasilia Standard Time',
    short: 'BRT',
  },
  'Brazil/West': {
    long: 'Amazon Standard Time',
    short: 'Manaus Time',
  },
  CET: {
    long: 'GMT+01:00',
    short: 'GMT+1',
  },
  CST6CDT: {
    long: 'Central Time',
    short: 'CT',
  },
  'Canada/Atlantic': {
    long: 'Atlantic Time',
    short: 'AT',
  },
  'Canada/Central': {
    long: 'Central Time',
    short: 'CT',
  },
  'Canada/Eastern': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'Canada/Mountain': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'Canada/Newfoundland': {
    long: 'Newfoundland Time',
    short: 'NT',
  },
  'Canada/Pacific': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'Canada/Saskatchewan': {
    long: 'Central Standard Time',
    short: 'CST',
  },
  'Canada/Yukon': {
    long: 'Yukon Time',
    short: 'Whitehorse Time',
  },
  'Chile/Continental': {
    long: 'Chile Time',
    short: 'Chile Time',
  },
  'Chile/EasterIsland': {
    long: 'Easter Island Time',
    short: 'Easter Time',
  },
  Cuba: {
    long: 'Cuba Time',
    short: 'Cuba Time',
  },
  EET: {
    long: 'GMT+02:00',
    short: 'GMT+2',
  },
  EST: {
    long: 'GMT-05:00',
    short: 'GMT-5',
  },
  EST5EDT: {
    long: 'Eastern Time',
    short: 'ET',
  },
  Egypt: {
    long: 'Eastern European Standard Time',
    short: 'Egypt Time',
  },
  Eire: {
    long: 'Ireland Time',
    short: 'Ireland Time',
  },
  'Etc/GMT': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/GMT+0': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/GMT+1': {
    long: 'GMT-01:00',
    short: 'GMT-1',
  },
  'Etc/GMT+10': {
    long: 'GMT-10:00',
    short: 'GMT-10',
  },
  'Etc/GMT+11': {
    long: 'GMT-11:00',
    short: 'GMT-11',
  },
  'Etc/GMT+12': {
    long: 'GMT-12:00',
    short: 'GMT-12',
  },
  'Etc/GMT+2': {
    long: 'GMT-02:00',
    short: 'GMT-2',
  },
  'Etc/GMT+3': {
    long: 'GMT-03:00',
    short: 'GMT-3',
  },
  'Etc/GMT+4': {
    long: 'GMT-04:00',
    short: 'GMT-4',
  },
  'Etc/GMT+5': {
    long: 'GMT-05:00',
    short: 'GMT-5',
  },
  'Etc/GMT+6': {
    long: 'GMT-06:00',
    short: 'GMT-6',
  },
  'Etc/GMT+7': {
    long: 'GMT-07:00',
    short: 'GMT-7',
  },
  'Etc/GMT+8': {
    long: 'GMT-08:00',
    short: 'GMT-8',
  },
  'Etc/GMT+9': {
    long: 'GMT-09:00',
    short: 'GMT-9',
  },
  'Etc/GMT-0': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/GMT-1': {
    long: 'GMT+01:00',
    short: 'GMT+1',
  },
  'Etc/GMT-10': {
    long: 'GMT+10:00',
    short: 'GMT+10',
  },
  'Etc/GMT-11': {
    long: 'GMT+11:00',
    short: 'GMT+11',
  },
  'Etc/GMT-12': {
    long: 'GMT+12:00',
    short: 'GMT+12',
  },
  'Etc/GMT-13': {
    long: 'GMT+13:00',
    short: 'GMT+13',
  },
  'Etc/GMT-14': {
    long: 'GMT+14:00',
    short: 'GMT+14',
  },
  'Etc/GMT-2': {
    long: 'GMT+02:00',
    short: 'GMT+2',
  },
  'Etc/GMT-3': {
    long: 'GMT+03:00',
    short: 'GMT+3',
  },
  'Etc/GMT-4': {
    long: 'GMT+04:00',
    short: 'GMT+4',
  },
  'Etc/GMT-5': {
    long: 'GMT+05:00',
    short: 'GMT+5',
  },
  'Etc/GMT-6': {
    long: 'GMT+06:00',
    short: 'GMT+6',
  },
  'Etc/GMT-7': {
    long: 'GMT+07:00',
    short: 'GMT+7',
  },
  'Etc/GMT-8': {
    long: 'GMT+08:00',
    short: 'GMT+8',
  },
  'Etc/GMT-9': {
    long: 'GMT+09:00',
    short: 'GMT+9',
  },
  'Etc/GMT0': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/Greenwich': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/UCT': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/UTC': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/Universal': {
    long: 'GMT',
    short: 'GMT',
  },
  'Etc/Zulu': {
    long: 'GMT',
    short: 'GMT',
  },
  'Europe/Amsterdam': {
    long: 'Central European Time',
    short: 'Netherlands Time',
  },
  'Europe/Andorra': {
    long: 'Central European Time',
    short: 'Andorra Time',
  },
  'Europe/Astrakhan': {
    long: 'Astrakhan Time',
    short: 'Astrakhan Time',
  },
  'Europe/Athens': {
    long: 'Eastern European Time',
    short: 'Greece Time',
  },
  'Europe/Belfast': {
    long: 'United Kingdom Time',
    short: 'United Kingdom Time',
  },
  'Europe/Belgrade': {
    long: 'Central European Time',
    short: 'Serbia Time',
  },
  'Europe/Berlin': {
    long: 'Central European Time',
    short: 'Germany Time',
  },
  'Europe/Bratislava': {
    long: 'Central European Time',
    short: 'Czechia Time',
  },
  'Europe/Brussels': {
    long: 'Central European Time',
    short: 'Belgium Time',
  },
  'Europe/Bucharest': {
    long: 'Eastern European Time',
    short: 'Romania Time',
  },
  'Europe/Budapest': {
    long: 'Central European Time',
    short: 'Hungary Time',
  },
  'Europe/Busingen': {
    long: 'Central European Time',
    short: 'Switzerland Time',
  },
  'Europe/Chisinau': {
    long: 'Eastern European Time',
    short: 'Moldova Time',
  },
  'Europe/Copenhagen': {
    long: 'Central European Time',
    short: 'Denmark Time',
  },
  'Europe/Dublin': {
    long: 'Ireland Time',
    short: 'Ireland Time',
  },
  'Europe/Gibraltar': {
    long: 'Central European Time',
    short: 'Gibraltar Time',
  },
  'Europe/Guernsey': {
    long: 'Guernsey Time',
    short: 'Guernsey Time',
  },
  'Europe/Helsinki': {
    long: 'Eastern European Time',
    short: 'Finland Time',
  },
  'Europe/Isle_of_Man': {
    long: 'Isle of Man Time',
    short: 'Isle of Man Time',
  },
  'Europe/Istanbul': {
    long: 'Turkey Time',
    short: 'Turkey Time',
  },
  'Europe/Jersey': {
    long: 'Jersey Time',
    short: 'Jersey Time',
  },
  'Europe/Kaliningrad': {
    long: 'Eastern European Standard Time',
    short: 'Kaliningrad Time',
  },
  'Europe/Kiev': {
    long: 'Eastern European Time',
    short: 'Ukraine Time',
  },
  'Europe/Kirov': {
    long: 'Kirov Time',
    short: 'Kirov Time',
  },
  'Europe/Lisbon': {
    long: 'Western European Time',
    short: 'Portugal Time',
  },
  'Europe/Ljubljana': {
    long: 'Central European Time',
    short: 'Slovenia Time',
  },
  'Europe/London': {
    long: 'United Kingdom Time',
    short: 'United Kingdom Time',
  },
  'Europe/Luxembourg': {
    long: 'Central European Time',
    short: 'Luxembourg Time',
  },
  'Europe/Madrid': {
    long: 'Central European Time',
    short: 'Spain Time',
  },
  'Europe/Malta': {
    long: 'Central European Time',
    short: 'Malta Time',
  },
  'Europe/Mariehamn': {
    long: 'Eastern European Time',
    short: 'Finland Time',
  },
  'Europe/Minsk': {
    long: 'Moscow Standard Time',
    short: 'Belarus Time',
  },
  'Europe/Monaco': {
    long: 'Central European Time',
    short: 'Monaco Time',
  },
  'Europe/Moscow': {
    long: 'Moscow Standard Time',
    short: 'Moscow Time',
  },
  'Europe/Nicosia': {
    long: 'Eastern European Time',
    short: 'Nicosia Time',
  },
  'Europe/Oslo': {
    long: 'Central European Time',
    short: 'Norway Time',
  },
  'Europe/Paris': {
    long: 'Central European Time',
    short: 'France Time',
  },
  'Europe/Podgorica': {
    long: 'Central European Time',
    short: 'Serbia Time',
  },
  'Europe/Prague': {
    long: 'Central European Time',
    short: 'Czechia Time',
  },
  'Europe/Riga': {
    long: 'Eastern European Time',
    short: 'Latvia Time',
  },
  'Europe/Rome': {
    long: 'Central European Time',
    short: 'Italy Time',
  },
  'Europe/Samara': {
    long: 'Samara Standard Time',
    short: 'Samara Time',
  },
  'Europe/San_Marino': {
    long: 'Central European Time',
    short: 'Italy Time',
  },
  'Europe/Sarajevo': {
    long: 'Central European Time',
    short: 'Bosnia and Herzegovina Time',
  },
  'Europe/Saratov': {
    long: 'Saratov Time',
    short: 'Saratov Time',
  },
  'Europe/Simferopol': {
    long: 'Moscow Standard Time',
    short: 'Simferopol Time',
  },
  'Europe/Skopje': {
    long: 'Central European Time',
    short: 'North Macedonia Time',
  },
  'Europe/Sofia': {
    long: 'Eastern European Time',
    short: 'Bulgaria Time',
  },
  'Europe/Stockholm': {
    long: 'Central European Time',
    short: 'Sweden Time',
  },
  'Europe/Tallinn': {
    long: 'Eastern European Time',
    short: 'Estonia Time',
  },
  'Europe/Tirane': {
    long: 'Central European Time',
    short: 'Albania Time',
  },
  'Europe/Tiraspol': {
    long: 'Eastern European Time',
    short: 'Moldova Time',
  },
  'Europe/Ulyanovsk': {
    long: 'Ulyanovsk Time',
    short: 'Ulyanovsk Time',
  },
  'Europe/Uzhgorod': {
    long: 'Eastern European Time',
    short: 'Uzhgorod Time',
  },
  'Europe/Vaduz': {
    long: 'Central European Time',
    short: 'Liechtenstein Time',
  },
  'Europe/Vatican': {
    long: 'Central European Time',
    short: 'Italy Time',
  },
  'Europe/Vienna': {
    long: 'Central European Time',
    short: 'Austria Time',
  },
  'Europe/Vilnius': {
    long: 'Eastern European Time',
    short: 'Lithuania Time',
  },
  'Europe/Volgograd': {
    long: 'Volgograd Standard Time',
    short: 'Volgograd Time',
  },
  'Europe/Warsaw': {
    long: 'Central European Time',
    short: 'Poland Time',
  },
  'Europe/Zagreb': {
    long: 'Central European Time',
    short: 'Croatia Time',
  },
  'Europe/Zaporozhye': {
    long: 'Eastern European Time',
    short: 'Zaporozhye Time',
  },
  'Europe/Zurich': {
    long: 'Central European Time',
    short: 'Switzerland Time',
  },
  Factory: {
    long: 'GMT',
    short: 'GMT',
  },
  GB: {
    long: 'United Kingdom Time',
    short: 'United Kingdom Time',
  },
  'GB-Eire': {
    long: 'United Kingdom Time',
    short: 'United Kingdom Time',
  },
  GMT: {
    long: 'GMT',
    short: 'GMT',
  },
  'GMT+0': {
    long: 'GMT',
    short: 'GMT',
  },
  'GMT-0': {
    long: 'GMT',
    short: 'GMT',
  },
  GMT0: {
    long: 'GMT',
    short: 'GMT',
  },
  Greenwich: {
    long: 'GMT',
    short: 'GMT',
  },
  HST: {
    long: 'GMT-10:00',
    short: 'GMT-10',
  },
  Hongkong: {
    long: 'Hong Kong Standard Time',
    short: 'Hong Kong SAR China Time',
  },
  Iceland: {
    long: 'Greenwich Mean Time',
    short: 'GMT',
  },
  'Indian/Antananarivo': {
    long: 'East Africa Time',
    short: 'Madagascar Time',
  },
  'Indian/Chagos': {
    long: 'Indian Ocean Time',
    short: 'British Indian Ocean Territory Time',
  },
  'Indian/Christmas': {
    long: 'Christmas Island Time',
    short: 'CXT',
  },
  'Indian/Cocos': {
    long: 'Cocos Islands Time',
    short: 'CCT',
  },
  'Indian/Comoro': {
    long: 'East Africa Time',
    short: 'Comoros Time',
  },
  'Indian/Kerguelen': {
    long: 'French Southern and Antarctic Time',
    short: 'French Southern Territories Time',
  },
  'Indian/Mahe': {
    long: 'Seychelles Time',
    short: 'Seychelles Time',
  },
  'Indian/Maldives': {
    long: 'Maldives Time',
    short: 'MVT',
  },
  'Indian/Mauritius': {
    long: 'Mauritius Standard Time',
    short: 'Mauritius Time',
  },
  'Indian/Mayotte': {
    long: 'East Africa Time',
    short: 'Mayotte Time',
  },
  'Indian/Reunion': {
    long: 'Réunion Time',
    short: 'Réunion Time',
  },
  Iran: {
    long: 'Iran Time',
    short: 'Iran Time',
  },
  Israel: {
    long: 'Israel Time',
    short: 'Israel Time',
  },
  Jamaica: {
    long: 'Eastern Standard Time',
    short: 'EST',
  },
  Japan: {
    long: 'Japan Standard Time',
    short: 'Japan Time',
  },
  Kwajalein: {
    long: 'Marshall Islands Time',
    short: 'Kwajalein Time',
  },
  Libya: {
    long: 'Eastern European Standard Time',
    short: 'Libya Time',
  },
  MET: {
    long: 'GMT+01:00',
    short: 'GMT+1',
  },
  MST: {
    long: 'GMT-07:00',
    short: 'GMT-7',
  },
  MST7MDT: {
    long: 'Mountain Time',
    short: 'MT',
  },
  'Mexico/BajaNorte': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'Mexico/BajaSur': {
    long: 'Mexican Pacific Time',
    short: 'Mazatlan Time',
  },
  'Mexico/General': {
    long: 'Central Time',
    short: 'CT',
  },
  NZ: {
    long: 'New Zealand Time',
    short: 'New Zealand Time',
  },
  'NZ-CHAT': {
    long: 'Chatham Time',
    short: 'Chatham Time',
  },
  Navajo: {
    long: 'Mountain Time',
    short: 'MT',
  },
  PRC: {
    long: 'China Standard Time',
    short: 'China Time',
  },
  PST8PDT: {
    long: 'Pacific Time',
    short: 'PT',
  },
  'Pacific/Apia': {
    long: 'Apia Standard Time',
    short: 'Samoa Time',
  },
  'Pacific/Auckland': {
    long: 'New Zealand Time',
    short: 'New Zealand Time',
  },
  'Pacific/Bougainville': {
    long: 'Bougainville Time',
    short: 'Bougainville Time',
  },
  'Pacific/Chatham': {
    long: 'Chatham Time',
    short: 'Chatham Time',
  },
  'Pacific/Chuuk': {
    long: 'Chuuk Time',
    short: 'Truk Time',
  },
  'Pacific/Easter': {
    long: 'Easter Island Time',
    short: 'Easter Time',
  },
  'Pacific/Efate': {
    long: 'Vanuatu Standard Time',
    short: 'Vanuatu Time',
  },
  'Pacific/Enderbury': {
    long: 'Phoenix Islands Time',
    short: 'Enderbury Time',
  },
  'Pacific/Fakaofo': {
    long: 'Tokelau Time',
    short: 'Tokelau Time',
  },
  'Pacific/Fiji': {
    long: 'Fiji Standard Time',
    short: 'Fiji Time',
  },
  'Pacific/Funafuti': {
    long: 'Tuvalu Time',
    short: 'Tuvalu Time',
  },
  'Pacific/Galapagos': {
    long: 'Galapagos Time',
    short: 'GALT',
  },
  'Pacific/Gambier': {
    long: 'Gambier Time',
    short: 'Gambier Time',
  },
  'Pacific/Guadalcanal': {
    long: 'Solomon Islands Time',
    short: 'Solomon Islands Time',
  },
  'Pacific/Guam': {
    long: 'Chamorro Standard Time',
    short: 'Guam Time',
  },
  'Pacific/Honolulu': {
    long: 'Hawaii-Aleutian Standard Time',
    short: 'HST',
  },
  'Pacific/Johnston': {
    long: 'Hawaii-Aleutian Standard Time',
    short: 'HAST',
  },
  'Pacific/Kanton': {
    long: 'Phoenix Islands Time',
    short: 'Enderbury Time',
  },
  'Pacific/Kiritimati': {
    long: 'Line Islands Time',
    short: 'Kiritimati Time',
  },
  'Pacific/Kosrae': {
    long: 'Kosrae Time',
    short: 'Kosrae Time',
  },
  'Pacific/Kwajalein': {
    long: 'Marshall Islands Time',
    short: 'Kwajalein Time',
  },
  'Pacific/Majuro': {
    long: 'Marshall Islands Time',
    short: 'Marshall Islands Time',
  },
  'Pacific/Marquesas': {
    long: 'Marquesas Time',
    short: 'Marquesas Time',
  },
  'Pacific/Midway': {
    long: 'Samoa Standard Time',
    short: 'Midway Time',
  },
  'Pacific/Nauru': {
    long: 'Nauru Time',
    short: 'Nauru Time',
  },
  'Pacific/Niue': {
    long: 'Niue Time',
    short: 'Niue Time',
  },
  'Pacific/Norfolk': {
    long: 'Norfolk Island Time',
    short: 'Norfolk Island Time',
  },
  'Pacific/Noumea': {
    long: 'New Caledonia Standard Time',
    short: 'New Caledonia Time',
  },
  'Pacific/Pago_Pago': {
    long: 'Samoa Standard Time',
    short: 'American Samoa Time',
  },
  'Pacific/Palau': {
    long: 'Palau Time',
    short: 'Palau Time',
  },
  'Pacific/Pitcairn': {
    long: 'Pitcairn Time',
    short: 'Pitcairn Islands Time',
  },
  'Pacific/Pohnpei': {
    long: 'Ponape Time',
    short: 'Ponape Time',
  },
  'Pacific/Ponape': {
    long: 'Ponape Time',
    short: 'Ponape Time',
  },
  'Pacific/Port_Moresby': {
    long: 'Papua New Guinea Time',
    short: 'Port Moresby Time',
  },
  'Pacific/Rarotonga': {
    long: 'Cook Islands Standard Time',
    short: 'Cook Islands Time',
  },
  'Pacific/Saipan': {
    long: 'Chamorro Standard Time',
    short: 'Northern Mariana Islands Time',
  },
  'Pacific/Samoa': {
    long: 'Samoa Standard Time',
    short: 'American Samoa Time',
  },
  'Pacific/Tahiti': {
    long: 'Tahiti Time',
    short: 'Tahiti Time',
  },
  'Pacific/Tarawa': {
    long: 'Gilbert Islands Time',
    short: 'Tarawa Time',
  },
  'Pacific/Tongatapu': {
    long: 'Tonga Standard Time',
    short: 'Tonga Time',
  },
  'Pacific/Truk': {
    long: 'Chuuk Time',
    short: 'Truk Time',
  },
  'Pacific/Wake': {
    long: 'Wake Island Time',
    short: 'Wake Time',
  },
  'Pacific/Wallis': {
    long: 'Wallis and Futuna Time',
    short: 'Wallis and Futuna Time',
  },
  'Pacific/Yap': {
    long: 'Chuuk Time',
    short: 'Truk Time',
  },
  Poland: {
    long: 'Central European Time',
    short: 'Poland Time',
  },
  Portugal: {
    long: 'Western European Time',
    short: 'Portugal Time',
  },
  ROC: {
    long: 'Taipei Standard Time',
    short: 'Taiwan Time',
  },
  ROK: {
    long: 'Korean Standard Time',
    short: 'South Korea Time',
  },
  Singapore: {
    long: 'Singapore Standard Time',
    short: 'Singapore Time',
  },
  Turkey: {
    long: 'Turkey Time',
    short: 'Turkey Time',
  },
  UCT: {
    long: 'GMT',
    short: 'GMT',
  },
  'US/Alaska': {
    long: 'Alaska Time',
    short: 'AKT',
  },
  'US/Aleutian': {
    long: 'Hawaii-Aleutian Time',
    short: 'HAT',
  },
  'US/Arizona': {
    long: 'Mountain Standard Time',
    short: 'MST',
  },
  'US/Central': {
    long: 'Central Time',
    short: 'CT',
  },
  'US/East-Indiana': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'US/Eastern': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'US/Hawaii': {
    long: 'Hawaii-Aleutian Standard Time',
    short: 'HST',
  },
  'US/Indiana-Starke': {
    long: 'Central Time',
    short: 'CT',
  },
  'US/Michigan': {
    long: 'Eastern Time',
    short: 'ET',
  },
  'US/Mountain': {
    long: 'Mountain Time',
    short: 'MT',
  },
  'US/Pacific': {
    long: 'Pacific Time',
    short: 'PT',
  },
  'US/Samoa': {
    long: 'Samoa Standard Time',
    short: 'American Samoa Time',
  },
  UTC: {
    long: 'GMT',
    short: 'GMT',
  },
  Universal: {
    long: 'GMT',
    short: 'GMT',
  },
  'W-SU': {
    long: 'Moscow Standard Time',
    short: 'Moscow Time',
  },
  WET: {
    long: 'GMT',
    short: 'GMT',
  },
  Zulu: {
    long: 'GMT',
    short: 'GMT',
  },
};

// Get the timezone full name from the abbreviation using the tzmap.
const getTzName = (tzMapObj, tzShortName) => {
  return Object.keys(tzMapObj).find(
    key =>
      tzMapObj[key].short.toLowerCase().replaceAll('.', '') ===
      tzShortName.toLowerCase().replaceAll('.', '')
  );
};

// Convert time to 24 hr format.
const convertTo24Hr = (time, meridiem) => {
  let [hour, minute] = time.split(':').map(part => parseInt(part.trim()));
  minute = minute || 0;

  if (meridiem) {
    if (meridiem.toLowerCase().includes('p') && hour < 12) {
      hour += 12;
    } else if (meridiem.toLowerCase().includes('a') && hour === 12) {
      hour = 0;
    }

    return `${hour}:${minute < 10 ? '0' + minute : minute}`;
  }
  return time;
};

const matchTzPart = matchesArr => {
  for (let i = 0; i < matchesArr.length; i++) {
    for (const key in tzMap) {
      if (
        tzMap[key].short.toLowerCase().replaceAll('.', '') ===
        matchesArr[i].toLowerCase().replaceAll('.', '')
      ) {
        return matchesArr[i];
      }
    }
  }
  return null;
};

const replaceTime = () => {
  // Regex to match time that includes timezone.
  // TODO: Can be improved to be more accurate.
  const regex =
    /\b\d{1,2}(:\d{2})?\s?(am|pm|AM|PM|a\.m\.|p\.m\.)\s?[A-Za-z]{2,3}\b/g;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;

  const trackUpdatedMatches = [];

  while ((node = walker.nextNode())) {
    // Match the regex against the page body.
    const matches = node.textContent.match(regex);

    if (matches) {
      matches.forEach(match => {
        if (match) {
          // Get the timezone part or words that are similar from the match.
          const timeZoneMatches = match.match(/[A-Za-z]{2,3}/g);

          // Get the timezone part from the match.
          const timeZonePart = matchTzPart(timeZoneMatches);

          // Get timezone full name from the abbreviation.
          const tzName = getTzName(tzMap, timeZonePart);

          if (!tzName) {
            console.log('Timezone not found:', timeZonePart);
          } else {
            // Get the time part from the match.
            const timePart = match.match(/\d{1,2}(:\d{2})?/)[0].trim();

            // Get the merediem part from the match.
            const meridiemPart = match
              .match(/(am|pm|AM|PM|a\.m\.|p\.m\.)/)[0]
              .trim();

            // Convert time to 24 hr format.
            const time = convertTo24Hr(timePart, meridiemPart);

            const currentTime = moment.tz(time, 'HH:mm', tzName);

            const clientTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const clientTime = currentTime.tz(clientTz);
            const clientTimeFormatted = clientTime.format('hh:mm a z');

            if (!trackUpdatedMatches.includes(match)) {
              const localTimeToAdd = `${match} <b title="Added by timezoner">(${clientTimeFormatted})</b>`;
              document.body.innerHTML = document.body.innerHTML.replaceAll(
                match,
                localTimeToAdd
              );
              trackUpdatedMatches.push(match);
            }
          }
        }
      });
    }
  }
};

replaceTime();
