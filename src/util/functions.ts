/* eslint-disable no-prototype-builtins */
import dayjs from 'dayjs';
import type { Cuaca, CuacaDaerah, PrakiraanCuaca } from './interfaces.js';

/**
 * Format string time dari `YYYYMMDDHHmm` ke format yang ditentukan.
 *
 * @param {string} date - String time dengan format `YYYYMMDDHHmm`.
 * @param {string} [format = 'YYYY/MM/DD HH:mm'] - Format yang ditentukan. Default `YYYY/MM/DD HH:mm`.
 * @returns {string} String time dengan bentuk `format`.
 */
export function timeFormatter(date: string, format = 'YYYY/MM/DD HH:mm'): string {
  const stringTime = new Date(date.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)$/, '$4:$5:$6 $2/$3/$1'));
  return dayjs(stringTime).format(format);
}

/**
 * Menerjemahkan kode cuaca ke kondisi cuaca dalam bentuk string.
 *
 * @param {number} code - Kode cuaca.
 * @returns {string} String dari kode cuaca yang diberikan.
 */
export function weatherCodeToString(code: number): string {
  const codes = {
    0: 'Cerah',
    1: 'Cerah Berawan',
    2: 'Cerah Berawan',
    3: 'Berawan',
    4: 'Berawan Tebal',
    5: 'Udara Kabur',
    10: 'Asap',
    45: 'Kabut',
    60: 'Hujan Ringan',
    61: 'Hujan Sedang',
    63: 'Hujan Lebat',
    80: 'Hujan Lokal',
    95: 'Hujan Petir',
    97: 'Hujan Petir'
  };
  let key = null;
  Object.keys(codes).forEach((keys) => {
    if (code == Number(keys)) {
      key = keys;
    }
  });
  if (key != null) {
    return codes[key];
  } else {
    return 'Kode cuaca tidak dapat diterjemahkan.';
  }
}

/**
 * Mengambil data cuaca dari XML yang telah di-parse menjadi object.
 *
 * @param {any} parsedXML - XML yang telah di-parse menjadi object.
 * @returns {Cuaca} Array object prakiraan cuaca tiap daerah.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getWeatherData(parsedXML: any): Cuaca {
  const weatherArray: PrakiraanCuaca[] = [],
    areaArray: CuacaDaerah[] = [];
  const { issue, ...rest } = parsedXML.data.forecast;
  for (let i = 0; i < rest.area.length; i++) {
    if (!rest.area[i].hasOwnProperty('parameter')) break;
    for (let j = 0; j < 12; j++) {
      weatherArray.push({
        waktu: timeFormatter(rest.area[i].parameter[6].timerange[j]['@_datetime']),
        cuaca: weatherCodeToString(rest.area[i].parameter[6].timerange[j].value['#text']),
        temperatur: {
          celsius: rest.area[i].parameter[5].timerange[j].value[0]['#text'],
          fahrenheit: rest.area[i].parameter[5].timerange[j].value[1]['#text']
        },
        angin: {
          arah_angin: {
            derajat: rest.area[i].parameter[7].timerange[j].value[0]['#text'],
            card: rest.area[i].parameter[7].timerange[j].value[1]['#text'],
            sexa: rest.area[i].parameter[7].timerange[j].value[2]['#text']
          },
          kecepatan_angin: {
            knot: rest.area[i].parameter[8].timerange[j].value[0]['#text'],
            mph: rest.area[i].parameter[8].timerange[j].value[1]['#text'],
            kph: rest.area[i].parameter[8].timerange[j].value[2]['#text'],
            ms: rest.area[i].parameter[8].timerange[j].value[3]['#text']
          }
        }
      });
    }
    areaArray.push({
      kota: rest.area[i].name[0]['#text'],
      prakiraan_cuaca: weatherArray
    });
  }
  const obj: Cuaca = {
    timestamp: {
      tahun: issue.year,
      bulan: issue.month,
      tanggal: issue.day,
      jam: issue.hour,
      menit: issue.minute,
      detik: issue.second
    },
    daerah: areaArray
  };
  return obj;
}
