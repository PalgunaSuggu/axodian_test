import React from 'react'
import { ArrowRight, Building, Briefcase, Database, Handshake, Award } from 'lucide-react'
import CustomLink from '../../Reusable_section/CustomLink/CustomLink'

const partnerTypes = [
  {
    title: "Freight Forwarders/ CHAs",
    description: "Recommend LeDoc to your exporter clients and streamline document exchange.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    borderColor: "border-blue-200"
  },
  {
    title: "Chartered Accountants & Compliance Consultants",
    description: "Refer clients and help them get audit-ready with structured document workflows.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    borderColor: "border-purple-200"
  },
  {
    title: "Platform & ERP Providers",
    description: "Integrate LeDoc as a module or offer it as a plug-in to your exporter-facing systems.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-800",
    borderColor: "border-teal-200"
  }
]

const partnershipModels = [
  {
    title: "Referral Partners",
    description: "Introduce us to exporters. You earn on every successful onboarding.",
    icon: Building,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Reseller Partners",
    description: "Sell LeDoc to your customer base. We handle enablement, support & success.",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Integration Partners",
    description: "Build value-added workflows with LeDoc via APIs. Ideal for platform and ERP companies.",
    icon: Database,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    title: "Strategic Alliances",
    description: "Co-create solutions for exporter segments. Includes custom pricing and joint GTM.",
    icon: Handshake,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  }
]

const WhoShouldPartner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Who Should Partner Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12 text-center">
            <h1 className="text-gray-800 mb-4">Who Should Partner?</h1>
            <div className="w-36 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-10 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partnerTypes.map((type, index) => (
              <div key={index} className={`${type.bgColor} rounded-lg p-8 hover:shadow-lg transition-all duration-300 border ${type.borderColor} relative overflow-hidden group`}>
                <div className={`absolute inset-0 opacity-0 bg-gradient-to-br ${type.color} group-hover:opacity-5 transition-opacity duration-300`}></div>
                <h5 className={`${type.textColor} mb-4 border-b ${type.borderColor} pb-3`}>{type.title}</h5>
                <p className="text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Types of Partnerships Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="mb-12 text-center">
            <h1 className="text-gray-800 mb-4">Types of Partnerships</h1>
            <div className="w-40 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto mb-10 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipModels.map((model, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="p-6">
                  <div className={`${model.bgColor} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <model.icon className={`h-7 w-7 ${model.iconColor}`} />
                  </div>
                  <h5 className="text-gray-800 mb-3">{model.title}</h5>
                  <p className="text-gray-600">{model.description}</p>
                </div>
                <div className={`h-1.5 w-full bg-gradient-to-r ${model.color}`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Commercial Potential and CTA */}
        <div className="max-w-6xl mx-auto mt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Potential */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg p-8 md:p-10 h-full shadow-lg">
              {/* Background pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 transform -translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20"></div>
              </div>
              
              <div className="relative text-center h-full flex flex-col justify-center">
                <div className="inline-flex items-center justify-center bg-blue-700 p-3 rounded-full mb-5 border border-blue-400 shadow-md mx-auto">
                  <Award className="h-6 w-6 text-cyan-100" />
                </div>
                <h4 className="text-white mb-4">Immediate Commercial Potential</h4>
                <p className="text-blue-100">Earn commissions from your introductions while helping clients solve critical documentation gaps</p>
              </div>
            </div>
            
            {/* Partner Program */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 md:p-10 h-full border border-blue-200 shadow-md">
              <div className="relative text-center h-full flex flex-col justify-center">
                <h4 className="text-blue-800 mb-5">Join Our Partner Program</h4>
                <p className="text-blue-700 mb-8">Start a conversation with us. We&apos;ll help you explore the right model based on your audience, bandwidth, and business goals.</p>
                
                <div className="mt-auto">
                  <CustomLink href="" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Contact Us 
                    <div className="relative ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoShouldPartner