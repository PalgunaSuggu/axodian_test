"use client"

import { oneComplianceFaqs } from '../../Data'
import Faqs from '../../Reusable_section/Faqs/faqs'
import CoreCapabilities from './CoreCapabilities/CoreCapabilities'
import HowOneComplianceWork from './HowOneComplianceWork/HowOneComplianceWork'
import OneComplianceSolves from './OneComplianceSolves/OneComplianceSolves'
import TargetAudience from './TargetAudience/TargetAudience'
import WhyOneCompliance from './WhyOneCompliance/WhyOneCompliance'
import OneComplianceBanner from './OneComplianceBanner/OneComplianceBanner'
import OneCompNavbar from './OneCompNavbar'
import OneCompFooter from './OneCompFooter'
import OneCompRegister from './OneCompRegister'

const OneCompliance = ({ redirectTo = '/thank-you' }) => {
  return (
    <div>
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
      <div id="faqs">
        <Faqs faqsData={oneComplianceFaqs} productKey="onecompliance" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Everything you need to know about the One Compliance Beta." bgColor="bg-secondary-light-color" hoverBgColor="hover:bg-secondary-light-color/90" textColor="text-white" triggerBg="bg-secondary-light-color/15" triggerTextColor="text-secondary-light-color" showSeeMore={false} />
      </div>
      <OneCompRegister />
    </div>
  )
}

export default OneCompliance