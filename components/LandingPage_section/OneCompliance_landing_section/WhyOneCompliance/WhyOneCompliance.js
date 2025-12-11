import { AlertTriangle, FileWarning, SearchX, TimerOff } from 'lucide-react';
import React from 'react';

const WhyOneCompliance = () => {
    const challenges = [
        {
            text: "Data scattered across DGFT, ICEGATE, bank statements and emails",
            icon: SearchX
        },
        {
            text: "Reconciliation done in Excel, with high chances of missing entries",
            icon: FileWarning
        },
        {
            text: "Endless follow-ups with banks for EDPMS closure and EBRC copies",
            icon: TimerOff
        },
        {
            text: "Fear of penalties, caution listing, and delayed refunds/drawbacks",
            icon: AlertTriangle
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-gray-900 mb-6">Why One Compliance?</h1>
                    <p className="text-lg md:text-2xl text-gray-600 font-medium">Because export compliance today is messy, manual, and risky.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {challenges.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                <item.icon className="w-6 h-6 text-red-500" />
                            </div>
                            <p className="text-gray-900 text-md md:text-lg leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-md md:text-xl text-gray-600 font-semibold leading-relaxed">One Compliance brings everything into one place – so your team spends less time chasing compliance, and more time growing exports.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyOneCompliance;