import axios from 'axios';
import { ENDPOINTS } from '../../config/constants.js';
import type { GempaDirasakan, GempaDirasakanAPI } from '../../types/index.js';

/**
 * Mengambil list data gempa yang dirasakan.
 * @returns Array berisi data gempa yang dirasakan.
 */
export const gempaDirasakan = async (): Promise<GempaDirasakan[]> => {
	try {
		const res = await axios.get<GempaDirasakanAPI>(ENDPOINTS.GEMPA.GEMPA_DIRASAKAN);
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
