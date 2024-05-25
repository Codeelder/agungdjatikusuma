import type { Metadata } from "next"

// import { Epilogue } from "next/font/google"
import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"
import { FooterSection } from "@/components/organisms/FooterSection"

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
        <div className="mt-[68px] mb-[100px]">{children}</div>
        <FooterSection />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
