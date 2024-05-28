import Image from "next/image"

export const VMSection = () => {
  return (
    <div className="container">
      <div className="w-full space-y-10 md:space-y-16 md:p-0 lg:space-y-20">
        <div className="mx-auto w-full max-w-xl space-y-4 px-2 text-center">
          <h1 className="text-4xl font-semibold">Visi & Misi</h1>
          <p>
            Kami berdedikasi untuk memberikan pelayanan terbaik dan solusi
            inovatif di berbagai sektor.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative grid-cols-1 rounded-lg border border-black">
            <div className="space-y-4 p-4">
              <h1 className="text-3xl font-semibold md:text-4xl">Visi</h1>
              <p className="text-xs md:text-base">
                Menjadi perusahaan terkemuka yang menyediakan solusi terbaik di
                bidang ekspedisi, pengembangan perangkat lunak, reparasi
                kendaraan, dan perdagangan eceran. Kami berkomitmen untuk
                memberikan pelayanan yang unggul, inovatif, dan terpercaya
                kepada seluruh pelanggan, serta berkontribusi positif terhadap
                pertumbuhan ekonomi dan kesejahteraan masyarakat.
              </p>
            </div>
            <Image
              className="absolute -top-16 right-0 h-32 object-contain object-right md:-top-16"
              src="/section-profile-kami/icon-1.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative grid-cols-1 rounded-lg border border-black">
            <div className="space-y-4 p-4">
              <h1 className="text-3xl font-semibold md:text-4xl">Misi</h1>
              <p className="space-y-2 text-xs md:text-base">
                Agung Djati Kusuma bertekad memberikan layanan ekspedisi yang
                efisien, aman, dan tepat waktu dengan armada yang andal. Kami
                menyediakan solusi perangkat lunak inovatif yang sesuai dengan
                kebutuhan bisnis pelanggan. <br /> Dalam bidang reparasi
                kendaraan, kami menawarkan layanan komprehensif dan berkualitas
                tinggi. Selain itu, kami menyediakan berbagai kebutuhan primer
                melalui perdagangan eceran dengan harga kompetitif, selalu
                mengutamakan kepuasan pelanggan dengan layanan profesional dan
                dukungan responsif.
              </p>
            </div>
            <Image
              className="absolute -top-20 right-0 h-32 object-contain object-right md:-top-16"
              src="/section-profile-kami/icon-2.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
