'use client'

import { leRemittChoose, leremittFaqs, leRemittFeatures, LeRemittHowItWorks, leremittReviews } from '../Data'
import Definition from '../Reusable_section/Definition/Definition'
import FAQs from '../Reusable_section/Faqs/faqs'
import Features from '../Reusable_section/Features/Features'
import HowItWorks from '../Reusable_section/HowItWorks/HowItWorks'
import Register from '../Reusable_section/Register/Register'
import LeRemDailogForm from '../Reusable_section/ScheduleForm/LeRemDailogForm'
import Solutions from '../Reusable_section/Solutions/Solutions'
import { Testimonials } from '../Reusable_section/Testimonials/Testimonials'
import LeRemittBanner from './LeRemittBanner/LeRemittBanner'

const LeRemitt = () => {
  return (
    <div>
      <LeRemittBanner />
      <Definition tag="DEFINITION" title="What is" highlight="LeRemitt?" image='/images/LeRemDefinition.webp' description1="Cross-Border Payments Platform to accept International Payments for your Export Business" description2="Traditional way of receiving international payments are expensive and often lack transparency. LeRemitt provides exporters with a transparent, secure, and cost-effective alternative to receive payments from your global buyers." highlightBg="bg-blue-100" highlightText="text-blue-600" />
      <Solutions tag="FEATURES" title='Discover the Core Features of LeRemitt' featuresData={leRemittFeatures} />
      <HowItWorks steps={LeRemittHowItWorks} titleOne="Transparent, Simple, and Secure" titleTwo="Get Paid in Just 4 Steps" />
      <Features title="Why Exporters Choose LeRemitt?" description="Economical, Secure, and Transparent International Payments" features={leRemittChoose} />
      <Testimonials reviews={leremittReviews} isHomePage={false} withImgReviews={true} withoutImgReviews={false} tag="Success Stories" titleOne="Trusted by MSME Exporters Across India" />
      <FAQs productKey="leremitt" tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leremittFaqs} />
      <Register tag="Transform Your Export Business" subtitleOne="Cross-Border Payments" subtitleTwo="Seamless & Transparent" subtitleThree="Try LeRemitt Today!" description="Experience a faster, cost-effective, and compliant way to manage global trade payments—built with MSMEs, for MSMEs." buttonText="Request a Demo" defaultSelected={['remittance']} dialogComponent={LeRemDailogForm} backgroundImage="/images/GetStarted3.webp" />
    </div>
  )
}

export default LeRemitt