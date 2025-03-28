import axios from 'axios';
import type { GempaTerkini, GempaTerkiniAPI } from '../../utils/interfaces.js';
import { baseUrl, endpoints } from '../../utils/variables.js';

/**
 * Mengambil list data gempa terkini.
 *
 * @returns Array berisi data gempa terkini.
 */
export async function gempaTerkini(): Promise<GempaTerkini[]> {
	try {
		const res = await axios.get<GempaTerkiniAPI>(baseUrl.gempa + endpoints.gempa.gempaTerkini);
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
