import { Footer } from "@/components/molecules/footer"
import { Navbar } from "@/components/molecules/navbar"

import { metadata } from "../lib/metadata"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
      </head>
      <body>
        <Navbar />
        <div className="mb-[100px] mt-[68px] overflow-x-clip">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
