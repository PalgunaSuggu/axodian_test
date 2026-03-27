import React from 'react'
import OneComplianceForm from '../../../Reusable_section/ScheduleForm/OneComplianceForm'

const BookDemo = ({ redirectTo }) => {
  return (
         <section className="py-24 relative overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)" }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-white mb-6 leading-tight">Ready to simplify your export compliance?</h1>
                    <p className="text-lg md:text-2xl mb-6 text-gray-300 max-w-3xl mx-auto">Leave your details and we’ll get you early access as soon as Beta ends unless you would like to be part of Beta.</p>
                    <p className="text-lg text-gray-400 bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-solid border-white/20 mb-10">
                        For exporters handling <span className="font-semibold text-white">5+ shipments per month</span>
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <OneComplianceForm redirectTo={redirectTo} />
                </div>
            </div>
        </section>
  )
}

export default BookDemo