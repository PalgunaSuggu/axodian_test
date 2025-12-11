import React from 'react'

const StepperFlowGrid = ({ steps = [], title = "Smart, Simple & Scalable" }) => {
    return (
        <div>
            <div className="bg-[#F9FAFB] py-16 md:py-24">
                <div className="container mx-auto text-center mb-12">
                    <h1 className="leading-tight text-black md:mb-12">{title}</h1>
                </div>
                <div className="relative container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200 w-full h-full relative overflow-hidden transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-9 h-9 rounded-bl-xl bg-gray-100 backdrop-blur-md text-gray-600 text-sm font-bold flex items-center justify-center shadow-md z-10 border border-blue-200">{index + 1}</div>
                                        <div className={`w-10 h-10 mb-4 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}><Icon className="w-5 h-5" /></div>
                                        <h5 className="leading-tight text-gray-800 mb-1">{step.title}</h5>
                                        <p className="text-gray-600 text-md md:text-lg">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepperFlowGrid