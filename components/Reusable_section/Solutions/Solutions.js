import { Card } from "@/components/ui/card";
import Image from "next/image";

const Features = ({ tag, title, featuresData }) => {
    return (
        <div className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    {/* <div className="inline-block uppercase text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-md font-semibold mb-4">{tag}</div> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
                        {title}
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {featuresData.map((featuresData) => (
                        <Card key={featuresData.id} className="bg-[#FEFEFF] shadow-none rounded-lg col-span-2 border border-solid border-gray-200">
                            <Image src={featuresData.image} alt={featuresData.title} width={400} height={250} className="w-full h-auto rounded-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{featuresData.title}</h3>
                                <p className="text-gray-600 text-md md:text-lg">{featuresData.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
