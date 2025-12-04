import React from 'react'
import Rates from './LeCheckBanner/Rates'
import { leremittFaqs } from '../Data'
import FAQs from '../Reusable_section/Faqs/faqs'

const LeCheck = () => {
    return (
        <div>
            <Rates />
            <FAQs productKey="leremitt" tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leremittFaqs} />
        </div>
    )
}

export default LeCheck