import React from 'react'
import TestHome from './TestHome/TestHome'
import WhoWeServe from './WhoWeServe/WhoWeServe'
import WhoIsLeDocFor from './WhoIsLeDocFor/WhoIsLeDocFor'
import { GlobalTrade } from './GlobalTrade/GlobalTrade'
import TradeProblems from './TradeProblems/TradeProblems'
import { leDocFaqs } from '../Data'
import FAQs from '../Reusable_section/Faqs/faqs'
// import GlobalTrade from './GlobalTrade/GlobalTrade'

const MainTestHome = () => {
    return (
        <div>
            <TestHome />
            <WhoWeServe />
            <WhoIsLeDocFor />
            <TradeProblems />
            <GlobalTrade />
            <FAQs productKey="ledoc" tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leDocFaqs} />
        </div>
    )
}

export default MainTestHome