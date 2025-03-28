import axios from 'axios';
import type { GempaDirasakan, GempaDirasakanAPI } from '../../utils/interfaces.js';
import { baseUrl, endpoints } from '../../utils/variables.js';

/**
 * Mengambil list data gempa yang dirasakan.
 *
 * @returns Array berisi data gempa yang dirasakan.
 */
export async function gempaDirasakan(): Promise<GempaDirasakan[]> {
	try {
		const res = await axios.get<GempaDirasakanAPI>(baseUrl.gempa + endpoints.gempa.gempaDirasakan);
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
				Dirasakan,
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
				dirasakan: Dirasakan,
			})
		);
	} catch (err) {
		console.error('Error fetching data gempa:', err);
		return [];
	}
}
