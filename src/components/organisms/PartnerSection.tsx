import Image from "next/image"

import { PARTNER } from "@/constants"

const Partners = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10">
      {PARTNER.map((item, index) => (
        <div
          key={index}
          className="flex h-28 w-full items-center justify-center"
        >
          <Image src={item.image} alt={item.image} width={150} height={102} />
        </div>
      ))}
    </div>
  )
}

export const PartnerSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center space-y-10">
      <h1 className="text-3xl font-semibold">Rekan kami</h1>
      <Partners />
    </div>
  )
}
