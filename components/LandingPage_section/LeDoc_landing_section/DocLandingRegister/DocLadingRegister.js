import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import CustomLink from "../../../Reusable_section/CustomLink/CustomLink";
import LeDocDailogForm from "../../../Reusable_section/ScheduleForm/LeDocDailogForm";

const DocLandingRegister = ({ formType }) => {
    return (
        <div className="h-screen bg-black bg-cover bg-center bg-[url('/images/RegisterLaning.webp')] flex flex-col">
            {/* Content Area */}
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                <div>
                    <h1 className="leading-tight text-white mt-4">
                        <span className="md:block mb-4">Trade Documentation Simplified & Automated.</span>
                        <span className="md:block mb-4">Try LeDoc Today!</span>
                    </h1>
                    <p className="text-white md:text-2xl mt-4 max-w-4xl mx-auto">
                        Experience a smarter, faster, and error-free way to manage trade documentation—built with exporters, for exporters.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6 flex-wrap">
                        <CustomLink href="mailto:connect@axodian.com" className="flex items-center gap-2 text-md md:text-lg bg-white text-black font-semibold px-6 rounded-full hover:bg-gray-200 transition">
                            <Mail size={18} />
                            Email Us
                        </CustomLink>

                        <LeDocDailogForm defaultSelected={['document_management']} formType={formType}>
                            <Button className="px-6 py-2 gap-2 text-md md:text-lg bg-[#0049BA] text-white font-semibold rounded-full hover:bg-blue-700 transition">
                                Try LeDoc Today!
                            </Button>
                        </LeDocDailogForm>
                    </div>
                </div>

                <CustomLink href="tel:+91 80500 87593" className="bg-white text-black cursor-pointer p-4 mt-6 rounded-lg w-80 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-full">
                            <Phone size={20} className="text-[#0049BA]" />
                        </div>
                        <span className="text-md md:text-lg font-semibold tracking-wide">+91 80500 87593</span>
                    </div>
                </CustomLink>
            </div>

            {/* Footer at the Bottom */}
            <footer className="text-white w-full">
                <div className="px-6">
                    <Separator className="bg-gray-500" />
                </div>
                <div className="container mx-auto my-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 px-4">
                    <p>© 2025 LeRemitt All rights reserved</p>
                    <div className="flex gap-4 my-2 md:my-0">
                        {[{ text: "Terms of Use", file: "6Point3_TermsandConditions.pdf" }, { text: "Privacy Policy", file: "6Point3_PrivacyPolicy.pdf" }].map((item) => (
                            <CustomLink key={item.text} href={`/Documents/${item.file}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                                {item.text}
                            </CustomLink>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {socialLinks.map(({ icon: Icon, href }) => (
                            <CustomLink key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                                <Icon size={20} />
                            </CustomLink>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DocLandingRegister;

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/leremit/" },
    { icon: Facebook, href: "https://www.facebook.com/Axodian.leremitt/" },
    { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
    { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
];
