import { autoGempa, gempaDirasakan, gempaTerkini, prakiraanCuaca } from './api/index.js';
import type { AutoGempa, DataCuaca, GempaDirasakan, GempaTerkini } from './types/index.js';

export default class BMKG {
	/**
	 * Mengambil data gempa yang baru-baru ini terjadi.
	 * @returns Object berisi data gempa yang baru-baru ini terjadi.
	 */
	async autoGempa(): Promise<AutoGempa | null> {
		return await autoGempa();
	}

	/**
	 * Mengambil list data gempa yang dirasakan.
	 * @returns Array berisi data gempa yang dirasakan.
	 */
	async gempaDirasakan(): Promise<GempaDirasakan[]> {
		return await gempaDirasakan();
	}

	/**
	 * Mengambil list data gempa terkini.
	 * @returns Array berisi data gempa terkini.
	 */
	async gempaTerkini(): Promise<GempaTerkini[]> {
		return await gempaTerkini();
	}

	/**
	 * Mengambil data prakiraan cuaca dalam waktu 3 hari ke depan.
	 * @param kelurahan - Nama kelurahan/desa. Default `Lebak Bulus`.
	 * @returns Object berisi data prakiraan cuaca.
	 */
	async prakiraanCuaca(kelurahan: string = 'Lebak Bulus'): Promise<DataCuaca | null> {
		return await prakiraanCuaca(kelurahan);
	}
}
