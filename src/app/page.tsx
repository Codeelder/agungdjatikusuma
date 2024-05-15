import { CTASection } from "@/components/organisms/CTASection"
import { FooterSection } from "@/components/organisms/FooterSection"
import { HeroSection } from "@/components/organisms/HeroSection"
import { LayananKami } from "@/components/organisms/LayananKamiSection"
import { PartnerSection } from "@/components/organisms/PartnerSection"
import { ProfileKami } from "@/components/organisms/ProfileKamiSection"
import { TestimoniSection } from "@/components/organisms/TestimoniSection"

export default function Home() {
  return (
    <main className="space-y-28">
      <HeroSection />
      <LayananKami />
      <ProfileKami />
      <TestimoniSection />
      <CTASection />
      <PartnerSection />
      <FooterSection />
    </main>
  )
}
