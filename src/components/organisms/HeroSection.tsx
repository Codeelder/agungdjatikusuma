import Image from "next/image"
import { Container } from "../atoms/container"
import { MoveUpRight } from "lucide-react"

export const HeroSection = () => {
    return (
        <Container>
            <div className="relative w-full bg-blueprimary md:rounded-3xl md:flex md:flex-row justify-between">
                <div className="md:w-1/2 w-full flex flex-col lg:justify-between p-10 text-white gap-5 md:gap-0">
                    <h1 className="text-5xl md:text-8xl h-max">“Kepuasan Anda adalah <span className="block h-26 w-max pb-3 pr-2 bg-white text-blueprimary rounded-md">Prioritas</span> bagi kami.”</h1>
                    <div className="flex flex-col gap-5 mt-1 md:mt-5 lg:mt-0">
                        <p className="text-lg md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia aut excepturi voluptatum voluptas esse fugit vel error! Aliquid harum sapiente  quisquam magni quaerat accusamus at numquam alias similique fugiat.</p>
                        <button className="flex rounded-md bg-white px-3 py-1 w-max text-xl text-blueprimary gap-2 items-center">Mulai <MoveUpRight width={18} /></button>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src={"/mockup.png"}
                        alt="mockup"
                        width={716}
                        height={741}
                        className="rounded-r-3xl w-full h-full hidden lg:block"
                    />
                </div>
                <div className="absolute bottom-16 lg:bottom-16 right-16 lg:right-20 w-72 h-48 bg-white rounded-3xl hidden md:block">
                    <div className="flex h-full flex-col p-5 justify-between">
                        <div className="flex justify-center items-center gap-4">
                            <Image
                                src={"/imgpp.png"}
                                alt="ceoadk"
                                width={55}
                                height={55}
                            />
                            <div className="flex flex-col">
                                <h5 className="font-semibold">Bill Adams</h5>
                                <h5 className="text-sm font-semibold">Ceo Agung Djati Kusuma</h5>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs">"This team is really the best in its field,I don't regret working with them, and will come back again thanks, This team is really the best in its field,I don't regret working with them, and will come back again thanks"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-10 md:hidden">
                <div className="w-72 h-48 bg-white rounded-3xl">
                    <div className="flex h-full flex-col p-5 justify-between">
                        <div className="flex justify-center items-center gap-4">
                            <Image
                                src={"/imgpp.png"}
                                alt="ceoadk"
                                width={55}
                                height={55}
                            />
                            <div className="flex flex-col">
                                <h5 className="font-semibold">Bill Adams</h5>
                                <h5 className="text-sm font-semibold">Ceo Agung Djati Kusuma</h5>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs">"This team is really the best in its field,I don't regret working with them, and will come back again thanks, This team is really the best in its field,I don't regret working with them, and will come back again thanks"</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}