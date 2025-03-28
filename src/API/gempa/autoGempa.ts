import axios from 'axios';
import type { AutoGempa, AutoGempaAPI } from '../../utils/interfaces.js';
import { baseUrl, endpoints } from '../../utils/variables.js';

/**
 * Mengambil data gempa yang baru-baru ini terjadi.
 *
 * @returns Object berisi data gempa yang baru-baru ini terjadi.
 */
export async function autoGempa(): Promise<AutoGempa | null> {
	try {
		const res = await axios.get<AutoGempaAPI>(baseUrl.gempa + endpoints.gempa.autoGempa);
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
			shakemap: `${baseUrl.gempa}/${gempa.Shakemap}`,
		};
	} catch (err) {
		console.error('Error fetching data gempa:', err);
		return null;
	}
}
