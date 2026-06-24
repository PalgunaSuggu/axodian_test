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
      ],  
    },
    {
      image: '/images/AxodianSol-03.webp',
      title: "Financing",
      benefits: [
        "Track compliance requirements alongside your trade data",
        "Faster decisions with cleaner data and verified documents",
        "Track disbursals and repayments with ease",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-40 bg-gray-50 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="leading-tight text-gray-800">
            One ecosystem. Three powerful solutions.
          </h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-16" role="list">
          {pillars.map((pillar, index) => {
            const image = pillar.image;
            return (
              <article key={index} className="relative bg-primary-color/5 backdrop-blur-sm rounded-2xl hover:ring-1 hover:ring-primary-color/50 transition-all group overflow-hidden" role="listitem">
                <div className="mb-6 w-full h-auto rounded-xl overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`${pillar.title} solution illustration`}
                    width={400} 
                    height={300} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" 
                    priority={index < 2}
                  />
                </div>
                
                <h2 className="mb-6 px-8 text-gray-600 leading-tight">{pillar.title}</h2>
                
                <ul className="space-y-4 px-8 pb-8" role="list">
                  {pillar.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600" role="listitem">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-color flex-shrink-0" aria-hidden="true"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <footer className="text-center">
          <Button
            size="lg" 
            className="bg-primary-color hover:bg-primary-color/80 transition-all text-white gap-2"
            aria-label="See Axodian solutions in action"
          >
            See it in action
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </footer>
      </div>
    </section>
  );
}

export default ThreePillars;