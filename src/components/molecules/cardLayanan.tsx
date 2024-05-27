import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { CardType } from "@/constants/cardLayanan"

type Props = {
  widthCol?: string
  textClassName?: string
  imageClassName?: string
  data: CardType
}

export const CardLayanan = ({
  widthCol,
  textClassName,
  imageClassName,
  data,
}: Props) => {
  return (
    <div className="h-full rounded-2xl bg-blueprimary px-4 py-6 text-white md:px-6">
      <p className="text-xl font-light">layanan</p>
      <div className="flex flex-wrap-reverse">
        <div
          className={cn("flex w-full flex-col justify-end md:w-1/2", widthCol)}
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                {data.title}
              </h2>
              <p className={textClassName}>{data.desc}</p>
            </div>
            <Link
              href={`/layanan-kami#${data.slug}`}
              className="flex items-center gap-1 text-2xl"
            >
              Lihat selengkapnya <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className={cn("w-full md:w-1/2", widthCol)}>
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={800}
            className={cn("object-contain", imageClassName)}
          />
        </div>
      </div>
    </div>
  )
}
