import { autoGempa, gempaDirasakan, gempaTerkini, prakiraanCuaca } from './API/index.js';
import type { AutoGempa, GempaDirasakan, GempaTerkini, Cuaca } from './util/interfaces.js';

export default class BMKG {
  /**
   * Mengambil data gempa yang terakhir terjadi.
   *
   * @returns {Promise<AutoGempa>} Object data gempa yang terakhir terjadi.
   */
  async autoGempa(): Promise<AutoGempa> {
    return await autoGempa();
  }

  /**
   * Mengambil list data gempa yang dirasakan.
   *
   * @returns {Promise<GempaDirasakan[]>} Array object list gempa yang dirasakan.
   */
  async gempaDirasakan(): Promise<GempaDirasakan[]> {
    return await gempaDirasakan();
  }

  /**
   * Mengambil list data gempa terkini.
   *
   * @returns {Promise<GempaTerkini[]>} Array object list gempa terkini.
   */
  async gempaTerkini(): Promise<GempaTerkini[]> {
    return await gempaTerkini();
  }

  /**
   * Mengambil data prakiraan cuaca dalam waktu 3 harian.
   *
   * @param {string} [daerah = 'indonesia'] - Provinsi dan kota-kota yang ada di Indonesia. Default `indonesia`.
   * @returns {Promise<Cuaca>} Object prakiraan cuaca untuk `daerah`.
   */
  async prakiraanCuaca(daerah?: string): Promise<Cuaca> {
    return await prakiraanCuaca(daerah);
  }
}
