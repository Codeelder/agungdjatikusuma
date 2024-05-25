import Image from "next/image"

export const StrukturSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl font-semibold md:text-5xl">
        Struktur Perusahaan
      </h1>
      <Image
        src="/section-profile-kami/strukturs.png"
        alt="Struktur Perusahaan"
        width={1000}
        height={1000}
      />
    </div>
  )
}
