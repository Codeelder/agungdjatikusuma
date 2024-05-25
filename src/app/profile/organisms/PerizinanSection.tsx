"use client"

import { useState } from "react"
import Image from "next/image"

import { Circle, Elipse } from "@/constants/component"

export const PerizinanSection = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/section-profile-kami/npwp.jpeg"
  )
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const items = [
    {
      id: 0,
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      img: "/section-profile-kami/npwp.jpeg",
    },
    {
      id: 1,
      title: "Akta Perusahaan",
      img: "/section-profile-kami/akteperusahaan.png",
    },
  ]

  const handleClick = (index: number, img: string) => {
    setSelectedImage(img)
    setActiveIndex(index)
  }

  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <div className="relative flex h-96 grid-cols-1 justify-center rounded-xl bg-blueprimary p-4 md:grid-cols-2 lg:col-span-3">
          <Image
            className="object-contain"
            src={selectedImage}
            alt=""
            width={500}
            height={500}
          />
          <Elipse className="absolute -top-16 left-20 -rotate-90" />
          <Elipse className="absolute -bottom-16 right-20 rotate-90" />
        </div>
        <div className="relative flex grid-cols-1 flex-col items-end space-y-5 px-1 md:col-span-2">
          <div className="text-end">
            <h1 className="text-3xl font-semibold lg:text-5xl">
              Perizinan Perusahaan
            </h1>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit{" "}
            </p>
          </div>
          <ol className="relative w-max border-e border-black text-end">
            {items.map((item, index) => (
              <li
                key={item.id}
                className={`mb-10 me-4 cursor-pointer ${activeIndex === index ? "font-bold text-blue-700" : "text-gray-900 "}`}
                onClick={() => handleClick(index, item.img)}
              >
                <div
                  className={`absolute -end-1.5 mt-1.5 h-3 w-3 rounded-full border border-black ${activeIndex === index ? "bg-blue-700" : "bg-gray-200"}`}
                ></div>
                <h3 className="text-base font-semibold lg:text-lg">
                  {item.title}
                </h3>
              </li>
            ))}
          </ol>
          <Circle
            className="absolute -bottom-1 -right-1 hidden rotate-[180deg] lg:block"
            stroke="#1D24CA"
          />
        </div>
      </div>
    </section>
  )
}
