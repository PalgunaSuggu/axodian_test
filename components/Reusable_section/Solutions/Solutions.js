import { Card } from "@/components/ui/card";
import Image from "next/image";

const Solutions = ({ title, featuresData }) => {
    return (
        <div className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="leading-tight text-black mb-8">{title}</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {featuresData.map((featuresData) => (
                        <Card key={featuresData.id} className="bg-[#FEFEFF] shadow-none rounded-lg col-span-2 border border-solid border-gray-200">
                            <Image src={featuresData.image} alt={featuresData.title} width={400} height={250} className="w-full h-auto rounded-lg" />
                            <div className="p-6">
                                <h5 className="text-gray-800 mb-2">{featuresData.title}</h5>
                                <p className="text-gray-600 text-md md:text-lg">{featuresData.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
