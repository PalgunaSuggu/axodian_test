// Page Title: Export Simplified
// Page URL: https://www.axodian.com/export-simplified
// Local URL: http://localhost:3000/export-simplified
import LeDocLandingPage from "../../components/LandingPage_section/LeDoc_landing_section/DocLandingPage";
import SEO from "../../components/SEO";

const exportSimplified = () => {
    return (
        <>
            <SEO
                title="LeDoc | Simplify Export Documentation & Compliance | Axodian"
                description="LeDoc by Axodian helps exporters manage, share, and track export documents in one secure platform while staying compliant with global trade regulations."
                url="https://www.axodian.com/export-simplified"
                image="https://www.axodian.com/images/LeDocLogo.webp"
                imageAlt="LeDoc Export Documentation Platform"
                noindex={true}
            />
            <LeDocLandingPage formType="LeDocForm" />
        </>
    );
}

export default exportSimplified
