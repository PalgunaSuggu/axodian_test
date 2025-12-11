import { Button } from '@/components/ui/button';
import React from 'react';

const OneComplianceBanner = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,backgroundSize: '40px 40px',maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'}} />

        {/* Animated Brand Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-color/40 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-light-color/30 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-color/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Now in Early Access</span>
        </div>

        <h1 className="bannerText text-white mb-6 leading-tight">
          Compliance without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Chaos</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
          EDPMS reconciliation and EBRC tracking for Indian exporters – in one simple, intelligent workspace.
        </p>

        <p className="text-lg text-gray-400 mb-10">
          Because your time is better spent growing exports than fixing paperwork.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button className="bg-white text-primary-color hover:bg-gray-100 font-bold py-7 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            Request Early Access
          </Button>
          <Button className="bg-white/5 border-2 border-solid border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-7 px-10 rounded-full text-lg transition-all duration-300 w-full sm:w-auto">
            Book a 15-min Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OneComplianceBanner;