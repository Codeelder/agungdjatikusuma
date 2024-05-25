"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Circle } from '@/constants/component';

export const HeaderSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Ekspedisi", img: "/layanan-kami/ekspedisi.png", bottom: "md:bottom-20 bottom-12", left: "-left-5 md:-left-6 lg:-left-10 xl:-left-12" },
        { id: 2, title: "Perangkat Lunak", img: "/layanan-kami/perangkat-lunak.png", bottom: "lg:bottom-36 md:bottom-24 bottom-20", left: "-left-12 md:-left-16 lg:-left-24 xl:-left-28" },
        { id: 3, title: "Reparasi", img: "/layanan-kami/reparasi.png", bottom: "lg:bottom-20 md:bottom-14 bottom-12", left: "-left-5 md:-left-5 lg:-left-10 xl:-left-12" },
        { id: 4, title: "Perdagangan", img: "/layanan-kami/perdagangan.png", bottom: "lg:bottom-28 md:bottom-20 bottom-14", left: "-left-8 md:-left-12 lg:-left-14 xl:-left-20" },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row h-auto justify-center lg:h-96 xl:h-498 space-y-2 lg:space-y-0 lg:space-x-2">
                <div className="relative w-full xl:max-w-xl h-full rounded-3xl bg-blueprimary px-2 py-10 md:px-10 md:py-20">
                    <h1 className="text-3xl lg:text-4xl xl:text-6xl text-center md:text-start font-semibold text-white">Layanan <br /> kami</h1>
                    <Circle className="block absolute -bottom-1 left-1 rotate-[270deg]" stroke='white'/>
                </div>
                <div className="flex h-60 lg:h-96 xl:h-full gap-2 md:gap-1">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`relative rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out transform 
                                ${hoveredCard === card.id
                                    ? "w-full md:max-w-[398px]"
                                    : hoveredCard
                                        ? "w-28 md:w-36"
                                        : card.id === 1
                                            ? "w-full md:max-w-[398px]"
                                            : "w-28 md:w-36"
                                }`}
                        >
                            <div className="relative h-full w-full">
                                <img
                                    className={`h-full w-full object-cover rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out
                                        ${hoveredCard === card.id
                                            ? "w-full md:max-w-[398px]"
                                            : hoveredCard
                                                ? "w-full"
                                                : card.id === 1
                                                    ? "w-full md:max-w-[398px]"
                                                    : "w-full"
                                        }`}
                                    src={card.img}
                                    alt={card.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl md:rounded-3xl"></div>
                            </div>
                            <h1
                                className={`absolute transform transition-all duration-300 ease-in-out text-base md:text-2xl xl:text-4xl text-white font-semibold 
                                    ${hoveredCard === card.id
                                        ? "bottom-4 left-2 md:bottom-20 md:left-4 rotate-0"
                                        : card.id === 1 && !hoveredCard
                                            ? "bottom-4 left-2 md:bottom-20 md:left-4 rotate-0"
                                            : `${card.bottom} ${card.left} w-max -rotate-90`
                                    }`}
                                dangerouslySetInnerHTML={{ __html: card.title }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
