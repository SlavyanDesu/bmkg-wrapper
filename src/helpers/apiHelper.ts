import axios from 'axios';
import csv from 'csv-parser';
import { ENDPOINTS } from '../config/constants.js';
import type { CuacaAPI, KodeWilayah } from '../types/index.js';

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

export const searchByValue = (data: KodeWilayah[], value: string) => {
	const index = data.findIndex(
		(item) => item.wilayah.toLowerCase() === value.toLowerCase()
	);
	return data[index].kode;
};

export const parseWeatherData = async (wilayah: string) => {
	const res = await axios.get<CuacaAPI>(ENDPOINTS.CUACA + wilayah);
	return res.data.data[0];
};
