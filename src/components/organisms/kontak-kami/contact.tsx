// components/ContactSection.tsx
import React from 'react'
import { Mail, Phone } from 'lucide-react'
import { Elipses } from '@/constants/component'

export const ContactSection = () => {
    const phoneNumber = '6281228467431'
    const email = 'agungdjatikusumaa@gmail.com'

    const whatsappLink = `https://wa.me/${phoneNumber}`
    const mailtoLink = `mailto:${email}`

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative flex flex-col justify-center items-center bg-blueprimary shadow-md rounded-lg h-[400px] md:h-[500px] p-6">
                <Elipses />
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">Kontak Kami</h1>
                <p className="mb-8 w-full md:w-3/5 text-base md:text-lg text-center text-white">
                    Jika Anda memiliki pertanyaan atau memerlukan informasi lebih lanjut, jangan ragu untuk menghubungi kami melalui WhatsApp atau email.
                </p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 w-full md:w-auto"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Hubungi via WhatsApp
                    </a>
                    <a
                        href={mailtoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 w-full md:w-auto"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        Kirim Email
                    </a>
                </div>
            </div>
        </div>
    )
}
