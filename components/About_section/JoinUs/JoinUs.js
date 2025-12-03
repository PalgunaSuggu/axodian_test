import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
// import CareerForm from '../../Reusable_section/CareerForm/CareerForm'

const JoinUs = () => {
    return (
        <div className="py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
                    {/* Main Image */}
                    <Image
                        src="/images/team01.webp"
                        alt="Main Visual"
                        width={300}
                        height={400}
                        className="rounded-lg shadow-lg w-full max-w-[400px] h-auto"
                    />

                    {/* Stacked Images */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/team02.webp"
                            alt="Team Collaboration"
                            width={500}
                            height={500}
                            className="rounded-tr-3xl shadow-lg w-full max-w-[400px] h-auto"
                        />
                        <Image
                            src="/images/team03.webp"
                            alt="Innovation Space"
                            width={500}
                            height={500}
                            className="rounded-br-3xl shadow-lg w-full max-w-[400px] h-auto"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-white text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-medium leading-snug">
                        Join Us
                    </h2>
                    <p className="mt-2 text-lg md:text-xl">
                        <span className="opacity-65">Build the Future of Trade with</span>{' '}
                        <span className="font-semibold">Axodian</span>
                    </p>
                    <p className="mt-4 text-lg md:text-xl opacity-65">
                        At LeRemitt, we are not just redefining global trade—we are building a smarter, more seamless future. If you are passionate about innovation, technology, and making a real impact, we would love to have you on board.
                    </p>
                    <p className="mt-4 text-lg md:text-xl opacity-65">
                        Explore open roles & be part of something transformative.
                    </p>

                    {/* Button */}
                        <Button 
                            onClick={() => window.location.href = 'mailto:hr@leremitt.com?subject=Application for Position at LeRemitt&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in exploring career opportunities at LeRemitt.%0D%0A%0D%0ABest regards,'}
                            className="mt-6 flex items-center gap-4 bg-white text-[#0049BA] font-semibold p-6 rounded-lg shadow-md hover:bg-gray-100 transition"
                        >
                            <span className="text-md md:text-lg">Join Our Team</span>
                            <MoveRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    {/* <CareerForm>
                        <Button className="mt-6 flex items-center gap-4 bg-white text-[#0049BA] font-semibold p-6 rounded-lg shadow-md hover:bg-gray-100 transition">
                            <span className="text-md md:text-lg">Join Our Team</span>
                            <MoveRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </CareerForm> */}
                </div>
            </div>
        </div>
    )
}

export default JoinUs
