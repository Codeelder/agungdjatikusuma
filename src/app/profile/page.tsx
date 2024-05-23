import { HeaderSection } from "./organisms/HeaderSection";
import { SejarahSection } from "./organisms/SejarahSection";

export default function Profile() {
    return (
        <main className="space-y-28">
            <HeaderSection />
            <SejarahSection />
        </main>
    )
}