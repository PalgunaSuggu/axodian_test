import {
    CheckCircle2,
    Clock,
    FileText,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";

const TargetAudience = () => {
    const audience = [
        {
            text: "An exporter of goods or services struggling with EDPMS/EBRC tracking",
            icon: TrendingUp,
        },
        {
            text: "A CFO / Head of Finance who wants clean, audit-ready compliance data",
            icon: ShieldCheck,
        },
        {
            text: "A founder of a D2C or export-led business tired of Excel-based reconciliation",
            icon: FileText,
        },
        {
            text: "An export compliance lead who spends nights chasing banks & portals",
            icon: Clock,
        },
        {
            text: "A consultant/CA managing multiple export clients' EDPMS/EBRC workloads",
            icon: Users,
        },
    ];

    const earlyAccess = [
        {
            title: "Shape the product around your workflows",
            desc: "During Beta, your feedback directly influences rules, reports and connectors we build next.",
        },
        {
            title: "Get an edge on compliance readiness",
            desc: "Be ahead of tightening EDPMS and EBRC expectations from banks and regulators.",
        },
        {
            title: "White-glove onboarding",
            desc: "Hands-on support for data setup, rule configuration and training.",
        },
        {
            title: "No platform fees in Beta",
            desc: "Use One Compliance during the Beta period at no charge while we refine the product with you.",
        },
    ];

    return (
        <section className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

            {/* --- Background Glow --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-color/5 blur-3xl rounded-full"></div>
            </div>

            <div className="container mx-auto relative z-10">

                {/* === SECTION TITLE === */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-gray-900 leading-tight">Built for the Ones Who Drive Export Growth</h1>
                    <p className="text-lg md:text-2xl text-gray-600 mt-4">If compliance drains your team’s time, One Compliance is built to fix that.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="space-y-10">

                        <h3 className="text-gray-900">One Compliance is for you if you are:</h3>

                        <div className="space-y-4">
                            {audience.map((item, i) => (
                                <div key={i} className="group flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-color/10 text-primary-color flex items-center justify-center group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>

                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-secondary-color/30 px-5 py-4 rounded-xl shadow-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-color opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-color"></span>
                            </span>
                            <span className="text-sm text-gray-600">
                                <b className="text-secondary-color">Pro Tip:</b> If any of this feels familiar, One Compliance is built for you.
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary-color/20 to-secondary-color/20 rounded-[2rem] blur-2xl opacity-50"></div>

                        <div className="relative bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                            <div className="space-y-2 mb-10">
                                <div className="inline-flex items-center gap-2 text-secondary-color font-semibold">
                                    <Target className="w-5 h-5" />
                                    <span>Beta Program</span>
                                </div>

                                <h3 className="text-gray-900">Why Early Access Matters</h3>

                                <p className="text-gray-600">Join a select group shaping the future of export compliance.</p>
                            </div>

                            <div className="space-y-8">
                                {earlyAccess.map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                                        </div>

                                        <div>
                                            <h5 className="text-gray-900 mb-1">{item.title}</h5>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-sm text-gray-500 italic mt-10 pt-6 border-t border-gray-200">
                                Limited spots available for the first beta cohort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
