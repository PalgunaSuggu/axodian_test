import Partners from "../../components/Partners_section/Partners";
import SEO from "../../components/SEO";

export default function PartnersPage() {
  return (
    <>
      <SEO
        title="Partner With LeRemitt"
        description="Join LeRemitt's partner program. Grow together as we simplify international trade for Indian exporters through our AI-powered document management platform, LeDoc."
        url="https://www.axodian.com/partners"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Partner With LeRemitt"
      />
      <Partners />
    </>
  );
}
