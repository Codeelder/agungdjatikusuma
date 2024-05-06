import { HeroSection } from "@/components/organisms/HeroSection";
import { LayananKami } from "@/components/organisms/LayananKamiSection";
import { ProfileKami } from "@/components/organisms/ProfileKamiSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="mt-20">
        <LayananKami />
      </section>
      <section className="mt-20">
        <ProfileKami />
      </section>
    </main>
  )
}
