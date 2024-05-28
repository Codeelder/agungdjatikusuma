import { profileKamiCards } from "@/constants/cardsProfileKami"

import { HeaderLayout } from "@/components/molecules/headerlLayout"

export const HeaderSection = () => {
  return <HeaderLayout cards={profileKamiCards} title="Profil Kami" />
}
