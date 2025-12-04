import { ArrowRight, Check } from 'lucide-react';
import React from 'react'

const partnerBenefits = [
  "AI-powered document management solutions",
  "Streamlined compliance and documentation",
  "New revenue opportunities for partners"
];

const PartnerBanner = () => {
  return (
    <section className="min-h-screen flex items-center justify-start bg-cover bg-center py-24 relative bg-[url('/images/PartnerBanner.webp')]">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl">
          <h1 className="text-white mb-8 leading-tight">Grow Your Business with <span className="text-blue-400">LeRemitt</span></h1>

          <div className="w-72 h-1 bg-secondary-light-color mb-8 rounded-full"></div>

          <p className="text-lg text-blue-50 mb-8 leading-relaxed">
            Help exporters succeed with LeDoc while creating new revenue streams for your business.
          </p>

          <button className="bg-secondary-light-color hover:bg-secondary-light-color text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center duration-300 group mb-12">
            Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl mt-4">
            <h3 className="text-white mb-6">How We Empower Partners</h3>

            <div className="md:flex gap-4 items-center">
              {partnerBenefits.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-secondary-light-color rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-md">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 mt-6 text-lg">
              At LeRemitt, we simplify international trade for Indian exporters and importers through our AI-powered document management platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerBanner