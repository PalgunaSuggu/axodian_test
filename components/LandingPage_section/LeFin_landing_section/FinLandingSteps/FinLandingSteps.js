import { Button } from '@/components/ui/button';
import { ArrowRight, BadgeDollarSign, CheckCircle, FileText } from 'lucide-react';
import Image from 'next/image';
import LeFinDailogFrom from '../../../Reusable_section/ScheduleForm/LeFinDailogForm';

const steps = [
    {
        icon: FileText,
        title: 'Submit Basic Details',
        description: 'IEC, GST, shipment history',
        color: 'bg-blue-100 text-blue-600',
        number: '01',
    },
    {
        icon: BadgeDollarSign,
        title: 'Get Loan Offer',
        description: 'Pre-shipment or Post-shipment',
        color: 'bg-sky-100 text-sky-600',
        number: '02',
    },
    {
        icon: CheckCircle,
        title: 'Sign & Disburse',
        description: 'Digital KYC & funds in your account',
        color: 'bg-cyan-100 text-cyan-600',
        number: '03',
    },
];

const FinLandingSteps = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Steps */}
                    <div>
                        <h2 className="text-3xl md:text-4xl text-center md:text-start font-bold text-gray-900 mb-12">
                            Easy Application, Faster Disbursal
                        </h2>
                        <div className="space-y-10">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isEven = index % 2 === 1;

                                return (
                                    <div key={index} className={`flex justify-between items-center md:gap-4`}>
                                        {/* Number block - alternate left/right */}
                                        {isEven ? null : (
                                            <div className="text-4xl md:text-7xl font-bold text-gray-200 select-none w-20 text-left">
                                                {step.number}
                                            </div>
                                        )}

                                        {/* Card */}
                                        <div className="flex items-start w-full gap-4 bg-white shadow-2xl rounded-lg p-6">
                                            <div className={`p-3 rounded-full ${step.color}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                                                <p className="text-gray-600 text-lg">{step.description}</p>
                                            </div>
                                        </div>

                                        {/* Number block - for even index steps, move to right */}
                                        {isEven ? (
                                            <div className="text-4xl md:text-7xl font-bold text-gray-200 select-none w-20 text-right">
                                                {step.number}
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <Image src="/images/LeFinSteps.webp" alt="Customer" width={600} height={600} className="object-cover w-full h-auto" />
                </div>

                <div className='mt-8'>
                    <LeFinDailogFrom showProductOptions={true} buttonText="Submit" defaultSelected={['trade_finance']} formTitle="Know More">
                        <Button className="text-white bg-secondary-light-color hover:bg-blue-700 text-lg p-6 rounded-lg">
                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </LeFinDailogFrom>
                </div>
            </div>
        </section>
    );
};

export default FinLandingSteps;

