"use client"

import { oneComplianceFaqs } from '../../Data'
import Faqs from '../../Reusable_section/Faqs/faqs'
import Register from '../../Reusable_section/Register/Register'
import LeDocDailogForm from '../../Reusable_section/ScheduleForm/LeDocDailogForm'
import CoreCapabilities from './CoreCapabilities/CoreCapabilities'
import HowOneComplianceWork from './HowOneComplianceWork/HowOneComplianceWork'
import OneComplianceBannerSection from './OneComplianceBanner/OneComplianceBannerSection'
import OneComplianceForm from '../../Reusable_section/ScheduleForm/OneComplianceForm'
import OneComplianceSolves from './OneComplianceSolves/OneComplianceSolves'
import TargetAudience from './TargetAudience/TargetAudience'
import WhyOneCompliance from './WhyOneCompliance/WhyOneCompliance'

const OneCompliancePage = () => {
  return (
    <div>
      <OneComplianceBannerSection />
      <WhyOneCompliance />
      <OneComplianceSolves />
      <CoreCapabilities />
      <HowOneComplianceWork />
      <TargetAudience />
      <OneComplianceForm />
      <Faqs faqsData={oneComplianceFaqs} productKey="onecompliance" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Everything you need to know about the One Compliance Beta." bgColor="bg-secondary-light-color" hoverBgColor="hover:bg-secondary-light-color/90" textColor="text-white" triggerBg="bg-secondary-light-color/15" triggerTextColor="text-secondary-light-color" />
      <Register subtitleOne="Make EBRC generation" subtitleTwo="and EDPMS reconciliation effortless." subtitleThree="" description="Be among the first to try One Compliance and simplify your workflow from day one." buttonText="Register for Early Access" defaultSelected={['document_management']} dialogComponent={LeDocDailogForm} formType="LeDocForm" backgroundImage="/images/GetStarted4.webp" />
    </div> 
  )
}

export default OneCompliancePage