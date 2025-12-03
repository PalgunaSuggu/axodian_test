import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Shield, BarChart } from 'lucide-react'

const partnersCta = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column */}
            <div className="p-6 flex flex-col justify-center relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute right-0 top-0 w-96 h-96 bg-secondary-light-color rounded-full translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 text-blue-600 font-medium text-sm rounded-full mb-6 border border-blue-100">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Trusted by 100+ Partners</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serve Exporters?</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">Join our exclusive partner network and grow your business with our premium export financing solutions.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Exclusive Network</h3>
                      <p className="text-gray-500">Join industry leaders in export finance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 mr-3">
                      <BarChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Revenue Growth</h3>
                      <p className="text-gray-500">Unlock new revenue streams</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/partners" className="group inline-flex items-center px-6 py-3 bg-secondary-light-color hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  Partner with LeDoc
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
            
            {/* Right column */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 flex items-center justify-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-light-color rounded-full opacity-20 -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-light-color rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner Program</h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">Access exclusive resources, training, and support to maximize your business potential</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-blue-100 text-sm">Active Partners</div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white mb-1">30%</div>
                    <div className="text-blue-100 text-sm">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default partnersCta