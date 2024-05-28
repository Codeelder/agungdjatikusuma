import { DATAS } from "@/constants/layananLayout"

import { LayananLayout } from "@/components/molecules/layananLayout"

export const LayananSection = () => {
  return (
    <div className="container space-y-16">
      <LayananLayout data={DATAS[0]} flexRow="md:flex-row" />
      <LayananLayout data={DATAS[1]} flexRow="md:flex-row-reverse" />
      <LayananLayout data={DATAS[2]} flexRow="md:flex-row" />
      <LayananLayout data={DATAS[3]} flexRow="md:flex-row-reverse" />
    </div>
  )
}
