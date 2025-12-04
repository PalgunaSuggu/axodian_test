import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart2, CheckCircle, ClipboardCheck, FileBadge, FilePlus2, FileText, Layers, Search, Share2, ShieldCheck, Users, Zap } from "lucide-react"
import LeDocDailogForm from "../../../Reusable_section/ScheduleForm/LeDocDailogForm"

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

const WhatLeDocOffers = ({ formType }) => {
    return (
        <section className="py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto">
                <h1 className="tleading-tight text-center mb-12 text-white">
                    A Smarter Way to Manage Export Documentation
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map(({ icon: Icon, text }, idx) => (
                        <Card key={idx} className="bg-white/5 p-4 shadow-none text-white flex items-center gap-4">
                            <div className="w-16 h-16 min-w-[4rem] min-h-[4rem] rounded-lg bg-white flex items-center justify-center shadow-md">
                                <Icon className="w-8 h-8 text-[#1E77FF]" />
                            </div>
                            <h6 className="leading-tight">{text}</h6>
                        </Card>
                    ))}
                </div>

                <div className='mt-8 flex justify-end'>
                    <LeDocDailogForm defaultSelected={['document_management']} formType={formType}>
                        <Button className=" mt-2 text-white text-lg font-semibold bg-gradient-to-b from-[#234fdf] to-[#1A4FFF] rounded-lg hover:opacity-90">
                            Try LeDoc Today
                        </Button>
                    </LeDocDailogForm>
                </div>
            </div>
        </section>
    )
}

export default WhatLeDocOffers
