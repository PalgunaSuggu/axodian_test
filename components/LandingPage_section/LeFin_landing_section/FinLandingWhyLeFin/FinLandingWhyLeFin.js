import React from 'react';
import { TimerReset, Globe, Laptop } from 'lucide-react';

const benefits = [
    {
        icon: TimerReset,
        title: 'Timely Approvals',
        description: 'Minimal paperwork, quick turnaround',
    },
    {
        icon: Globe,
        title: 'Tailored for Export Needs',
        description: 'Loans linked to your export cycle',
    },
    {
        icon: Laptop,
        title: 'Digital Process',
        description: 'No branch visits, no hidden charges',
    },
];

const FinLandingWhyLeFin = () => {
    return (
        <section className="flex items-center text-center bg-gray-50 py-16 md:py-24 text-black">
            <div className='container mx-auto'>
                <h1 className="leading-tight text-gray-900 mb-4 z-10">
                    Built for Exporters. Backed by LeRemitt.
                </h1>
                <p className="text-gray-900 text-xl max-w-2xl mx-auto mb-12">
                    We understand your export cycle and built LeFin to match your cash flow with fast, digital funding.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index}className="backdrop-blur-xl bg-black/5 border border-solid border-black/10 rounded-lg p-6">
                                <div className="flex justify-center items-center mb-6">
                                    <Icon className="text-blue-600 w-12 h-12 transition-transform duration-300 group-hover:rotate-6" />
                                </div>
                                <h5 className="leading-tight mb-2">{benefit.title}</h5>
                                <p className="text-gray-800 text-lg">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FinLandingWhyLeFin;
