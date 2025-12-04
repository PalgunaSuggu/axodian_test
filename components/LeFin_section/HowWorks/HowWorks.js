import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, FileText } from "lucide-react";

const steps = [
    { id: 1, title: "Apply Online", description: "Speak to officers for your specific needs", icon: FileText },
    { id: 2, title: "Get Timely Approval", description: "Get the best offers that meets your requirements", icon: Clock },
    { id: 3, title: "Receive Funds", description: "Access working capital directly in your account.", icon: CheckCircle },
];

const HowWorks = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-16 md:pt-24 sm:pt-16">
            <h1 className="leading-tight text-center mb-12 text-gray-800">Get started in 3 steps</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {steps.map((step) => (
                    <Card key={step.id} className="bg-white shadow-sm rounded-lg p-6 sm:p-8 text-center md:text-start h-full flex flex-col">
                        <div className="bg-gradient-to-l from-blue-100 to-transparent p-4 rounded-full mb-6 md:mx-0">
                            <step.icon className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="flex-grow">
                            <h5 className="leading-tight text-gray-700">{step.title}</h5>
                            <p className="text-gray-500 mt-2 text-md md:text-lg">{step.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowWorks;
