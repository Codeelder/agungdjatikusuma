import type { Metadata } from "next"

import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"

import { FooterSection } from "@/components/organisms/FooterSection"

export const metadata: Metadata = {
  title: "Agung Djati Kusuma",
  description: "Create by codeelder",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mb-[100px] mt-[68px]">{children}</div>
        <FooterSection />
      </body>
    </html>
  )
}
