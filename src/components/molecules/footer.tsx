import Image from "next/image"
import Link from "next/link"

import { FOOTERHALAMAN, FOOTERJASA, FOOTERSEEMORE } from "@/constants/footer"

export const Footer = () => {
  return (
    <footer className="bg-muted px-2 py-6">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-6">
        <div className="grid-cols-1 space-y-4 md:col-span-2 lg:col-span-3">
          <div className="flex w-fit items-center gap-x-2">
            <Image
              src={"/logo.png"}
              alt="Logo Agung Djati Kusuma"
              width={64}
              height={64}
            />
            <h2 className="font-bold md:text-lg lg:text-2xl">
              Agung Djati <span className="text-blueprimary">Kusuma</span>
            </h2>
          </div>
          <p className="text-sm lg:text-base">
            Kami terus berinovasi dan beradaptasi dengan kebutuhan pasar untuk
            memberikan solusi terbaik dan memastikan keandalan serta
            profesionalisme dalam setiap pekerjaan yang kami lakukan.
          </p>
        </div>
        <div className="col-span-1 space-y-6">
          <h5 className="text-2xl font-medium">Halaman</h5>
          <ul className="space-y-2">
            {FOOTERHALAMAN.map((item) => (
              <li key={item.id}>
                <Link
                  href={"/"}
                  className="text-sm transition-opacity hover:opacity-80 lg:text-base"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 space-y-6">
          <h5 className="text-2xl font-medium">Lihat Kembali</h5>
          <ul className="space-y-2">
            {FOOTERSEEMORE.map((item) => (
              <li key={item.id}>
                <Link
                  href={"/"}
                  className="text-sm transition-opacity hover:opacity-80 lg:text-base"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 space-y-6">
          <h5 className="text-2xl font-medium">Jasa Kami</h5>
          <ul className="space-y-2">
            {FOOTERJASA.map((item) => (
              <li key={item.id}>
                <Link
                  href={"/"}
                  className="text-sm transition-opacity hover:opacity-80 lg:text-base"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-5 text-black" />
      <div className="container">
        <p className="text-sm text-muted-foreground">
          Copyright © 2024 - Agung Djati Kusuma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
