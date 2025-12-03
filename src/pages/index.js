import { Home } from "../../components/Home_section/Home";
import SEO from "../../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Global Trade, Simplified"
        description="We simplify international Payments, automate global trade Documentation & Compliance and facilitate Financing"
        url="https://www.axodian.com/"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Global Trade Verse"
      />
      <Home />
    </>
  );
}
