import { HeroSection } from "@/components/organisms/HeroSection"
import { LayananKami } from "@/components/organisms/LayananKamiSection"
import { ProfileKami } from "@/components/organisms/ProfileKamiSection"

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <LayananKami />
      <ProfileKami />
    </main>
  )
}
