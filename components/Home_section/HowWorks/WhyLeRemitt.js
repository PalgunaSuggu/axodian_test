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
//         <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
//                 <div className="md:col-span-5 flex justify-center md:justify-start items-center text-center md:text-left">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white md:max-w-3xl">Built for Exporters Who Need Clarity, Speed & Control</h1>
//                 </div>

//                 <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
//                         <div>
//                             {benefits.map((benefit, i) => (
//                                 <div key={benefit.id}>
//                                     <Card className="bg-transparent border-none shadow-none text-white">
//                                         <CardContent className="p-0">
//                                             <div className="flex items-center gap-3 mb-3">
//                                                 <benefit.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-[5px]" />
//                                                 <h3 className="text-xl font-semibold">{benefit.title}</h3>
//                                             </div>
//                                             <p className="text-md md:text-lg opacity-65">{benefit.description}</p>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             ))}
//                                 </div>
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
        title: "Efficient Export Solutions",
        description: "Covering documentation, compliance, payments, and financing — built to remove everyday friction.",
        icon: Briefcase,
    },
    {
        id: 2,
        title: "Compliance Without Chaos",
        description: "Automated reconciliation for EDPMS and EBRC workflows with fewer follow-ups and fewer errors.",
        icon: Settings,
    },
    {
        id: 3,
        title: "AI-Assisted Workflows",
        description: "Streamline tasks across documentation, tracking, reconciliation, and payout visibility.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Trusted by Growing Exporters",
        description: "A proven suite of solutions designed around real export operations, not generic tools.",
        icon: Star,
    },
];

const WhyLeRemitt = () => {
    return (
        <div className="py-20 md:py-32 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-12 max-w-3xl mx-auto text-center text-balance">Built for Exporters Who Need <span className="text-secondary-light-color">Clarity</span>, Speed & Control</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-200 h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-secondary-light-color/10 p-3 rounded-lg">
                                            <benefit.icon className="w-8 h-8 text-secondary-light-color" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                                            <p className="text-gray-300 text-md leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyLeRemitt;