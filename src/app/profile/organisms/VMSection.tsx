export const VMSection = () => {
    return (
        <div className="container">
            <div className="w-full space-y-10 md:space-y-28 p-5 md:p-0">
                <div className="w-full max-w-xl">
                    <h1 className="text-5xl font-semibold">Visi & Misi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus porro incidunt maxime ex accusamus similique? Illum esse, odio fuga similique soluta placeat adipisci vero officiis. Atque eius itaque asperiores reiciendis.</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-5">
                    <div className="relative md:w-1/2 w-full h-56 flex flex-col justify-center rounded-lg border border-black p-5">
                        <img className="absolute md:-top-24 right-0 -top-16 w-38 h-32 md:w-36 md:h-40" src="/section-profile-kami/icon-1.png" alt="" />
                        <h1 className="text-3xl md:text-5xl font-semibold">Visi</h1>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus porro incidunt maxime ex accusamus similique? Illum esse, odio fuga similique soluta placeat adipisci vero officiis. Atque eius itaque asperiores reiciendis.</p>
                    </div>
                    <div className="relative md:w-1/2 text-end md:text-start w-full h-56 flex flex-col justify-center rounded-lg border border-black p-5">
                        <img className="absolute md:-top-24 md:right-0 -top-20 left-0 w-38 h-32 md:w-36 md:h-40" src="/section-profile-kami/icon-2.png" alt="" />
                        <h1 className="text-3xl md:text-5xl font-semibold">Misi</h1>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus porro incidunt maxime ex accusamus similique? Illum esse, odio fuga similique soluta placeat adipisci vero officiis. Atque eius itaque asperiores reiciendis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}