export interface AutoGempa {
	/**
	 * Tanggal terjadinya gempa.
	 */
	tanggal: string;

	/**
	 * Waktu terjadinya gempa.
	 */
	jam: string;

	/**
	 * Waktu kejadian dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat lokasi pusat gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang lokasi pusat gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur lokasi pusat gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa pada skala Richter.
	 */
	magnitude: number;

	/**
	 * Kedalaman pusat gempa.
	 */
	kedalaman: string;

	/**
	 * Lokasi atau wilayah pusat gempa.
	 */
	wilayah: string;

	/**
	 * Potensi dampak gempa.
	 */
	potensi: string;

	/**
	 * Daerah-daerah yang merasakan gempa.
	 */
	dirasakan: string;

	/**
	 * URL pranala menuju peta shakemap gempa.
	 */
	shakemap: string;
}

export interface GempaTerkini {
	/**
	 * Tanggal terjadinya gempa.
	 */
	tanggal: string;

	/**
	 * Waktu terjadinya gempa.
	 */
	jam: string;

	/**
	 * Waktu kejadian dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat lokasi pusat gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang lokasi pusat gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur lokasi pusat gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa pada skala Richter.
	 */
	magnitude: number;

	/**
	 * Kedalaman pusat gempa.
	 */
	kedalaman: string;

	/**
	 * Lokasi atau wilayah pusat gempa.
	 */
	wilayah: string;

	/**
	 * Potensi dampak gempa.
	 */
	potensi: string;
}

export interface GempaDirasakan {
	/**
	 * Tanggal terjadinya gempa.
	 */
	tanggal: string;

	/**
	 * Waktu terjadinya gempa.
	 */
	jam: string;

	/**
	 * Waktu kejadian dalam format ISO 8601.
	 */
	dateTime: string;

	/**
	 * Koordinat lokasi pusat gempa.
	 */
	coordinates: string;

	/**
	 * Garis lintang lokasi pusat gempa.
	 */
	lintang: string;

	/**
	 * Garis bujur lokasi pusat gempa.
	 */
	bujur: string;

	/**
	 * Magnitudo gempa pada skala Richter.
	 */
	magnitude: number;

	/**
	 * Kedalaman pusat gempa.
	 */
	kedalaman: string;

	/**
	 * Lokasi atau wilayah pusat gempa.
	 */
	wilayah: string;

	/**
	 * Daerah-daerah yang merasakan gempa.
	 */
	dirasakan: string;
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
