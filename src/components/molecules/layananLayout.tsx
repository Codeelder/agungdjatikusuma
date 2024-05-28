import Image from "next/image"

import { DataType } from "@/constants/layananLayout"

type Props = {
  data: DataType
  order?: string
}

export const LayananLayout = ({ data, order }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:gap-x-4 lg:grid-cols-2 lg:gap-x-8">
      <div className="cols-span-1 space-y-2 px-2 md:space-y-5 lg:px-0">
        <h1 className="text-2xl font-semibold md:text-4xl">{data.title}</h1>
        {data.children.split("\n").map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={`cols-span-1 relative order-first ${order}`}>
        <Image
          src={data.imgSrc}
          alt={data.title}
          layout="responsive"
          width={700}
          height={475}
          quality={100}
          className="rounded-xl md:rounded-3xl"
        />
        <Image
          className={`absolute -top-16 select-none md:-top-28 ${data.position} h-32 w-36 md:h-64 md:w-72`}
          src={data.svgSrc}
          alt={data.title}
          quality={100}
          height={128}
          width={144}
        />
      </div>
    </div>
  )
}
