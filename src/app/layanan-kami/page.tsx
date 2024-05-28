import { CTASection } from "@/components/organisms/beranda/CTASection"
import { TestimoniSection } from "@/components/organisms/beranda/TestimoniSection"
import { HeaderSection } from "@/components/organisms/layanan-kami/HeaderSection"
import { LayananSection } from "@/components/organisms/layanan-kami/LayananSection"

export default function LayananKami() {
  return (
    <main className="space-y-28">
      <HeaderSection />
      <LayananSection />
{/*       <TestimoniSection /> */}
      <CTASection />
    </main>
  )
}
