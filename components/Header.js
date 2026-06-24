import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { app_url } from "../config/config";
import { navItems } from "./Data";
import getUtmParams from "./getUtmParams";
import CustomLink from "./Reusable_section/CustomLink/CustomLink";
import ScheduleDialog from "./Reusable_section/ScheduleForm/LeRemDailogForm";
import DynamicLogo from "./Reusable_section/DynamicLogo/DynamicLogo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLeRemittLogin = () => {
    let utm_params = getUtmParams();
    window.open(`${app_url}/#/LoginScreens/default-login${utm_params ? '?' + utm_params : ''}`, '_blank');
  };

  const handleLeDocLogin = () => {
    window.open(`https://ledoc.leremitt.com/#/sign-in`, '_blank');
  };

  const handleSignInClick = (name) => {
    if (name === "Export Payments") {
      handleLeRemittLogin();
    } else if (name === "Document Management") {
      handleLeDocLogin();
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        {/* Mobile Logo on the left */}
        <div className="block md:hidden">
          <DynamicLogo variant="desktop" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          {/* Logo on the left */}
          {/* <CustomLink href="/" className="flex-shrink-0">
            <Image src="/images/axodian-Logo-nav.webp" alt="axodian logo" height={45} width={180} priority /> 
          </CustomLink> */}
          <DynamicLogo variant="desktop" className="flex-shrink-0" />

          {/* Navigation items on the right */}
          <div className="flex-1 flex justify-end items-center space-x-6 lg:space-x-8">
            {navItems?.map((item, index) => (
              <div key={index} className="relative">
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={`flex items-center space-x-1 hover:text-primary-color font-semibold text-base ${pathname && item.subItems?.some(subItem => subItem.href && pathname.includes(subItem.href)) ? "text-primary-color" : ""}`}>
                        <span>{item.name}</span>
                        <ChevronDown size={16} className="mt-0.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-48 w-auto mt-4 bg-white shadow-lg rounded-lg p-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild className='cursor-pointer'>
                          {item.name === "Sign In" ? (
                            <button onClick={() => handleSignInClick(subItem.name)} className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-primary-color rounded-md">
                              {subItem.name}
                            </button>
                          ) : (
                            <CustomLink href={subItem.href} className={`block w-full px-4 py-2 hover:bg-gray-100 hover:text-primary-color rounded-md font-semibold ${pathname === subItem.href ? "text-primary-color bg-gray-50" : ""}`}>{subItem.name}</CustomLink>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <CustomLink href={item.href} className={`hover:text-primary-color font-semibold text-base ${pathname === item.href ? "text-primary-color" : ""}`}>{item.name}</CustomLink>
                )}
              </div>
            ))}

            {/* Schedule Demo Button */}
            <ScheduleDialog showProductOptions={true} defaultSelected={['remittance', 'document_management', 'trade_finance']}>
              <Button className="bg-[#663399] hover:bg-[#5b2d90] text-white font-semibold px-4 py-2 rounded-lg transition-colors">Schedule Demo</Button>
            </ScheduleDialog>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu size={22} className="sm:h-6 sm:w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 p-0 bg-white">
            <div className="flex justify-between items-center gap-4 p-4 border-b">
              <DynamicLogo variant="mobile-sheet" className="flex-shrink-0" />
              <SheetTrigger asChild>
                <button><X size={24} /></button>
              </SheetTrigger>
            </div>

            <nav className="flex flex-col mt-4">
              {navItems?.map((item, index) => (
                <div key={index} className="border-b">
                  {item.subItems ? (
                    <details className="group">
                      <summary className={`px-4 py-3 flex justify-between items-center cursor-pointer text-sm ${
                        pathname && item.subItems?.some(subItem => 
                          subItem.href && pathname.includes(subItem.href)
                        ) ? "text-primary-color" : ""
                      }`}>
                        {item.name}
                        <ChevronDown size={14} className="group-open:rotate-180 transition-transform sm:h-4 sm:w-4" />
                      </summary>
                      <div className="bg-gray-100">
                        {item.subItems.map((subItem, subIndex) => (
                          item.name === "Sign In" ? (
                            <button key={subIndex} onClick={() => { handleSignInClick(subItem.name); setOpen(false); }} className="block w-full text-left px-6 py-2 hover:bg-gray-200 text-sm">{subItem.name}</button>
                          ) : (
                            <CustomLink 
                              key={subIndex} 
                              href={subItem.href} 
                              className={`block px-6 py-2 hover:bg-gray-200 text-sm ${
                                pathname === subItem.href ? "text-primary-color bg-gray-50" : ""
                              }`} 
                              onClick={() => setOpen(false)}
                            >
                              {subItem.name}
                            </CustomLink>
                          )
                        ))}
                      </div>
                    </details>
                  ) : (
                    <CustomLink href={item.href} className={`block px-4 py-3 ${pathname === item.href ? "text-primary-color font-semibold" : ""}`} onClick={() => setOpen(false)}>{item.name}</CustomLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Button */}
            <div className="p-4">
              <ScheduleDialog showProductOptions={true}>
                <Button className="w-full text-white bg-secondary-light-color hover:bg-blue-700 rounded-lg py-2 sm:py-3 text-sm font-medium">
                  Schedule a Demo
                </Button>
              </ScheduleDialog>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

// above navbar left Logo right NavbItems
// below navbar space between 

// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { app_url } from "../config/config";
// import { navItems } from "./Data";
// import getUtmParams from "./getUtmParams";
// import CustomLink from "./Reusable_section/CustomLink/CustomLink";
// import ScheduleDialog from "./Reusable_section/ScheduleForm/LeRemDailogForm";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const handleLeRemittLogin = () => {
//     let utm_params = getUtmParams();
//     window.open(`${app_url}/#/LoginScreens/default-login${utm_params ? '?' + utm_params : ''}`, '_blank');
//   };

//   const handleLeDocLogin = () => {
//     window.open(`https://ledoc.leremitt.com/#/sign-in`, '_blank');
//   };

//   const handleSignInClick = (name) => {
//     if (name === "LeRemitt") {
//       handleLeRemittLogin();
//     } else if (name === "LeDoc") {
//       handleLeDocLogin();
//     }
//   };

//   return (
//     <header className="bg-white shadow-md fixed w-full z-50">
//       <div className="px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
//         {/* Mobile Logo on the left */}
//         <div className="block md:hidden">
//           <CustomLink href="/">
//             <Image src="/images/axodian-fav-icon.webp" alt="axodian" width={42} height={42} className="sm:w-[54px] sm:h-[54px]" priority />
//           </CustomLink>
//         </div>
//         {/* Desktop Navigation Split in 3 Groups */}
//         <div className="hidden md:flex flex-1 justify-between items-center">
//           {/* Desktop Logo on the left*/}
//           <div className="hidden md:block">
//             <CustomLink href="/">
//               <Image src="/images/axodian-Logo-nav.webp" alt="axodian logo" height={45} width={180} priority />
//             </CustomLink>
//           </div>

//           {/* Group 1: LeRemitt | LeDoc | LeFin */}
//           <nav className="flex space-x-3 lg:space-x-6">
//             {navItems.slice(0, 3).map((item, index) => (
//               <CustomLink key={index} href={item.href} className={`hover:text-primary-color font-semibold text-base lg:text-lg ${pathname === item.href ? "text-primary-color font-semibold" : ""}`}>
//                 {item.name}
//               </CustomLink>
//             ))}
//           </nav>

//           {/* Group 2: About Us | Resources | Contact Us */}
//           <nav className="flex space-x-3 lg:space-x-6">
//             {navItems.slice(3, 6).map((item, index) => (
//               <div key={index} className="relative">
//                 {item.subItems ? (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <button className={`flex items-center space-x-1 hover:text-primary-color font-semibold text-base lg:text-lg ${pathname?.includes(item.href) ? "text-primary-color font-semibold" : ""}`}>
//                         <span>{item.name}</span>
//                         <ChevronDown size={16} />
//                       </button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="start" className="w-44 mt-4 bg-white shadow-lg rounded-lg">
//                       {item.subItems.map((subItem, subIndex) => (
//                         <DropdownMenuItem key={subIndex} asChild>
//                           <CustomLink href={subItem.href} className={`block w-full px-4 py-2 text-base hover:bg-gray-100 hover:text-primary-color font-semibold cursor-pointer ${pathname === subItem.href ? "text-primary-color font-semibold" : ""}`}>
//                             <p className="text-lg">{subItem.name}</p>
//                           </CustomLink>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <CustomLink href={item.href} className={`hover:text-primary-color font-semibold text-lg ${pathname === item.href ? "text-primary-color font-semibold" : ""}`}>
//                     {item.name}
//                   </CustomLink>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Group 3: Sign In Dropdown + Schedule Button */}
//           <div className="flex items-center space-x-4">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center text-base lg:text-lg space-x-1 font-semibold hover:text-primary-color">
//                   <span>Sign In</span>
//                   <ChevronDown size={16} />
//                 </button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-36 bg-white shadow-lg rounded-lg">
//                 {navItems.find(item => item.name === "Sign In")?.subItems.map((subItem, index) => (
//                   <DropdownMenuItem key={index} asChild>
//                     <button onClick={() => handleSignInClick(subItem.name)} className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-primary-color">
//                       <span className="text-lg font-semibold"> {subItem.name}</span>
//                     </button>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <ScheduleDialog
//               showProductOptions={true}
//               defaultSelected={['remittance', 'document_management', 'trade_finance']}
//             >
//               <Button className="relative overflow-hidden group bg-[#663399] text-sm lg:text-md px-4 py-2 h-10 flex items-center justify-center rounded-lg text-white transition-all duration-500">
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#663399] to-[#4066E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                 <span className="relative z-10">Schedule a Demo</span>
//               </Button>
//             </ScheduleDialog>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <button className="md:hidden" onClick={() => setOpen(true)}>
//               <Menu size={22} className="sm:h-6 sm:w-6" />
//             </button>
//           </SheetTrigger>

//           <SheetContent side="right" className="w-72 p-0 bg-white">
//             <div className="flex justify-between items-center gap-4 p-4 border-b">
//               <Image src="/images/axodian-Logo-nav.webp" alt="axodian logo" height={45} width={180} priority />
//               <SheetTrigger asChild>
//                 <button><X size={24} /></button>
//               </SheetTrigger>
//             </div>

//             <nav className="flex flex-col mt-4">
//               {navItems.map((item, index) => (
//                 <div key={index} className="border-b">
//                   {item.subItems ? (
//                     <details className="group">
//                       <summary className="px-4 py-3 flex justify-between items-center cursor-pointer text-[15px]">
//                         {item.name}
//                         <ChevronDown size={14} className="group-open:rotate-180 transition-transform sm:h-4 sm:w-4" />
//                       </summary>
//                       <div className="bg-gray-100">
//                         {item.subItems.map((subItem, subIndex) => (
//                           item.name === "Sign In" ? (
//                             <button
//                               key={subIndex}
//                               onClick={() => { handleSignInClick(subItem.name); setOpen(false); }}
//                               className={`block w-full text-left px-6 py-2 hover:bg-gray-200 ${pathname === subItem.href ? "text-primary-color font-semibold" : ""}`}
//                             >
//                               {subItem.name}
//                             </button>
//                           ) : (
//                             <CustomLink key={subIndex} href={subItem.href}
//                               className={`block px-6 py-2 hover:bg-gray-200 ${pathname === subItem.href ? "text-primary-color font-semibold" : ""}`}
//                               onClick={() => setOpen(false)}
//                             >
//                               {subItem.name}
//                             </CustomLink>
//                           )
//                         ))}
//                       </div>
//                     </details>
//                   ) : (
//                     <CustomLink href={item.href} className={`block px-4 py-2 ${pathname === item.href ? "text-primary-color font-semibold" : ""}`} onClick={() => setOpen(false)}>
//                       {item.name}
//                     </CustomLink>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile Button */}
//             <div className="p-4">
//               <ScheduleDialog showProductOptions={true}>
//                 <Button className="w-full text-white bg-secondary-light-color hover:bg-blue-700 rounded-lg py-2 sm:py-3 text-[15px]">
//                   Schedule a Demo
//                 </Button>
//               </ScheduleDialog>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// };

// export default Header;

