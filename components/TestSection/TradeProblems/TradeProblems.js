import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function TradeProblems() {
    const problems = [
        "Endless follow-ups with banks for IDPMS/EDPMS closures",
        "EBRC filing delays blocking incentives & refunds",
        "DGFT compliance queries eating up weeks",
        "Spreadsheets, email trails, and missing documents during audits",
        "High forex costs and hidden charges on payments",
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Global trade is hard — <br />
                        <span className="text-[#0a268a]">paperwork makes it harder</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Exporters & importers lose countless hours (and money) due to:
                    </p>
                </div>

                {/* Problem Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {problems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                            <p className="text-gray-700 text-lg">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Solution */}
                <div className="text-center bg-gradient-to-r from-[#0a268a] to-[#0092a5] text-white py-16 px-8 rounded-lg shadow-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        We built <span className="">LeDoc</span> to fix this
                    </h3>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                        No more chasing banks, lost documents, or compliance delays.
                        Just seamless trade operations so you can focus on growth.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <CheckCircle2 className="w-7 h-7 text-green-300" />
                        <span className="text-lg font-medium">
                            Compliance simplified. Growth unlocked.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
