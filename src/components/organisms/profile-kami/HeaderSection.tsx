import { HeaderLayout } from "@/components/molecules/headerlLayout"

export const HeaderSection = () => {

  const profileKamiCards = [
    {
      id: 1,
      title: "Sejarah",
      img: "/section-profile-kami/sejarah.png",
      bottom: "md:bottom-20 bottom-10",
      left: "-left-5 md:-left-11 lg:-left-10 xl:-left-12",
    },
    {
      id: 2,
      title: "Visi & misi",
      img: "/section-profile-kami/visi & misi.png",
      bottom: "md:bottom-28 bottom-14",
      left: "-left-8 md:-left-16 lg:-left-16 xl:-left-20",
    },
    {
      id: 3,
      title: "Perizinan",
      img: "/section-profile-kami/perizinan.png",
      bottom: "md:bottom-24 bottom-14",
      left: "-left-7 md:-left-14 lg:-left-14 xl:-left-16",
    },
    {
      id: 4,
      title: "Struktur",
      img: "/section-profile-kami/struktur.png",
      bottom: "md:bottom-20 bottom-14",
      left: "-left-6 md:-left-12 lg:-left-12 xl:-left-14",
    },
  ]

  return (
    <div>
      <HeaderLayout cards={profileKamiCards} title="Profil Kami" />\
    </div>
  )
}
