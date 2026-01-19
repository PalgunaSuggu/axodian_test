// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";

// const HomeBanner = ({ onExploreClick, }) => {
//   const features = [
//     "OneCompliance for EDPMS & EBRC workflows",
//     "OneDoc for organised, audit-ready documentation",
//     "LeRemitt for transparent cross-border payouts",
//     "LeFin for timely trade financing",
//   ];

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-black/90 text-white bg-[url('/images/HomeBg-00.webp')] lg:bg-[url('/images/axodianBg.webp')] flex items-center">
//       <div className="container mx-auto text-center py-20">

//         <h2 className="max-w-3xl mx-auto leading-tight">
//           Documentation, Compliance, <p className="pt-2">Payments & Financing</p>
//         </h2>
//         <h1 className="bannerText font-bold max-w-4xl mx-auto leading-tight pt-2">
//           all in one Trade-Verse.
//         </h1>

//         <p className="text-lg md:text-2xl max-w-4xl mx-auto mt-6 text-white/90">
//            Everything together so teams can reconcile faster, close requirements on time, and manage global trade without the usual hurdles.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10">
//           <Button onClick={onExploreClick} className="bg-white hover:bg-white/95 text-black text-lg py-6 px-10">Explore Our Solutions</Button>
//         </div>

//         {/* Features */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
//           {features.map((item, i) => (
//             <div key={i} className="p-4 rounded-xl bg-white/10 border border-solid border-white/20 backdrop-blur-md flex items-center gap-3">
//               <Check className="text-green-400" />
//               <p className="text-md">{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;

import React from "react";
import { Button } from "@/components/ui/button";

const HomeBanner = ({ onExploreClick, }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-black/90 text-white bg-[url('/images/HomeBg-00.webp')] lg:bg-[url('/images/axodianBg.webp')] flex items-center">
      <div className="container mx-auto text-center py-20">

        <h1 className="text-2xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          We are now Axodian
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight pt-2">
          Global Trade, Simplified.
        </h1>

        <p className="text-lg md:text-2xl max-w-4xl mx-auto mt-6 text-white/90">
           LeRemitt, LeDoc, and LeFin now come together under one trusted identity.
        </p>

        {/* Buttons */}
        <div className="mt-10">
          <Button onClick={onExploreClick} className="bg-white hover:bg-white/95 text-black text-lg py-6 px-10">Explore Our Solutions</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;