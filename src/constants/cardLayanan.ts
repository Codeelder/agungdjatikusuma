export const CARDS = [
  {
    slug: "pengembangan-perangkat-lunak",
    title: "Pengembangan perangkat lunak",
    desc: "Kami menawarkan jasa pembuatan aplikasi website custom untuk berbagai kebutuhan bisnis, seperti aplikasi e-commerce, CRM, ERP, dan lain sebagainya",
    image: "/layanan/toolkit-1.png",
  },
  {
    slug: "reparasi",
    title: "Reparasi",
    desc: "Solusi reparasi dan perawatan mobil yang menyeluruh untuk memastikan kendaraan Anda selalu dalam kondisi terbaik.",
    image: "/layanan/toolkit-2.png",
  },
  {
    slug: "ekspedisi",
    title: "Ekspedisi",
    desc: "Jasa angkutan semua jenis barang dengan armada yang lengkap dan andal. Kami menggunakan berbagai jenis kendaraan seperti truk, pick-up, bak terbuka, dan bak tertutup",
    image: "/layanan/toolkit-3.png",
  },
  {
    slug: "perdagangan",
    title: "Perdagangan",
    desc: "Pentingnya akses terhadap kebutuhan primer dan sembako bagi masyarakat. Oleh karena itu, kami menyediakan layanan perdagangan eceran yang fokus pada penyediaan barang-barang kebutuhan sehari-hari",
    image: "/layanan/toolkit-4.png",
  },
]

export type CardType = (typeof CARDS)[number]
