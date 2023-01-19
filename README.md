<div align="center">
<h1><b>BMKG-wrapper</b></h1>
<p>Sebuah API wrapper untuk memudahkan akses ke API BMKG.</p>
<a href="https://opensource.org/licenses/mit-license.php"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103"></a>
<a href="https://www.npmjs.com/package/bmkg-wrapper"><img src="https://www.npmjs.com/package/bmkg-wrapper"></a>
<a href="https://packagephobia.com/result?p=bmkg-wrapper"><img src="https://packagephobia.com/badge?p=bmkg-wrapper"></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=shield"/></a>
<br>
<a href="https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper"><img src="https://www.codefactor.io/repository/github/slavyandesu/bmkg-wrapper/badge" alt="CodeFactor" /></a>
</div>

## Instalasi
```sh
$ npm install bmkg-wrapper
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
  const res = await autoGempa();
  console.log(res);
}

autoGempa();
```
## Results
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

## Lisensi
[MIT](LICENSE)  
[Data Terbuka BMKG](https://data.bmkg.go.id/)


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Fbmkg-wrapper?ref=badge_large)