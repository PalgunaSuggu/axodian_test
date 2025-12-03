import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Settings, Globe } from "lucide-react";

const ValuesData = [
    {
        id: 1,
        title: "Built for Businesses",
        description: "Designed to simplify global trade, not complicate it.",
        icon: Briefcase,
    },
    {
        id: 2,
        title: "Tech-Driven Efficiency",
        description: "AI-powered automation streamlines payments, documentation, and financing.",
        icon: Settings,
    },
    {
        id: 3,
        title: "Global, Yet Local",
        description: "Globally connected, locally rooted—delivering universal impact with a personal touch.",
        icon: Globe,
    },
];

const Values = () => {
    return (
        <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        Why Axodian?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {ValuesData.map((value, index) => (
                        <div
                            key={value.id} className={`relative flex justify-center py-6 ${index === 1 ? "border-x-2 border-dashed border-white/20" : ""}`}>
                            <Card className="border-none shadow-none bg-transparent text-white max-w-xs">
                                <CardContent className="p-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <value.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-md" />
                                        <h3 className="text-xl font-semibold">{value.title}</h3>
                                    </div>
                                    <p className="text-lg  opacity-65">{value.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
