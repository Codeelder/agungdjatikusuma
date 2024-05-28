import Image from "next/image"
import Link from "next/link"

import { Facebook, Instagram, Twitter } from "lucide-react"

import { FOOTERHALAMAN, FOOTERJASA, FOOTERSEEMORE } from "@/constants/footer"

export const Footer = () => {
  return (
    <div className="container p-5">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-x-2">
            <Image
              src={"/logo.png"}
              alt={"Logo Agung Djati Kusuma"}
              width={64}
              height={64}
            />
            <h5 className="font-bold md:text-lg lg:text-2xl">
              Agung Djati <span className="text-blueprimary">Kusuma</span>
            </h5>
          </div>
          <div>
            <p className="text-xl">
            Kami terus berinovasi dan beradaptasi dengan kebutuhan pasar untuk memberikan solusi terbaik dan memastikan keandalan serta profesionalisme dalam setiap pekerjaan yang kami lakukan.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 md:justify-end">
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h5 className="text-2xl font-semibold">Lihat Kembali</h5>
              <ul className="space-y-2">
                {FOOTERSEEMORE.map((item) => (
                  <li key={item.id}>
                    <Link href={"/"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Halaman</h5>
              <ul className="space-y-2">
                {FOOTERHALAMAN.map((item) => (
                  <li key={item.id}>
                    <Link href={"/profile"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Jasa Kami</h5>
              <ul className="space-y-2">
                {FOOTERJASA.map((item) => (
                  <li key={item.id}>
                    <Link href={"/layanan-kami"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 text-black" />
      <div className="flex w-full justify-between">
        <p>Copyright © 2024 - Agung Djati Kusuma. All rights reserved.</p>
      </div>
    </div>
  )
}