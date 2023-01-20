export const baseUrl = {
  gempa: 'https://data.bmkg.go.id/DataMKG/TEWS/',
  cuaca: 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/'
}

export const endpoints = {
  gempa: {
    autoGempa: 'autogempa.json',
    gempaTerkini: 'gempaterkini.json',
    gempaDirasakan: 'gempadirasakan.json'
  },
  cuaca: {
    aceh: 'DigitalForecast-Aceh.xml',
    bali: 'DigitalForecast-Bali.xml',
    belitung: 'DigitalForecast-BangkaBelitung.xml',
    banten: 'DigitalForecast-Banten.xml',
    bengkulu: 'DigitalForecast-Bengkulu.xml',
    yogyakarta: 'DigitalForecast-DIYogyakarta.xml',
    jakarta: 'DigitalForecast-DKIJakarta.xml',
    gorontalo: 'DigitalForecast-Gorontalo.xml',
    jambi: 'DigitalForecast-Jambi.xml',
    jawaBarat: 'DigitalForecast-JawaBarat.xml',
    indonesia: 'DigitalForecast-Indonesia.xml'
  }
}