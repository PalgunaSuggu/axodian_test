"use client"

import { oneComplianceFaqs } from '../Data'
import Faqs from '../Reusable_section/Faqs/faqs'
import CoreCapabilities from './CoreCapabilities/CoreCapabilities'
import HowOneComplianceWork from './HowOneComplianceWork/HowOneComplianceWork'
import OneComplianceSolves from './OneComplianceSolves/OneComplianceSolves'
import TargetAudience from './TargetAudience/TargetAudience'
import WhyOneCompliance from './WhyOneCompliance/WhyOneCompliance'
import OneComplianceBanner from './OneComplianceBanner/OneComplianceBanner'
import OneCompRegister from './OneCompRegister'

const OneCompliance = ({ redirectTo = '/thank-you' }) => {
  return (
    <div id="home">
      <OneComplianceBanner redirectTo={redirectTo} />
      <WhyOneCompliance />
      <OneComplianceSolves />
      <CoreCapabilities />
      <HowOneComplianceWork />
      <TargetAudience />
      <Faqs faqsData={oneComplianceFaqs} productKey="onecompliance" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Everything you need to know about the One Compliance Beta." bgColor="bg-secondary-light-color" hoverBgColor="hover:bg-secondary-light-color/90" textColor="text-white" triggerBg="bg-secondary-light-color/15" triggerTextColor="text-secondary-light-color" />
      <OneCompRegister />
    </div>
  )
}

export default OneCompliance