export const CARDS = [
  {
    slug: "pengembangan-perangkat-lunak",
    title: "Pengembangan perangkat lunak",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro odio dolorum saepe debitis nisi",
    image: "/layanan/toolkit-1.png",
  },
  {
    slug: "reparasi",
    title: "Reparasi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro odio dolorum saepe debitis nisi",
    image: "/layanan/toolkit-2.png",
  },
  {
    slug: "ekspedisi",
    title: "Ekspedisi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro odio dolorum saepe debitis nisi",
    image: "/layanan/toolkit-3.png",
  },
  {
    slug: "perdagangan",
    title: "Perdagangan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro odio dolorum saepe debitis nisi",
    image: "/layanan/toolkit-4.png",
  },
]

export type CardType = (typeof CARDS)[number]

export const MENUS = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Profil Kami",
    href: "/profile",
  },
  {
    title: "Layanan Kami",
    href: "/layanan-kami",
  },
]

export const PARTNER = [
  {
    image: "/rekan-kami/mandiri.png",
  },
  {
    image: "/rekan-kami/amartha.png",
  },
  {
    image: "/rekan-kami/paxel.png",
  },
  {
    image: "/rekan-kami/wahyo.png",
  },
  {
    image: "/rekan-kami/cisco.png",
  },
  {
    image: "/rekan-kami/hubble.png",
  },
  {
    image: "/rekan-kami/logoas.png",
  },
  {
    image: "/rekan-kami/ciputra.png",
  },
]

export const FOOTERSEEMORE = [
  {
    id: 1,
    title: "Layanan Kami",
  },
  {
    id: 2,
    title: "Tentang Kami",
  },
  {
    id: 3,
    title: "Testimoni",
  },
  {
    id: 4,
    title: "Rekan Kami",
  },
]

export const FOOTERHALAMAN = [
  {
    id: 1,
    title: "Beranda",
  },
  {
    id: 2,
    title: "Profil Kami",
  },
  {
    id: 3,
    title: "Layanan Kami",
  },
]

export const FOOTERJASA = [
  {
    id: 1,
    title: "Ekspedisi",
  },
  {
    id: 2,
    title: "Pemograman Perangkat Lunak",
  },
  {
    id: 3,
    title: "Perdagangan",
  },
  {
    id: 4,
    title: "Reparasi",
  },
]

export const DATAS = [
  {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.  mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    title: "Ekspedisi",
    imgSrc: "/layanan-kami/ekspedisi.png",
    svgSrc: "/layanan/toolkit-3.png",
    position: "-right-4 md:-right-10",
    flexRow: "flex-row",
  },
  {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.  mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    title: "Pengembangan Perangkat Lunak",
    imgSrc: "/layanan-kami/perangkat-lunak.png",
    svgSrc: "/layanan/toolkit-1.png",
    position: "-left-4 md:-left-10",
    flexRow: "flex-row-reverse",
  },
  {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.  mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    title: "Reparasi",
    imgSrc: "/layanan-kami/reparasi.png",
    svgSrc: "/layanan/toolkit-2.png",
    position: "-right-4 md:-right-10",
    flexRow: "flex-row",
  },
  {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.  mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    title: "Perdagangan",
    imgSrc: "/layanan-kami/perdagangan.png",
    svgSrc: "/layanan/toolkit-4.png",
    position: "-left-4 md:-left-10",
    flexRow: "flex-row-reverse",
  },
]

export type DataType = (typeof DATAS)[number]
