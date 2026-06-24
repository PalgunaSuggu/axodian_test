

// import { Card, CardContent } from "@/components/ui/card";
// import { Briefcase, Settings, ShieldCheck, Star } from "lucide-react";

// const benefits = [
//     {
//         id: 1,
//         title: "Efficient Export Solutions",
//         description: "Covering documentation, compliance, payments, and financing — built to remove everyday friction.",
//         icon: Briefcase,
//     },
//     {
//         id: 2,
//         title: "Compliance Without Chaos",
//         description: "Automated reconciliation for EDPMS and EBRC workflows with fewer follow-ups and fewer errors.",
//         icon: Settings,
//     },
//     {
//         id: 3,
//         title: "AI-Assisted Workflows",
//         description: "Streamline tasks across documentation, tracking, reconciliation, and payout visibility.",
//         icon: ShieldCheck,
//     },
//     {
//         id: 4,
//         title: "Trusted by Growing Exporters",
//         description: "A proven suite of solutions designed around real export operations, not generic tools.",
//         icon: Star,
//     },
// ];

// const WhyLeRemitt = () => {
//     return (
//         <div className="py-20 md:py-32 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
//             <div className="container mx-auto">
//                 <h1 className="text-white leading-tight mb-12 text-center">
//                     <span className="md:block">Built for Exporters Who Need</span>
//                     <span className="md:block"><span className="text-secondary-light-color">Clarity</span>, Speed & Control</span>
//                 </h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {benefits.map((benefit) => (
//                         <Card key={benefit.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-200 h-full">
//                             <CardContent className="p-6">
//                                 <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
//                                     <div className="flex-shrink-0 bg-secondary-light-color/10 p-3 rounded-lg">
//                                         <benefit.icon className="w-8 h-8 text-secondary-light-color" />
//                                     </div>
//                                     <div>
//                                         <h5 className="text-white mb-2">{benefit.title}</h5>
//                                         <p className="text-gray-300 text-base leading-relaxed">{benefit.description}</p>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhyLeRemitt;


import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Settings, ShieldCheck, Star } from "lucide-react";

const benefits = [
    {
        id: 1,
        title: "Efficient Trade Solutions",
        description: "Covering documentation, payments, and compliance to simplify end-to-end trade operations.",
        icon: Briefcase,
    },
    {
        id: 2,
        title: "AI-Driven Automation",
        description: "Seamlessly automate processes from post-ERP integration to eBRC generation with minimal manual effort.",
        icon: Settings,
    },
    {
        id: 3,
        title: "Compliant & Secure",
        description: "Stay on top of export trade compliance regulations with secure, audit-ready workflows.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Trusted by Top Exporters",
        description: "A proven track record in simplifying trade for exporters operating at scale.",
        icon: Star,
    },
];

const WhyLeRemitt = () => {
    return (
        <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                
                {/* LEFT SIDE */}
                <div className="md:col-span-5 flex justify-center md:justify-start items-center text-center md:text-left">
                    <h1 className="font-bold md:max-w-3xl">
                        Built for Businesses That Trade Without Boundaries
                    </h1>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                    {benefits.map((benefit) => (
                        <Card
                            key={benefit.id}
                            className="bg-transparent border-none shadow-none text-white"
                        >
                            <CardContent className="p-0">
                                <div className="flex items-center gap-3 mb-3">
                                    <benefit.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-[5px]" />
                                    <h3 className="font-semibold">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg opacity-65">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyLeRemitt;

