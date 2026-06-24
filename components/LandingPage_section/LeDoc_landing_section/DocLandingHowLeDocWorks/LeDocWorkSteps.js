import { Button } from '@/components/ui/button';
import { CheckCircle2, FileUp, Share2, ShieldCheck, Users } from 'lucide-react';

const steps = [
    {
        title: 'Set up users and partners ',
        icon: Users,
        color: 'bg-secondary-light-color',
    },
    {
        title: 'Set up your document and shipment workflow',
        icon: FileUp,
        color: 'bg-green-500',
    },
    {
        title: 'Upload or sync documents',
        icon: Share2,
        color: 'bg-purple-500',
    },
    {
        title: 'Ready to share amongst users and partners',
        icon: CheckCircle2,
        color: 'bg-yellow-400',
    },
    {
        title: 'Automated compliance management',
        icon: ShieldCheck,
        color: 'bg-red-500',
    },
];

const DocLeDocStepper = ({ formType, brand = "LeDoc" }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="leading-tight text-black mb-6">
                    Smart, Simple & Scalable - Here's How {brand} Works
                </h1>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
                <div className="absolute md:top-7 md:left-0 md:right-0 md:h-1 md:bg-gray-200 md:z-0 left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 z-0 md:w-auto md:translate-x-0" />

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={index} className="z-10 flex flex-col items-center text-center w-full md:w-auto relative">
                            <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-white shadow-md`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="inline-block uppercase text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-base font-semibold mt-4">
                                Step {index + 1}
                            </div>
                            <h5 className="mt-4 leading-tight bg-white sm:px-0 md:px-2 text-gray-800">{step.title}</h5>
                        </div>
                    );
                })}
            </div>

            <div className="text-center flex justify-center md:mt-20 mt-12">
                <Button onClick={scrollToTop} className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-secondary-light-color to-primary-color text-white rounded-lg hover:from-secondary-color hover:to-primary-light-color transition-all duration-300 shadow-lg">
                    Try {brand} Today!
                </Button>
            </div>
        </section>
    );
};

export default DocLeDocStepper;
