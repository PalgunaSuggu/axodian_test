import { useRef } from 'react';
import { leFinFaqs, leFinFeatures } from '../Data';
import FAQs from "../Reusable_section/Faqs/faqs";
import Register from '../Reusable_section/Register/Register';
import LeFinDailogForm from '../Reusable_section/ScheduleForm/LeFinDailogForm';
import Solutions from "../Reusable_section/Solutions/Solutions";
import HowWorks from './HowWorks/HowWorks';
import LeFinBanner from './LeFinBanner/LeFinBanner';
import LeDocSolutions from './LeFinSolutions/LefinSolutions';
import LoanApplication from './LoanApplication/LoanApplication';

const LeFin = () => {
  const applicationRef = useRef(null);

  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <LeFinBanner onApplyClick={scrollToApplication} ref={applicationRef} />
      <Solutions title='Why Choose LeFin?' featuresData={leFinFeatures} />
      <LeDocSolutions onApplyClick={scrollToApplication} />
      <HowWorks />
      <div ref={applicationRef}><LoanApplication /></div>
      <FAQs productKey="lefin" tag="Your Questions, answered" titleOne="Frequently Asked" titleTwo="Questions" subtitle="Find answers to your questions about LeRemitt's cross-border services and discover how we can transform your export business." faqsData={leFinFaqs} />
      <Register formTitle='Know More' tag="Transform Your Export Business" subtitleOne="Trade Finance" subtitleTwo="Accessible & Streamlined" subtitleThree="Try LeFin Today!" description="Access flexible, and secure trade financing—designed to empower MSMEs at every step of their global journey" buttonText="Apply Now" defaultSelected={['trade_finance']} dialogComponent={LeFinDailogForm} backgroundImage="/images/GetStarted3.webp" />
    </div>
  )
}

export default LeFin