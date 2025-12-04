import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Shield, Users } from 'lucide-react'
import Link from "next/link"

const features = [
  {
    icon: CheckCircle,
    text: "Built with a compliance-first mindset",
    color: "text-green-400"
  },
  {
    icon: Shield,
    text: "Bank-grade security",
    color: "text-blue-400"
  },
  {
    icon: Users,
    text: "Designed for exporters and importers",
    color: "text-purple-400"
  }
]

const AxodianBanner = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #663399 100%)" }} />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 bannerText leading-tight lg:mb-8">
            <span className="bg-gradient-to-r from-purple-200 via-tertiary-color to-primary-color bg-clip-text text-transparent">Global Trade. Simplified.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300 sm:text-xl md:mb-12 md:text-2xl">
            Axodian brings documentation and compliance, payments, and financing together
            so you can move faster with confidence.
          </p>

          <div className="mb-14 flex flex-col justify-center gap-4 sm:mb-16 sm:flex-row md:mb-20">
            <Button size="lg" className="text-lg py-6 px-8 bg-primary-light-color/30 hover:bg-primary-light-color/50 transition-colors duration-200">Book a 20-minute walkthrough</Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8 bg-transparent border-solid border-primary-light-color/60 text-white hover:bg-primary-light-color/30 hover:text-white transition-colors duration-200"><Link href="/product-overview.pdf" download>Product Overview (PDF)</Link></Button>
          </div>

          <div className="flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base text-gray-400 sm:flex-row">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className={`mr-2 h-5 w-5 flex-shrink-0 ${feature.color}`} aria-hidden="true" />
                <span className="whitespace-nowrap">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AxodianBanner