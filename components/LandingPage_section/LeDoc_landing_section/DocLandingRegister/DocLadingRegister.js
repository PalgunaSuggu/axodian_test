import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MessageSquareText, Phone, Youtube } from "lucide-react";

const DocLandingRegister = ({ formType, brand = "LeDoc" }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black bg-cover bg-center bg-[url('/images/RegisterLaning.webp')] flex flex-col">
            {/* Content Area */}
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-white mb-6 leading-tight">
                        Trade Documentation<br />
                        <span className="text-blue-400">Simplified & Automated</span>
                    </h1>
                    
                    <h2 className="text-white mb-8">
                        Try {brand} Today!
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Experience a smarter, faster, and error-free way to manage trade documentation—built with exporters, for exporters.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                        <Button onClick={scrollToTop} size="lg" className="bg-secondary-light-color text-white rounded-lg hover:bg-secondary-light-color transition-colors">
                            Get Started
                        </Button>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={() => window.location.href = 'mailto:connect@axodian.com'}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                                size="lg"
                            >
                                <Mail size={18} />
                                Email Us
                            </Button>
                            
                            <Button 
                                onClick={() => window.location.href = 'tel:+918050087593'}
                                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                                size="lg"
                            >
                                <Phone size={18} />
                                Call Us
                            </Button>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <Button 
                        onClick={() => window.location.href = 'https://wa.me/918050087594'}
                        className="bg-green-600/20 border border-green-600/50 text-green-400 hover:bg-green-600/30"
                        size="lg"
                    >
                        <MessageSquareText size={20} />
                        <span>Chat on WhatsApp</span>
                        <span className="text-green-300">+91 80500 87594</span>
                    </Button>
                </div>
            </div>

            {/* Footer */}
        </div>
    );
};

export default DocLandingRegister;
