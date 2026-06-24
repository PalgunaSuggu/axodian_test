import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardList, ScrollText, Ship, ShieldCheck, Folder, FileSearch, Share2, Workflow, Globe, DollarSign, BarChart3, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

const solutions = [
    {
        id: "compliance-management",
        heading: "Compliance Management",
        subheading: "EDPMS reconciliation, EBRC tracking, and export compliance — managed end-to-end.",
        image: "/images/LeDocSuiteofSolutions.webp",
        features: [
            { icon: ClipboardList, text: "EDPMS reconciliation & closure" },
            { icon: ScrollText, text: "Automated EBRC generation" },
            { icon: Ship, text: "Shipping bill validation" },
            { icon: ShieldCheck, text: "AA/EPCG obligation tracking" },
        ],
        link: "/export-compliance-edpms-ebrc",
    },
    {
        id: "document-management",
        heading: "Document Management",
        subheading: "Centralised, secure, and organised trade documentation for exporters.",
        image: "/images/DocSuiteofSolutionsAx.webp",
        features: [
            { icon: Folder, text: "Centralised document repository" },
            { icon: FileSearch, text: "Instant search & retrieval" },
            { icon: Share2, text: "Seamless sharing with partners" },
            { icon: Workflow, text: "Industry-specific workflows" },
        ],
        link: "/onedoc-export-simplified",
    },
    {
        id: "export-payments",
        heading: "Export Payments",
        subheading: "Transparent, fast cross-border payments from 180+ countries.",
        image: "/images/LeRemittSuiteofSolutions.webp",
        features: [
            { icon: Globe, text: "Receive from 180+ countries" },
            { icon: DollarSign, text: "Multi-currency accounts (USD, EUR, GBP, CAD)" },
            { icon: BarChart3, text: "Interbank rates, 50% cheaper than banks" },
            { icon: ShoppingCart, text: "E-commerce checkout integration" },
        ],
        link: "/leremitt",
    },
];

const SuiteofSolutions = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-gray-900">Our Suite of Solutions</h1>
                    <p className="text-lg md:text-2xl max-w-2xl lg:max-w-3xl mx-auto mt-4 text-gray-600">
                        A unified platform for documentation, compliance, and payments — everything exporters need to trade globally with confidence.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <Card key={solution.id} className="bg-white shadow-none rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={solution.image}
                                    alt={solution.heading}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <CardContent className="p-6 flex-1 flex flex-col">
                                <h3 className="font-semibold text-gray-900 mb-2">{solution.heading}</h3>
                                <p className="text-base text-gray-600 mb-6">{solution.subheading}</p>

                                {/* Feature List */}
                                <ul className="space-y-3 flex-1">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <feature.icon className="w-10 h-10 text-primary-color bg-primary-color/10 p-2 rounded-[5px] flex-shrink-0" />
                                            <span className="text-base text-gray-700 mt-2">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Button
                                    onClick={() => router.push(solution.link)}
                                    className="mt-8 bg-primary-color hover:bg-primary-color/80 text-white font-medium rounded-lg flex items-center gap-2 p-5"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuiteofSolutions;
