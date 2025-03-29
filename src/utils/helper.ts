import axios from 'axios';
import csv from 'csv-parser';
import type { CuacaAPI, KodeWilayah } from './interfaces';
import { baseUrl } from './variables';

export const fetchCsv = async (url: string): Promise<KodeWilayah[]> => {
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
	const res = await axios.get<CuacaAPI>(baseUrl.cuaca + wilayah);
	return res.data.data[0];
};

async function test(wilayah: string) {
	fetchCsv(baseUrl.csv).then(async (csv) => {
		const res = await parseWeatherData(searchByValue(csv, wilayah))
		console.log(res.cuaca);
	});
}


test('palumbonsari');
