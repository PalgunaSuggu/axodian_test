import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Register, Complete your KYC",
        description: "KYC verification & onboarding",
        image: "/images/HowLeRemWorks-01.webp",
    },
    {
        id: 2,
        title: "Get FCY Account",
        description: "Get Accounts in 4 Currencies- USD, EUR, GBP, CAD",
        image: "/images/HowLeRemWorks-02.webp",
    },
    {
        id: 3,
        title: "Upload Invoice & Receive Money",
        description: "Funds are credited directly to your Indian account  ",
        image: "/images/HowLeRemWorks-03.webp",
    },
    {
        id: 4,
        title: "Download e-FIRA",
        description: "Automated regulatory reporting for hassle-free compliance  ",
        image: "/images/HowLeRemWorks-04.webp",
    },
];

const HowWorks = () => {
    return (
        <div className="container mx-auto py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto mb-4 md:mb-16">
                <h1 className="leading-tight text-black mb-8">
                    <span className="md:block">Transparent, Simple, and Secure</span>
                    <span className="md:block">Get Paid in Just 4 Steps</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step) => (
                    <Card key={step.id} className="bg-[#f9fafb] text-gray-900 shadow-sm rounded-lg">
                        <Image src={step.image} alt={step.title} width={400} height={250} className="w-full h-auto rounded-lg" />
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <h5 className="leading-tight">{step.title}</h5>
                            </div>
                            <p className="text-md md:text-lg opacity-90">{step.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowWorks;
