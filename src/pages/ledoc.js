import LeDoc from "../../components/LeDoc_section/LeDoc";
import SEO from "../../components/SEO";

export default function LeDocPage() {
  return (
    <>
      <SEO
        title="LeDoc: Intelligent Docking of Consignment Documents"
        description="Intelligent Docking of Consignment Documents with a focus on Storage, Security and Sharing"
        url="https://www.axodian.com/ledoc"
        image="https://www.axodian.com/images/LeDocLogo.webp"
        imageAlt="LeDoc Ai"
      />
      <LeDoc />
    </>
  );
}
