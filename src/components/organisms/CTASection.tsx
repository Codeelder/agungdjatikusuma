import { Elipse, ToolkitCTA } from "@/constants/component"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export const CTASection = () => {
    return (
        <div className="container">
            <div className="relative w-full h-528 bg-blueprimary rounded-3xl">
                <Elipse />
                <div className="flex flex-col h-full justify-center items-center text-center text-white z-10 space-y-8 md:space-y-28">
                    <div className="w-2/3">
                        <h1 className="text-4xl lg:text-6xl font-semibold">Siap Bekerja bersama kami?</h1>
                        <p className="text-lg lg:text-2xl">Kami menyediakan jasa-jasa yang mungkin anda cari, kami disini untuk mempermudah pekerjaan kalian dan tidak perlu repot-repot untuk mencari penyedia jasa yang lain!.</p>
                    </div>
                    <Link
                        href={"/layanan-kami"}
                        className="mx-auto flex w-fit items-center justify-between gap-2 rounded-lg bg-white px-4 md:py-2 text-blueprimary transition-shadow duration-200 hover:shadow-lg hover:shadow-white/20 lg:mx-0 z-10"
                    >
                        <p className="text-xl lg:text-3xl font-semibold">Mari Bekerja Sama!</p>
                        <ArrowUpRight size={32} />
                    </Link>
                </div>
                <ToolkitCTA />
            </div>
        </div>
    )
}