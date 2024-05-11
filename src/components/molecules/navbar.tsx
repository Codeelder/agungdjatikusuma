"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Menu, MoveUpRight, X } from "lucide-react"

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
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white px-2 py-2 md:px-0">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center">
            <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
            <h5 className="font-bold">
              Agung Djati <span className="text-blueprimary">Kusuma</span>
            </h5>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <X /> : <Menu color="black" />}
            </button>
          </div>
        </div>
        <div
          className={`z-50 mt-5 flex w-full flex-col gap-5 bg-white md:mt-0 md:flex md:flex-row md:justify-end ${navbar ? "slide-down block" : "hidden"}`}
        >
          {menus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.title}
              className="lineNavMenu md:lineNavMenu-none relative flex w-max items-center transition delay-150 ease-in md:font-medium md:hover:text-blueprimary"
            >
              {menu.title}
              <span className="hidden after:absolute after:-bottom-1 after:left-0 hover:after:h-1 hover:after:w-full hover:after:bg-blueprimary md:inline-block"></span>
            </Link>
          ))}
          <button className="lineNavMenu md:lineNavMenu-none flex w-max items-center gap-2 rounded-md bg-blueprimary px-3 py-1 text-white">
            Kontak <MoveUpRight width={15} />
          </button>
        </div>
      </div>
    </nav>
  )
}
