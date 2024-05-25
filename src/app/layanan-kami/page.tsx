import { CTASection } from "@/components/organisms/CTASection"
import { TestimoniSection } from "@/components/organisms/TestimoniSection"

import HeaderSection from "./organisms/HeaderSection"
import { LayananSection } from "./organisms/LayananSection"

export default function LayananKami() {
  return (
    <main className="space-y-28">
      <HeaderSection />
      <LayananSection />
      <TestimoniSection />
      <CTASection />
    </main>
  )
}
