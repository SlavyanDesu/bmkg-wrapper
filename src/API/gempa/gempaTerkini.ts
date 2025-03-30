import axios from 'axios';
import { ENDPOINTS } from '../../config/constants.js';
import type { GempaTerkini, GempaTerkiniAPI } from '../../types/index.js';

/**
 * Mengambil list data gempa terkini.
 * @returns Array berisi data gempa terkini.
 */
export const gempaTerkini = async (): Promise<GempaTerkini[]> => {
	try {
		const res = await axios.get<GempaTerkiniAPI>(ENDPOINTS.GEMPA.GEMPA_TERKINI);
		const gempa = res.data.Infogempa?.gempa ?? [];

		return gempa.map(
			({
				Tanggal,
				Jam,
				DateTime,
				Coordinates,
				Lintang,
				Bujur,
				Magnitude,
				Kedalaman,
				Wilayah,
				Potensi,
			}) => ({
				tanggal: Tanggal,
				jam: Jam,
				dateTime: DateTime,
				coordinates: Coordinates,
				lintang: Lintang,
				bujur: Bujur,
				magnitude: Number(Magnitude),
				kedalaman: Kedalaman,
				wilayah: Wilayah,
				potensi: Potensi,
			})
		);
	} catch (err) {
		console.error('Error fetching data gempa:', err);
		return [];
	}
}
