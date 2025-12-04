import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '@/components/ui/separator'

const AxodianFooter = () => {
    return (
        <div className=" w-full relative flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 20%, #22277A 100%)", }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 lg:py-28">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="leading-tight text-center font-bold mb-4 md:mb-6">
                        <span className="bg-gradient-to-r from-purple-200 via-secondary-light-color to-secondary-color bg-clip-text text-transparent">Ready to simplify your next shipment?</span>
                    </h1>

                    <p className="text-sm md:text-lg lg:text-xl text-center text-gray-300 mb-8 md:mb-12">See Axodian in action and map your fastest path to value.</p>

                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <Button size="lg" className="text-lg py-6 px-8 bg-secondary-light-color/30 hover:bg-secondary-light-color/50">
                            Book a 20-minute walkthrough
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8 bg-transparent border-solid border-secondary-light-color/60 text-white hover:bg-secondary-light-color/30 hover:text-white">
                            <Link href="/product-overview.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Product Overview (PDF)
                            </Link>
                        </Button>
                    </div>
                </div>

                <Separator className="my-16 md:my-24 h-[1px] bg-tertiary-light-color/30" />

                <div className="mx-auto container">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                        <div>
                            <div className="mb-6 md:mb-8 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px]">
                                <Image src="/images/axodian-Logo-nav.webp" alt="Axodian Logo" width={300} height={200} className="w-full h-auto" priority />
                            </div>
                            <p className="text-base md:text-lg max-w-md text-slate-400 mt-4 md:mt-6">
                                Documentation, payments, and financing in one connected environment. Move faster with confidence in global trade.
                            </p>
                        </div>

                        <div className="md:text-right space-y-4 md:space-y-5 mt-6 md:mt-0">
                            <div>
                                <Link href="mailto:connect@axodian.com" className="text-lg text-slate-500 hover:text-secondary-light-color transition-colors">connect@axodian.com</Link>
                            </div>
                            <div className="text-lg text-slate-500">1185, 5th Main Road, 7th Sector, HSR Layout Bengaluru, 560102</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 text-base md:text-lg text-slate-500">
                        <div>
                            &copy; {new Date().getFullYear()} Axodian. All rights reserved.
                        </div>
                        <div className="flex gap-6 md:gap-8 mt-4 sm:mt-0">
                            <Link href="#" className="text-lg hover:text-secondary-light-color transition-colors">Privacy</Link>
                            <Link href="#" className="text-lg hover:text-secondary-light-color transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AxodianFooter