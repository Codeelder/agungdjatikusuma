import { CardLayanan } from "../../molecules/cardLayanan"
import { CARDS } from "@/constants/cardLayanan"

export const LayananKami = () => {
  return (
    <section className="container space-y-4">
      <h1 className="mx-auto w-fit rounded bg-blueprimary px-3 py-2 text-center text-2xl font-semibold text-white md:mx-0 lg:text-start lg:text-3xl">
        Apa Saja Layanan Kami?
      </h1>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-4">
          <CardLayanan data={CARDS[0]} imageClassName="h-60 lg:h-[340px]" />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <CardLayanan
            data={CARDS[1]}
            widthCol="lg:w-full"
            textClassName="lg:hidden"
            imageClassName="h-60"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <CardLayanan
            data={CARDS[2]}
            widthCol="lg:w-full"
            textClassName="lg:hidden"
            imageClassName="h-60"
          />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <CardLayanan data={CARDS[3]} imageClassName="h-60 lg:h-[340px]" />
        </div>
      </div>
    </section>
  )
}
