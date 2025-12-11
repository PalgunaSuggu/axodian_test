// Page Title: Export Simplified
// Page URL: https://www.axodian.com/export-simplified
// Local URL: http://localhost:3000/export-simplified
import LandingPage from "../../components/LandingPage_section/LeDoc_landing_section/DocLandingPage";
import SEO from "../../components/SEO";

const exportSimplified = () => {
    return (
        <>
            <SEO
                title="LeDoc: Simplify Export Documentation & Stay Compliant"
                description="Manage, share & track all export documents in one secure platform. Stay compliant with regulations."
                url="https://www.axodian.com/export-simplified"
                image="https://www.axodian.com/images/LeDocLogo.webp"
                imageAlt="LeDocLanding"
            />
            <LandingPage formType="LeDocForm" />
        </>
    );
}

export default exportSimplified
