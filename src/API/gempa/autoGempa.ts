import axios from 'axios';
import { baseUrl, endpoints } from '../../util/variables.js';
import type { AutoGempa } from '../../util/interfaces.js';

/**
 * Mengambil data gempa yang terakhir terjadi.
 *
 * @returns {Promise<AutoGempa>} Object data gempa yang terakhir terjadi.
 */
export async function autoGempa(): Promise<AutoGempa> {
  try {
    const res = await axios.get(baseUrl.gempa + endpoints.gempa.autoGempa);
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
      Potensi,
      Dirasakan,
      Shakemap
    } = res.data.Infogempa.gempa;
    const obj: AutoGempa = {
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
      dirasakan: Dirasakan,
      shakemap: baseUrl.gempa + '/' + Shakemap
    };
    return obj;
  } catch (err) {
    throw err;
  }
}
