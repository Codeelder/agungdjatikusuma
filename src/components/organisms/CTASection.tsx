import Link from "next/link"

import { Elipses, ToolkitCTA } from "@/constants/component"
import { ArrowUpRight } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="container">
      <div className="relative rounded-3xl bg-blueprimary">
        <Elipses />
        <div className="flex h-full flex-col items-center justify-center space-y-8 py-24 text-center text-white md:space-y-28">
          <div className="space-y-3 md:w-2/3">
            <h1 className="text-4xl font-semibold lg:text-6xl">
              Siap Bekerja bersama kami?
            </h1>
            <p className="text-lg text-gray-100 lg:text-2xl">
              Kami menyediakan jasa-jasa yang mungkin anda cari, kami disini
              untuk mempermudah pekerjaan kalian dan tidak perlu repot-repot
              untuk mencari penyedia jasa yang lain!.
            </p>
          </div>
          <Link
            href={"/layanan-kami"}
            className="z-10 mx-auto flex w-fit items-center justify-between gap-2 rounded-lg bg-white px-4 text-blueprimary transition-shadow duration-200 hover:shadow-lg hover:shadow-white/20 md:py-2 lg:mx-0"
          >
            <p className="text-xl font-semibold lg:text-3xl">
              Mari Bekerja Sama!
            </p>
            <ArrowUpRight size={32} />
          </Link>
        </div>
        <ToolkitCTA />
      </div>
    </section>
  )
}
