import { Button } from '@/components/ui/button';
import React from 'react';

const OneComplianceBanner = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)", }} />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="leading-tight text-white text-center">
            Compliance without chaos.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Reconcile your EDPMS entries and generate EBRCs faster, with complete visibility with data from DGFT, ICEGATE and banks all at one place. One Compliance keeps every compliance step organised so exporters can work with clarity and control.
          </p>

          {/* CTA Button */}
          <Button className="bg-white text-primary-color hover:bg-gray-100 font-semibold py-6 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Register for Early Access
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OneComplianceBanner;