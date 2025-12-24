import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import CustomLink from '../../Reusable_section/CustomLink/CustomLink';

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/leremit/" },
    { icon: Facebook, href: "https://www.facebook.com/Axodian.leremitt/" },
    { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
    { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
];

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700">
            <div className="px-6">
                <Separator className="bg-gray-300" />
            </div>
            <div className="container mx-auto my-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>© 2025 LeRemitt All rights reserved</p>
                <div className="flex gap-4">
                    <div className="flex gap-4">
                        {[{ text: "Terms of Use", file: "6Point3_TermsandConditions.pdf" }, { text: "Privacy Policy", file: "6Point3_PrivacyPolicy.pdf" }].map((item) => (
                            <CustomLink key={item.text} href={`/Documents/${item.file}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                                {item.text}
                            </CustomLink>
                        ))}
                    </div>
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
    )
}

export default Footer