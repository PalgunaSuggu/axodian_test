import React from 'react'
import { Shield, Lock, Globe, FileCheck } from "lucide-react";
import { Button } from '@/components/ui/button';
import AxodianFAQs from '../AxodianFAQs/AxodianFAQs';
import { Separator } from '@/components/ui/separator';
const features = [
    {
        icon: Shield,
        title: "Role-based access and audit logs",
        description: "Control who sees what and track every action",
    },
    {
        icon: Lock,
        title: "Data encryption at rest and in transit",
        description: "Bank-grade encryption protects your sensitive information",
    },
    {
        icon: Globe,
        title: "Region-specific data residency on request",
        description: "Keep your data where you need it to be",
    },
    {
        icon: FileCheck,
        title: "Review and approval controls",
        description: "Multi-level approvals for documents and payments",
    },
];

const AxodianSecurity = () => {
    return (
        <div className="min-h-screen w-full relative bg-white py-20 lg:py-32">
            {/* Cool Blue Glow Top */}
            <div className="absolute inset-0 z-0" style={{ background: "#ffffff", backgroundImage: `radial-gradient(circle at bottom center, rgba(185, 191, 255, 0.5), transparent 70%)`, backgroundRepeat: "no-repeat", }} />
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <h1 className="leading-tight text-slate-900 mb-6">Security you can trust</h1>
                        <p className="text-lg text-slate-600">Enterprise-grade protection for your trade operations</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex gap-6 p-8 bg-white/30 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-primary-color/20">
                                    <div className="flex-shrink-0">
                                        <div className="h-16 w-16 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <Icon className="h-7 w-7 text-primary-color" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="leading-tight text-slate-900 mb-2">{feature.title}</h5>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <Button variant="outline" size="lg" className="border-primary-color text-primary-color hover:bg-primary-color/5 hover:border-primary-color/80 transition-colors duration-300 px-8 py-6 text-base">Request security brief</Button>
                    </div>
                </div>

                <Separator className="my-16 bg-primary-color/40 container mx-auto" />

                <div className="container mx-auto"><AxodianFAQs /></div>
            </section>

        </div>
    )
}

export default AxodianSecurity