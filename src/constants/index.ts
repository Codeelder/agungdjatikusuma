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
