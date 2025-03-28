import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { getWeatherData } from '../../utils/helper.js';
import type { Cuaca } from '../../utils/interfaces.js';
import { baseUrl, endpoints } from '../../utils/variables.js';
const parser = new XMLParser({ ignoreAttributes: false });

/**
 * Mengambil data prakiraan cuaca dalam waktu 3 harian.
 *
 * @param {string} daerah - Provinsi dan kota-kota yang ada di Indonesia. Default `indonesia`.
 * @returns {Promise<Cuaca>} Object prakiraan cuaca untuk `daerah`.
 */
export async function prakiraanCuaca(daerah = 'indonesia'): Promise<Cuaca> {
	let found = false;
	Object.keys(endpoints.cuaca).forEach((key) => {
		if (key == daerah.toLowerCase()) {
			daerah = key;
			found = true;
		}
	});
	if (found) {
		const res = await axios.get(
			baseUrl.cuaca + endpoints.cuaca[daerah as keyof typeof endpoints.cuaca]
		);
		return getWeatherData(parser.parse(res.data));
	} else {
		throw new Error('Data cuaca tidak ditemukan!');
	}
}
