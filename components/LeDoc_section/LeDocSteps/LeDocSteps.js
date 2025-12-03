// import { FileSymlink, Sparkles, Share2, ShieldCheck, CheckCircle2, ClipboardList } from "lucide-react";

// const steps = [
//     { title: "Update or Sync Documents", description: "Connects with your ERP & existing systems", icon: FileSymlink, color: "text-blue-500" },
//     { title: "AI-Powered Document Generation", description: "Auto-fills data & validates accuracy", icon: Sparkles, color: "text-purple-500" },
//     { title: "Instant Sharing & Submission", description: "Send documents to banks and partners", icon: Share2, color: "text-green-500" },
//     { title: "Compliance & Approval Checks", description: "Regulatory adherence before submission", icon: ShieldCheck, color: "text-red-500" },
//     { title: "Auto Compliance Management", description: "eBRC, Advance Authorization, EPCG monitoring", icon: CheckCircle2, color: "text-teal-500" },
//     { title: "Tracking & Audits", description: "Full visibility into the document lifecycle", icon: ClipboardList, color: "text-yellow-500" },
// ];

// const StepperFlowGrid = () => (
//     <div className="bg-[#F9FAFB] py-16 px-4">
//         <div className="container mx-auto max-w-5xl text-center mb-12">
//             <div className="inline-block uppercase text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-md font-semibold mb-4">How it works</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-black">Smart, Simple & Scalable – LeDoc Flow</h2>
//         </div>
//         <div className="relative container mx-auto">
//             <div className="grid md:grid-cols-2 gap-12 relative z-10">
//                 {steps.map((step, index) => {
//                     const Icon = step.icon;
//                     return (
//                         <div key={index} className="relative flex items-start">
//                             <div className="hidden md:flex absolute top-2 right-full">
//                                 <div className="w-8 h-8 rounded-full bg-white border text-blue-700 border-dotted border-blue-600 font-bold text-lg flex items-center justify-center">{index + 1}</div>
//                             </div>
//                             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">
//                                 <div className={`flex items-center gap-2 mb-3 ${step.color}`}>
//                                     <Icon className="w-6 h-6 mr-2" />
//                                     <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
//                                 </div>
//                                 <p className="text-gray-600 text-sm">{step.description}</p>
//                                 <div className="mt-4 md:hidden text-sm font-semibold text-[#0461F0]">Step {index + 1}</div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     </div>
// );

// export default StepperFlowGrid;

// import { FileSymlink, Sparkles, Share2, ShieldCheck, CheckCircle2, ClipboardList } from "lucide-react";

// const steps = [
//     { title: "Update or Sync Documents", description: "Connects with your ERP & existing systems", icon: FileSymlink, color: "from-blue-500 to-blue-300" },
//     { title: "AI-Powered Document Generation", description: "Auto-fills data & validates accuracy", icon: Sparkles, color: "from-purple-500 to-purple-300" },
//     { title: "Instant Sharing & Submission", description: "Send documents to banks and partners", icon: Share2, color: "from-green-500 to-green-300" },
//     { title: "Compliance & Approval Checks", description: "Regulatory adherence before submission", icon: ShieldCheck, color: "from-red-500 to-red-300" },
//     { title: "Auto Compliance Management", description: "eBRC, Advance Authorization, EPCG monitoring", icon: CheckCircle2, color: "from-teal-500 to-teal-300" },
//     { title: "Tracking & Audits", description: "Full visibility into the document lifecycle", icon: ClipboardList, color: "from-yellow-500 to-yellow-300" },
// ];

// const StepperFlowGrid = () => (
//     <div className="bg-[#F9FAFB] py-16 px-4">
//         <div className="container mx-auto max-w-5xl text-center mb-12">
//             <div className="inline-block uppercase text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-md font-semibold mb-4">How it works</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-black">Smart, Simple & Scalable – LeDoc Flow</h2>
//         </div>
//         <div className="relative container mx-auto">
//             <div className="grid md:grid-cols-2 gap-12 relative z-10">
//                 {steps.map((step, index) => {
//                     const Icon = step.icon;
//                     return (
//                         <div key={index} className="relative flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
//                             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full relative overflow-hidden transition-all duration-300">

//                                 {/* Step number badge */}
//                                 <div className="absolute top-0 right-0 w-9 h-9 rounded-bl-xl bg-secondary-light-color backdrop-blur-md text-white text-sm font-bold flex items-center justify-center shadow-md z-10 border border-blue-200">
//                                     {index + 1}
//                                 </div>

//                                 {/* Icon with gradient bg */}
//                                 <div className={`w-10 h-10 mb-4 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
//                                     <Icon className="w-5 h-5" />
//                                 </div>

//                                 {/* Title & Description */}
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
//                                 <p className="text-gray-600 text-sm">{step.description}</p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     </div>
// );

// export default StepperFlowGrid;

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
                {/* <div className="inline-block uppercase text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-md font-semibold mb-4">How it works</div> */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black md:mb-12">Smart, Simple & Scalable – LeDoc Flow</h2>
            </div>
            <div className="relative container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  relative z-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                                <div className="bg-white p-4 rounded-lg border border-gray-200 w-full h-full relative overflow-hidden transition-all duration-300">
                                    {/* Step number badge */}
                                    <div className="absolute top-0 right-0 w-9 h-9 rounded-bl-xl bg-gray-100 backdrop-blur-md text-gray-600 text-sm font-bold flex items-center justify-center shadow-md z-10 border border-blue-200">
                                        {index + 1}
                                    </div>

                                    {/* Icon with gradient bg */}
                                    <div className={`w-10 h-10 mb-4 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
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
