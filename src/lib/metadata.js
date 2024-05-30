export const metadata = {
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
          url: `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
          width: 1920,
          height: 1080,
        },
      ],
      type: "website",
    },
  }

  console.log(process.env.NEXT_PUBLIC_APP_URL)