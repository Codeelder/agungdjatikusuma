import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
})

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
      <body className={`${poppins}.className`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
