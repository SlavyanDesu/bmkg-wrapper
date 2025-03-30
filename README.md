# bmkg-wrapper

[![CodeFactor](https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper/badge)](https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper)
[![Install size](https://packagephobia.com/badge?p=bmkg-wrapper)](https://www.npmjs.com/package/bmkg-wrapper)
[![GitHub License](https://img.shields.io/github/license/SlavyanDesu/bmkg-wrapper)](LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_shield&issueType=license)

**bmkg-wrapper** adalah sebuah API wrapper untuk mempermudah akses API data terbuka Badan Meteorologi, Klimatologi, dan Geofisika.

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

// Menampilkan data gempa yang baru-baru ini terjadi
async function autoGempa() {
  const res = await bmkg.autoGempa();
  console.log(res);
}

autoGempa();

// Menampilkan data prakiraan cuaca untuk kelurahan Lebak Bulus
async function prakiraanCuaca(kelurahan) {
  const res = await bmkg.prakiraanCuaca(kelurahan);
  console.log(res);
}

prakiraanCuaca('Lebak Bulus');
```

## Wilayah Tersedia

Untuk melihat wilayah yang tersedia silakan untuk mengunjungi pranala berikut.

- [Kode Wilayah Administrasi Tingkat IV](https://kodewilayah.id/)

## Hasil

### AutoGempa

```js
{
  tanggal: '30 Mar 2025',
  jam: '09:58:35 WIB',
  dateTime: '2025-03-30T02:58:35+00:00',
  coordinates: '5.63,95.47',
  lintang: '5.63 LU',
  bujur: '95.47 BT',
  magnitude: 5.4,
  kedalaman: '10 km',
  wilayah: 'Pusat gempa berada di darat 18 Km TimurLaut Banda Aceh',
  potensi: 'Gempa ini dirasakan untuk diteruskan pada masyarakat',
  dirasakan: 'IV Banda Aceh , IV Aceh Besar, III Takengon, II-III Pidie Jaya, II-III Sabang, II Lhokseumawe, II Aceh Tengah, II Bireun',
  shakemap: 'https://data.bmkg.go.id/DataMKG/TEWS//20250330095835.mmi.jpg'
}
```

### GempaTerkini

```js
[
  {
    tanggal: '30 Mar 2025',
    jam: '09:58:35 WIB',
    dateTime: '2025-03-30T02:58:35+00:00',
    coordinates: '5.63,95.47',
    lintang: '5.63 LU',
    bujur: '95.47 BT',
    magnitude: 5.4,
    kedalaman: '10 km',
    wilayah: 'Pusat gempa berada di darat 18 Km TimurLaut Banda Aceh',
    dirasakan: 'IV Banda Aceh , IV Aceh Besar, III Takengon, II-III Pidie Jaya, II-III Sabang, II Lhokseumawe, II Aceh Tengah, II Bireun'
  },
  ...
]
```

### GempaDirasakan

```js
[
  {
    tanggal: '30 Mar 2025',
    jam: '09:58:35 WIB',
    dateTime: '2025-03-30T02:58:35+00:00',
    coordinates: '5.63,95.47',
    lintang: '5.63 LU',
    bujur: '95.47 BT',
    magnitude: 5.4,
    kedalaman: '10 km',
    wilayah: '18 km TimurLaut BANDAACEH-ACEH',
    potensi: 'Tidak berpotensi tsunami'
  },
  ...
]
```

### DataCuaca

```js
{
  lokasi: {
    adm1: '31',
    adm2: '31.74',
    adm3: '31.74.06',
    adm4: '31.74.06.1002',
    provinsi: 'DKI Jakarta',
    kotkab: 'Kota Adm. Jakarta Selatan',
    kecamatan: 'Cilandak',
    desa: 'Lebak Bulus',
    lon: 106.7789416104,
    lat: -6.3011231926,
    timezone: '+0700',
    type: 'adm4'
  },
  cuaca: [
    [
      {
        datetime: '2025-03-30T00:00:00Z',
        t: 27,
        tcc: 100,
        tp: 0,
        weather: 3,
        weather_desc: 'Berawan',
        weather_desc_en: 'Mostly Cloudy',
        wd_deg: 266,
        wd: 'SW',
        wd_to: 'NE',
        ws: 7.3,
        hu: 83,
        vs: 32349,
        vs_text: '> 10 km',
        time_index: '-1-0',
        analysis_date: '2025-03-30T00:00:00',
        image: 'https://api-apps.bmkg.go.id/storage/icon/cuaca/berawan-am.svg',
        utc_datetime: '2025-03-30 00:00:00',
        local_datetime: '2025-03-30 07:00:00'
      },
      ...
    ],
    ...
  ]
}
```

## Method
### `bmkg.autoGempa()`
- Mengambil data gempa yang baru-baru ini terjadi.  
- Hasil berupa [`AutoGempa`](#autogempa).

### `bmkg.gempaDirasakan()`
- Mengambil list data gempa yang dirasakan.  
- Hasil berupa [`GempaDirasakan[]`](#gempadirasakan).

### `bmkg.gempaTerkini()`
- Mengambil list data gempa terkini.  
- Hasil berupa [`GempaTerkini[]`](#gempaterkini).

### `bmkg.prakiraanCuaca(kelurahan)`
- `kelurahan` (string, opsional) - Nama kelurahan/desa. Default `Lebak Bulus`.
- Mengambil data prakiraan cuaca dalam waktu 3 hari ke depan.  
- Hasil berupa [`DataCuaca`](#datacuaca).

## Sumber Daya
- [Data Terbuka BMKG](https://data.bmkg.go.id/)

## Lisensi
Projek ini dirilis dibawah lisensi MIT. Kunjungi file [LICENSE](LICENSE) untuk detail lebih lanjut.

<div align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_large&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=large&issueType=license"/></a>
</div>
