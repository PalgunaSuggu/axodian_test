// Page Title: Contact Us
// Page URL: https://www.axodian.com/contact
// Local URL: http://localhost:3000/contact
import Contact from "../../components/Contact_section/Contact";
import SEO from "../../components/SEO";

const contact = () => {
    return (
        <>
            <SEO
                title="Contact Axodian | Global Trade Solutions"
                description="Contact Axodian for inquiries about global trade solutions, cross-border payments, export documentation, and compliance. Our team will get back to you shortly."
                url="https://www.axodian.com/contact"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="Contact Axodian"
            />
            <Contact />
        </>
    );
}

export default contact
