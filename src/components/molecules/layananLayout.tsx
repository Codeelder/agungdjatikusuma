import Image from "next/image"

import { DataType } from "@/constants"

import { cn } from "@/lib/utils"

type Props = {
  data: DataType
  flexRow?: string
}

export const LayananLayout = ({ data, flexRow }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-14 md:gap-x-10 md:space-y-0",
        flexRow
      )}
    >
      <div className="w-full space-y-5 md:w-1/2">
        <h1 className="text-3xl font-semibold md:text-5xl">{data.title}</h1>
        <p>{data.children}</p>
      </div>
      <div className="relative w-full md:w-1/2">
        <Image src={data.imgSrc} alt={data.title} height={60} width={60} />
        <Image
          className={`absolute -top-16 md:-top-32 ${data.position} h-36 w-40 md:h-64 md:w-72`}
          src={data.svgSrc}
          alt=""
          height={60}
          width={60}
        />
      </div>
    </div>
  )
}
