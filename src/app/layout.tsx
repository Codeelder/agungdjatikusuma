import type { Metadata } from "next"

import { Footer } from "@/components/molecules/footer"
import { Navbar } from "@/components/molecules/navbar"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "Agung Djati Kusuma | %s",
    default: "Agung Djati Kusuma",
  },
  icons: "/logo.png",
  openGraph: {
    title: "Agung Djati Kusuma",
    description: "Layanan ekspedisi, perangkat lunak, dan perdagangan eceran berkualitas tinggi.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Agung Djati Kusuma",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}thumbnail.png`,
        width: 508,
        height: 508,
      },
    ],
    type: "website",
  },
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
