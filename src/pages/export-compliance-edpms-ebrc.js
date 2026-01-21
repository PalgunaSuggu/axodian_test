// Page Title: Export Compliance
// Page URL: https://www.axodian.com/export-compliance-edpms-ebrc
// Local URL: http://localhost:3000/export-compliance-edpms-ebrc
import OneCompliance from '../../components/LandingPage_section/OneCompliance_landing_section/OneCompliance'
import SEO from '../../components/SEO'

const ExportCompliancePage = () => {
  return (
    <>
      <SEO
        title="Export Compliance – EBRC Issuance & EDPMS Reconciliation Tool"
        description="Get early access to Export Compliance — a unified platform for EBRC issuance, EDPMS reconciliation, and export compliance. Automate workflows and simplify reporting."
        url="https://www.axodian.com/export-compliance-edpms-ebrc"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Export Compliance EBRC EDPMS"
      />
      <OneCompliance />
    </>
  )
}

export default ExportCompliancePage

