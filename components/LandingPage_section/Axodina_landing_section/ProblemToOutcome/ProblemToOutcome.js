import React from 'react';
import { CheckCircle, FileText, Clock, Zap } from 'lucide-react';

const ProblemToOutcome = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 md:w-12 md:h-12" />,
      title: "Fewer errors on critical documents"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-12 md:h-12" />,
      title: "Clean audit trails and faster approvals"
    },
    {
      icon: <Clock className="w-6 h-6 md:w-12 md:h-12" />,
      title: "Predictable payment flows"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-12 md:h-12" />,
      title: "Faster access to working capital"
    }
  ];

  return (
    <section className="relative py-24 lg:py-40  w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `radial-gradient(circle at top right, rgba(185, 191, 255, 0.4), transparent 50%)`,
          // filter: "blur(10px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-start text-center font-bold text-gray-800 mb-8">
              Trade is complex. <br className='hidden md:block' /> {`It doesn't have to be.`}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 border-solid border-l-4 border-gray-300 pl-4">
              Manual paperwork. Fragmented tools. Unclear compliance steps. Missed payment timelines.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 border-solid border-l-4 border-primary-light-color pl-4">
              Axodian replaces this chaos with one connected environment that keeps documents clean, payments on time, and financing within reach.
            </p>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-white/10 hover:bg-white/30 p-2 md:p-8 rounded-md transition-all duration-300"
              >
                <div className="p-3 bg-primary-light-color/10 text-primary-light-color rounded-xl">
                  {feature.icon}
                </div>

                <h3 className="md:text-lg text-sm font-medium text-gray-800">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemToOutcome;



