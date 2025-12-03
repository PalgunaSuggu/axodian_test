import { useRef } from 'react';
import AxodianBanner from './AxodianBanner/AxodianBanner';
import AxodianFooter from './AxodianFooter';
import AxodianForBusinesses from './AxodianForBusinesses/AxodianForBusinesses';
import AxodianNavbar from './AxodianNavbar';
import AxodianSecurity from './AxodianSecurity/AxodianSecurity';
import ThreePillars from './AxodianThreePillars/ThreePillars';
import ProblemToOutcome from './ProblemToOutcome/ProblemToOutcome';
import WhyHowAxodian from './WhyHowAxodian/WhyHowAxodian';
import Walkthrough from './walkthrough/walkthrough';


const Axodian = () => {
    // Refs for each section
    const homeRef = useRef(null);
    const problemToOutcomeRef = useRef(null);
    const threePillarsRef = useRef(null);
    const whyHowAxodianRef = useRef(null);
    const forBusinessesRef = useRef(null);
    const securityRef = useRef(null);
    const faqsRef = useRef(null);
    const walkthroughRef = useRef(null);

    return (
        <div>
            <AxodianNavbar refs={{homeRef,problemToOutcomeRef,threePillarsRef,whyHowAxodianRef,forBusinessesRef,securityRef,faqsRef,walkthroughRef}} />

            <div ref={homeRef} id="home">
                <AxodianBanner />
            </div>
            
            <div ref={problemToOutcomeRef} id="problem-to-outcome">
                <ProblemToOutcome />
            </div>
            
            <div ref={threePillarsRef} id="three-pillars">
                <ThreePillars />
            </div>
            
            <div ref={whyHowAxodianRef} id="why-how-axodian">
                <WhyHowAxodian />
            </div>

            <div ref={walkthroughRef} id="walkthrough">
              <Walkthrough />
            </div>
            
            <div ref={forBusinessesRef} id="for-businesses">
                <AxodianForBusinesses />
            </div>
            
            <div ref={securityRef} id="security">
                <AxodianSecurity />
            </div>
            
            <AxodianFooter />
        </div>
    )
}

export default Axodian