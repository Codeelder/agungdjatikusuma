import Image from "next/image"
import Link from "next/link"
import { Container } from "../atoms/container"
import { MoveUpRight } from "lucide-react"

export const Navbar = () => {
    const menus = [
        {
            title: "Beranda",
            href: "/",
        },
        {
            title: "Profil Kami",
            href: "/profile",
        },
        {
            title: "Layanan Kami",
            href: "/layanan-kami",
        },
    ]
    return (
        <nav className="fixed left-0 top-0 z-50 w-full py-2">
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        src={"/logo.png"}
                        alt={"logo"}
                        width={50}
                        height={50}
                    />
                    <h5 className="font-bold">Agung Djati <span className="text-blueprimary">Kusuma</span></h5>
                </div>
                <div className="flex items-center gap-4">
                    {menus.map((menu) =>
                        <Link
                            href={menu.href}
                            key={menu.title}
                            className="hover:text-blueprimary font-medium"
                        > {menu.title}
                        </Link>
                    )}
                    <button className="flex rounded-md bg-blueprimary px-3 py-1 text-white gap-2 items-center">Kontak <MoveUpRight width={15} /></button>
                </div>
            </Container>
        </nav>
    )
}