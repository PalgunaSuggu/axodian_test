// Page Title: FAQs
// Page URL: https://www.axodian.com/faqs
// Local URL: http://localhost:3000/faqs
import FAQs from "../../components/Faqs_section/Faqs";
import SEO from "../../components/SEO";

const faqs = () => {
    return (
        <>
            <SEO
                title="Axodian FAQs | Frequently Asked Questions"
                description="Find answers to common questions about Axodian, including global trade solutions, cross-border payments, export documentation, and compliance."
                url="https://www.axodian.com/faqs"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="Axodian Frequently Asked Questions"
            />
            <FAQs showAll={true} />
        </>
    );
}

export default faqs
