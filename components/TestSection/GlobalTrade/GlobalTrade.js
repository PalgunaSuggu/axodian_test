// "use client";
// import React from "react";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
// import { AnimatePresence, motion } from "framer-motion";

// export function GlobalTrade() {
//   return (
//     <section className="py-20 w-full bg-black text-white px-6">
//       <div className="grid lg:gap-20 gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
//         <Card title="Sheetal is Nisha" icon={<TextIcon text="LeRemitt" />}>
//           <CanvasRevealEffect   animationSpeed={3} containerClassName="bg-emerald-900" />
//         </Card>

//         <Card title="Nisha is Munni" icon={<TextIcon text="LeDoc" />}>
//           <CanvasRevealEffect
//             animationSpeed={4}
//             containerClassName="bg-black"
//             colors={[
//               [236, 72, 153],
//               [232, 121, 249],
//             ]}
//             dotSize={2}
//           />
//         </Card>

//         <Card title="Trade finance" purpose='Access working capital and forex solutions designed for exporters/importers — helping you bridge cashflow gaps and grow with confidence.' icon={<TextIcon text="LeFin" />}>
//           <CanvasRevealEffect
//             animationSpeed={4}
//             containerClassName="bg-sky-600"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// }

// const Card = ({ title, icon, children, purpose }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative flex flex-col items-center justify-center border-2 border-solid border-white/20 rounded-lg max-w-full h-80 p-4 group/canvas-card">

//       {/* Corner icons */}
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

//       {/* Hover children */}
//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="absolute inset-0 w-full h-full">
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Icon & Title */}
//       <div className="relative z-20 flex flex-col items-center justify-center">
//         <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
//           {icon}
//         </div>
//         <h2 className="mt-4 text-xl font-bold opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 text-white">
//           {title}
//         </h2>
//         <p className="mt-4 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 text-white">{purpose}</p>
//       </div>
//     </div>
//   );
// };

// const TextIcon = ({ text }) => (
//   <span className="text-2xl font-bold text-white group-hover/canvas-card:text-white">
//     {text}
//   </span>
// );

// export const Icon = ({ className, ...rest }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className={className}
//     {...rest}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//   </svg>
// );
"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalTrade() {
  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-black text-white bg-[url('/images/test.webp')] bg-cover bg-center bg-no-repeat">
      {/* Products Section */}
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">
            Our Products
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to run your cross-border back office — in one platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:gap-20 gap-8 sm:grid-cols-1 md:grid-cols-3">
          {/* LeRemitt */}
          <Card
            title="Cross-border payments"
            purpose="Receive international payments from 140+ countries in USD/EUR/GBP/CAD with transparent fees, faster settlements, and real-time tracking."
            icon={<TextIcon text="LeRemitt" />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-transparent"
              colors={[[94, 129, 255],]}
              dotSize={3}
            />
          </Card>

          {/* LeDoc */}
          <Card
            title="Compliance & documentation automation"
            purpose="Close IEDPMS/EDPMS entries, generate EBRCs on DGFT, respond to DGFT/bank queries instantly, and stay audit-ready year-round."
            icon={<TextIcon text="LeDoc" />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-transparent"
              colors={[
                [94, 129, 255],
                [90, 232, 250],
              ]}
              dotSize={3}
            />
          </Card>

          {/* LeFin */}
          <Card
            title="Trade finance"
            purpose="Access working capital and forex solutions designed for exporters/importers — helping you bridge cashflow gaps and grow with confidence."
            icon={<TextIcon text="LeFin" />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-transparent"
              colors={[[90, 232, 250]]}
              dotSize={3}
            />
          </Card>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center items-center mt-12">
          <Button className="p-4 sm:p-6 sm:px-8 flex items-center justify-center gap-2 text-white text-md font-semibold bg-white/10 backdrop-blur-md border-2 border-solid border-white/30 rounded-full hover:bg-white/20 transition">
            Request a Personalized Demo
            <MoveRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, icon, children, purpose }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer flex items-center justify-center border-2 border-solid border-white/20 rounded-lg h-80 p-4 group/canvas-card bg-black/25"
    >
      {/* Corner icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      {/* Hover children */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full w-full">
        {/* Centered product name */}
        <div className="flex items-center justify-center h-full w-full transition duration-200 group-hover/canvas-card:opacity-0 group-hover/canvas-card:-translate-y-4">
          {icon}
        </div>

        {/* Hover details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-1 text-center opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-md text-gray-200">{purpose}</p>
        </div>
      </div>
    </div>
  );
};

const TextIcon = ({ text }) => (
  <span className="text-3xl font-bold text-white">{text}</span>
);

export const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
