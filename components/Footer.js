import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import CustomLink from "./Reusable_section/CustomLink/CustomLink";
import { footerLinks } from "./Data";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/axodian/" },
  { icon: Facebook, href: "https://www.facebook.com/LeRemitt" },
  // { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
  // { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
];

const FooterGroup = ({ title }) => {
  const { links } = footerLinks.find((item) => item.title === title);

  return (
    <div>
      <p className="text-lg font-semibold mb-3">{title}</p>
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
          <Image src="/images/axodian-logo-footer.webp" alt="Axodian Logo" width={180} height={70} />
          <p className="text-sm">
            Backed by <span className="font-semibold">Axilor | Capital A</span>
          </p>
          <div className="flex items-center gap-3">
            <Image src="/images/iso-certified.webp" alt="ISO 27001" width={55} height={55} />
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
          <CustomLink href="/Documents/6Point3_TermsandConditions.pdf" target="_blank" className="hover:text-blue-600">
            Terms of Use
          </CustomLink>
          <CustomLink href="/Documents/6Point3_PrivacyPolicy.pdf" target="_blank" className="hover:text-blue-600">
            Privacy Policy
          </CustomLink>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <CustomLink key={href} href={href} target="_blank" className="hover:text-blue-600">
              <Icon size={20} />
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import { Separator } from "@/components/ui/separator";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import Image from "next/image";
// import { footerLinks } from "./Data";
// import CustomLink from "./Reusable_section/CustomLink/CustomLink";

// const socialLinks = [
//   { icon: Linkedin, href: "https://www.linkedin.com/company/axodian/" },
//   { icon: Facebook, href: "https://www.facebook.com/LeRemitt" },
//   { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
//   { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-white pt-12 text-gray-700">
//       <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         <div className="col-span-1">
//           <Image src="/images/axodian-logo-footer.webp" alt="Axodian Logo" width={200} height={80} />
//           <p className="mt-2 text-sm">Backed by <span className="text-sm font-semibold">Axilor | Capital A</span></p>

//           <div className="flex items-center gap-4 mt-4">
//             <Image src="/images/iso-certified.webp" alt="ISO 27001 Certified" width={80} height={80} />
//             <p className="text-sm font-semibold">ISO 27001 Certified</p>
//           </div>
//         </div>

//         {footerLinks.map(({ title, links }) => (
//           <div key={title}>
//             <p className="text-xl font-semibold">{title}</p>
//             <ul className="mt-2 space-y-2">
//               {links.map((link) => {
//                 const isContact = title === "Contact Us";
//                 const isBlogCategory = title === "Blogs" && link.category;
//                 return (
//                   <li key={link.text || link.name}>
//                     <CustomLink 
//                       href={link.href} 
//                       className="hover:text-blue-600 text-lg transition"
//                       {...(isContact && { target: "_blank", rel: "noopener noreferrer" })}
//                       {...(isBlogCategory && { 
//                         onClick: (e) => {
//                           // Store the selected category in localStorage
//                           localStorage.setItem('selectedBlogCategory', link.category);
//                         }
//                       })}
//                     >
//                       {link.icon ? <link.icon className="inline mr-2" size={16} /> : null}
//                       {link.text || link.name}
//                     </CustomLink>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="px-6 mt-8">
//         <Separator className="bg-gray-300" />
//       </div>

//       <div className="container my-8 mx-auto px-2 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
//         <p className="text-lg">© 2025 Axodian All rights reserved</p>
//         <div className="flex gap-4">
//           <div className="flex gap-4">
//             {[{ text: "Terms of Use", file: "6Point3_TermsandConditions.pdf" }, { text: "Privacy Policy", file: "6Point3_PrivacyPolicy.pdf" }].map((item) => (
//               <CustomLink key={item.text} href={`/Documents/${item.file}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg transition">
//                 {item.text}
//               </CustomLink>
//             ))}
//           </div>
//         </div>
//         <div className="flex gap-4">
//           {socialLinks.map(({ icon: Icon, href }) => (
//             <CustomLink key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg transition">
//               <Icon size={20} />
//             </CustomLink>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
