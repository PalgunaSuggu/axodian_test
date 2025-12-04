import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ThreePillars() {
  const pillars = [
    {
      image: '/images/AxodianSol-01.webp',
      title: "Documentation & Compliance",
      benefits: [
        "Create, manage, and validate trade documents in one place",
        "Guided compliance steps that reduce back-and-forth",
        "Clear status and audit history",
      ],
    },
    {
      image: '/images/AxodianSol-02.webp',
      title: "Payments",
      benefits: [
        "Streamlined cross-border payments with full visibility",
        "Clear charges, timelines, and reconciliations",
        "Alerts that prevent delays and disputes",
      ],  },
    {
      image: '/images/AxodianSol-03.webp',
      title: "Financing",
      benefits: [
        "Access financing options based on your trade profile",
        "Faster decisions with cleaner data and verified documents",
        "Track disbursals and repayments with ease",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-40 bg-gray-50 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="leading-tight text-gray-800">One ecosystem. Three powerful solutions.</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const image = pillar.image;
            return (
              <div key={index}className="relative bg-primary-color/5 backdrop-blur-sm rounded-2xl hover:ring-1 hover:ring-primary-color/50 transition-all group overflow-hidden">
                <div className="mb-6 w-full h-auto rounded-xl overflow-hidden">
                  <Image src={image} alt={pillar.title} width={400} height={300} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <h5 className="mb-6 px-8 text-gray-600 leading-tight">{pillar.title}</h5>
                
                <ul className="space-y-4 px-8 pb-8">
                  {pillar.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-color flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg" 
            className="bg-primary-color hover:bg-primary-color/80 transition-all text-white gap-2"
          >
            See it in action
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ThreePillars;