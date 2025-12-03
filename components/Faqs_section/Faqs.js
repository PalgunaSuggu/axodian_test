// "use client";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
// import { leremittFaqs, leDocFaqs, leFinFaqs } from '../Data';
// import getUtmParams from "../getUtmParams";
// import { app_url } from "../../config/config";

// const faqCategories = [
//     { key: "leremitt", label: "LeRemitt", faqs: leremittFaqs },
//     { key: "ledoc", label: "LeDoc", faqs: leDocFaqs },
//     { key: "lefin", label: "LeFin", faqs: leFinFaqs },
// ];

// const handleLeRemittLogin = () => {
//     let utm_params = getUtmParams();
//     window.open(`${app_url}/#/LoginScreens/default-login${utm_params ? '?' + utm_params : ''}`, '_blank');
// };

// export default function FAQComponent({ showAll = false, defaultTab = "all", showLoginLink = false }) {
//     const categoriesToShow = showAll ? faqCategories : faqCategories.filter(cat => cat.key === defaultTab);

//     return (
//         <div className="bg-[#F9FAFB] py-16 md:py-24">
//             <div className="container mx-auto px-4">
//                 {/* Heading */}
//                 <div className="py-10 text-center">
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
//                         Frequently Asked Questions
//                     </h2>
//                     <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
//                         Find answers to your questions about LeRemitt, LeDoc, and LeFin products and services.
//                     </p>
//                     {showLoginLink && (
//                         <div className="mt-4">
//                             <button
//                                 onClick={handleLeRemittLogin}
//                                 className="bg-[#0461F0] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                             >
//                                 Login to LeRemitt
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Tabs for FAQ Categories - only show if displaying all categories */}
//                 {showAll ? (
//                     <Tabs defaultValue={defaultTab} className="w-full">
//                         <TabsList className="flex bg-transparent justify-center gap-2 flex-wrap mb-8">
//                             {faqCategories.map((cat) => (
//                                 <TabsTrigger
//                                     key={cat.key}
//                                     value={cat.key}
//                                     className="px-4 py-2 rounded-lg text-sm md:text-base data-[state=active]:bg-[#0461F0] data-[state=active]:text-white"
//                                 >
//                                     {cat.label}
//                                 </TabsTrigger>
//                             ))}
//                         </TabsList>

//                         {faqCategories.map((cat) => (
//                             <TabsContent key={cat.key} value={cat.key}>
//                                 <Accordion type="single" collapsible>
//                                     {cat.faqs.map((faq, index) => (
//                                         <AccordionItem
//                                             key={index}
//                                             value={index.toString()}
//                                             className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
//                                         >
//                                             <AccordionTrigger className="text-lg text-start font-semibold px-4 py-3 hover:no-underline">
//                                                 {faq.question}
//                                             </AccordionTrigger>
//                                             <AccordionContent className="px-4 pb-3 text-gray-600">
//                                                 <div className={faq.answer.split('\n').length > 1 ? "h-36 overflow-y-auto pr-2" : ""}>
//                                                     {faq.answer.split('\n').map((paragraph, i) => (
//                                                         <p key={i} className="mb-2">{paragraph}</p>
//                                                     ))}
//                                                 </div>
//                                             </AccordionContent>
//                                         </AccordionItem>
//                                     ))}
//                                 </Accordion>
//                             </TabsContent>
//                         ))}
//                     </Tabs>
//                 ) : (
//                     // Show single category without tabs
//                     <div className="w-full">
//                         <Accordion type="single" collapsible>
//                             {categoriesToShow[0].faqs.map((faq, index) => (
//                                 <AccordionItem
//                                     key={index}
//                                     value={index.toString()}
//                                     className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
//                                 >
//                                     <AccordionTrigger className="text-lg text-start font-semibold px-4 py-3 hover:no-underline">
//                                         {faq.question}
//                                     </AccordionTrigger>
//                                     <AccordionContent className="px-4 pb-3 text-gray-600">
//                                         {faq.answer.split('\n').map((paragraph, i) => (
//                                             <p key={i} className="mb-2">{paragraph}</p>
//                                         ))}
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             ))}
//                         </Accordion>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { leremittFaqs, leDocFaqs, leFinFaqs, leFinSubcategories } from "../Data";
import getUtmParams from "../getUtmParams";
import { app_url } from "../../config/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const faqCategories = [
    { 
        key: "all", 
        label: "All Questions", 
        // Don't combine faqs here, we'll handle them separately
        faqs: [] 
    },
    { key: "leremitt", label: "LeRemitt", faqs: leremittFaqs },
    { key: "ledoc", label: "LeDoc", faqs: leDocFaqs },
    { key: "lefin", label: "LeFin", faqs: leFinFaqs },
];

// Group the questions by category for the "All Questions" tab
const categorizedFaqs = [
    { key: "leremitt", label: "LeRemitt", faqs: leremittFaqs },
    { key: "ledoc", label: "LeDoc", faqs: leDocFaqs },
    { key: "lefin", label: "LeFin", faqs: leFinFaqs },
];

export default function FAQComponent({ showAll = false, defaultTab = "all", showLoginLink = false }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(defaultTab);

    useEffect(() => {
        // First check localStorage for a selected tab
        const storedTab = typeof window !== 'undefined' ? localStorage.getItem('selectedFaqTab') : null;
        
        if (storedTab && faqCategories.some(cat => cat.key === storedTab)) {
            setActiveTab(storedTab);
            // Clear localStorage after setting the tab
            localStorage.removeItem('selectedFaqTab');
        } 
        // If no localStorage value, check URL query params
        else if (router.query.tab && faqCategories.some(cat => cat.key === router.query.tab)) {
            setActiveTab(router.query.tab);
        }
    }, [router.query.tab]);

    const handleLeRemittLogin = () => {
        let utm_params = getUtmParams();
        window.open(
            `${app_url}/#/LoginScreens/default-login${utm_params ? "?" + utm_params : ""}`,
            "_blank"
        );
    };

    const categoriesToShow = showAll ? faqCategories : faqCategories.filter(cat => cat.key === defaultTab);

    return (
        <div className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="py-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
                        Find answers to your questions about LeRemitt, LeDoc, and LeFin products and services.
                    </p>
                    {showLoginLink && (
                        <div className="mt-4">
                            <button
                                onClick={handleLeRemittLogin}
                                className="bg-[#0461F0] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Login to LeRemitt
                            </button>
                        </div>
                    )}
                </div>

                {/* Tabs for FAQ Categories - only show if displaying all categories */}
                {showAll ? (
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="flex bg-transparent justify-center gap-2 flex-wrap mb-8">
                            {faqCategories.map(cat => (
                                <TabsTrigger
                                    key={cat.key}
                                    value={cat.key}
                                    className="px-4 py-2 rounded-lg text-sm md:text-base data-[state=active]:bg-[#0461F0] data-[state=active]:text-white"
                                >
                                    {cat.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {faqCategories.map(cat => (
                            <TabsContent key={cat.key} value={cat.key}>
                                {cat.key === "all" ? (
                                    // Special handling for the "All Questions" tab - group by category
                                    <div>
                                        {categorizedFaqs.map((category, catIndex) => (
                                            <div key={catIndex} className="mb-8">
                                                <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">{category.label} Questions</h3>
                                                <Accordion type="single" collapsible>
                                                    {category.faqs.map((faq, faqIndex) => (
                                                        <AccordionItem
                                                            key={faqIndex}
                                                            value={`${category.key}-${faqIndex}`}
                                                            className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
                                                        >
                                                            <AccordionTrigger className="text-lg md:text-xl text-start font-semibold px-4 py-3 hover:no-underline">
                                                                {faq.question}
                                                            </AccordionTrigger>
                                                            <AccordionContent className="px-4 pb-3 text-gray-600">
                                                                <div className={faq.answer.split("\n").length > 1 ? "h-36 overflow-y-auto pr-2" : ""}>
                                                                    {faq.answer.split("\n").map((paragraph, i) => (
                                                                        <p key={i} className="mb-2 text-md md:text-lg">{paragraph}</p>
                                                                    ))}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            </div>
                                        ))}
                                    </div>
                                ) : cat.key === "lefin" ? (
                                    // Special handling for LeFin tab - group by subcategory
                                    <div>
                                        {leFinSubcategories.map((subcategory, subIndex) => {
                                            // Filter FAQs by subcategory
                                            const subcategoryFaqs = leFinFaqs.filter(faq => faq.subcategory === subcategory.key);
                                            
                                            return subcategoryFaqs.length > 0 ? (
                                                <div key={subIndex} className="mb-8">
                                                    <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">{subcategory.label}</h3>
                                                    <Accordion type="single" collapsible>
                                                        {subcategoryFaqs.map((faq, faqIndex) => (
                                                            <AccordionItem
                                                                key={faqIndex}
                                                                value={`${subcategory.key}-${faqIndex}`}
                                                                className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
                                                            >
                                                                <AccordionTrigger className="text-lg md:text-xl text-start font-semibold px-4 py-3 hover:no-underline">
                                                                    {faq.question}
                                                                </AccordionTrigger>
                                                                <AccordionContent className="px-4 pb-3 text-gray-600">
                                                                    <div className={faq.answer.split("\n").length > 1 ? "h-36 overflow-y-auto pr-2" : ""}>
                                                                        {faq.answer.split("\n").map((paragraph, i) => (
                                                                            <p key={i} className="mb-2 text-md md:text-lg">{paragraph}</p>
                                                                        ))}
                                                                    </div>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        ))}
                                                    </Accordion>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                ) : (
                                    // Normal handling for other category tabs
                                    <Accordion type="single" collapsible>
                                        {cat.faqs.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={index.toString()}
                                                className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
                                            >
                                                <AccordionTrigger className="text-lg md:text-xl text-start font-semibold px-4 py-3 hover:no-underline">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="px-4 pb-3 text-gray-600">
                                                    <div className={faq.answer.split("\n").length > 1 ? "h-36 overflow-y-auto pr-2" : ""}>
                                                        {faq.answer.split("\n").map((paragraph, i) => (
                                                            <p key={i} className="mb-2 text-md md:text-lg">{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                )}
                            </TabsContent>
                        ))}
                    </Tabs>
                ) : (
                    // Show single category without tabs
                    <div className="w-full">
                        <Accordion type="single" collapsible>
                            {categoriesToShow[0].faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={index.toString()}
                                    className="border border-gray-200 bg-white rounded-lg shadow-sm mb-4"
                                >
                                    <AccordionTrigger className="text-lg md:text-xl text-start font-semibold px-4 py-3 hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-3 text-gray-600">
                                        {faq.answer.split("\n").map((paragraph, i) => (
                                            <p key={i} className="mb-2 text-md md:text-lg">{paragraph}</p>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )}
            </div>
        </div>
    );
}

