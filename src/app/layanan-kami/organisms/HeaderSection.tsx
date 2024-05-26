"use client"

import { useState } from "react"
import Image from "next/image"

import { Circle } from "@/constants/component"

export const HeaderSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number>(1)

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
      title: "Perdagangan",
      img: "/layanan-kami/perdagangan.png",
      bottom: "lg:bottom-28 md:bottom-20 bottom-14",
      left: "-left-8 md:-left-12 lg:-left-14 xl:-left-20",
    },
    {
      id: 4,
      title: "Reparasi",
      img: "/layanan-kami/reparasi.png",
      bottom: "lg:bottom-20 md:bottom-14 bottom-12",
      left: "-left-5 md:-left-5 lg:-left-10 xl:-left-12",
    },
  ]

  return (
    <section className="container">
      <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
        <div className="relative rounded-3xl bg-blueprimary px-2 py-10 lg:h-96 lg:px-8">
          <h1 className="text-center text-3xl font-semibold text-white lg:text-start lg:text-4xl xl:text-6xl">
            Layanan <br /> kami
          </h1>
          <Circle
            className="absolute -bottom-1 left-1 block rotate-[270deg]"
            stroke="white"
          />
        </div>
        <div className="flex h-72 gap-x-1.5 md:h-80 lg:h-96">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(1)}
              className={`${hoveredCard === card.id ? "w-2/5" : "w-1/5"} relative rounded-xl transition-all md:rounded-2xl`}
            >
              <div className="relative h-full w-full">
                <Image
                  className="h-full w-full rounded-xl object-cover md:rounded-3xl"
                  src={card.img}
                  alt={card.title}
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black to-transparent md:rounded-3xl" />
              </div>
              <h1
                style={{ transformOrigin: "top left" }}
                className={`${hoveredCard === card.id ? "bottom-5 rotate-0" : "bottom-0 -rotate-90 text-nowrap"} absolute left-3 w-fit text-sm font-semibold text-white transition-all duration-300 ease-in-out md:left-4 md:text-xl lg:text-2xl`}
              >
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
