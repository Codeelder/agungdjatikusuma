import type { Metadata } from "next"

import { Navbar } from "@/components/molecules/navbar"
import { Footer } from "@/components/molecules/footer"

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
        <div className="mb-[100px] mt-[68px]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
