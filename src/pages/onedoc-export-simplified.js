// Page Title: OneDoc Export Simplified
// Page URL: https://www.axodian.com/onedoc-export-simplified
// Local URL: http://localhost:3000/onedoc-export-simplified
import OneDocLandingPage from "../../components/LandingPage_section/OneDoc_landing_section/OneDocLandingPage";
import SEO from "../../components/SEO";

const oneDocExportSimplified = () => {
    return (
        <>
            <SEO
                title="OneDoc | Simplify Export Documentation & Compliance | Axodian"
                description="OneDoc by Axodian helps exporters manage, share, and track export documents in one secure platform while staying compliant with global trade regulations."
                url="https://www.axodian.com/onedoc-export-simplified"
                image="https://www.axodian.com/images/OneDocLogo.webp"
                imageAlt="OneDoc Export Documentation Platform"
                noindex={true}
            />
            <OneDocLandingPage />
        </>
    );
}

export default oneDocExportSimplified
