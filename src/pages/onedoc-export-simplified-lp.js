// Page Title: OneDoc Export Simplified
// Page URL: https://www.axodian.com/onedoc-export-simplified-lp
// Local URL: http://localhost:3000/onedoc-export-simplified-lp
import SEO from "../../components/SEO";
import LeDocLandingPage from "../../components/LandingPage_section/LeDoc_landing_section/DocLandingPage";

const oneDocExportSimplifiedLp = () => {
    return (
        <>
            <SEO
                title="OneDoc | Simplify Export Documentation & Compliance | Axodian"
                description="OneDoc by Axodian helps exporters manage, share, and track export documents in one secure platform while staying compliant with global trade regulations."
                url="https://www.axodian.com/onedoc-export-simplified-lp"
                image="https://www.axodian.com/images/OneDocLogo.webp"
                imageAlt="OneDoc Export Documentation Platform"
                noindex={true}
            />
            <LeDocLandingPage formType="export" />
        </>
    );
}

export default oneDocExportSimplifiedLp
