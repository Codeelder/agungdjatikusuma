"use client"

import { useState } from "react"
import Image from "next/image"

import { Circle } from "@/constants/component"

export const HeaderSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: "Sejarah",
      img: "/section-profile-kami/sejarah.png",
      bottom: "md:bottom-20 bottom-10",
      left: "-left-5 md:-left-11 lg:-left-10 xl:-left-12",
    },
    {
      id: 2,
      title: "Visi & misi",
      img: "/section-profile-kami/visi & misi.png",
      bottom: "md:bottom-28 bottom-14",
      left: "-left-8 md:-left-16 lg:-left-16 xl:-left-20",
    },
    {
      id: 3,
      title: "Perizinan",
      img: "/section-profile-kami/perizinan.png",
      bottom: "md:bottom-24 bottom-14",
      left: "-left-7 md:-left-14 lg:-left-14 xl:-left-16",
    },
    {
      id: 4,
      title: "Struktur",
      img: "/section-profile-kami/struktur.png",
      bottom: "md:bottom-20 bottom-14",
      left: "-left-6 md:-left-12 lg:-left-12 xl:-left-14",
    },
  ]

  return (
    <div className="container">
      <div className="flex h-auto flex-col justify-center space-y-2 lg:h-96 lg:flex-row lg:space-x-2 lg:space-y-0 xl:h-498">
        <div className="relative h-full w-full rounded-md bg-blueprimary px-2 py-10 md:rounded-xl md:px-10 md:py-20 lg:rounded-2xl xl:max-w-xl">
          <h1 className="text-center text-3xl font-semibold text-white md:text-start lg:text-4xl xl:text-6xl">
            Profile perusahaan kami
          </h1>
          <Circle
            className="absolute -bottom-1 left-1 block rotate-[270deg]"
            stroke="white"
          />
        </div>
        <div className="flex h-60 gap-2 md:gap-1 lg:h-96 xl:h-full">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative transition-all
                                ${
                                  hoveredCard === card.id
                                    ? "w-full md:max-w-[398px]"
                                    : hoveredCard
                                      ? "w-28 md:w-36"
                                      : card.id === 1
                                        ? "w-full md:max-w-[398px]"
                                        : "w-28 md:w-36"
                                }`}
            >
              <Image
                className={`h-full w-full rounded-md object-cover transition-all duration-300 ease-in-out md:rounded-xl lg:rounded-2xl
                                    ${
                                      hoveredCard === card.id
                                        ? "w-full md:max-w-[398px]"
                                        : hoveredCard
                                          ? "w-full"
                                          : card.id === 1
                                            ? "w-full md:max-w-[398px]"
                                            : "w-full"
                                    }`}
                src={card.img}
                alt={card.title}
                width={500}
                height={500}
              />
              <h1
                className={`absolute w-max transform text-xl font-semibold text-white transition-all duration-300 ease-in-out md:text-4xl xl:text-5xl 
                                    ${
                                      hoveredCard === card.id
                                        ? "bottom-4 left-2 rotate-0 md:bottom-20 md:left-4"
                                        : card.id === 1 && !hoveredCard
                                          ? "bottom-4 left-2 rotate-0 md:bottom-20 md:left-4"
                                          : `${card.bottom} ${card.left} -rotate-90`
                                    }`}
              >
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
