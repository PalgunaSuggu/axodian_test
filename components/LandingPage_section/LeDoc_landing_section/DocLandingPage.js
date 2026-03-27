import { leDocFaqs } from '../../Data'
import FAQs from '../../Reusable_section/Faqs/faqs'
import Header from './Header'
import DocLandingBanner from './DocLandingBanner/DocLandingBanner'
import LeDocWorkSteps from './DocLandingHowLeDocWorks/LeDocWorkSteps'
import DocLandingMedia from './DocLandingMedia/DocLandingMedia'
import DocLadingRegister from './DocLandingRegister/DocLadingRegister'
import DocLandingWhyLeDoc from './DocLandingWhyLeDoc/DocLandingWhyLeDoc'
import SuccessStories from './SuccessStories/SuccessStories'
import WhatLeDocOffers from './WhatLeDocOffers/WhatLeDocOffers'

const LeDocLandingPage = ({ formType }) => {
    return (
        <div>
            <Header src="https://www.axodian.com/images/LeDocLogo.webp" alt="LeDoc Logo" />
            <DocLandingBanner />
            <div id="features">
                <DocLandingWhyLeDoc formType={formType} />
            </div>
            <div id="how-it-works">
                <WhatLeDocOffers formType={formType} />
                <LeDocWorkSteps formType={formType} />
            </div>
            <div id="testimonials">
                <SuccessStories />
            </div>
            <div id="media">
                <DocLandingMedia />
            </div>
            <div id="faqs">
                <FAQs tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitts cross-border services and discover how we can transform your export business." faqsData={leDocFaqs} />
            </div>
            <div id="contact">
                <DocLadingRegister formType={formType} />
            </div>
        </div>
    )
}

export default LeDocLandingPage