import { useRef } from 'react'
import { allReviews, homeFeatures, mediaFeatures } from '../Data'
import Features from '../Reusable_section/Features/Features'
import GetStarted from '../Reusable_section/GetStarted/GetStarted'
import Investors from '../Reusable_section/Investors/Investors'
import { Testimonials } from '../Reusable_section/Testimonials/Testimonials'
import HomeBanner from './HomeBanner/HomeBanner'
import WhyLeRemitt from './HowWorks/WhyLeRemitt'
import SuiteofSolutions from './SuiteofSolutions/SuiteofSolutions'

export const Home = () => {
  const benefitsRef = useRef(null);

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HomeBanner onExploreClick={scrollToBenefits} />
      <Features title="Enabling Smarter Trade, Seamlessly" description="Axodian brings together intelligent solutions that simplify documentation, compliance, payments, and financing - helping businesses trade globally with confidence and trust." features={homeFeatures} />
      <div ref={benefitsRef}>
        <SuiteofSolutions />
      </div>
      <WhyLeRemitt />
      <Testimonials reviews={allReviews} duration='40s' mediaFeatures={mediaFeatures} isHomePage={true} withoutImgReviews={true} withImgReviews={false} titleOne="How We're Making Global Trade Effortless" titleTwo="Hear From Our Clients" />
      <Investors />
      <GetStarted tag="TRANSFORM YOUR EXPORT BUSINESS" heading="Global Trade. Simplified." subtitleOne="Join 500+ businesses powering cross-border trade with Axodian." subtitleTwo="a portfolio of solutions simplifying documentation, compliance, payments, and financing." buttonText="See How It Works" buttonLink="/" />
    </div>
  )
}
