import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SvgTestimoni } from "@/constants/component"

export const TestimoniSection = () => {
    return (
        <div className="container space-y-5 mt-20 relative">
            <SvgTestimoni />
            <div className="flex justify-center text-center">
                <div className="w-80 md:w-full">
                    <h1 className="text-3xl font-semibold">Testimoni</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</h5>
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
                                <Card className="flex justify-center items-center group hover:scale-110 transition-transform duration-500 ease-in-out">
                                    <CardContent className="w-72 h-46 space-y-3 p-6">
                                        <div className="flex justify-center space-x-5">
                                            <img className="rounded-full w-12 h-12 object-cover transform transition-transform" src="/pp.jpg" alt="" />
                                            <div>
                                                <h5 className="text-lg transition-transform font-semibold">Avin Wayne</h5>
                                                <p className="text-sm text-slate-500 transition-transform">Creative Manager</p>
                                            </div>
                                        </div>
                                        <div className="px-6 mt-0">
                                            <p className="text-sm md:text-base text-slate-600 transition-transform">There are many variations passages of Lorem Ipsum majority some by words which don't look .</p>
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