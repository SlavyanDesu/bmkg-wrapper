<div align="center">
  <h1><b>bmkg-wrapper</b></h1>
  <p>Sebuah API wrapper untuk mempermudah akses API data terbuka Badan Meteorologi, Klimatologi, dan Geofisika.</p>
  <a href="https://opensource.org/licenses/mit-license.php"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103"></a>
  <a href="https://packagephobia.com/result?p=bmkg-wrapper"><img src="https://packagephobia.com/badge?p=bmkg-wrapper"></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=shield"/></a>
  <a href="https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper"><img src="https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper/badge" alt="CodeFactor" /></a>
</div>

## Instalasi
```bash
npm install bmkg-wrapper
```

## Penggunaan
### ESM
```js
import BMKG from 'bmkg-wrapper';
const bmkg = new BMKG();
```

### CommonJS
```js
const BMKG = require('bmkg-wrapper').default;
const bmkg = new BMKG();
```

## Contoh
```js
import BMKG from 'bmkg-wrapper';
const bmkg = new BMKG();

// Menampilkan data gempa yang terakhir terjadi dalam berupa objek
async function autoGempa() {
  const res = await bmkg.autoGempa();
  console.log(res);
}

autoGempa();

// Menampilkan data prakiraan cuaca untuk daerah Bali
async function prakiraanCuaca(daerah) {
  const res = await bmkg.prakiraanCuaca(daerah);
  console.log(res);
}

prakiraanCuaca('bali');
```

## Daerah Tersedia
Untuk melihat daerah yang tersedia di database data terbuka BMKG, silakan untuk mengunjungi pranala berikut.
- [Data Terbuka BMKG](https://data.bmkg.go.id/)

## Hasil
- **AutoGempa**
```js
{
  tanggal: string,
  jam: string,
  dateTime: string,
  coordinates: string,
  lintang: string,
  bujur: string,
  magnitude: number,
  kedalaman: string,
  wilayah: string,
  potensi: string,
  dirasakan: string,
  shakemap: string
}
```
- **GempaTerkini**
```js
[
  {
    tanggal: string,
    jam: string,
    dateTime: string,
    coordinates: string,
    lintang: string,
    bujur: string,
    magnitude: number,
    kedalaman: string,
    wilayah: string,
    potensi: string
  },
  ...
]
```
- **GempaDirasakan**
```js
[
  {
    tanggal: string,
    jam: string,
    dateTime: string,
    coordinates: string,
    lintang: string,
    bujur: string,
    magnitude: number,
    kedalaman: string,
    wilayah: string,
    dirasakan: string
  },
  ...
]
```
- **Cuaca**
```js
{
  timestamp: {
    tahun: number,
    bulan: number,
    tanggal: number,
    jam: number,
    menit: number,
    detik: number
  },
  daerah: [
    {
      kota: string,
      prakiraan_cuaca: [
        {
          waktu: string,
          cuaca: string,
          suhu: {
            celsius: {
              data: number
            },
            fahrenheit: {
              data: number
            }
          },
          angin: {
            kecepatan_angin: {
              knot: number,
              mph: number,
              kph: number,
              ms: number
            },
            arah_angin: {
              derajat: number,
              card: string,
              sexa: number
            }
          },
          kelembapan: {
            data: number
          }
        },
        ...
      ]
    },
    ...
  ]
}
```

## API
**bmkg.autoGempa()**  
Mengambil data gempa yang terakhir terjadi.  
Hasil berupa `AutoGempa`

**bmkg.gempaDirasakan()**  
Mengambil list data gempa yang dirasakan.  
Hasil berupa `GempaDirasakan[]`

**bmkg.gempaTerkini()**  
Mengambil list data gempa terkini.  
Hasil berupa `GempaTerkini[]`

**bmkg.prakiraanCuaca(daerah)**
- `daerah` String provinsi dan kota-kota yang ada di Indonesia. Default `indonesia`.

Mengambil data prakiraan cuaca dalam waktu 3 harian.  
Hasil berupa `Cuaca`

## Sumber Daya
- [Data Terbuka BMKG](https://data.bmkg.go.id/)

## Lisensi
**bmkg-wrapper** © [SlavyanDesu](https://github.com/SlavyanDesu), dirilis di bawah [Lisensi MIT](LICENSE). Ditulis dan dikelola oleh SlavyanDesu.
<div align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=large" alt="Fossa Status">
</div>
