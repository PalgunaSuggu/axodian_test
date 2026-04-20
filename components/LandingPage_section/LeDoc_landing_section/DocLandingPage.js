import { oneDocFaqs } from '../../Data'
import FAQs from '../../Reusable_section/Faqs/faqs'
import Header from './Header'
import LeDocWorkSteps from './DocLandingHowLeDocWorks/LeDocWorkSteps'
import DocLandingMedia from './DocLandingMedia/DocLandingMedia'
import DocLadingRegister from './DocLandingRegister/DocLadingRegister'
import DocLandingWhyLeDoc from './DocLandingWhyLeDoc/DocLandingWhyLeDoc'
import SuccessStories from './SuccessStories/SuccessStories'
import WhatLeDocOffers from './WhatLeDocOffers/WhatLeDocOffers'
import OneDocLandingBanner from '../../OneDoc_section/OneDocLandingBanner/OneDocBanner'

const LeDocLandingPage = ({ formType }) => {
    return (
        <div>
            <Header src="/images/OneDoc.webp" alt="OneDoc Logo" />
            <OneDocLandingBanner />
            <div id="features">
                <DocLandingWhyLeDoc brand="OneDoc" formType={formType} />
            </div>
            <div id="how-it-works">
                <WhatLeDocOffers formType={formType} />
                <LeDocWorkSteps brand="OneDoc" formType={formType} />
            </div>
            <div id="testimonials">
                <SuccessStories />
            </div>
            <div id="media">
                <DocLandingMedia />
            </div>
            <div id="faqs">
                <FAQs tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about OneDoc and discover how we can transform your export documentation process." faqsData={oneDocFaqs} showSeeMore={false} />
            </div>
            <div id="contact">
                <DocLadingRegister brand="OneDoc" formType={formType} />
            </div>
        </div>
    )
}

export default LeDocLandingPage