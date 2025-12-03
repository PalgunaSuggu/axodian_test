import { leDocBenefits, leDocFaqs, ledocReviews } from '../Data';
import Benefits from "../Reusable_section/Benefits/Benefits";
import Definition from "../Reusable_section/Definition/Definition";
import FAQs from '../Reusable_section/Faqs/faqs';
import Register from "../Reusable_section/Register/Register";
import LeDocDailogForm from '../Reusable_section/ScheduleForm/LeDocDailogForm';
import { Testimonials } from '../Reusable_section/Testimonials/Testimonials';
import LeDocBanner from "./LeDocBanner/LeDocBanner";
import LeDocFeatures from "./LeDocFeatures/LeDocFeatures";
import LeDocSteps from './LeDocSteps/LeDocSteps';

const LeDoc = () => {
  return (
    <div>
      <LeDocBanner />
      <Definition tag="DEFINITION" title="Why" highlight="LeDoc?" image='/images/LeDocAxodianDefinition.webp' description1="Trade Documentation & Compliance Management—Simplified, Consolidated & Automated" description2="No more searching for documents at multiple places. No more manual errors, delays, or compliance headaches. LeDoc ensures your trade documents are accurate, automated, and audit-ready—every time." highlightBg="bg-primary-light-color/10" highlightText="text-primary-color" />
      <Benefits tag="Benefits" subtitleOne="Unlock the Ultimate" subtitleTwo="Benefits with LeDoc" benefits={leDocBenefits} />
      <LeDocSteps />
      <LeDocFeatures />
      <Testimonials reviews={ledocReviews} duration='10s' isHomePage={false} withoutImgReviews={true} withImgReviews={false} tag="Success Stories" titleOne="Co-Created with Exporters, Designed for" titleTwo="Real-World Trade Challenges" subHeading="We built LeDoc in collaboration with exporters, and logistics experts to solve real documentation & compliance painpoints—so you get a solution that truly works." />
      <FAQs productKey="ledoc" tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leDocFaqs} bgColor="bg-primary-color" hoverBgColor="hover:bg-primary-color/90" textColor="text-white" triggerBg="bg-tertiary-color/20" triggerTextColor="text-primary-light-color"/>
      <Register subtitleOne="Trade Documentation" subtitleTwo="Simplified & Automated" subtitleThree="Try LeDoc Today!" description="Experience a smarter, faster, and error-free way to manage trade documentation—built with exporters, for exporters." buttonText="Request a Demo" defaultSelected={['document_management']} dialogComponent={LeDocDailogForm} formType="LeDocForm" backgroundImage="/images/GetStartedAxodian.webp" />
    </div>
  )
}

export default LeDoc
