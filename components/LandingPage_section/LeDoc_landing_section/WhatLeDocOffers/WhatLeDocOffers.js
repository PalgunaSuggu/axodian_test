import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart2, CheckCircle, ClipboardCheck, FileBadge, FilePlus2, FileText, Layers, Search, Share2, ShieldCheck, Users, Zap } from "lucide-react"

const features = [
    { icon: Layers, text: "Centralized Document Storage" },
    { icon: FileText, text: "Single View of Shipping Documents" },
    { icon: Share2, text: "Seamless Sharing with Employees, CHAs & Bankers" },
    { icon: ShieldCheck, text: "Seamless ERP & System Integration" },
    { icon: Search, text: "Quick Search on Any Data Point or Document" },
    { icon: Users, text: "Multi-User Access & Collaboration" },
    { icon: BarChart2, text: "Advanced Business Insights & Reporting" },
    { icon: FilePlus2, text: "Industry-Specific Workflows" },
    { icon: ClipboardCheck, text: "Custom Document Creation" },
    { icon: FileBadge, text: "Shipping Bill Validation" },
    { icon: Zap, text: "EBRC Generation" },
    { icon: CheckCircle, text: "Simplified Compliance Responses" },
]

const WhatLeDocOffers = ({ formType, brand = "LeDoc" }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-16 md:py-24 min-h-screen md:h-screen bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')] md:flex md:items-center md:justify-center">
            <div className="container mx-auto">
                <h1 className="tleading-tight text-center mb-12 text-white">
                    <span className="block mb-2">A Smarter Way to Manage</span>
                    <span className="block">Export Documentation</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {features.map(({ icon: Icon, text }, idx) => (
                        <div key={idx} className="text-center">
                            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-black/70 transition-all duration-300 hover:border-white/40 min-h-[80px]">
                                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary-light-color to-primary-color flex items-center justify-center shadow-lg">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h6 className="text-white leading-tight font-medium text-xs sm:text-sm text-center sm:text-left">
                                        {text}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-12 flex justify-end max-w-6xl mx-auto px-4'>
                    <Button onClick={scrollToTop} className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-secondary-light-color to-primary-color text-white rounded-lg hover:from-secondary-color hover:to-primary-light-color transition-all duration-300 shadow-lg">
                        Try {brand} Today
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default WhatLeDocOffers
