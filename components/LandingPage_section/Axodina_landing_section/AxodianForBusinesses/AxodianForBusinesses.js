import React from 'react';
import { Factory, Leaf, Shirt, Cpu, ShoppingBag, Wrench } from 'lucide-react';
import AxodianProducts from '../AxodianProducts/AxodianProducts';

const businessTypes = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Streamline your supply chain with end-to-end trade management"
  },
  {
    icon: Leaf,
    title: "Agrocommodities",
    description: "Handle perishable goods with real-time tracking and compliance"
  },
  {
    icon: Shirt,
    title: "Textiles",
    description: "Manage seasonal collections and global distribution efficiently"
  },
  {
    icon: Wrench,
    title: "Engineering",
    description: "Customize your trade management system with our flexible platform"
  },
  {
    icon: Cpu,
    title: "Electronics",
    description: "Navigate complex regulations and global logistics with ease"
  },
  {
    icon: ShoppingBag,
    title: "D2C Brands",
    description: "Scale your direct-to-consumer business with seamless operations"
  }
];

const AxodianForBusinesses = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `radial-gradient(circle at top left, rgba(121, 83, 169, 0.2), transparent 50%), radial-gradient(circle at center, rgba(121, 83, 169, 0.3), transparent 50%),radial-gradient(circle at bottom right, rgba(121, 83, 169, 0.2), transparent 50%)`,
          backgroundRepeat: "no-repeat",
        }}
      />

      <section className="relative z-10 py-20 lg:pb-32">
        <div><AxodianProducts /></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Built for growing exporters and importers</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">Whether you manage a few shipments a month or large volumes, Axodian adapts to your workflows and partners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessTypes.map((business, index) => {
              const Icon = business.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/45 backdrop-blur-xl rounded-xl p-8 hover:shadow-lg hover:shadow-primary-color/30 hover:scale-105 transition-all duration-300 border border-slate-100 hover:border-primary-color/20"
                >
                  <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary-color/10 transition-colors">
                    <Icon className="h-6 w-6 text-primary-color" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{business.title}</h3>
                  <p className="text-slate-600">{business.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AxodianForBusinesses;
