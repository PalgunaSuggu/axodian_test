
import { Card, CardContent } from "@/components/ui/card";

const Benefits = ({ subtitleOne, subtitleTwo, description, benefits }) => {
    return (
        <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* LEFT: Heading */}
                <div className="md:col-span-5 flex items-center text-center md:text-left">
                    <div>
                        <h1 className="leading-tight text-white max-w-3xl">
                            <span className="md:block">{subtitleOne}</span>
                            <span className="md:block">{subtitleTwo}</span>
                        </h1>
                        <p className="mt-2 text-md md:text-lg">{description}</p>
                    </div>
                </div>

                {/* RIGHT: Benefit Cards */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
                    {[0, 1].map((col) => (
                        <div key={col} className="flex flex-col justify-center">
                            {benefits.slice(col === 0 ? 0 : 3, col === 0 ? 3 : benefits.length).map((benefit, index, arr) => (
                                <div key={benefit.id} className={`py-6 md:py-8 ${index < arr.length - 1 ? "border-b border-dashed border-white/20" : ""}`}>
                                    <Card className="border-none shadow-none bg-transparent text-white">
                                        <CardContent className="p-0">
                                            <div className="flex items-center gap-3 mb-3">
                                                <benefit.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-[5px]" />
                                                <h5>{benefit.title}</h5>
                                            </div>
                                            <p className="text-md md:text-lg opacity-65">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
