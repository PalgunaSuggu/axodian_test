import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";

export default function FAQs({ titleOne, titleTwo, subtitle, faqsData, productKey = "all", bgColor = "bg-secondary-light-color", hoverBgColor = "hover:bg-blue-700", textColor = "text-white", triggerBg = 'bg-[#F5F9FF]', triggerTextColor = 'text-[#3681F3]' }) {
    const [visibleFaqs, setVisibleFaqs] = useState(5);
    const showAllFaqs = visibleFaqs >= faqsData.length;
    const router = useRouter();

    const navigateToFaqPage = () => {
        if (productKey) {
            localStorage.setItem('selectedFaqTab', productKey);
        }
        router.push('/faqs');
    };

    return (
        <div className="bg-[#F9FAFB] py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* LEFT SIDE: Heading */}
                <div className="lg:col-span-5 col-span-12 text-center lg:text-left">
                    <h1 className="leading-tight mb-4">
                        <span className="md:block">{titleOne}</span>
                        <span className="md:block">{titleTwo}</span>
                    </h1>
                    <p className="text-gray-600 text-md md:text-lg">{subtitle}</p>
                </div>

                {/* RIGHT SIDE: FAQ Accordion */}
                <div className="lg:col-span-7 col-span-12">
                    <Accordion type="single" collapsible defaultValue="0">
                        {faqsData.slice(0, visibleFaqs).map((faq, index) => (
                            <AccordionItem key={index} value={index.toString()} className="border border-gray-200 bg-white rounded-lg shadow-none mb-4">
                                <AccordionTrigger className="text-md md:text-xl text-start font-semibold px-4 py-3 hover:no-underline" triggerBg={triggerBg} triggerTextColor={triggerTextColor}>{faq.question}</AccordionTrigger>
                                <AccordionContent className="px-4 pb-3 text-gray-600">
                                    <div className={faq.answer.split('\n').length > 1 ? "h-36 overflow-y-auto pr-2" : ""}>
                                        {faq.answer.split('\n').map((paragraph, i) => {
                                            // Check if paragraph contains markdown style link
                                            const linkMatch = paragraph.match(/\[(.*?)\]\((.*?)\)/);
                                            if (linkMatch) {
                                                const [fullMatch, linkText, linkUrl] = linkMatch;
                                                const parts = paragraph.split(fullMatch);
                                                return (
                                                    <p key={i} className="mb-2 text-md md:text-lg">
                                                        {parts[0]}
                                                        <CustomLink href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            {linkText}
                                                        </CustomLink>
                                                        {parts[1]}
                                                    </p>
                                                );
                                            }
                                            return <p key={i} className="mb-2 text-md md:text-lg">{paragraph}</p>;
                                        })}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {!showAllFaqs && (
                        <div className="text-center flex justify-end mt-6">
                            <Button onClick={navigateToFaqPage} className={`${bgColor} ${hoverBgColor} rounded-lg text-lg ${textColor} p-6`}>See More Questions</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}



