import { CTASection } from "@/components/organisms/beranda/CTASection"
import { TestimoniSection } from "@/components/organisms/beranda/TestimoniSection"
import { HeaderSection } from "@/components/organisms/layanan-kami/HeaderSection"
import { LayananSection } from "@/components/organisms/layanan-kami/LayananSection"

export default function LayananKami() {
  return (
    <main className="space-y-10 md:space-y-14 lg:space-y-28">
      <div className="space-y-10 lg:space-y-20">
        <HeaderSection />
        <LayananSection />
      </div>
      {/*       <TestimoniSection /> */}
      <CTASection />
    </main>
  )
}
