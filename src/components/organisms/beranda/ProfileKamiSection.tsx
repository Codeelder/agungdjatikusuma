import Image from "next/image"
import Link from "next/link"

import { Handshake, MessageSquareText, MoveUpRight, Users } from "lucide-react"

export const ProfileKami = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-col-reverse gap-5 p-5 md:flex-row md:gap-0">
        <div className="flex w-full flex-col justify-between gap-10 md:w-2/5 md:gap-5 md:pr-5 md:pt-5 lg:gap-0">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Tentang Kami</h1>
            <p>
              Semakin berkembangnya dunia usaha
              dan memasuki era digitalisasi maka
              PT.Agung Djati Kusuma hadir untuk
              mengikuti perkembangan pasar,
              dengan beberapa bidang usaha jasa
              dan perdagangan. Kami berkomitmen
              memberikan pelayanan terbaik serta
              amanah untuk pelanggan.
            </p>
            <div className="flex gap-2">
              <div className="flex h-10 min-w-20 max-w-max items-center gap-2 rounded-lg bg-blueprimary p-2 text-white">
                <Users color="white" />
                <h5 className="text-xl">14</h5>
              </div>
              <div className="flex h-10 min-w-20 max-w-max items-center gap-2 rounded-lg bg-blueprimary p-2 text-white">
                <Handshake color="white" />
                <h5 className="text-xl">4</h5>
              </div>
              <div className="flex h-10 min-w-20 max-w-max items-center gap-2 rounded-lg bg-blueprimary p-2 text-white">
                <MessageSquareText color="white" />
                <h5 className="text-xl">9</h5>
              </div>
            </div>
          </div>
          <div>
            <Link
              href={"/profile"}
              className="flex h-10 w-40 items-center justify-center gap-2 rounded-lg bg-blueprimary"
            >
              <h5 className="text-xl text-white">Profile Kami</h5>{" "}
              <MoveUpRight color="white" size={14} />
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-end md:w-3/5">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={531}
            height={480}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
