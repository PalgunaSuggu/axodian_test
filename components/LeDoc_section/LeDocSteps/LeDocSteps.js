import { Users, Workflow, FileUp, Share2, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
    { title: "Set up Users and Partners", description: " Effortlessly onboard internal teams and external partners, providing them with user-controlled access tailored to your needs", icon: Users, color: "from-blue-600 to-blue-300" },
    { title: "Set up your document and Shipment Workflow", description: "Customize your document types and workflow to fit your needs, ensuring the system adapts to you, not the other way around", icon: Workflow, color: "from-purple-600 to-purple-300" },
    { title: "Upload or sync Documents", description: "Seamlessly upload or sync documents from your ERP, emails, or  opt for manual upload, ensuring indexed storage of all your documents", icon: FileUp, color: "from-teal-600 to-teal-300" },
    { title: "Ready to share amongst users and Partners", description: "Ready to share seamlessly and collborate real time among internal users and external partners, ensuring everyone has a single view to the shipment documents", icon: Share2, color: "from-red-600 to-red-300" },
    { title: "Automated Compliance Management", description: "Automate Shipping bill validations, Advance Authorisation Tracking, EPCG Obligation tracking, EBRC generation ", icon: ShieldCheck, color: "from-yellow-600 to-yellow-300" },
    { title: "Reports and Analytics", description: "Reports and Analytics provide comprehensive insights and data-driven decision-making tools to monitor, evaluate, and optimize business performance", icon: BarChart3, color: "from-cyan-600 to-cyan-300" },
];

const StepperFlowGrid = () => (
    <>
        <div className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="container mx-auto text-center mb-12">
                <h1 className="leading-tight text-black md:mb-12">Smart, Simple & Scalable – LeDoc Flow</h1>
            </div>
            <div className="relative container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  relative z-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                                <div className="bg-white p-4 rounded-lg border border-gray-200 w-full h-full relative overflow-hidden transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-9 h-9 rounded-bl-xl bg-gray-100 backdrop-blur-md text-gray-600 text-sm font-bold flex items-center justify-center shadow-md z-10 border border-blue-200">{index + 1}</div>
                                    <div className={`w-10 h-10 mb-4 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}><Icon className="w-5 h-5" /></div>
                                    <h5 className="leading-tight text-gray-800 mb-1">{step.title}</h5>
                                    <p className="text-gray-600 text-md md:text-lg">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
);

export default StepperFlowGrid;
