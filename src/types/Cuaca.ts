export interface Lokasi {
	/**
	 * Kode wilayah level I.
	 */
	adm1: string;

	/**
	 * Kode wilayah level II.
	 */
	adm2: string;

	/**
	 * Kode wilayah level III.
	 */
	adm3: string;

	/**
	 * Kode wilayah level IV.
	 */
	adm4: string;

	/**
	 * Nama provinsi.
	 */
	provinsi: string;

	/**
	 * Nama kota kabupaten.
	 */
	kotkab: string;

	/**
	 * Nama kecamatan.
	 */
	kecamatan: string;

	/**
	 * Nama desa.
	 */
	desa: string;

	/**
	 * Garis bujur lokasi terkait.
	 */
	lon: number;

	/**
	 * Garis lintang lokasi terkait.
	 */
	lat: number;

	/**
	 * Zona waktu lokasi.
	 */
	timezone: string;

	/**
	 * Tipe kode wilayah yang digunakan.
	 */
	type: string;
}

export interface Cuaca {
	datetime: string;

	/**
	 * Suhu udara (°C).
	 */
	t: number;

	/**
	 * Tutupan awan (%).
	 */
	tcc: number;

	/**
	 * Persipitasi (mm).
	 */
	tp: number;

	/**
	 * Kode kondisi cuaca.
	 */
	weather: number;

	/**
	 * Kondisi cuaca.
	 */
	weather_desc: string;

	/**
	 * Kondisi cuaca dalam bahasa Inggris.
	 */
	weather_desc_en: string;

	/**
	 * Arah angin dalam derajat.
	 */
	wd_deg: number;

	/**
	 * Arah angin (misalnya: "N", "E", "SW").
	 */
	wd: string;

	/**
	 * Arah tujuan angin.
	 */
	wd_to: string;

	/**
	 * Kecepatan angin (m/s).
	 */
	ws: number;

	/**
	 * Kelembapan (%).
	 */
	hu: number;

	/**
	 * Visibilitas (meter).
	 */
	vs: number;

	/**
	 * Deskripsi visibilitas.
	 */
	vs_text: string;

	time_index: string;

	/**
	 * Waktu produksi data prakiraan cuaca dalam UTC.
	 */
	analysis_date: string;

	/**
	 * Pranala ikon cuaca.
	 */
	image: string;

	/**
	 * Waktu dalam UTC.
	 */
	utc_datetime: string;

	/**
	 * Waktu lokal.
	 */
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

export interface CuacaAPI {
	data: DataCuaca[];
}

export interface DataCuaca {
	lokasi: Lokasi;
	cuaca: Cuaca[][];
}
