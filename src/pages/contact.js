// Page Title: Contact Us
// Page URL: https://www.axodian.com/contact
// Local URL: http://localhost:3000/contact
import Contact from "../../components/Contact_section/Contact";
import SEO from "../../components/SEO";

const contact = () => {
    return (
        <>
            <SEO
                title="Connect With Us | LeRemitt"
                description="Having queries about international payments? Connect with us. We will contact you as soon as possible."
                url="https://www.axodian.com/contact"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="Contact Us"
            />
            <Contact />
        </>
    );
}

export default contact
