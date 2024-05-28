import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

export const ProfileKami = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1 space-y-10 px-2 md:pe-6 lg:pe-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Tentang Kami</h1>
            <p>
              Semakin berkembangnya dunia usaha dan memasuki era digitalisasi
              maka PT.Agung Djati Kusuma hadir untuk mengikuti perkembangan
              pasar, dengan beberapa bidang usaha jasa dan perdagangan. Kami
              berkomitmen memberikan pelayanan terbaik serta amanah untuk
              pelanggan.
            </p>
          </div>
          <Link
            href={"/profile"}
            className="mx-auto flex w-fit items-center gap-x-2 rounded-lg bg-blueprimary px-4 py-2 text-white md:mx-0"
          >
            <p className="text-xl">Profile Kami</p>
            <ArrowUpRight />
          </Link>
        </div>
        <div className="order-first col-span-1 md:order-none">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={580}
            height={580}
            className="h-96 w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
