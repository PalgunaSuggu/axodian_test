import { LeRemitt } from "../../components/LeRemitt_section/LeRemitt";
import SEO from "../../components/SEO";

export default function LeRemittPage() {
  return (
    <>
      <SEO
        title="Cross-Border Payments Platform For Exporters | LeRemitt"
        description="Efficient and cost-effective inward remittance services tailored exclusively to business customers."
        url="https://www.axodian.com/leremitt"
        image="https://www.axodian.com/images/LeRemittLogo.webp"
        imageAlt="LeRemitt Home"
      />
      <LeRemitt />
    </>
  );
}
