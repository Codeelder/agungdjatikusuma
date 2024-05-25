import { CTASection } from "@/components/organisms/CTASection"

import { HeaderSection } from "./organisms/HeaderSection"
import { PerizinanSection } from "./organisms/PerizinanSection"
import { SejarahSection } from "./organisms/SejarahSection"
import { StrukturSection } from "./organisms/StrukturSection"
import { VMSection } from "./organisms/VMSection"

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
