import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const HowWorks = ({ steps, titleOne, titleTwo, description }) => {
    return (
        <div className="container mx-auto py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto mb-4 md:mb-16">
                <h1 className="leading-tight text-black mb-2">
                    <span className="md:block">{titleOne}</span>
                    <span className="md:block">{titleTwo}</span>
                </h1>
                <p className="text-md md:text-lg opacity-90">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step) => (
                    <Card key={step.id} className="bg-[#f9fafb] text-gray-900 shadow-sm rounded-lg">
                        {step.image && (
                            <Image src={step.image} alt={step.title} width={400} height={250} className="w-full h-auto rounded-lg" />
                        )}
                        {step.Icon && (
                            <div className="flex items-center justify-center py-6">
                                <step.Icon className="w-16 h-16 text-secondary-color" />
                            </div>
                        )}
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <h5 className="leading-tight">{step.title}</h5>
                            </div>
                            {step.description && (
                                <p className="text-md md:text-lg opacity-90">{step.description}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowWorks;
