import { cn } from "@/lib/utils";
import { OneComplianceHowItWorks } from "../../../Data";

const HowOneComplianceWork = () => {

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h1 className="text-gray-900">How It Works</h1>
                    <p className="text-gray-600 text-lg md:text-2xl mt-4">A clean, guided journey for every compliance workflow.</p>
                </div>

                <div className="relative max-w-7xl mx-auto">

                    {/* Center Vertical Divider (Hidden on mobile) */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-gray-200 rounded-full"></div>

                    <div className="space-y-12 md:space-y-2">
                        {OneComplianceHowItWorks.map((step, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={i} className={cn("relative flex flex-col md:flex-row items-center md:justify-between", !isLeft ? "md:flex-row-reverse" : "")}>
                                    {/* Timeline dot (Hidden on mobile) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-white shadow-md items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-primary-color"></div>
                                    </div>

                                    {/* Card */}
                                    <div className={cn("w-full md:w-[45%]")}>
                                        <div className={cn("group relative bg-white/80 backdrop-blur-xl border-2 border-solid hover:border-white border-gray-200 rounded-2xl p-8 pt-12 shadow-sm hover:shadow-xl transition-all duration-500")}>
                                            {/* Icon */}
                                            <div className={cn("absolute -top-6 left-6 md:left-6 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shadow-md", step.color)}>
                                                <step.icon className="w-10 h-10" />
                                            </div>

                                            {/* Title */}
                                            <h5 className="mt-4 text-gray-900 mb-4 text-xl font-bold">{step.title}</h5>

                                            {/* Points */}
                                            <ul className="space-y-2 text-gray-600 text-base leading-relaxed">
                                                {step.points.map((p, idx) => (
                                                    <li key={idx} className={cn("flex gap-2")}>
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                                        <p className="text-md md:text-lg">{p}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for alignment */}
                                    <div className="hidden md:block w-[45%]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowOneComplianceWork;
