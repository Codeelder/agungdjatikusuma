import { HeroSection } from "@/components/organisms/HeroSection";
import { LayananKami } from "@/components/organisms/LayananKamiSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="mt-20">
        <LayananKami />
      </section>
    </main>
  )
}
