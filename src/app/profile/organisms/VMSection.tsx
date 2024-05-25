import Image from "next/image"

export const VMSection = () => {
  return (
    <div className="container">
      <div className="w-full space-y-10 p-5 md:space-y-28 md:p-0">
        <div className="w-full max-w-xl">
          <h1 className="text-5xl font-semibold">Visi & Misi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            minus porro incidunt maxime ex accusamus similique? Illum esse, odio
            fuga similique soluta placeat adipisci vero officiis. Atque eius
            itaque asperiores reiciendis.
          </p>
        </div>
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-5 md:space-y-0">
          <div className="relative flex h-56 w-full flex-col justify-center rounded-lg border border-black p-5 md:w-1/2">
            <Image
              className="w-38 absolute -top-16 right-0 h-32 md:-top-24 md:h-40 md:w-36"
              src="/section-profile-kami/icon-1.png"
              alt=""
              width={500}
              height={500}
            />
            <h1 className="text-3xl font-semibold md:text-5xl">Visi</h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio minus porro incidunt maxime ex accusamus similique?
              Illum esse, odio fuga similique soluta placeat adipisci vero
              officiis. Atque eius itaque asperiores reiciendis.
            </p>
          </div>
          <div className="relative flex h-56 w-full flex-col justify-center rounded-lg border border-black p-5 text-end md:w-1/2 md:text-start">
            <Image
              className="w-38 absolute -top-20 h-32 md:-top-24 md:right-0 md:h-40 md:w-36"
              src="/section-profile-kami/icon-2.png"
              alt=""
              width={500}
              height={500}
            />
            <h1 className="text-3xl font-semibold md:text-5xl">Misi</h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio minus porro incidunt maxime ex accusamus similique?
              Illum esse, odio fuga similique soluta placeat adipisci vero
              officiis. Atque eius itaque asperiores reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
