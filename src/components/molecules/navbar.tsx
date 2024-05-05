"use client"
import Image from "next/image";
import Link from "next/link";
import { Container } from "../atoms/container";
import { Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

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
    ];

    return (
        <nav className="fixed left-0 top-0 z-50 w-full py-2 px-2 md:px-0 bg-white">
            <Container className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full flex justify-between items-center gap-2">
                    <div className="flex items-center">
                        <Image
                            src={"/logo.png"}
                            alt={"logo"}
                            width={50}
                            height={50}
                        />
                        <h5 className="font-bold">Agung Djati <span className="text-blueprimary">Kusuma</span></h5>
                    </div>
                    <div className="flex items-center gap-4 md:hidden">
                        <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <X />
                            ) : (
                                <Menu color="black" />
                            )}
                        </button>
                    </div>
                </div>
                <div className={`w-full flex-col mt-5 md:mt-0 flex gap-5 md:flex-row md:justify-end md:flex z-50 bg-white ${navbar ? 'block slide-down' : 'hidden'}`}>
                    {menus.map((menu) => (
                        <Link
                            href={menu.href}
                            key={menu.title}
                            className="md:hover:text-blueprimary w-max md:font-medium transition ease-in delay-150 relative lineNavMenu md:lineNavMenu-none flex items-center"
                        >
                            {menu.title}
                            <span className="hidden md:inline-block hover:after:w-full hover:after:h-1 hover:after:bg-blueprimary after:absolute after:-bottom-1 after:left-0"></span>
                        </Link>
                    ))}
                    <button className="flex rounded-md bg-blueprimary px-3 py-1 w-max lineNavMenu md:lineNavMenu-none text-white gap-2 items-center">Kontak <MoveUpRight width={15} /></button>
                </div>
            </Container>
        </nav>
    );
};
