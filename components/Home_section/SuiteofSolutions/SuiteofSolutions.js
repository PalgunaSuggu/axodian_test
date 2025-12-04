// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Globe, DollarSign, ShoppingCart, FileText, Search, CheckCircle, Folder, ClipboardList, Truck, Package, ArrowRight, FileSearch, Share2, Workflow, FilePlus2, ScrollText, Ship, ShieldCheck } from "lucide-react";
// import { useRouter } from "next/router";

// const benefitsData = [
//     {
//         heading: "LeRemitt",
//         subheading: "Effortless & Transparent Cross-Border Payments",
//         cardContent: [
//             { icon: Globe, title: "Global Coverage", description: "Receive International Payments from 140+Countries" },
//             { icon: DollarSign, title: "Multi-Currency Support", description: "Multicurrency Accounts in USD, EURO, CAD, GBP" },
//             { icon: ShoppingCart, title: "E-Commerce Integration", description: "Check out Solutions for Cross border Ecommerce" },
//         ],
//         image: "/images/LeRemittSuiteofSolutions.webp",
//         link: "/leremitt",
//         reverse: false,
//     },
//     {
//         heading: "LeDoc",
//         subheading: "AI-Powered Document & Compliance Management for Exporters",
//         cardContent: [
//             [
//                 { icon: Folder, title: "Centralized Repository", description: "Store all documents in one secure location" },
//                 { icon: FileSearch, title: "Smart Search", description: "Find documents instantly with advanced search" },
//                 { icon: Share2, title: "Seamless Sharing", description: "Share with internal or extrnal partners seamlessly" },
//                 { icon: Workflow, title: "Industry Specific Workflows", description: "Customize workflows as per your requirements" },
//             ],
//             [
//                 { icon: FilePlus2, title: "Generate Templates", description: "Digitalize customer/process specific Templates" },
//                 { icon: ScrollText, title: "EBRC Generation", description: "Integrate into DGFT for autmated EBRC generation" },
//                 { icon: Ship, title: "Shipping Bill Validation", description: "Autmated shipping bills validation" },
//                 { icon: ShieldCheck, title: "Advanced Authorization Tracking", description: "Autmate AA/EPCG obligation tracking" },

//             ]
//         ],
//         image: "/images/LeDocSuiteofSolutions.webp",
//         link: "/ledoc",
//         reverse: true,
//     },
//     {
//         heading: "LeFin",
//         subheading: "Financial Solutions to support Global Trade",
//         cardContent: [
//             { icon: Package, title: "Pre-Shipment Financing", description: "Get the capital you need to fulfill orders before shipping." },
//             { icon: Truck, title: "Post-Shipment Financing", description: "Bridge the gap between shipping and payment receipt." },
//             { icon: DollarSign, title: "Factoring Solutions", description: "Buyer-led Non-Recourse financing options" },
//         ],
//         image: "/images/LeFinSuiteofSolutions.webp",
//         link: "/trade-finance-solution",
//         reverse: false,
//     },
// ];

// const SuiteofSolutions = () => {
//     const router = useRouter();

//     return (
//         <div className="bg-gray-50 py-16 md:py-24">
//             <div className="container mx-auto grid gap-8">
//                 <div>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 font-bold text-gray-900">
//                         Our Suite of Solutions
//                     </h2>
//                     <p className="text-lg max-w-2xl lg:max-w-3xl mx-auto  text-center text-black">
//                         A Unified Platform for Global Business Success
//                     </p>
//                 </div>

//                 {benefitsData.map((benefit, index) => (
//                     <Card key={index} className={`flex flex-col md:flex-row bg-white rounded-lg shadow-none ${benefit.reverse ? 'md:flex-row-reverse' : ''}`}>
//                         <Image src={benefit.image} alt={benefit.heading} width={500} height={300} className="w-full md:w-1/2 h-auto" loading="lazy" />
//                         <CardContent className="md:w-1/2 py-8 pl-8">
//                             <h2 className="text-3xl font-bold text-blue-600 mb-2">{benefit.heading}</h2>
//                             <p className="text-lg max-w-2xl lg:max-w-3xl mb-6 mx-auto text-black">
//                                 {benefit.subheading}
//                             </p>
//                             <ul className="space-y-4">
//                                 {Array.isArray(benefit.cardContent[0]) ? (
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
//                                         <div>
//                                             {benefit.cardContent[0].map((item, idx) => (
//                                                 <li key={idx} className="flex items-start gap-4 mb-4">
//                                                     <item.icon className="w-9 h-9 p-2 rounded-full text-blue-600 bg-blue-100" />
//                                                     <div>
//                                                         <p className="font-semibold text-lg lg:text-xl text-gray-700 mb-1">{item.title}</p>
//                                                         <p className="text-gray-600 text-md">{item.description}</p>
//                                                     </div>
//                                                 </li>
//                                             ))}
//                                         </div>
//                                         <div>
//                                             {benefit.cardContent[1].map((item, idx) => (
//                                                 <li key={idx} className="flex items-start gap-4 mb-4">
//                                                     <item.icon className="w-9 h-9 p-2 rounded-full text-blue-600 bg-blue-100" />
//                                                     <div>
//                                                         <p className="font-semibold text-lg lg:text-xl text-gray-700 mb-1">{item.title}</p>
//                                                         <p className="text-gray-600 text-md">{item.description}</p>
//                                                     </div>
//                                                 </li>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     benefit.cardContent.map((item, idx) => (
//                                         <li key={idx} className="flex items-start gap-4">
//                                             <item.icon className="w-9 h-9 p-2 rounded-full text-blue-600 bg-blue-100" />
//                                             <div>
//                                                 <p className="font-semibold text-lg lg:text-xl text-gray-700 mb-1">{item.title}</p>
//                                                 <p className="text-gray-600 text-md">{item.description}</p>
//                                             </div>
//                                         </li>
//                                     ))
//                                 )}
//                             </ul>
//                             <Button onClick={() => router.push(benefit.link)} className="bg-secondary-light-color hover:bg-blue-700 rounded-lg text-white font-medium mt-4 p-4 flex items-center gap-2">
//                                 Learn More <ArrowRight className="w-4 h-4" />
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SuiteofSolutions;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, DollarSign, FilePlus2, FileSearch, Folder, Globe, Package, ScrollText, Share2, ShieldCheck, Ship, ShoppingCart, Truck, Workflow } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';

const benefitsData = [
    {
        id: "ledoc",
        heading: "LeDoc",
        subheading: (
            <>
                Document & Compliance Management <br /> for Exporters
            </>
        ),
        defaultImage: "/images/DocSuiteofSolutionsAx.webp",
        activeImage: "/images/DocSuiteofSolutions1.png",
        cardContent: [
            [
                { icon: Folder, title: "Centralized Repository", description: "Store all documents in one secure location" },
                { icon: FileSearch, title: "Smart Search", description: "Find documents instantly with advanced search" },
                { icon: Share2, title: "Seamless Sharing", description: "Share with internal or extrnal partners seamlessly" },
                { icon: Workflow, title: "Industry Specific Workflows", description: "Customize workflows as per your requirements" },
            ],
            [
                { icon: FilePlus2, title: "Generate Templates", description: "Digitalize customer/process specific Templates" },
                { icon: ScrollText, title: "EBRC Generation", description: "Integrate into DGFT for autmated EBRC generation" },
                { icon: Ship, title: "Shipping Bill Validation", description: "Automate shipping bills validation" },
                { icon: ShieldCheck, title: "Advanced Authorization Tracking", description: "Autmate AA/EPCG obligation tracking" },

            ]
        ],
        image: "/images/LeDocSuiteofSolutions.webp",
        link: "/ledoc",
        reverse: true,
    },
    {
        id: "leremitt",
        heading: "LeRemitt",
        subheading: (
            <>
                Effortless & Transparent cross-border payments
            </>
        ),
        defaultImage: "/images/RemSuiteofSolutionsAx.webp",
        activeImage: "/images/RemSuiteofSolutions1.png",
        cardContent: [
            { icon: Globe, title: "Global Coverage", description: "Receive International Payments from 140+Countries" },
            { icon: DollarSign, title: "Multi-Currency Support", description: "Multicurrency Accounts in USD, EURO, CAD, GBP" },
            { icon: ShoppingCart, title: "E-Commerce Integration", description: "Check out Solutions for Cross border Ecommerce" },
        ],
        image: "/images/LeRemittSuiteofSolutions.webp",
        link: "/leremitt",
        reverse: false,
    },
    {
        id: "lefin",
        heading: "LeFin",
        subheading: (
            <>
                Financial solutions to support global trade
            </>
        ),
        defaultImage: "/images/FinSuiteofSolutionsAx.webp",
        activeImage: "/images/FinSuiteofSolutions1.png",
        cardContent: [
            { icon: Package, title: "Pre-Shipment Financing", description: "Get the capital you need to fulfill orders before shipping." },
            { icon: Truck, title: "Post-Shipment Financing", description: "Bridge the gap between shipping and payment receipt." },
            { icon: DollarSign, title: "Factoring Solutions", description: "Buyer-led Non-Recourse financing options" },
        ],
        image: "/images/LeFinSuiteofSolutions.webp",
        link: "/trade-finance-solution",
        reverse: false,
    },
];

const SuiteofSolutions = () => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState("leremitt");
    const [isHovered, setIsHovered] = useState(false);
    const autoPlayTimeoutRef = useRef(null);

    useEffect(() => {
        if (isHovered) return;

        autoPlayTimeoutRef.current = setTimeout(() => {
            const currentIndex = benefitsData.findIndex(b => b.id === currentTab);
            const nextIndex = (currentIndex + 1) % benefitsData.length;
            setCurrentTab(benefitsData[nextIndex].id);
        }, 5000);

        return () => {
            if (autoPlayTimeoutRef.current) {
                clearTimeout(autoPlayTimeoutRef.current);
            }
        };
    }, [currentTab, isHovered]);

    const handleTabChange = (value) => {
        setCurrentTab(value);
        if (autoPlayTimeoutRef.current) {
            clearTimeout(autoPlayTimeoutRef.current);
        }
    };

    return (
        <div className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center mb-32">
                    <h1 className="text-gray-900">Our Suite of Solutions</h1>
                </div>

                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="w-full bg-transparent p-0 my-20">
                            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                                {benefitsData.map((benefit) => {
                                    const isActive = currentTab === benefit.id;
                                    return (
                                        <TabsTrigger key={benefit.id} value={benefit.id} className={`p-0 w-full h-full`}>
                                            <Card className={`h-full w-full bg-secondary-color shadow-none ${isActive ? 'bg-primary-color text-white' : 'text-white'}`}>
                                                <div className="relative w-full overflow-hidden hidden md:block">
                                                    <Image src={isActive ? benefit.activeImage : benefit.defaultImage} alt={benefit.heading} width={400} height={100} loading="lazy" className="object-cover w-full h-48 rounded-lg" />

                                                    <div className={`absolute bottom-0 left-0 w-full h-1/2 pointer-events-none ${isActive
                                                        ? 'bg-gradient-to-b from-transparent to-secondary-color'
                                                        : 'bg-gradient-to-b from-transparent to-primary-color'
                                                        }`} />
                                                </div>
                                                <div className="p-4 text-left">
                                                    <h5 className="font-bold mb-2">{benefit.heading}</h5>
                                                    <p className="text-lg font-normal">{benefit.subheading}</p>
                                                </div>
                                            </Card>
                                        </TabsTrigger>
                                    )
                                })}
                            </div>
                        </TabsList>

                        {benefitsData.map((benefit) => (
                            <TabsContent key={benefit.id} value={benefit.id} className='mt-20'>
                                <Card className={`flex flex-col md:flex-row bg-white rounded-lg shadow-none ${benefit.reverse ? 'md:flex-row-reverse' : ''}`}>
                                    <Image src={benefit.image} alt={benefit.heading} width={500} height={300} className="w-full md:w-1/2 h-auto object-cover" loading="lazy" />
                                    <CardContent className="md:w-1/2 py-8 pl-8">
                                        <h3 className="text-primary-color mb-2">{benefit.heading}</h3>
                                        <p className="text-lg mb-6 text-black">{benefit.subheading}</p>
                                        <ul className="space-y-4">
                                            {Array.isArray(benefit.cardContent[0]) ? (
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
                                                    <div>
                                                        {benefit.cardContent[0].map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-4 mb-4">
                                                                <item.icon className="w-9 h-9 p-2 rounded-full text-primary-color bg-primary-color/10" />
                                                                <div>
                                                                    <p className="font-semibold text-lg text-gray-700 mb-1">{item.title}</p>
                                                                    <p className="text-gray-600 text-md">{item.description}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </div>
                                                    <div>
                                                        {benefit.cardContent[1].map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-4 mb-4">
                                                                <item.icon className="w-9 h-9 p-2 rounded-full text-primary-color bg-primary-color/10" />
                                                                <div>
                                                                    <p className="font-semibold text-lg text-gray-700 mb-1">{item.title}</p>
                                                                    <p className="text-gray-600 text-md">{item.description}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                benefit.cardContent.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4">
                                                        <item.icon className="w-10 h-10 p-2 rounded-full text-primary-color bg-primary-color/10" />
                                                        <div>
                                                            <p className="font-semibold text-lg text-gray-700 mb-1">{item.title}</p>
                                                            <p className="text-gray-600 text-md">{item.description}</p>
                                                        </div>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                        <Button onClick={() => router.push(benefit.link)} className="h-10 px-4 rounded-lg text-white font-medium mt-6 flex items-center gap-2 bg-primary-color hover:bg-primary-color/80 transition-all duration-500">
                                            <span className="flex items-center gap-2">
                                                Learn More
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default SuiteofSolutions;

