import { HeaderSection } from "./organisms/HeaderSection";
import { SejarahSection } from "./organisms/SejarahSection";
import { VMSection } from "./organisms/VMSection";

export default function Profile() {
    return (
        <main className="space-y-28">
            <HeaderSection />
            <SejarahSection />
            <VMSection />
        </main>
    )
}