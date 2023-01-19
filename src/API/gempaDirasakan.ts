import axios from 'axios';
import { baseUrl, endpoints } from '../util/variables.js';
import type { GempaDirasakan } from '../util/interfaces.js';

/**
 * Mengambil list data gempa yang dirasakan.
 *
 * @returns {Promise<GempaDirasakan[]>} Array object list gempa yang dirasakan.
 */
export async function gempaDirasakan(): Promise<GempaDirasakan[]> {
  try {
    const res = await axios.get(baseUrl + endpoints.gempaDirasakan);
    const array: GempaDirasakan[] = [];
    for (let i = 0; i < res.data.Infogempa.gempa.length; i++) {
      const {
        Tanggal,
        Jam,
        DateTime,
        Coordinates,
        Lintang,
        Bujur,
        Magnitude,
        Kedalaman,
        Wilayah,
        Dirasakan
      } = res.data.Infogempa.gempa[i];
      array.push({
        tanggal: Tanggal,
        jam: Jam,
        dateTime: DateTime,
        coordinates: Coordinates,
        lintang: Lintang,
        bujur: Bujur,
        magnitude: Number(Magnitude),
        kedalaman: Kedalaman,
        wilayah: Wilayah,
        dirasakan: Dirasakan
      });
    }
    return array;
  } catch (err) {
    return console.error(err)!;
  }
}