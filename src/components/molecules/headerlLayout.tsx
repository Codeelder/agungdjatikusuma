"use client"

import { useState } from "react"
import Image from "next/image"

import { Circle } from "@/constants/component"

type Card = {
    id: number
    title: string
    img: string
    bottom: string
    left: string
}

type HeaderLayoutProps = {
    cards: Card[]
    title: string
}

export const HeaderLayout = ({ cards, title }: HeaderLayoutProps) => {
    const [hoveredCard, setHoveredCard] = useState<number>(1)

    return (
        <section className="container">
            <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                <div className="relative rounded-3xl bg-blueprimary px-2 py-10 lg:h-96 lg:px-8">
                    <h1 className="text-center text-3xl font-semibold text-white lg:text-start lg:text-4xl xl:text-6xl">
                        {title}
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