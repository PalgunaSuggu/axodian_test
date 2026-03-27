import React from 'react'
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const OneCompRegister = () => {
  const scrollToBanner = () => {
    const bannerElement = document.getElementById('home');
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[60vh] lg:h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`, backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />
        
        {/* Animated Brand Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-color/40 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-light-color/30 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[150px] bg-primary-color/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="leading-tight text-white mb-6">
          <span className="block font-bold mb-2">Make EBRC generation</span>
          <span className="block font-bold mb-2">and EDPMS reconciliation effortless.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl mt-6 max-w-3xl mx-auto mb-8">
          Be among the first to try One Compliance and simplify your workflow from day one.
        </p>

        <div className="flex justify-center">
          <Button 
            onClick={scrollToBanner}
            className="flex text-lg items-center gap-4 bg-white text-primary-color font-semibold p-6 rounded-lg hover:bg-white/95 transition"
          >
            Request a Demo
            <MoveRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OneCompRegister