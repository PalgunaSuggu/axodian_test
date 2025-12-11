// Page Title: Home
// Page URL: https://www.axodian.com/
// Local URL: http://localhost:3000/
import Home from "../../components/Home_section/Home";
import SEO from "../../components/SEO";

const HomePage = () => {
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

export default HomePage
