import React from 'react'
import { DollarSign, Users, Handshake, Zap } from 'lucide-react'

const benefitsData = [
  {
    title: "New Revenue Streams",
    description: "Earn through referral commissions, revenue share, or integration partnerships.",
    icon: DollarSign
  },
  {
    title: "Stronger Value for Your Clients",
    description: "Help your customers manage documentation, reduce shipment errors, and improve turnaround times.",
    icon: Users
  },
  {
    title: "Easy Collaboration",
    description: "From training to co-branded assets — we give you everything you need to succeed.",
    icon: Handshake
  },
  {
    title: "Early-Mover Advantage",
    description: "Be the first to offer your clients a solution that addresses their #1 pain point — document chaos.",
    icon: Zap
  }
]

const PartnersBenefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-gray-800 mb-4">Why Partner With LeRemitt?</h1>
          <div className="w-56 h-1 bg-secondary-light-color mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex p-6 items-start gap-5">
                <div className="shrink-0 bg-blue-50 rounded-lg p-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <benefit.icon className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-gray-800 mb-3 flex items-center">{benefit.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersBenefits