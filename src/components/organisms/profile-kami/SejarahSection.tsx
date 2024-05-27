import Image from "next/image"

import { Circle } from "@/constants/component"

export const SejarahSection = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-col-reverse gap-5 md:flex-row md:gap-0">
        <div className="flex w-full flex-col justify-between gap-10 md:w-1/2 md:gap-5 md:pr-5 md:pt-5 lg:gap-0">
          <div className="flex flex-col gap-5 px-2">
            <div>
              <h1 className="text-3xl font-semibold">Sejarah</h1>
              <h1 className="text-3xl font-semibold">
                Agung Djati <span className="text-blueprimary">Kusuma</span>
              </h1>
            </div>
            <p>
              Agung Djati Kusuma didirikan dengan visi untuk menjadi penyedia jasa yang handal dan terpercaya di berbagai sektor industri. Kami memulai dengan fokus pada layanan ekspedisi, menggunakan armada lengkap seperti truk, pick-up, bak terbuka, dan bak tertutup untuk memastikan pengiriman barang yang efisien dan aman ke berbagai daerah. Seiring perkembangan, kami memperluas layanan ke bidang pengembangan perangkat lunak, membantu perusahaan dengan solusi teknologi inovatif, serta menawarkan jasa reparasi kendaraan yang mencakup reparasi mekanik, elektrik, servis reguler, dan perbaikan badan mobil. Tidak ketinggalan, kami memasuki sektor perdagangan eceran, menyediakan berbagai kebutuhan primer seperti sembako.
              <br /> <br />
              Dengan perjalanan panjang dan dedikasi tinggi, Agung Djati Kusuma terus berinovasi dan berkembang, berkomitmen untuk memberikan yang terbaik kepada masyarakat dan berbagai perusahaan. Kami bangga dapat menjadi bagian dari solusi kebutuhan sehari-hari dan akan terus berusaha meningkatkan layanan di masa mendatang.
            </p>
          </div>
        </div>
        <div className="relative flex h-auto w-full justify-center rounded-xl bg-blueprimary md:h-[480px] md:w-1/2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={436}
            height={436}
            className="z-10 object-contain"
          />
          <Circle
            className="absolute -bottom-1 -right-1 rotate-[180deg]"
            stroke="white"
          />
          <Circle
            className="absolute -left-1 -top-1 rotate-[360deg]"
            stroke="white"
          />
        </div>
      </div>
    </div>
  )
}
