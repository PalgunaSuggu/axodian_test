import React from 'react';
import OneComplianceForm from '../../../Reusable_section/ScheduleForm/OneComplianceForm';

const OneComplianceBanner = ({ redirectTo }) => {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] relative overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)`, backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

        {/* Animated Brand Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/70 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/60 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-200/30 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28 pb-16 md:pb-0 md:pt-0 p-4 sm:p-6 lg:p-8 container mx-auto">
          {/* Left Content */}
          <div className="text-center mb-6">
            <h1 className="bannerText text-gray-900 mb-4 leading-tight">
              Compliance without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Chaos</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              EDPMS reconciliation, EBRC tracking, and export compliance — managed end-to-end in one workspace.
            </p>

            <p className="text-lg text-gray-600 mb-4">
              Track invoices, shipping bills, and remittances in one place. Close compliance faster. Reduce follow-ups, delays, and risk.
            </p>

            <p className="text-lg text-gray-600 bg-blue-50 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-solid border-blue-200">
              Designed for exporters managing <span className="font-semibold text-gray-900">5+ shipments per month</span>
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="rounded-2xl border border-solid border-blue-300">
            <OneComplianceForm  textColor="text-black" buttonText="Talk to Us" redirectTo={redirectTo} />
          </div>
      </div>
    </div>
  );
};

export default OneComplianceBanner;