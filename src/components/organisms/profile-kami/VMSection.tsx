import Image from "next/image"

export const VMSection = () => {
  return (
    <div className="container">
      <div className="w-full space-y-10 md:space-y-16 md:p-0">
        <div className="w-full max-w-xl px-2">
          <h1 className="text-5xl font-semibold">Visi & Misi</h1>
          <p>
            Agung Djati Kusuma berdedikasi untuk memberikan pelayanan terbaik dan solusi inovatif di berbagai sektor. Dengan fokus pada kepuasan pelanggan dan keunggulan operasional, kami terus berupaya meningkatkan kualitas layanan.
          </p>
        </div>
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-5 md:space-y-0">
          <div className="relative flex h-auto w-full flex-col justify-center rounded-lg border border-black p-5 md:w-1/2">
            <Image
              className="absolute -top-16 right-0 h-32 object-contain object-right md:-top-16"
              src="/section-profile-kami/icon-1.png"
              alt=""
              width={500}
              height={500}
            />
            <h1 className="text-3xl font-semibold md:text-5xl">Visi</h1>
            <p className="text-xs md:text-base">
              Menjadi perusahaan terkemuka yang menyediakan solusi terbaik di bidang ekspedisi, pengembangan perangkat lunak, reparasi kendaraan, dan perdagangan eceran. Kami berkomitmen untuk memberikan pelayanan yang unggul, inovatif, dan terpercaya kepada seluruh pelanggan, serta berkontribusi positif terhadap pertumbuhan ekonomi dan kesejahteraan masyarakat.
            </p>
          </div>
          <div className="relative flex h-auto w-full flex-col justify-center rounded-lg border border-black p-5 md:w-1/2">
            <Image
              className="absolute -top-20 right-0 h-32 object-contain object-right md:-top-16"
              src="/section-profile-kami/icon-2.png"
              alt=""
              width={500}
              height={500}
            />
            <h1 className="text-3xl font-semibold md:text-5xl">Misi</h1>
            <p className="text-xs md:text-base">
              Agung Djati Kusuma bertekad memberikan layanan ekspedisi yang efisien, aman, dan tepat waktu dengan armada yang andal. Kami menyediakan solusi perangkat lunak inovatif yang sesuai dengan kebutuhan bisnis pelanggan. Dalam bidang reparasi kendaraan, kami menawarkan layanan komprehensif dan berkualitas tinggi. Selain itu, kami menyediakan berbagai kebutuhan primer melalui perdagangan eceran dengan harga kompetitif, selalu mengutamakan kepuasan pelanggan dengan layanan profesional dan dukungan responsif.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
