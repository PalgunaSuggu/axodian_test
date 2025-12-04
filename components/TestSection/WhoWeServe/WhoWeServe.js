import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const WhoWeServe = () => {
    return (
        <section className="w-full py-16 lg:py-32 px-6 bg-white bg-[url('/images/WeServe.webp')] bg-cover bg-center bg-no-repeat text-center">
            <h1 className="leading-tight text-gray-800">Who We Serve</h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
                Built for India’s growth engines — SMBs and mid-market exporters/importers
            </p>

            <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you ship <span className="font-semibold text-gray-700">5 consignments a month</span> or
                <span className="font-semibold text-gray-700"> 500</span>, LeRemitt is designed to help you manage
                the complex back-office of global trade — without needing a large compliance or finance team.
            </p>

            <div className="mt-8">
                <Button className="p-6 px-8 text-white text-md font-semibold bg-gradient-to-b from-[#4D76FF] to-[#1A4FFF] rounded-lg hover:opacity-90">
                    Start Free Trial  <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </section>
    )
}

export default WhoWeServe
