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
   * Garis lintang wilayah tempat gempa terjadi.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat gempa terjadi.
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
   * Garis lintang wilayah tempat gempa terjadi.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat gempa terjadi.
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
   * Garis lintang wilayah tempat gempa terjadi.
   */
  lintang: string;

  /**
   * Garis bujur wilayah tempat gempa terjadi.
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
    tahun: string;

    /**
     * Bulan diunggah.
     */
    bulan: string;

    /**
     * Tanggal diunggah.
     */
    tanggal: string;

    /**
     * Jam diunggah.
     */
    jam: string;

    /**
     * Menit diunggah.
     */
    menit: string;

    /**
     * Detik diunggah.
     */
    detik: string;
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
   * Prakiraan temperatur.
   */
  temperatur: {
    /**
     * Temperatur dalam satuan celsius.
     */
    celsius: number;

    /**
     * Temperatur dalam satuan fahrenheit.
     */
    fahrenheit: number;
  };
}
