import type { Metadata } from "next"
// import { Epilogue } from "next/font/google"
import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"

// const epilogue = Epilogue({
//   weight: ["300", "400", "600", "700", "800", "900"],
//   subsets: ["latin"],
// })

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
        <main className="mt-[66px]">
          {children}
        </main>
      </body>
    </html>
  )
}
