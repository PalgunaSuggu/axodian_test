// Page Title: Export Compliance
// Page URL: https://www.axodian.com/export-compliance-edpms-ebrc-lp
// Local URL: http://localhost:3000/export-compliance-edpms-ebrc-lp
import OneComplianceLp from '../../components/LandingPage_section/OneCompliance_landing_section/OneComplianceLp'
import SEO from '../../components/SEO'

const ExportCompliancePageLp = () => {
  return (
    <>
      <SEO
        title="Export Compliance – EBRC Issuance & EDPMS Reconciliation Tool"
        description="Get early access to Export Compliance — a unified platform for EBRC issuance, EDPMS reconciliation, and export compliance. Automate workflows and simplify reporting."
        url="https://www.axodian.com/export-compliance-edpms-ebrc-lp"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Export Compliance EBRC EDPMS"
      />
      <OneComplianceLp redirectTo="https://calendly.com/axodian/ledoc-introduction" />
    </>
  )
}

export default ExportCompliancePageLp

