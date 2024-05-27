import { HeaderLayout } from "@/components/molecules/headerlLayout"

import { layananKamiCards } from "@/constants/cardsLayananKami"

export const HeaderSection = () => {
  return (
    <div>
      <HeaderLayout cards={layananKamiCards} title="Layanan Kami" />
    </div>
  )
}
