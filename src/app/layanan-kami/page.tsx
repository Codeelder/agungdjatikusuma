import { CTASection } from "@/components/organisms/CTASection";
import HeaderSection from "./organisms/HeaderSection";
import { TestimoniSection } from "@/components/organisms/TestimoniSection";
import { LayananSection } from "./organisms/LayananSection";

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