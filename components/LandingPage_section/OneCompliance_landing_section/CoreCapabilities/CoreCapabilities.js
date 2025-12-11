import { OneComplianceSteps } from "../../../Data";

const CoreCapabilities = () => {
    return (
        <section className="relative w-full bg-[#f8fafc] py-20 overflow-hidden">
            {/* Top Fade Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 30px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />
            <div className="container relative z-10 mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="tracking-tight mb-4">Core Capabilities (Beta)</h1>
                    <p className="text-lg md:text-2xl text-gray-600">Everything you need to manage export compliance with confidence.</p>
                </div>

                {/* Card Grid (Flex for centering last row) */}
                <div className="flex flex-wrap justify-center gap-8">
                    {OneComplianceSteps.map((cap, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] group relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border-2 border-solid border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                            {/* Secondary Color Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-secondary-light-color/20 to-transparent group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Box */}
                            <div className="relative z-10 w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-secondary-light-color/15 text-secondary-light-color group-hover:bg-secondary-light-color group-hover:text-white shadow-md transition-all duration-400">
                                <cap.icon className="w-8 h-8" />
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary-light-color transition-colors duration-300">{cap.title}</h3>

                            {/* Points */}
                            <ul className="relative z-10 space-y-3">
                                {cap.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600">
                                        <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-secondary-light-color/50 group-hover:bg-secondary-light-color transition-colors"></span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
