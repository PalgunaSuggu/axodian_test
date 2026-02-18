"use client"

import { oneComplianceFaqs } from '../../Data'
import Faqs from '../../Reusable_section/Faqs/faqs'
import Register from '../../Reusable_section/Register/Register'
import CoreCapabilities from './CoreCapabilities/CoreCapabilities'
import HowOneComplianceWork from './HowOneComplianceWork/HowOneComplianceWork'
import BookDemo from './BookDemo/BookDemo'
import OneComplianceSolves from './OneComplianceSolves/OneComplianceSolves'
import TargetAudience from './TargetAudience/TargetAudience'
import WhyOneCompliance from './WhyOneCompliance/WhyOneCompliance'
import OneComplianceBanner from './OneComplianceBanner/OneComplianceBanner'
import OneComplianceDailogForm from '../../Reusable_section/ScheduleForm/OneComplianceDailogForm'
import OneCompNavbar from './OneCompNavbar'
import OneCompFooter from './OneCompFooter'

const OneComplianceLp = ({ redirectTo = 'https://calendly.com/leremitt_/ledoc-introduction' }) => {
  return (
    <div>
      <OneCompNavbar redirectTo={redirectTo}/>
      <div id="home">
        <OneComplianceBanner redirectTo={redirectTo} />
      </div>
      <div id="overview">
        <WhyOneCompliance />
      </div>
      <div id="solutions">
        <OneComplianceSolves />
      </div>
      <div id="features">
        <CoreCapabilities />
      </div>
      <div id="how-it-works">
        <HowOneComplianceWork />
      </div>
      <TargetAudience />
      <BookDemo redirectTo={redirectTo}/>
      <div id="faqs">
        <Faqs faqsData={oneComplianceFaqs} productKey="onecompliance" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Everything you need to know about the One Compliance Beta." bgColor="bg-secondary-light-color" hoverBgColor="hover:bg-secondary-light-color/90" textColor="text-white" triggerBg="bg-secondary-light-color/15" triggerTextColor="text-secondary-light-color" showSeeMore={false} />
      </div>
      <Register redirectTo={redirectTo} subtitleOne="Make EBRC generation" subtitleTwo="and EDPMS reconciliation effortless." subtitleThree="" description="Be among the first to try One Compliance and simplify your workflow from day one." buttonText="Book a 15-min Demo" defaultSelected={['one_compliance']} dialogComponent={OneComplianceDailogForm} formType="OneComplianceForm" backgroundImage="/images/GetStarted4.webp" />
      <OneCompFooter />
    </div>
  )
}

export default OneComplianceLp