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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Now Available</span>
            </div>

            <h1 className="bannerText text-gray-900 mb-6 leading-tight">
              Compliance without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Chaos</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mb-4">
              EDPMS reconciliation, EBRC tracking, and export compliance — managed end-to-end in one workspace.
            </p>

            <p className="text-lg text-gray-600 mb-10">
              Track invoices, shipping bills, and remittances in one place. Close compliance faster. Reduce follow-ups, delays, and risk.
            </p>

            <p className="text-lg text-gray-600 bg-blue-50 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-solid border-blue-200 mb-6">
              Designed for exporters managing <span className="font-semibold text-gray-900">5+ shipments per month</span>
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex justify-center lg:justify-end overflow-y-auto md:h-[600px] shadow-2xl rounded-2xl">
            <OneComplianceForm  textColor="text-black" buttonText="Talk to Us" redirectTo={redirectTo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneComplianceBanner;