import { CTASection } from "@/components/organisms/beranda/CTASection"

import { HeaderSection } from "../../components/organisms/profile-kami/HeaderSection"
import { PerizinanSection } from "../../components/organisms/profile-kami/PerizinanSection"
import { SejarahSection } from "../../components/organisms/profile-kami/SejarahSection"
import { StrukturSection } from "../../components/organisms/profile-kami/StrukturSection"
import { VMSection } from "../../components/organisms/profile-kami/VMSection"

export default function Profile() {
  return (
    <main className="space-y-28">
      <HeaderSection />
      <SejarahSection />
      <VMSection />
      <PerizinanSection />
      <StrukturSection />
      <CTASection />
    </main>
  )
}
