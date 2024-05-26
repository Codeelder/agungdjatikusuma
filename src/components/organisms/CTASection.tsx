import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import { Elipses } from "@/constants/component"

export const CTASection = () => {
  return (
    <section className="container">
      <div className="relative overflow-x-clip rounded-3xl bg-blueprimary">
        <Elipses />
        <div className="flex h-full flex-col items-center justify-center gap-y-8 pb-28 pt-20 text-center text-white md:gap-y-16">
          <div className="space-y-3 px-2 md:w-2/3">
            <h1 className="relative z-10 text-4xl font-semibold lg:text-6xl">
              Siap Bekerja bersama kami?
            </h1>
            <p className="text-gray-100 lg:text-2xl">
              Kami menyediakan jasa-jasa yang mungkin anda cari, kami disini
              untuk mempermudah pekerjaan kalian dan tidak perlu repot-repot
              untuk mencari penyedia jasa yang lain!
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
        <Image
          className="absolute -bottom-10 h-28 w-32 -rotate-12 object-contain object-left md:-bottom-28 md:h-56 md:w-64 lg:h-72 lg:w-80"
          src="/layanan/toolkit-2.png"
          alt=""
          width={800}
          height={800}
        />
        <Image
          className="absolute -bottom-16 right-0 h-40 w-40 rotate-6 -scale-x-100 object-contain object-left md:-bottom-32 md:h-64 md:w-64 lg:h-96 lg:w-96"
          src="/layanan/toolkit-4.png"
          alt=""
          width={800}
          height={800}
        />
      </div>
    </section>
  )
}
