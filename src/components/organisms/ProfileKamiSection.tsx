import Image from "next/image"
import { Container } from "../atoms/container"
import { Handshake, MessageSquareText, MoveUpRight, Users } from "lucide-react"
import Link from "next/link"

export const ProfileKami = () => {
    return (
        <Container>
            <div className="w-full flex flex-col-reverse md:flex-row p-5 gap-5 md:gap-0">
                <div className="w-full md:w-2/5 flex justify-between flex-col md:pt-5 md:pr-5 gap-10 md:gap-5 lg:gap-0">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-semibold">Tentang Kami</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.  mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                        <div className="flex gap-2">
                            <div className="min-w-20 max-w-max h-10 flex items-center text-white bg-blueprimary rounded-lg p-2 gap-2">
                                <Users color="white" />
                                <h5 className="text-xl">14</h5>
                            </div>
                            <div className="min-w-20 max-w-max h-10 flex items-center text-white bg-blueprimary rounded-lg p-2 gap-2">
                                <Handshake color="white" />
                                <h5 className="text-xl">4</h5>
                            </div>
                            <div className="min-w-20 max-w-max h-10 flex items-center text-white bg-blueprimary rounded-lg p-2 gap-2">
                                <MessageSquareText color="white" />
                                <h5 className="text-xl">9</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={'/profile'} className="w-40 h-10 flex items-center justify-center bg-blueprimary rounded-lg gap-2">
                            <h5 className="text-xl text-white">Profile Kami</h5> <MoveUpRight color="white" size={14} />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-3/5 flex justify-end">
                    <Image
                        src={"/profile.png"}
                        alt="profile"
                        width={531}
                        height={480}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Container>
    )
}