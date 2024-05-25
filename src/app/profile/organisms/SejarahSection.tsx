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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus.
            </p>
          </div>
        </div>
        <div className="relative flex h-full w-full justify-center rounded-xl bg-blueprimary md:h-[480px] md:w-1/2">
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
