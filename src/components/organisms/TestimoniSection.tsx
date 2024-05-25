import * as React from "react"
import Image from "next/image"

import { SvgTestimoni } from "@/constants/component"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const TestimoniSection = () => {
  return (
    <div className="container relative mt-20 space-y-5">
      <SvgTestimoni />
      <div className="flex justify-center text-center">
        <div className="w-80 md:w-full">
          <h1 className="text-3xl font-semibold">Testimoni</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </h5>
        </div>
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full p-5"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="group flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110">
                  <CardContent className="h-46 w-72 space-y-3 p-6">
                    <div className="flex justify-center space-x-5">
                      <Image
                        className="h-12 w-12 transform rounded-full object-cover transition-transform"
                        src="/pp.jpg"
                        alt=""
                        width={48}
                        height={48}
                      />
                      <div>
                        <h5 className="text-lg font-semibold transition-transform">
                          Avin Wayne
                        </h5>
                        <p className="text-sm text-slate-500 transition-transform">
                          Creative Manager
                        </p>
                      </div>
                    </div>
                    <div className="mt-0 px-6">
                      <p className="text-sm text-slate-600 transition-transform md:text-base">
                        There are many variations passages of Lorem Ipsum
                        majority some by words which don&apos;t look .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
