import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Mail } from "lucide-react";
import DynamicLogo from '../Reusable_section/DynamicLogo/DynamicLogo';

// Social links data
const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/axodian/" },
  { icon: Facebook, href: "https://www.facebook.com/Axodian.leremitt/" },
];

const OneCompFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        {/* Brand Section */}
        <Link href="/export-compliance-edpms-ebrc" className="relative h-20 w-64 mb-4 inline-block transition-opacity hover:opacity-80">
          <DynamicLogo variant="footer" imageProps={{ fill: true, className: 'object-contain', style: { width: '100%', height: '100%' } }} withLink={false} />
        </Link>

        <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-10">
          One Compliance streamlines your cross-border trade compliance, making EBRC generation and EDPMS reconciliation effortless.
        </p>

        {/* Socials & Contact */}
        <div className="flex items-center gap-6 mb-12">
          {socialLinks.map(({ icon: Icon, href }) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 text-gray-400 transition-all duration-300 hover:bg-primary-color hover:text-white hover:shadow-md hover:-translate-y-1">
              <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
          ))}
          <Link href="mailto:connect@axodian.com" className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 text-gray-400 transition-all duration-300 hover:bg-primary-color hover:text-white hover:shadow-md hover:-translate-y-1">
            <Mail size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>

        <Separator className="w-full max-w-5xl bg-gray-100 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-4 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 Axodian. All rights reserved.</p>
            <span className="hidden md:inline text-gray-300">•</span>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Image src="/images/iso-certified.webp" alt="ISO 27001 Information Security Management Certification" width={24} height={24} className="opacity-80" />
              <p>ISO 27001 Certified</p>
            </div>
          </div>

          <div className="flex gap-8 font-medium">
            <Link href="/Documents/6Point3_TermsandConditions.pdf" target="_blank" className="hover:text-primary-color transition-colors">Terms of Use</Link>
            <Link href="/Documents/6Point3_PrivacyPolicy.pdf" target="_blank" className="hover:text-primary-color transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default OneCompFooter;