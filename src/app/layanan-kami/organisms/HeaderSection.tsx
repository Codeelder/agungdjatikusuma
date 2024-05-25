"use client"

import { useState } from "react"
import Image from "next/image"

import { Circle } from "@/constants/component"

export const HeaderSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: "Ekspedisi",
      img: "/layanan-kami/ekspedisi.png",
      bottom: "md:bottom-20 bottom-12",
      left: "-left-5 md:-left-6 lg:-left-10 xl:-left-12",
    },
    {
      id: 2,
      title: "Perangkat Lunak",
      img: "/layanan-kami/perangkat-lunak.png",
      bottom: "lg:bottom-36 md:bottom-24 bottom-20",
      left: "-left-12 md:-left-16 lg:-left-24 xl:-left-28",
    },
    {
      id: 3,
      title: "Reparasi",
      img: "/layanan-kami/reparasi.png",
      bottom: "lg:bottom-20 md:bottom-14 bottom-12",
      left: "-left-5 md:-left-5 lg:-left-10 xl:-left-12",
    },
    {
      id: 4,
      title: "Perdagangan",
      img: "/layanan-kami/perdagangan.png",
      bottom: "lg:bottom-28 md:bottom-20 bottom-14",
      left: "-left-8 md:-left-12 lg:-left-14 xl:-left-20",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-auto flex-col justify-center space-y-2 lg:h-96 lg:flex-row lg:space-x-2 lg:space-y-0 xl:h-498">
        <div className="relative h-full w-full rounded-3xl bg-blueprimary px-2 py-10 md:px-10 md:py-20 xl:max-w-xl">
          <h1 className="text-center text-3xl font-semibold text-white md:text-start lg:text-4xl xl:text-6xl">
            Layanan <br /> kami
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
              className={`relative transform rounded-xl transition-all duration-300 ease-in-out md:rounded-3xl 
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
              <div className="relative h-full w-full">
                <Image
                  className={`h-full w-full rounded-xl object-cover transition-all duration-300 ease-in-out md:rounded-3xl
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black to-transparent md:rounded-3xl"></div>
              </div>
              <h1
                className={`absolute transform text-base font-semibold text-white transition-all duration-300 ease-in-out md:text-2xl xl:text-4xl 
                                    ${
                                      hoveredCard === card.id
                                        ? "bottom-4 left-2 rotate-0 md:bottom-20 md:left-4"
                                        : card.id === 1 && !hoveredCard
                                          ? "bottom-4 left-2 rotate-0 md:bottom-20 md:left-4"
                                          : `${card.bottom} ${card.left} w-max -rotate-90`
                                    }`}
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
