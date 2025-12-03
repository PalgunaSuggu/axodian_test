import React, { useRef } from 'react'
import FinLandingBanner from './FinLandingBanner/FinLandingBanner'
import FinLandingWhyLeFin from './FinLandingWhyLeFin/FinLandingWhyLeFin'
import FinLandingSteps from './FinLandingSteps/FinLandingSteps'
import { leFinFaqs } from '../../Data'
import FAQs from '../../Reusable_section/Faqs/faqs'
import FinalCTA from './FinalCTA/FinalCTA'
import Header from './Header'
import LoanFeaturesEligibility from './LoanFeaturesEligibility/LoanFeaturesEligibility'


const LeFinLandingPage = () => {
    return (
        <div>
            <Header />
            <FinLandingBanner />
            <FinLandingWhyLeFin />
            <LoanFeaturesEligibility />
            <FinLandingSteps />
            <FAQs productKey='lefin' tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leFinFaqs} />
            <FinalCTA />
        </div>
    )
}

export default LeFinLandingPage