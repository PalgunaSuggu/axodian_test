// import { Button } from "@/components/ui/button";
// import { ArrowDown, MoveRight, PackageCheck, PackageSearch } from "lucide-react";
// import { useState } from "react";
// import { postShipmentLoans, preShipmentLoans } from "../../Data";
// import LeFinDailogFrom from "../../Reusable_section/ScheduleForm/LeFinDailogFrom";

// // Tab Definitions
// const tabs = [
//     { id: "pre-shipment", label: "Pre-Shipment", icon: PackageSearch },
//     { id: "post-shipment", label: "Post-Shipment", icon: PackageCheck },
// ];

// const LeFinSolutions = () => {
//     const [activeTab, setActiveTab] = useState("pre-shipment");
//     const activeLoans = activeTab === "pre-shipment" ? preShipmentLoans : postShipmentLoans;

//     return (
//         <div className="bg-cover bg-center bg-blue-50 bg-[url('https://www.leremitt.com/images/newbg02.webp')] py-16 md:py-24">
//             <div className="w-full container mx-auto px-4">
//                 {/* Main Heading with Improved Styling */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Financing Solutions</h2>
//                     <p className="text-black text-lg max-w-3xl mx-auto">Flexible export financing solutions tailored for every stage—pre-shipment, secured, or post-shipment—with fast approvals, low rates, and minimal documentation.</p>
//                 </div>

//                 {/* Improved Tabs */}
//                 <div className="flex justify-center items-center gap-3 rounded-lg my-8 bg-white p-2 mx-auto max-w-md shadow-md">
//                     {tabs.map((tab) => {
//                         const Icon = tab.icon;
//                         return (
//                             <button
//                                 key={tab.id}
//                                 className={`flex items-center justify-center w-full gap-3 p-4 rounded-md cursor-pointer font-medium transition duration-200 ${activeTab === tab.id
//                                     ? "bg-secondary-light-color hover:bg-blue-700 text-white shadow-md"
//                                     : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//                                     }`}
//                                 onClick={() => setActiveTab(tab.id)}
//                             >
//                                 <Icon className="w-6 h-6" />
//                                 <span className="font-semibold">{tab.label}</span>
//                             </button>
//                         );
//                     })}
//                 </div>

//                 {/* Section Header */}
//                 <div className="bg-blue-700 text-white py-5 px-8 rounded-t-xl shadow-md flex items-center gap-4">
//                     {activeTab === "pre-shipment" ?
//                         <PackageSearch className="w-10 h-10" /> :
//                         <PackageCheck className="w-10 h-10" />
//                     }
//                     <div>
//                         <h3 className="text-3xl font-bold">
//                             {activeTab === "pre-shipment" ? "Pre-Shipment Financing Options" : "Post-Shipment Financing Options"}
//                         </h3>
//                         <p className="text-blue-100 mt-1">
//                             {activeTab === "pre-shipment"
//                                 ? "Financing before your goods are shipped"
//                                 : "Financing after your goods have been shipped"}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Loan Cards with Improved Layout */}
//                 <div className="bg-transparent rounded-b-xl">
//                     {activeLoans.map((loan, index) => (
//                         <div key={loan.id} className="p-6 md:p-8 relative bg-white mb-10 rounded-lg">
//                             {/* Loan Header with Apply Button */}
//                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
//                                 <div>
//                                     <h3 className="text-2xl lg:text-3xl text-black font-bold flex items-center">
//                                         <span className="bg-secondary-light-color text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">{index + 1}</span>
//                                         {loan.title}
//                                     </h3>
//                                     <div className="h-1 w-36 bg-secondary-light-color my-3"></div>
//                                     <p className="text-gray-600 text-lg mt-2">{loan.description}</p>
//                                 </div>

//                                 {/* <LeFinDailogFrom  defaultSelected={['trade_finance', ...loan.defaultSelected]}>
//                                     <Button className="p-5 bg-secondary-light-color text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow-md">
//                                         Apply Now
//                                         <MoveRight className="w-5 h-5 ml-2" />
//                                     </Button>
//                                 </LeFinDailogFrom > */}
//                             </div>

//                             {/* Benefits Section with Improved Styling */}
//                             <p className="text-xl font-bold">Key Benefits of {loan.title}</p>
//                             <div className="my-4 border-none shadow-none bg-gray-50 rounded-lg p-4">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {loan.benefits.map((benefit, idx) => (
//                                         <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                                             <benefit.icon className="w-10 h-10 text-blue-600 bg-blue-50 p-2 rounded-full flex-shrink-0" />
//                                             <p className="text-gray-800 font-medium">{benefit.text}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Eligibility Section with Improved Layout */}
//                             <h4 className="text-2xl font-bold flex items-center gap-3">
//                                 Eligibility Criteria
//                                 <span className="text-base font-medium text-blue-500">for {loan.title}</span>
//                             </h4>
//                             <div className="my-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {loan.eligibility.map((item, idx) => (
//                                         <div key={idx} className="p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow bg-white rounded-lg">
//                                             <div className="flex flex-col h-full">
//                                                 <div className="flex items-center gap-3 mb-4">
//                                                     <div className="bg-secondary-light-color rounded-lg p-2">
//                                                         <item.icon className="w-6 h-6 text-white" />
//                                                     </div>
//                                                     <p className="font-bold text-lg text-gray-800">{item.title}</p>
//                                                 </div>
//                                                 <p className="text-gray-600 text-md">{item.description}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Additional Apply Button after Eligibility */}
//                                 <div className="flex justify-end mt-10">
//                                     <LeFinDailogFrom defaultSelected={['trade_finance', ...loan.defaultSelected]}>
//                                         <Button className="px-8 py-6 bg-secondary-light-color text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-3">
//                                             Apply for {loan.title}
//                                             <MoveRight className="w-6 h-6" />
//                                         </Button>
//                                     </LeFinDailogFrom >
//                                 </div>
//                             </div>

//                             {/* Separator with label - transparent background */}
//                             {index < activeLoans.length - 1 && (
//                                 <div className="relative my-12">
//                                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent px-6 py-2 rounded-full flex items-center gap-2">
//                                         <div className="bg-secondary-light-color text-white rounded-full p-2">
//                                             <ArrowDown className="w-4 h-4" />
//                                         </div>
//                                         <span className="text-blue-700 font-bold">Next Option</span>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LeFinSolutions;







import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { shipmentLoanTypes } from '../../Data';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const LefinSolutions = ({ onApplyClick }) => {
    return (
        <div className="bg-cover bg-center bg-blue-50 bg-[url('/images/newbg02.webp')] py-16 md:py-24">
            {/* Main Heading with Improved Styling */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Financing Solutions</h2>
                <p className="text-black text-md md:text-lg max-w-4xl mx-auto">Flexible export financing solutions tailored for every stage—pre-shipment, secured, or post-shipment—with fast approvals, low rates, and minimal documentation.</p>
            </div>
            <div className="w-full container mx-auto px-4">
                <Tabs defaultValue="unsecured" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-white rounded-lg h-auto">
                        {shipmentLoanTypes.map((loan) => (
                            <TabsTrigger
                                key={loan.id}
                                value={loan.id}
                                className="data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm data-[state=active]:border-blue-200 border-solid data-[state=active]:text-blue-600 h-auto p-4 border-2 border-transparent rounded-lg transition-all"
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="p-3 bg-white rounded-full text-blue-600">
                                        <loan.categoryIcon className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <p className="text-lg font-semibold">{loan.category}</p>
                                        <p className="text-xl font-bold text-gray-500 mt-1">{loan.title}</p>
                                    </div>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {shipmentLoanTypes.map((loan) => (
                        <TabsContent key={loan.id} value={loan.id} className="mt-6">
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">{loan.description}</h2>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {loan.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="p-2 bg-white rounded-md shadow-sm mr-4">
                                                <benefit.icon className="w-5 h-5 text-blue-600" />
                                            </span>
                                            <div>
                                                <h3 className="font-medium text-lg md:text-xl text-gray-900">{benefit.text}</h3>
                                                <p className="text-md md:text-lg text-gray-500 mt-1">{benefit.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end mt-10">
                                    <Button onClick={onApplyClick} className="px-8 py-6 bg-secondary-light-color text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-3">
                                        Apply for {loan.title}
                                        <MoveRight className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

export default LefinSolutions;








// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { MoveRight, PackageCheck, PackageSearch, Check, ArrowDown } from "lucide-react";
// import React, { useState } from "react";
// import { postShipmentLoans, preShipmentLoans } from "../../Data";
// import ScheduleDialog from "../../Reusable_section/ScheduleForm/ScheduleDialog";

// // Tab Definitions
// const tabs = [
//     { id: "pre-shipment", label: "Pre-Shipment", icon: PackageSearch },
//     { id: "post-shipment", label: "Post-Shipment", icon: PackageCheck },
// ];

// const LeFinSolutions = () => {
//     const [activeTab, setActiveTab] = useState("pre-shipment");
//     const activeLoans = activeTab === "pre-shipment" ? preShipmentLoans : postShipmentLoans;

//     return (
//         <div className="bg-cover bg-center bg-blue-50 bg-[url('https://www.leremitt.com/images/newbg02.webp')] py-16">
//             <div className="w-full container mx-auto px-4">
//                 {/* Main Heading with Improved Styling */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Financing Solutions</h2>
//                     <p className="text-black text-lg max-w-3xl mx-auto">Flexible export financing solutions tailored for every stage—pre-shipment, secured, or post-shipment—with fast approvals, low rates, and minimal documentation.</p>
//                 </div>

//                 {/* Improved Tabs */}
//                 <div className="flex justify-center items-center gap-3 rounded-lg my-8 bg-white p-2 mx-auto max-w-md shadow-md">
//                     {tabs.map((tab) => {
//                         const Icon = tab.icon;
//                         return (
//                             <button
//                                 key={tab.id}
//                                 className={`flex items-center justify-center w-full gap-3 p-4 rounded-md cursor-pointer font-medium transition duration-200 ${activeTab === tab.id
//                                     ? "bg-secondary-light-color hover:bg-blue-700 text-white shadow-md"
//                                     : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//                                     }`}
//                                 onClick={() => setActiveTab(tab.id)}
//                             >
//                                 <Icon className="w-6 h-6" />
//                                 <span className="font-semibold">{tab.label}</span>
//                             </button>
//                         );
//                     })}
//                 </div>

//                 {/* Section Header */}
//                 <div className="bg-blue-700 text-white py-5 px-8 rounded-t-xl shadow-md flex items-center gap-4">
//                     {activeTab === "pre-shipment" ?
//                         <PackageSearch className="w-10 h-10" /> :
//                         <PackageCheck className="w-10 h-10" />
//                     }
//                     <div>
//                         <h3 className="text-3xl font-bold">
//                             {activeTab === "pre-shipment" ? "Pre-Shipment Financing Options" : "Post-Shipment Financing Options"}
//                         </h3>
//                         <p className="text-blue-100 mt-1">
//                             {activeTab === "pre-shipment"
//                                 ? "Financing before your goods are shipped"
//                                 : "Financing after your goods have been shipped"}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Loan Cards with Improved Layout */}
//                 <div className="bg-transparent rounded-b-xl">
//                     {activeLoans.map((loan, index) => (
//                         <div key={loan.id} className="p-6 md:p-8 relative bg-white mb-8 rounded-lg shadow-md">

//                             {/* Loan Type Badge with Option Number */}
//                             <div className="bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded-full inline-block mb-4">
//                                 Option {index + 1}: {loan.title}
//                             </div>

//                             {/* Loan Header with Apply Button */}
//                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
//                                 <div>
//                                     <h3 className="text-2xl lg:text-3xl text-black font-bold flex items-center">
//                                         <span className="bg-secondary-light-color text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">{index + 1}</span>
//                                         {loan.title}
//                                     </h3>
//                                     <div className="h-1 w-24 bg-secondary-light-color my-3"></div>
//                                     <p className="text-gray-600 text-lg mt-2">{loan.description}</p>
//                                 </div>

//                                 <ScheduleDialog defaultSelected={['trade_finance', ...loan.defaultSelected]}>
//                                     <Button className="p-5 bg-secondary-light-color text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow-md">
//                                         Apply Now
//                                         <MoveRight className="w-5 h-5 ml-2" />
//                                     </Button>
//                                 </ScheduleDialog>
//                             </div>

//                             {/* Benefits Section with Improved Styling */}
//                             <Card className="mb-10 border-none shadow-none bg-gray-50 rounded-lg p-4">
//                                 <CardHeader className="pb-2">
//                                     <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-3">
//                                         <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">B</div>
//                                         Key Benefits of {loan.title}
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {loan.benefits.map((benefit, idx) => (
//                                             <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                                                 <benefit.icon className="w-10 h-10 text-blue-600 bg-blue-50 p-2 rounded-full flex-shrink-0" />
//                                                 <p className="text-gray-800 font-medium">{benefit.text}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             {/* Eligibility Section with Improved Layout */}
//                             <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-100">
//                                 <h4 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
//                                     <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">E</div>
//                                     Eligibility Criteria
//                                     <span className="text-base font-medium text-blue-600">for {loan.title}</span>
//                                 </h4>

//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                     {loan.eligibility.map((item, idx) => (
//                                         <Card key={idx} className="p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow bg-white rounded-lg">
//                                             <div className="flex flex-col h-full">
//                                                 <div className="flex items-center gap-3 mb-4">
//                                                     <div className="bg-secondary-light-color rounded-lg p-2">
//                                                         <item.icon className="w-6 h-6 text-white" />
//                                                     </div>
//                                                     <p className="font-bold text-lg text-gray-800">{item.title}</p>
//                                                 </div>
//                                                 <p className="text-gray-600 text-md">{item.description}</p>
//                                             </div>
//                                         </Card>
//                                     ))}
//                                 </div>

//                                 {/* Additional Apply Button after Eligibility */}
//                                 <div className="flex justify-center mt-10">
//                                     <ScheduleDialog defaultSelected={['trade_finance', ...loan.defaultSelected]}>
//                                         <Button className="px-8 py-6 bg-secondary-light-color text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-3">
//                                             Apply for {loan.title}
//                                             <MoveRight className="w-6 h-6" />
//                                         </Button>
//                                     </ScheduleDialog>
//                                 </div>
//                             </div>

//                             {/* Separator with label - transparent background */}
//                             {index < activeLoans.length - 1 && (
//                                 <div className="relative my-12">
//                                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent px-6 py-2 rounded-full flex items-center gap-2">
//                                         <div className="bg-secondary-light-color text-white rounded-full p-2">
//                                             <ArrowDown className="w-4 h-4" />
//                                         </div>
//                                         <span className="text-blue-700 font-bold">Next Option</span>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LeFinSolutions;
