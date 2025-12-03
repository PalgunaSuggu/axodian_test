import FAQs from "../../components/Faqs_section/Faqs";
import SEO from "../../components/SEO";

export default function FaqsPage() {
    return (
        <>
            <SEO
                title="FAQs - Frequently Asked Questions | LeRemitt"
                description="Get answers to all your questions about LeRemitt. Our comprehensive FAQ page covers everything you need to know."
                url="https://www.axodian.com/faqs"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="LeRemitt Frequently Asked Questions"
            />
            <FAQs showAll={true} />
        </>
    );
}
