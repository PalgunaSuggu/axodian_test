import { leDocFaqs } from '../../Data'
import FAQs from '../../Reusable_section/Faqs/faqs'
import Header from './Header'
import LandingBanner from './DocLandingBanner/DocLandingBanner'
import LeDocWorkSteps from './DocLandingHowLeDocWorks/LeDocWorkSteps'
import LandingMedia from './DocLandingMedia/DocLandingMedia'
import LadingRegister from './DocLandingRegister/DocLadingRegister'
import LandingWhyLeDoc from './DocLandingWhyLeDoc/DocLandingWhyLeDoc'
import SuccessStories from './SuccessStories/SuccessStories'
import WhatLeDocOffers from './WhatLeDocOffers/WhatLeDocOffers'

const LandingPage = ({ formType }) => {
    return (
        <div>
            <Header />
            <LandingBanner />
            <LandingWhyLeDoc formType={formType} />
            <WhatLeDocOffers formType={formType} />
            <LeDocWorkSteps formType={formType} />
            <SuccessStories />
            <LandingMedia />
            <FAQs tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitts cross-border services and discover how we can transform your export business." faqsData={leDocFaqs} />
            <LadingRegister formType={formType} />
        </div>
    )
}

export default LandingPage