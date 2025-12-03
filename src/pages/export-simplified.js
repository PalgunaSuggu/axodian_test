import LandingPage from "../../components/LandingPage_section/LeDoc_landing_section/DocLandingPage";
import SEO from "../../components/SEO";

export default function LeDocLandingPage() {
    return (
        <>
            <SEO
                title="LeDoc: Simplify Export Documentation & Stay Compliant"
                description="Manage, share & track all export documents in one secure platform. Stay compliant with regulations."
                url="https://www.axodian.com/export-simplified"
                image="https://www.axodian.com/images/LeDocLogo.webp"
                imageAlt="LeDocLanding"
            />
            <LandingPage formType="LeDocForm"/>
        </>
    );
}
