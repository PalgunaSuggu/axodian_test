import { useRef } from 'react';
import { aboutFeatures } from '../Data';
import Definition from "../Reusable_section/Definition/Definition";
import GetStarted from "../Reusable_section/GetStarted/GetStarted";
import Investors from "../Reusable_section/Investors/Investors";
import Solutions from "../Reusable_section/Solutions/Solutions";
import AboutBanner from "./AboutBanner/AboutBanner";
import JoinUs from './JoinUs/JoinUs';
import Team from "./Team/Team";
import Values from "./values/Values";

const About = () => {
  const aboutRef = useRef(null);

  const scrollToBenefits = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <AboutBanner onExploreClick={scrollToBenefits} />
      <Definition
        tag="STORY"
        title="The Axodian Journey"
        image='/images/AboutDefinition.webp'
        subtitle="From Local Frustrations to Global Solutions"
        description1="It all started with a simple realization: international trade is broken. Hidden fees, endless paperwork, and slow transactions meant businesses were spending more time fixing problems than growing. We knew there had to be a better way."
        description2="That's why we built Axodian. What began as an idea to simplify payments quickly expanded into a full-fledged trade management platform, empowering exporters and businesses to transact, finance, and comply—seamlessly. Today, we work with numerous businesses, financial institutions, and global partners to make cross-border transactions as easy as domestic ones. And we're just getting started."
        description3="Our mission is to reshape global trade for the digital era, one transaction at a time."
      />
      <div ref={aboutRef}><Solutions title='What we Do?' tag="Our Solutions" featuresData={aboutFeatures} /></div>
      <Values />
      <Team />
      <JoinUs />
      <Investors />
      <GetStarted tag="TRANSFORM YOUR EXPORT BUSINESS" heading="What’s Next?" subtitleOne="Axodian is continuously evolving to make global trade more accessible, secure, and" subtitleTwo="efficient. Stay tuned for upcoming innovations as we redefine cross-border commerce" buttonText="Get Started Today!" buttonLink="/" />
    </div>
  )
}

export default About