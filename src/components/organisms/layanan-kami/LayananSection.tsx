import { DATAS } from "@/constants/layananLayout"

import { LayananLayout } from "@/components/molecules/layananLayout"

export const LayananSection = () => {
  return (
    <div className="container space-y-16">
      <LayananLayout data={DATAS[0]} order="lg:order-last" />
      <LayananLayout data={DATAS[1]} />
      <LayananLayout data={DATAS[2]} order="lg:order-last" />
      <LayananLayout data={DATAS[3]} />
    </div>
  )
}
