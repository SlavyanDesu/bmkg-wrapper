import axios from 'axios';
import { baseUrl, endpoints } from '../util/variables.js';
import type { GempaTerkini } from '../util/interfaces';

/**
 * Mengambil list data gempa terkini.
 *
 * @returns {Promise<GempaTerkini[]>} Array object list gempa terkini.
 */
export async function gempaTerkini(): Promise<GempaTerkini[]> {
  try {
    const res = await axios.get(baseUrl + endpoints.gempaTerkini);
    const array: GempaTerkini[] = [];
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
        Potensi
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
        potensi: Potensi
      });
    };
    return array;
  } catch (err) {
    return console.error(err)!;
  };
};