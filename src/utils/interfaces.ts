export interface AutoGempa {
	/**
	 * Tanggal gempa terjadi.
	 */
	tanggal: string;

	/**
	 * Waktu gempa terjadi.
	 */
	jam: string;

	/**
	 * Waktu gempa terjadi dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat tempat terjadinya gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang wilayah tempat terjadinya gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur wilayah tempat terjadinya gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa.
	 */
	magnitude: number;

	/**
	 * Kedalaman gempa.
	 */
	kedalaman: string;

	/**
	 * Wilayah terjadinya gempa.
	 */
	wilayah: string;

	/**
	 * Potensi yang ditimbulkan dari gempa.
	 */
	potensi: string;

	/**
	 * Daerah-daerah yang merasakan gempa.
	 */
	dirasakan: string;

	/**
	 * Pranala shakemap gempa.
	 */
	shakemap: string;
}

export interface AutoGempaAPI {
	Infogempa: {
		gempa: {
			Tanggal: string;
			Jam: string;
			DateTime: string;
			Coordinates: string;
			Lintang: string;
			Bujur: string;
			Magnitude: string;
			Kedalaman: string;
			Wilayah: string;
			Potensi: string;
			Dirasakan: string;
			Shakemap: string;
		};
	};
}

export interface GempaTerkini {
	/**
	 * Tanggal gempa terjadi.
	 */
	tanggal: string;

	/**
	 * Waktu gempa terjadi.
	 */
	jam: string;

	/**
	 * Waktu gempa terjadi dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat tempat terjadinya gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang wilayah tempat terjadinya gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur wilayah tempat terjadinya gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa.
	 */
	magnitude: number;

	/**
	 * Kedalaman gempa.
	 */
	kedalaman: string;

	/**
	 * Wilayah terjadinya gempa.
	 */
	wilayah: string;

	/**
	 * Potensi yang ditimbulkan dari gempa.
	 */
	potensi: string;
}

export interface GempaTerkiniAPI {
	Infogempa: {
		gempa: {
			Tanggal: string;
			Jam: string;
			DateTime: string;
			Coordinates: string;
			Lintang: string;
			Bujur: string;
			Magnitude: string;
			Kedalaman: string;
			Wilayah: string;
			Potensi: string;
		}[];
	};
}

export interface GempaDirasakan {
	/**
	 * Tanggal gempa terjadi.
	 */
	tanggal: string;

	/**
	 * Waktu gempa terjadi.
	 */
	jam: string;

	/**
	 * Waktu gempa terjadi dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat tempat terjadinya gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang wilayah tempat terjadinya gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur wilayah tempat terjadinya gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa.
	 */
	magnitude: number;

	/**
	 * Kedalaman gempa.
	 */
	kedalaman: string;

	/**
	 * Wilayah terjadinya gempa.
	 */
	wilayah: string;

	/**
	 * Daerah-daerah yang merasakan gempa.
	 */
	dirasakan: string;
}

export interface GempaDirasakanAPI {
	Infogempa: {
		gempa: {
			Tanggal: string;
			Jam: string;
			DateTime: string;
			Coordinates: string;
			Lintang: string;
			Bujur: string;
			Magnitude: string;
			Kedalaman: string;
			Wilayah: string;
			Dirasakan: string;
		}[];
	};
}

export interface CuacaAPI {
	data: DataCuaca[];
}

export interface DataCuaca {
	lokasi: Lokasi;
	cuaca: Cuaca[][];
}

export interface Lokasi {
	adm1: string;
	adm2: string;
	adm3: string;
	adm4: string;
	provinsi: string;
	kotkab: string;
	kecamatan: string;
	desa: string;
	lon: number;
	lat: number;
	timezone: string;
	type: string;
}

export interface Cuaca {
	datetime: string;
	t: number;
	tcc: number;
	tp: number;
	weather: number;
	weather_desc: string;
	weather_desc_en: string;
	wd_deg: number;
	wd: string;
	wd_to: string;
	ws: number;
	hu: number;
	vs: number;
	vs_text: string;
	time_index: string;
	analysis_date: string;
	image: string;
	utc_datetime: string;
	local_datetime: string;
}

export interface KodeWilayah {
	/**
	 * Kode wilayah.
	 */
	kode: string;

	/**
	 * Nama wilayah.
	 */
	wilayah: string;
}
