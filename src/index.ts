import { autoGempa, gempaDirasakan, gempaTerkini } from './API/index.js'
import type { AutoGempa, GempaDirasakan, GempaTerkini } from './util/interfaces.js'

export default class BMKG {
  /**
   * Mengambil data gempa yang terakhir terjadi.
   *
   * @returns {Promise<AutoGempa>} Object data gempa yang terakhir terjadi.
   */
  autoGempa(): Promise<AutoGempa> {
    return autoGempa()
  }

  /**
   * Mengambil list data gempa yang dirasakan.
   *
   * @returns {Promise<GempaDirasakan[]>} Array object list gempa yang dirasakan.
   */
  gempaDirasakan(): Promise<GempaDirasakan[]> {
    return gempaDirasakan()
  }

  /**
   * Mengambil list data gempa terkini.
   *
   * @returns {Promise<GempaTerkini[]>} Array object list gempa terkini.
   */
  gempaTerkini(): Promise<GempaTerkini[]> {
    return gempaTerkini()
  }
}