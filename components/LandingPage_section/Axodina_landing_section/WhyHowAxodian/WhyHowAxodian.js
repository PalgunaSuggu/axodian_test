import { Eye, Lock, Shield, Target, Zap } from 'lucide-react';
import React from 'react';

const steps = [
    { number: "1", title: "Get set up", description: "We align on your trade flows, documents, and banking relationships.", },
    { number: "2", title: "Go live", description: "Move your active shipments to Axodian. Keep your current partners.", },
    { number: "3", title: "Scale with insight", description: "Use dashboards to spot delays, reduce costs, and unlock financing.", },
];

const benefits = [
    { icon: Target, title: "Accuracy", description: "Document templates and checks that reduce errors" },
    { icon: Zap, title: "Speed", description: "Fewer loops between banks, partners, and teams" },
    { icon: Shield, title: "Compliance", description: "Clear, consistent, and reviewable" },
    { icon: Eye, title: "Visibility", description: "End-to-end shipment and payment status" },
    { icon: Lock, title: "Security", description: "Strong controls for data and access" },
];

const WhyHowAxodian = () => {
    return (
        <div className="min-h-screen w-full bg-black relative overflow-hidden">
            {/* Purple Core Glow */}
            <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(0deg, rgba(10,10,10,0.7), rgba(10,10,10,0.7)), radial-gradient(68% 58% at 50% 50%, #663399 0%, #52297A 16%, #3E2061 32%, #2C1749 46%, #1E1135 60%, #140C27 72%, #0D071B 84%, #080512 94%, #050309 100%), radial-gradient(90% 75% at 50% 50%, rgba(102,51,153,0.08) 0%, rgba(102,51,153,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0A0910 82%, #07060C 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0A0910 82%, #07060C 100%), radial-gradient(60% 50% at 50% 60%, rgba(102,51,153,0.05), rgba(0,0,0,0) 60%), #050505", }} />

            {/* Soft Vignette */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)", opacity: 0.95, }} />

            <div className="relative z-10 py-16 lg:py-40">
                <section className="pb-16 lg:pb-24">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="mb-4 leading-tight  text-white">How it works</h1>
                            <p className="text-slate-400 text-lg">Simple onboarding. Immediate impact.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center px-4">
                                    <div className="h-20 w-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-primary-color/20 transition-all duration-300 mb-6 group-hover:scale-105">
                                        <span className="text-white text-2xl font-medium">{step.number}</span>
                                    </div>

                                    <h5 className="leading-tight text-slate-300 mb-3">{step.title}</h5>
                                    <p className="text-slate-400 text-lg">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY TEAMS CHOOSE */}
                <section>
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="mb-4 leading-tight text-white">Why teams choose <span className="text-tertiary-color">Axodian</span></h1>
                        </div>

                        {/* BENEFITS GRID */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon; return (<div key={index} className="flex flex-col h-full">
                                    <div className="flex-1 flex flex-col">
                                        <div className="bg-white/5 backdrop-blur-sm border border-solid border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary-color/20 transition-all duration-300 h-full flex flex-col">
                                            <div className="mb-4 h-16 w-16 rounded-xl bg-primary-color/10 flex items-center justify-center transition-colors border border-solid border-white/10">
                                                <Icon className="h-12 w-12 text-primary-color" />
                                            </div>
                                            <h5 className="mb-3 leading-tight text-slate-300">{benefit.title}</h5>
                                            <p className="text-slate-400 text-lg flex-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>);
                            })}
                        </div>

                        {/* SOCIAL PROOF */}
                        <div className="max-w-3xl mx-auto md:pt-10 pt-4">
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.3)] border border-solid border-white/10">
                                <div className="flex flex-wrap justify-center gap-12 text-white">
                                    <div>
                                        <div className="text-3xl text-primary-light-color mb-1">500+</div>
                                        <div className="text-lg text-slate-300">shipments processed last quarter</div>
                                    </div>
                                    <div className="hidden sm:block w-px bg-gray-500"></div>
                                    <div>
                                        <div className="text-3xl text-primary-light-color mb-1">Trusted</div>
                                        <div className="text-lg text-slate-300">by trade and tech leadership</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyHowAxodian;
