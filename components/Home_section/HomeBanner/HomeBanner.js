// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";

// const HomeBanner = ({ onExploreClick, onJoinEarlyAccess }) => {
//   const features = [
//     "OneCompliance for EDPMS & EBRC workflows",
//     "OneDoc for organised, audit-ready documentation",
//     "LeRemitt for transparent cross-border payouts",
//     "LeFin for timely trade financing",
//   ];

//   return (
//     <div className="min-h-screen py-16 pt-20 md:pt-0 md:py-0 flex items-center bg-cover bg-center bg-black/90 text-white bg-[url('/images/HomeBg-00.webp')] lg:bg-[url('/images/HomeBg-axodian.webp')]">
//       <div className="container mx-auto">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold max-w-7xl text-center md:text-left leading-tight">Documentation, Compliance, Payments & Financing</h1>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-7xl pt-2 text-center md:text-left leading-tight">all in one Trade-Verse.</h1>

//         {/* Subtext */}
//         <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-center md:text-left mt-4 sm:mt-6 text-white/90">
//           Everything together so teams can reconcile faster, close requirements on time,
//           and manage global trade without the usual hurdles.
//         </p>

//         {/* Best UI: Feature Checklist Cards */}
//         <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
//           {features.map((item, idx) => (
//             <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border-solid border-[1px] border-white/30">
//               <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500/20">
//                 <Check className="w-5 h-5 text-green-400" />
//               </div>
//               <p className="text-lg">{item}</p>
//             </div>
//           ))}
//         </div>
 
//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-10">
//           <Button onClick={onJoinEarlyAccess} className="relative overflow-hidden group bg-[#663399] text-md lg:text-md px-8 py-2 h-12 flex items-center justify-center rounded-lg text-white transition-all duration-500">
//             <span className="absolute inset-0 bg-gradient-to-r from-[#663399] to-[#4066E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//             <span className="relative z-10">Join Early Access</span>
//           </Button>
//           <Button onClick={onExploreClick} className="bg-white/10 backdrop-blur-md text-md lg:text-md px-8 py-2 h-12 rounded-lg text-white border-solid border-[1px] border-white/50 transition-all duration-500">Explore Our Solutions</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;

import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HomeBanner = ({ onExploreClick, }) => {
  const features = [
    "OneCompliance for EDPMS & EBRC workflows",
    "OneDoc for organised, audit-ready documentation",
    "LeRemitt for transparent cross-border payouts",
    "LeFin for timely trade financing",
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-black/90 text-white bg-[url('/images/HomeBg-00.webp')] lg:bg-[url('/images/AxodianBg.webp')] flex items-center">
      <div className="container mx-auto text-center py-20">

        <h2 className="max-w-3xl mx-auto leading-tight">
          Documentation, Compliance, <p className="pt-2">Payments & Financing</p>
        </h2>
        <h1 className="bannerText font-bold max-w-4xl mx-auto leading-tight pt-2">
          all in one Trade-Verse.
        </h1>

        <p className="text-lg md:text-2xl max-w-4xl mx-auto mt-6 text-white/90">
           Everything together so teams can reconcile faster, close requirements on time, and manage global trade without the usual hurdles.
        </p>

        {/* Buttons */}
        <div className="mt-10">
          <Button onClick={onExploreClick} className="bg-white hover:bg-white/95 text-black text-lg py-6 px-10">Explore Our Solutions</Button>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {features.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/10 border border-solid border-white/20 backdrop-blur-md flex items-center gap-3">
              <Check className="text-green-400" />
              <p className="text-md">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;