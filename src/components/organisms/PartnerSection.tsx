import { PARTNER } from "@/constants"
import Image from "next/image"

const Partners = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
            {PARTNER.map((item) => (
                <div className="w-full h-28 flex justify-center items-center">
                    <Image
                        src={item.image}
                        alt={item.image}
                        width={150}
                        height={102}
                    />
                </div>
            ))}
        </div>
    )
}

export const PartnerSection = () => {
    return (
        <div className="container flex flex-col justify-center items-center space-y-10">
            <h1 className="text-3xl font-semibold">Rekan kami</h1>
            <Partners />
        </div>
    )
}