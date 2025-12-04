import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

const TestHome = () => {
    return (
        <div className="h-[58vh] lg:h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-black bg-[url('/images/test1.webp')]">
            <div className="bg-white/10 text-[#CFDBFF] text-sm mt-0 lg:mt-12 px-4 py-2 rounded-full flex items-center gap-4 backdrop-blur-md">
                <span>Cross-Border Payments Made Simple</span>
                <button className="bg-[#194FFF] hover:bg-secondary-light-color text-white rounded-full px-4 py-2">
                    <MoveRight className="w-4 h-4" />
                </button>
            </div>

            <h1 className="bannerText tracking-wider leading-snug text-white mt-4">
                <span className="block">Grow globally without</span>
                <span className="block">the paperwork holding you back</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-lg md:text-xl mt-4 max-w-3xl">
                LeRemitt helps SMBs and mid-market exporters/importers automate documentation,
                close compliances (IEDPMS/EDPMS, EBRCs), and manage cross-border payments —
                all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:px-0">
                <Button className="p-4 sm:p-6 sm:px-8 flex items-center justify-center gap-2 text-white text-md font-semibold bg-white/10 backdrop-blur-md border-2 border-solid border-white/30 rounded-full hover:bg-white/20 transition w-full sm:w-auto">
                    Request a Demo
                    <MoveRight className="w-5 h-5" />
                </Button>
                <Button className="p-4 sm:p-6 sm:px-8 flex items-center justify-center gap-2 text-white text-md font-semibold bg-white/10 backdrop-blur-md border-2 border-solid border-white/30 rounded-full hover:bg-white/20 transition w-full sm:w-auto">
                    Explore the Platform
                    <MoveRight className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

export default TestHome
