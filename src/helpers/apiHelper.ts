import axios from 'axios';
import csv from 'csv-parser';
import { ENDPOINTS } from '../config/constants.js';
import type { CuacaAPI, DataCuaca, KodeWilayah } from '../types/index.js';

export const parseCsv = async (url: string): Promise<KodeWilayah[]> => {
	const response = await axios.get(url, { responseType: 'stream' });
	try {
		return new Promise((resolve, reject) => {
			const results: KodeWilayah[] = [];
			response.data
				.pipe(csv({ headers: false }))
				.on('data', (row: Record<string, string>) => {
					const kode = row[0];
					const wilayah = row[1];

					if (kode && wilayah) results.push({ kode, wilayah });
				})
				.on('end', () => resolve(results))
				.on('error', (err: unknown) => reject(err));
		});
	} catch (err) {
		console.error(err);
		return [];
	}
};

export const searchKodeWilayah = (data: KodeWilayah[], value: string): string | null => {
	const index = data.findIndex(
		(item) => item.wilayah.toLowerCase() === value.toLowerCase()
	);

	if (index === -1) {
		return null;
	} else {
		return data[index].kode;
	}
};

export const parseWeatherData = async (wilayah: string): Promise<DataCuaca> => {
	const res = await axios.get<CuacaAPI>(ENDPOINTS.CUACA + wilayah);
	return res.data.data[0];
};
