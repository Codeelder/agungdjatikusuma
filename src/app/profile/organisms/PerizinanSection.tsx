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
    <div className="container">
      <div className="h-[433px] lg:flex">
        <div className="relative flex w-full justify-center rounded-xl bg-blueprimary p-5 lg:w-3/5">
          <Image
            className="z-10"
            src={selectedImage}
            alt=""
            width={500}
            height={500}
          />
          <Elipse className="absolute -top-16 left-20 -rotate-90" />
          <Elipse className="absolute -bottom-16 right-20 rotate-90" />
        </div>
        <div className="relative flex w-full flex-col items-end space-y-5 px-1 lg:w-2/5">
          <div className="text-end">
            <h1 className="text-3xl font-semibold lg:text-5xl">
              Perizinan Perusahaan
            </h1>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit{" "}
            </p>
          </div>
          <div className="h-max">
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
          </div>
          <Circle
            className="absolute -bottom-1 -right-1 hidden rotate-[180deg] lg:block"
            stroke="#1D24CA"
          />
        </div>
      </div>
    </div>
  )
}
