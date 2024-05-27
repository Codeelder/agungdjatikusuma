import { HeaderLayout } from "@/components/molecules/headerlLayout"
import { profileKamiCards } from "@/constants/cardsProfileKami"
export const HeaderSection = () => {
  return (
    <div>
      <HeaderLayout cards={profileKamiCards} title="Profil Kami" />\
    </div>
  )
}
