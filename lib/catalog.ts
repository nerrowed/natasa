export type ServiceArea = {
  name: string;
  description: string;
};

export type StockGroup = {
  name: string;
  description: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: "Kebutuhan Rumah",
    description:
      "Perlengkapan instalasi harian untuk renovasi, perbaikan, dan pemasangan listrik rumah."
  },
  {
    name: "Kebutuhan Toko",
    description:
      "Stok alat listrik untuk toko, minimarket, ruko, gudang kecil, dan operasional usaha."
  },
  {
    name: "Kebutuhan Proyek",
    description:
      "Pengadaan kabel, panel, proteksi, dan komponen listrik untuk kontraktor dan teknisi."
  },
  {
    name: "Grosir dan Reseller",
    description:
      "Pembelian partai, repeat order, dan suplai barang listrik untuk toko bangunan."
  }
];

export const stockGroups: StockGroup[] = [
  {
    name: "Kabel dan Instalasi",
    description:
      "Kabel NYA, NYM, NYY, kabel fleksibel, pipa conduit, ducting, terminal, dan aksesoris instalasi."
  },
  {
    name: "Proteksi dan Panel",
    description:
      "MCB, ELCB, MCCB, box panel, kontaktor, relay, timer, busbar, dan perlengkapan panel."
  },
  {
    name: "Lampu dan Fitting",
    description:
      "Lampu LED, downlight, floodlight, lampu jalan, fitting, rumah lampu, dan komponen penerangan."
  },
  {
    name: "Saklar dan Stop Kontak",
    description:
      "Saklar, stop kontak, steker, colokan industri, extension, dan kebutuhan listrik harian."
  }
];
