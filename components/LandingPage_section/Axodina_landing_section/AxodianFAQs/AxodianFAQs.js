import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How fast can we go live?",
    answer: "Most teams begin with a pilot and scale within weeks. The exact timeline depends on your trade flows and document requirements, but we've designed the onboarding to be as smooth as possible.",
  },
  {
    question: "Do we need to change banks or partners?",
    answer: "No. Keep your existing ecosystem. Axodian integrates with your current banking relationships and partners.",
  },
  {
    question: "Can we start with one pillar?",
    answer: "Yes. Many start with documentation and compliance, then add payments and financing as they see value. You can adopt the platform at your own pace.",
  },
  {
    question: "What does onboarding look like?",
    answer: "We align on flows, set up templates, migrate active shipments, and train your users. Our team works closely with you to ensure a smooth transition.",
  },
  {
    question: "How is pricing structured?",
    answer: "Based on usage and modules. We'll share a simple plan during the walkthrough that's tailored to your needs.",
  },
];

const AxodianFAQs = () => {
  return (
    <section className="relative">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <div className="text-center mb-14">
            <h1 className="mb-6 leading-tight text-slate-900">Frequently asked questions</h1>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-solid border-primary-color/40 bg-white/40 rounded-lg shadow-none mb-4">
                <AccordionTrigger className="text-md md:text-xl text-start font-medium px-4 py-3 hover:no-underline hover:text-primary-color">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600 text-md md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AxodianFAQs;
