"use client";
import { Circle, Elipse } from '@/constants/component';
import { useState } from 'react'

export const PerizinanSection = () => {
    const [selectedImage, setSelectedImage] = useState('/section-profile-kami/npwp.jpeg');
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const items = [
        { id: 0, title: "Nomor Pokok Wajib Pajak (NPWP)", img: "/section-profile-kami/npwp.jpeg" },
        { id: 1, title: "Akta Perusahaan", img: "/section-profile-kami/akteperusahaan.png" },
    ];

    const handleClick = (index: number, img: string) => {
        setSelectedImage(img);
        setActiveIndex(index);
    };

    return (
        <div className="container">
            <div className="lg:flex h-[433px]">
                <div className="relative w-full lg:w-3/5 flex justify-center rounded-xl bg-blueprimary p-5">
                    <img className='z-10' src={selectedImage} alt="" />
                    <Elipse className='absolute -top-16 left-20 -rotate-90'/>
                    <Elipse className='absolute -bottom-16 right-20 rotate-90'/>
                </div>
                <div className="relative w-full lg:w-2/5 flex flex-col items-end px-1 space-y-5">
                    <div className="text-end">
                        <h1 className="text-3xl lg:text-5xl font-semibold">Perizinan Perusahaan</h1>
                        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit </p>
                    </div>
                    <div className="h-max">
                        <ol className="relative w-max text-end border-e border-black">
                            {items.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`mb-10 me-4 cursor-pointer ${activeIndex === index ? 'text-blue-700 font-bold' : 'text-gray-900 '}`}
                                    onClick={() => handleClick(index, item.img)}
                                >
                                    <div className={`absolute w-3 h-3 rounded-full mt-1.5 -end-1.5 border border-black ${activeIndex === index ? 'bg-blue-700' : 'bg-gray-200'}`}></div>
                                    <h3 className="text-base lg:text-lg font-semibold">{item.title}</h3>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <Circle className="absolute hidden lg:block -bottom-1 -right-1 rotate-[180deg]" stroke='#1D24CA' />
                </div>
            </div>
        </div>
    );
};
