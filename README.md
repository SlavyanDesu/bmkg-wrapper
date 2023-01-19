<div align="center">
<h1><b>BMKG-wrapper</b></h1>
<p>Sebuah API wrapper untuk memudahkan mengakses ke API BMKG.</p>
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