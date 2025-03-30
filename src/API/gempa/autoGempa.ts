import axios from 'axios';
import { BASE_URL, ENDPOINTS } from '../../config/constants.js';
import type { AutoGempa, AutoGempaAPI } from '../../types/index.js';

/**
 * Mengambil data gempa yang baru-baru ini terjadi.
 * @returns Object berisi data gempa yang baru-baru ini terjadi.
 */
export const autoGempa = async (): Promise<AutoGempa | null> => {
	try {
		const res = await axios.get<AutoGempaAPI>(ENDPOINTS.GEMPA.AUTO_GEMPA);
		const gempa = res.data.Infogempa?.gempa;

		if (!gempa) return null;

		return {
			tanggal: gempa.Tanggal,
			jam: gempa.Jam,
			dateTime: gempa.DateTime,
			coordinates: gempa.Coordinates,
			lintang: gempa.Lintang,
			bujur: gempa.Bujur,
			magnitude: Number(gempa.Magnitude),
			kedalaman: gempa.Kedalaman,
			wilayah: gempa.Wilayah,
			potensi: gempa.Potensi,
			dirasakan: gempa.Dirasakan,
			shakemap: BASE_URL.GEMPA + '/' + gempa.Shakemap,
		};
	} catch (err) {
		console.error('Error fetching data gempa:', err);
		return null;
	}
}
