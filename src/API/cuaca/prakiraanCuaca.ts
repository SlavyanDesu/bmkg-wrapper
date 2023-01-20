import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { timeFormatter, weatherCodeToString } from '../../util/functions.js';
import { baseUrl, endpoints } from '../../util/variables.js';
const parser = new XMLParser({ ignoreAttributes: false });

export async function prakiraanCuaca(daerah = 'indonesia') {
  try {
    Object.keys(endpoints.cuaca).forEach((key) => {
      if (key == daerah) {
        daerah = key;
      }
    });
    if (typeof daerah == 'string') {
      const res = await axios.get(baseUrl.cuaca + endpoints.cuaca[daerah as keyof typeof endpoints.cuaca]);
      const parsed = parser.parse(res.data);
      const { issue, ...rest } = parsed.data.forecast;
      const arrayDaerah: object[] = [];
      const arrayCuaca: object[] = [];
      for (var i = 0; i < rest.area.length; i++) {
        for (var j = 0; j < rest.area[i].parameter[6].timerange.length; j++) {
          arrayCuaca.push({
            waktu: timeFormatter(rest.area[i].parameter[6].timerange[j]['@_datetime']),
            cuaca: weatherCodeToString(rest.area[i].parameter[6].timerange[j].value['#text'])
          });
        }
        arrayDaerah.push({
          kota: rest.area[i].name[0]['#text'],
          kabupaten: rest.area[i].name[1]['#text'],
          prakiraan_cuaca: arrayCuaca
        });
      }
      const obj = {
        timestamp: {
          tahun: issue.year,
          bulan: issue.month,
          tanggal: issue.day,
          jam: issue.hour,
          menit: issue.minute,
          second: issue.second
        },
        daerah: arrayDaerah
      }
      return obj;
    }
  } catch (err) {
    throw err;
  }
}