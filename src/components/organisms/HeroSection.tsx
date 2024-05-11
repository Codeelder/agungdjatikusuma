import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

const CardCEO = () => {
  return (
    <div className="space-y-2 rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center gap-x-3">
        <Image
          src="/imgpp.png"
          alt="CEO of Agung Djati Kusuma"
          width={160}
          height={160}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h5 className="text-lg font-semibold">Agung Djati Kusuma</h5>
          <p className="text-sm font-medium text-gray-500">
            CEO Agung Djati Kusuma
          </p>
        </div>
      </div>
      <p className="text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        deleniti aliquam voluptatum totam. Quae beatae consequuntur, corporis
        quibusdam qui alias nobis et provident, ipsa dolorum nihil deserunt
        recusandae voluptates eum!
      </p>
    </div>
  )
}

export const HeroSection = () => {
  return (
    <section className="rounded-3xl bg-blueprimary lg:container">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-y-0">
        <div className="col-span-1">
          <div className="h-full space-y-8 px-3 pt-10 text-white md:space-y-10 md:px-6 md:py-6 lg:space-y-12 lg:py-10 lg:pe-4 lg:ps-10">
            <h1 className="text-center text-5xl font-semibold md:text-8xl lg:text-start lg:text-7xl xl:text-8xl">
              “Kepuasan Anda adalah{" "}
              <span className="rounded-md bg-white px-3 text-blueprimary">
                Prioritas
              </span>{" "}
              bagi kami.”
            </h1>
            <div className="space-y-6 lg:pe-6">
              <p className="text-center text-sm md:text-lg lg:text-start">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quia aut excepturi voluptatum voluptas esse fugit vel
                error! Aliquid harum sapiente quisquam magni quaerat accusamus
                at numquam alias similique fugiat.
              </p>
              <Link
                href={"/layanan-kami"}
                className="mx-auto flex w-fit items-center justify-between gap-2 rounded-lg bg-white px-4 py-2 text-blueprimary transition-shadow duration-200 hover:shadow-lg hover:shadow-white/20 lg:mx-0"
              >
                <p className="text-3xl font-semibold">Mulai</p>
                <ArrowUpRight size={32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative col-span-1">
          <Image
            src={"/mockup.jpg"}
            alt="Agung Djati Kusuma on billboard"
            width={1000}
            height={1000}
            className="h-full w-full rounded-3xl object-cover object-left"
          />
          <div className="absolute bottom-0 right-0 p-4 md:bottom-10 md:right-10 md:w-1/2 md:p-0">
            <CardCEO />
          </div>
        </div>
      </div>
    </section>
  )
}
