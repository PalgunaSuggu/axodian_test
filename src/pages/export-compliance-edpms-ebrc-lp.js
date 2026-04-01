// Page Title: Export Compliance
// Page URL: https://www.axodian.com/export-compliance-edpms-ebrc-lp
// Local URL: http://localhost:3000/export-compliance-edpms-ebrc-lp
import OneComplianceLp from '../../components/OneCompliance_section/OneComplianceLp'
import SEO from '../../components/SEO'

const ExportCompliancePageLp = () => {
  return (
    <>
      <SEO
        title="Export Compliance Tool | EBRC & EDPMS Reconciliation | Axodian"
        description="Axodian's Export Compliance platform helps exporters manage EBRC issuance, EDPMS reconciliation, and regulatory reporting with automated workflows and simplified compliance management."
        url="https://www.axodian.com/export-compliance-edpms-ebrc-lp"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Axodian Export Compliance Platform"
        noindex={true}
      />
      <OneComplianceLp redirectTo="https://calendly.com/axodian/one-compliance" />
    </>
  )
}

export default ExportCompliancePageLp

