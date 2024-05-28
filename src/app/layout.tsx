import type { Metadata } from "next"

import { Footer } from "@/components/molecules/footer"
import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"

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
        <div className="mb-[100px] mt-[68px] overflow-x-clip">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
