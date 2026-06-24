import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import CustomLink from "./Reusable_section/CustomLink/CustomLink";
import { footerLinks } from "./Data";
import DynamicLogo from "./Reusable_section/DynamicLogo/DynamicLogo";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/axodian/" },
  { icon: Facebook, href: "https://www.facebook.com/Axodian.leremitt/" },
  // { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
  // { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
];

const FooterGroup = ({ title }) => {
  const { links } = footerLinks.find((item) => item.title === title);

  return (
    <div>
      <p className="text-sm font-semibold mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text || link.name}>
            <CustomLink
              href={link.href}
              className="hover:text-blue-600 text-sm transition block"
              {...(title === "Contact Us" && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              {...(title === "Blogs" &&
                link.category && {
                onClick: () =>
                  localStorage.setItem(
                    "selectedBlogCategory",
                    link.category
                  ),
              })}
            >
              {link.icon && <link.icon size={16} className="inline mr-2" />}
              {link.text || link.name}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-8 md:pt-16 text-gray-700">

      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-0">

        <div className="col-span-12 md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
          <DynamicLogo variant="footer" />
          <p className="text-sm py-3">Backed by <span className="font-semibold">Axilor | Capital A</span></p>
          <div className="flex items-center gap-3">
            <Image src="/images/iso-certified.webp" alt="ISO 27001 Information Security Management Certification" width={55} height={55} />
            <p className="text-sm font-semibold">ISO 27001 Certified</p>
          </div>
        </div>

        <div className="col-span-6 md:col-span-2">
          <FooterGroup title="Quick Links" />
        </div>

        <div className="col-span-6 md:col-span-2">
          <FooterGroup title="Products" />
        </div>

        <div className="col-span-6 md:col-span-2">
          <FooterGroup title="Company" />
        </div>

        <div className="col-span-6 md:col-span-2">
          <FooterGroup title="Blogs" />
        </div>

        <div className="col-span-12 md:col-span-2">
          <FooterGroup title="Contact Us" />
        </div>

      </div>

      <div className="px-6 mt-10">
        <Separator className="bg-gray-300" />
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© 2025 Axodian. All rights reserved.</p>

        <div className="flex gap-6">
          <CustomLink href="/Documents/6Point3_TermsandConditions.pdf" target="_blank" className="hover:text-blue-600 text-sm">
            Terms of Use
          </CustomLink>
          <CustomLink href="/Documents/6Point3_PrivacyPolicy.pdf" target="_blank" className="hover:text-blue-600 text-sm">
            Privacy Policy
          </CustomLink>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <CustomLink key={href} href={href} target="_blank" className="hover:text-blue-600 text-sm">
              <Icon size={20} />
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;