import { CTASection } from "@/components/organisms/beranda/CTASection"
import { HeroSection } from "@/components/organisms/beranda/HeroSection"
import { LayananKami } from "@/components/organisms/beranda/LayananKamiSection"
import { PartnerSection } from "@/components/organisms/beranda/PartnerSection"
import { ProfileKami } from "@/components/organisms/beranda/ProfileKamiSection"
import { TestimoniSection } from "@/components/organisms/beranda/TestimoniSection"

export default function Home() {
  return (
    <main className="space-y-28">
      <HeroSection />
      <LayananKami />
      <ProfileKami />
      <TestimoniSection />
      <CTASection />
      <PartnerSection />
    </main>
  )
}
