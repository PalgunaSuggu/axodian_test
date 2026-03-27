
import { oneDocFaqs } from '../../Data'
import FAQs from '../../Reusable_section/Faqs/faqs'
import DocLeDocStepper from '../LeDoc_landing_section/DocLandingHowLeDocWorks/LeDocWorkSteps'
import DocLandingMedia from '../LeDoc_landing_section/DocLandingMedia/DocLandingMedia'
import DocLandingRegister from '../LeDoc_landing_section/DocLandingRegister/DocLadingRegister'
import DocLandingWhyLeDoc from '../LeDoc_landing_section/DocLandingWhyLeDoc/DocLandingWhyLeDoc'
import Header from '../LeDoc_landing_section/Header'
import SuccessStories from '../LeDoc_landing_section/SuccessStories/SuccessStories'
import WhatLeDocOffers from '../LeDoc_landing_section/WhatLeDocOffers/WhatLeDocOffers'
import OneDocLandingBanner from './OneDocLandingBanner/OneDocLandingBanner'

const OneDocLandingPage = () => {
    return (
        <div>
            <OneDocLandingBanner />
            <div id="features">
                <DocLandingWhyLeDoc formType="OneDocForm" brand="OneDoc" />
            </div>
            <div id="how-it-works">
                <WhatLeDocOffers formType="OneDocForm" brand="OneDoc" />
                <DocLeDocStepper brand="OneDoc" formType="OneDocForm" />
            </div>
            <div id="testimonials">
                <SuccessStories brand="OneDoc" />
            </div>
            <div id="media">
                <DocLandingMedia />
            </div>
            <div id="faqs">
                <FAQs tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about OneDoc cross-border services and discover how we can transform your export business." faqsData={oneDocFaqs} />
            </div>
            <div id="contact">
                <DocLandingRegister formType="OneDocForm" brand="OneDoc" />
            </div>
        </div>
    )
}

export default OneDocLandingPage