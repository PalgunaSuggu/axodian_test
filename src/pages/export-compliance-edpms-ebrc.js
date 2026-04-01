// Page Title: Export Compliance
// Page URL: https://www.axodian.com/export-compliance-edpms-ebrc
// Local URL: http://localhost:3000/export-compliance-edpms-ebrc
import OneCompliance from '../../components/OneCompliance_section/OneCompliance'
import SEO from '../../components/SEO'

const ExportCompliancePage = () => {
  return (
    <>
      <SEO
        title="Export Compliance Tool | EBRC & EDPMS Reconciliation | Axodian"
        description="Axodian's Export Compliance platform helps exporters manage EBRC issuance, EDPMS reconciliation, and regulatory reporting with automated workflows and simplified compliance management."
        url="https://www.axodian.com/export-compliance-edpms-ebrc"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Axodian Export Compliance Platform"
        noindex={true}
      />
      <OneCompliance redirectTo="/thank-you" />
    </>
  )
}

export default ExportCompliancePage

