import { BASE_URL } from '../../config/constants.js';
import { parseCsv, parseWeatherData, searchKodeWilayah } from '../../helpers/apiHelper.js';
import type { DataCuaca } from '../../types/index.js';

/**
 * Mengambil data prakiraan cuaca dalam waktu 3 hari ke depan.
 * @param kelurahan - Nama kelurahan/desa.
 * @returns Object berisi data prakiraan cuaca.
 */
export const prakiraanCuaca = async (kelurahan: string): Promise<DataCuaca | null> => {
	try {
		const parsedCsv = await parseCsv(BASE_URL.CSV);
		const kodeWilayah = searchKodeWilayah(parsedCsv, kelurahan);

		if (!kodeWilayah) {
			throw new Error(`Kode wilayah untuk kelurahan "${kelurahan}" tidak ditemukan!`);
		}

		const res = await parseWeatherData(kodeWilayah);

		return res;
	} catch (err) {
		console.error('Error fetching data cuaca:', err);
		return null;
	}
};
