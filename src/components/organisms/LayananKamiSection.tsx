import Link from "next/link"

import { Container } from "../atoms/container"

import { MoveUpRight } from "lucide-react"

import { CARDL, CARDS } from "@/constants"

import { CardL, CardS } from "@/types/layanan"
import Image from "next/image"

const CardLayananL = ({
    cardl,
    className,
}: {
    cardl: CardL
    className?: string
}) => {
    return (
        <div className="relative w-full flex flex-col-reverse lg:flex-row max-w-3xl h-auto lg:h-80 rounded-xl bg-blueprimary p-5">
            <div className="w-full lg:w-1/2 flex lg:flex-col justify-between">
                <h5 className="absolute lg:static top-5 left-5 text-white">Layanan</h5>
                <div className="text-white flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl lg:text-4xl font-semibold">{cardl.title}</h1>
                    <p className="text-xs">{cardl.desc}</p>
                    <Link href={'/layanan-kami'} className="flex gap-2">Lihat Selengkapnya <MoveUpRight width={17}></MoveUpRight></Link>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    src={cardl.image}
                    alt="toolkit"
                    width={300}
                    height={280}
                    className="w-max"
                />
            </div>
        </div>
    )
}

const CardLayananS = ({
    cards,
    className,
}: {
    cards: CardS
    className?: string
}) => {
    return (
        <div className="relative w-full max-w-lg flex flex-col justify-between h-auto lg:h-80 rounded-xl bg-blueprimary p-5">
            <h5 className="absolute lg:static top-5 left-5 text-white">Layanan</h5>
            <div className="w-full h-full lg:h-48 flex flex-col justify-center items-center">
                <Image
                    src={cards.image}
                    alt={cards.title}
                    width={224}
                    height={224}
                    className="object-fill"
                />
            </div>
            <div className="text-white h-auto">
                <h1 className="text-xl lg:text-4xl font-semibold">{cards.title}</h1>
                <Link href={'/layanan-kami'} className="flex gap-2">Lihat Selengkapnya <MoveUpRight width={17}></MoveUpRight></Link>
            </div>
        </div>
    )
}

export const LayananKami = () => {
    return (
        <Container className="p-2 md:p-0">
            <h1 className="text-2xl lg:text-3xl text-center lg:text-start font-semibold"><span className="bg-blueprimary text-white px-2">Apa Saja Layanan Kami?</span></h1>
            <div className="mt-5 max-w-full">
                <div className="flex flex-col md:flex-row gap-2">
                    <CardLayananL cardl={CARDL[0]} />
                    <CardLayananS cards={CARDS[0]} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 mt-2">
                    <CardLayananS cards={CARDS[1]} />
                    <CardLayananL cardl={CARDL[1]} />
                </div>
            </div>
        </Container>
    )
}