import React from 'react'
import LeFinLandingPage from '../../components/LandingPage_section/LeFin_landing_section/LeFinLandingPage'
import SEO from '../../components/SEO'

const lefin = () => {
    return (
        <>
            <SEO
                title="Export Finance Loan India | LeFin – Fast Business Loans"
                description="Apply for fast, flexible export finance loans in India. Tailored for exporters. Pre-shipment & post-shipment funding. Simple digital process with LeFin."
                url="https://www.axodian.com/export-finance-loan-india"
                image="https://www.axodian.com/images/LeFinLogo.webp"
                imageAlt="LEFinLanding"
            />
            <LeFinLandingPage />
        </>
    )
}

export default lefin