import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const FeaturesData = [
    {
        id: 1,
        title: "Audit-Ready Digital Storage",
        description: "Securely stores documents for compliance audits",
        image: "/images/LeDocFeatures_01.webp",
    },
    {
        id: 2,
        title: "Search at the click of button",
        description: "Search through Data or Documents for Audit/ Compliances",
        image: "/images/LeDocFeatures_02.webp",
    },
    {
        id: 3,
        title: "Search at the click of button",
        description: "Search through Data or Documents for Audit/ Compliances",
        image: "/images/LeDocFeatures_03.webp",
    },
    {
        id: 4,
        title: "Multi-User Access & Collaboration",
        description: "Internal teams and external parties can edit, review, and approve in real time",
        image: "/images/LeDocFeatures_04.webp",
    },
    {
        id: 5,
        title: "AI-Driven Document Generation",
        description: "Creates customer specific document templates and compliance documents instantly",
        image: "/images/LeDocFeatures_05.webp",
    },
    {
        id: 6,
        title: "Real-Time Status Tracking",
        description: "Monitor Consignment progress from Initiation to Closure",
        image: "/images/LeDocFeatures_06.webp",
    },
    {
        id: 7,
        title: "Seamless ERP & Any other system Integration",
        description: "Works with leading ERP and Accounting, Tracking systems",
        image: "/images/LeDocFeatures_07.webp",
    },
    {
        id: 8,
        title: "Advanced Business Insights & Reporting",
        description: "Gain real-time analytics for smarter decision-making",
        image: "/images/LeDocFeatures_08.webp",
    },
];

const LeDocFeatures = () => {
    return (
        <div className="bg-cover bg-center text-white bg-blue-100 bg-[url('/images/comboColor.webp')] py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    {/* <div className="inline-block text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-full text-md font-semibold mb-4">FEATURES</div> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-10">
                        What Makes LeDoc the Ultimate Trade Documentation Tool?
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {FeaturesData.map((feature, index) => (
                        <Card key={feature.id} className={`bg-[#F8FAFB] shadow-sm rounded-lg border border-gray-200 ${index < 6 ? "md:col-span-2" : "md:col-span-3"}`}>
                            <CardContent className="p-0">
                                <Image src={feature.image} alt={feature.title} width={400} height={300} className="w-full h-auto rounded-lg" />
                                <div className="p-4 pt-0">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-md md:text-lg">{feature.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeDocFeatures;
