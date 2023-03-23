export interface AutoGempa {
  /**
   * Tanggal gempa terjadi.
   */
  tanggal: string;

  /**
   * Waktu gempa terjadi.
   */
  jam: string;

  /**
   * Waktu gempa terjadi dalam format constructor Date.
   */
  dateTime: string;

  /**
   * Koordinat tempat terjadinya gempa.
   */
  coordinates: string;

  /**
   * Garis lintang wilayah tempat terjadinya gempa.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat terjadinya gempa.
   */
  bujur: string;

  /**
   * Magnitudo gempa.
   */
  magnitude: number;

  /**
   * Kedalaman gempa.
   */
  kedalaman: string;

  /**
   * Wilayah terjadinya gempa.
   */
  wilayah: string;

  /**
   * Potensi yang ditimbulkan dari gempa.
   */
  potensi: string;

  /**
   * Daerah-daerah yang merasakan gempa.
   */
  dirasakan: string;

  /**
   * Pranala gambar shakemap gempa.
   */
  shakemap: string;
}

export interface GempaTerkini {
  /**
   * Tanggal gempa terjadi.
   */
  tanggal: string;

  /**
   * Waktu gempa terjadi.
   */
  jam: string;

  /**
   * Waktu gempa terjadi dalam format constructor Date.
   */
  dateTime: string;

  /**
   * Koordinat tempat terjadinya gempa.
   */
  coordinates: string;

  /**
   * Garis lintang wilayah tempat terjadinya gempa.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat terjadinya gempa.
   */
  bujur: string;

  /**
   * Magnitudo gempa.
   */
  magnitude: number;

  /**
   * Kedalaman gempa.
   */
  kedalaman: string;

  /**
   * Wilayah terjadinya gempa.
   */
  wilayah: string;

  /**
   * Potensi yang ditimbulkan dari gempa.
   */
  potensi: string;
}

export interface GempaDirasakan {
  /**
   * Tanggal gempa terjadi.
   */
  tanggal: string;

  /**
   * Waktu gempa terjadi.
   */
  jam: string;

  /**
   * Waktu gempa terjadi dalam format constructor Date.
   */
  dateTime: string;

  /**
   * Koordinat tempat terjadinya gempa.
   */
  coordinates: string;

  /**
   * Garis lintang wilayah tempat terjadinya gempa.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat terjadinya gempa.
   */
  bujur: string;

  /**
   * Magnitudo gempa.
   */
  magnitude: number;

  /**
   * Kedalaman gempa.
   */
  kedalaman: string;

  /**
   * Wilayah terjadinya gempa.
   */
  wilayah: string;

  /**
   * Daerah-daerah yang merasakan gempa.
   */
  dirasakan: string;
}

export interface Cuaca {
  /**
   * Timestamp data diunggah.
   */
  timestamp: {
    /**
     * Tahun diunggah.
     */
    tahun: number;

    /**
     * Bulan diunggah.
     */
    bulan: number;

    /**
     * Tanggal diunggah.
     */
    tanggal: number;

    /**
     * Jam diunggah.
     */
    jam: number;

    /**
     * Menit diunggah.
     */
    menit: number;

    /**
     * Detik diunggah.
     */
    detik: number;
  };
  /**
   * Array object data cuaca per-daerah.
   */
  daerah: CuacaDaerah[];
}

export interface CuacaDaerah {
  /**
   * Nama kota.
   */
  kota: string;

  /**
   * Array object prakiraan cuaca.
   */
  prakiraan_cuaca: PrakiraanCuaca[];
}

export interface PrakiraanCuaca {
  /**
   * Waktu setempat.
   */
  waktu: string;

  /**
   * Prakiraan cuaca.
   */
  cuaca: string;

  /**
   * Prakiraan suhu udara.
   */
  suhu: {
    /**
     * Suhu udara dalam satuan celsius.
     */
    celsius: {
      /**
       * Suhu udara.
       */
      data: number;
    };

    /**
     * Suhu udara dalam satuan fahrenheit.
     */
    fahrenheit: {
      /**
       * Suhu udara.
       */
      data: number;
    };
  };

  /**
   * Prakiraan kecepatan dan arah angin.
   */
  angin: {
    kecepatan_angin: {
      /**
       * Kecepatan angin dalam satuan knot.
       */
      knot: number;

      /**
       * Kecepatan angin dalam satuan mph.
       */
      mph: number;

      /**
       * Kecepatan angin dalam satuan kph.
       */
      kph: number;

      /**
       * Kecepatan angin dalam satuan ms.
       */
      ms: number;
    };

    arah_angin: {
      /**
       * Arah angin dalam satuan derajat.
       */
      derajat: number;

      /**
       * Arah angin dalam CARD.
       */
      card: string;

      /**
       * Arah angin dalam SEXA.
       */
      sexa: number;
    };
  };

  /**
   * Prakiraan kelembapan udara dalam satuan %
   */
  kelembapan: {
    /**
     * Kelembapan udara.
     */
    data: number;
  };
}
