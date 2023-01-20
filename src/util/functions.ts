import moment from 'moment';

/**
 * Format string dari `YYYYMMDDHHmm` ke format yang ditentukan.
 *
 * @param {string} date - String `YYYYMMDDHHmm`.
 * @param {string} [format = 'YYYY/MM/DD HH:mm'] - Format yang ditentukan. Default `YYYY/MM/DD HH:mm`.
 * @returns {string} String yang formatnya telah dirubah.
 */
export function timeFormatter(date: string, format: string = 'YYYY/MM/DD HH:mm'): string {
  const raw = new Date(date.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)$/, '$4:$5:$6 $2/$3/$1'));
  return moment(raw).format(format);
}

/**
 * Menerjemahkan dari kode cuaca ke sebuah string.
 *
 * @param {number} code - Kode cuaca dari BMKG.
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
  }
  let pos;
  Object.keys(codes).forEach((i) => {
    if (code == Number(i)) {
      pos = i
    }
  });

  if (pos != null) {
    return codes[pos]
  } else {
    return 'Not found.'
  }
}