export const BASE_URL = {
	GEMPA: 'https://data.bmkg.go.id/DataMKG/TEWS/',
	CUACA: 'https://api.bmkg.go.id/publik/prakiraan-cuaca',
	CSV: 'https://raw.githubusercontent.com/kodewilayah/permendagri-72-2019/main/dist/base.csv',
};

export const ENDPOINTS = {
	GEMPA: {
		AUTO_GEMPA: `${BASE_URL.GEMPA}autogempa.json`,
		GEMPA_TERKINI: `${BASE_URL.GEMPA}gempaterkini.json`,
		GEMPA_DIRASAKAN: `${BASE_URL.GEMPA}gempadirasakan.json`,
	},
	CUACA: `${BASE_URL.CUACA}?adm4=`,
};
