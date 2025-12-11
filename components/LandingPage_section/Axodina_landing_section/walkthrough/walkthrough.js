import { CheckCircle } from 'lucide-react';
import AxodianForm from '../../../Reusable_section/ScheduleForm/AxodianForm';

const features = [
    {
        title: "No commitment required",
        description: "See how it works with your specific needs"
    },
    {
        title: "Tailored to your trade flows",
        description: "Customized demo based on your business"
    },
    {
        title: "Expert guidance",
        description: "Get answers from our trade specialists"
    }
];

const Walkthrough = () => {
    return (
        <section className="relative py-24 lg:py-40  w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#ffffff",
                    backgroundImage: `radial-gradient(circle at top right, rgba(121, 83, 169, 0.2), transparent 50%), radial-gradient(circle at center, rgba(121, 83, 169, 0.3), transparent 50%),radial-gradient(circle at bottom left, rgba(121, 83, 169, 0.2), transparent 50%)`,
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="leading-tight  bg-gradient-to-r from-primary-color to-tertiary-light-color bg-clip-text text-transparent">Get your 20-minute walkthrough</h1>
                        <p className="text-lg md:text-xl text-slate-600">{`We'll map your current flow and show how Axodian reduces time to ship and time to cash.`}</p>

                        <div className="space-y-4 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="leading-tight text-slate-900">{feature.title}</h5>
                                        <p className="text-slate-600 text-base">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden border border-solid border-primary-color/20 w-full">
                        <div className="p-8">
                            <h4 className="leading-tight text-slate-900 mb-6 text-center">Book your session</h4>
                            <AxodianForm buttonText="Schedule my walkthrough" defaultSelected={['axodina']} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Walkthrough;