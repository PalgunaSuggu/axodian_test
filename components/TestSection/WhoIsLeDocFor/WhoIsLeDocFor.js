import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const audience = [
    {
        image: "/images/ExportersImporters.webp",
        title: "Exporters & Importers",
        description:
            "Across sectors: manufacturing, textiles, pharma, engineering goods, handicrafts, etc.",
    },
    {
        image: "/images/CFOsFinanceLeaders.webp",
        title: "CFOs & Finance Leaders",
        description:
            "Supporting and scaling global operations with compliance & payments.",
    },
    {
        image: "/images/CharteredAccountants.webp",
        title: "Chartered Accountants",
        description:
            "Helping trade businesses streamline documentation and stay compliant.",
    },
]

const WhoIsLeDocFor = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-6 bg-gray-50">
            <div className="text-center w-full">
                <h1 className="leading-tight text-gray-800">Who Is LeDoc For?</h1>

                <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
                    Built for India’s growth engines — SMBs and mid-market exporters/importers
                </p>

                <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Whether you ship{" "}
                    <span className="font-semibold text-gray-700">5 consignments a month</span> or{" "}
                    <span className="font-semibold text-gray-700">500</span>, LeRemitt is designed to help you manage
                    the complex back-office of global trade — without needing a large compliance or finance team.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {audience.map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition text-left flex flex-col gap-3">
                            <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover"/>
                            </div>

                            <h5 className="text-gray-800">{item.title}</h5>
                            <p className="text-gray-500 text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <Button className="p-6 px-8 text-white text-md font-semibold bg-gradient-to-b from-[#4D76FF] to-[#1A4FFF] rounded-lg hover:opacity-90">
                        See LeDoc in Action  <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default WhoIsLeDocFor
