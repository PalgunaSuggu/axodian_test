import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ArrowUpRight, Menu } from 'lucide-react';
import Image from 'next/image';
import { forwardRef, useEffect, useState } from 'react';
import CustomLink from '../../Reusable_section/CustomLink/CustomLink';
import { Button } from '@/components/ui/button';
import AxodianDailogForm from '../../Reusable_section/ScheduleForm/AxodianDailogForm';

const NavLink = forwardRef(({ href, children, isActive, onClick, scrollToRef }) => {
    const handleClick = (e) => {
        if (onClick) onClick();
        if (scrollToRef && scrollToRef.current) {
            e.preventDefault();
            window.scrollTo({
                top: scrollToRef.current.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    };

    return (
        <CustomLink
            href={href}
            onClick={handleClick}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                ? 'text-primary-color bg-blue-50'
                : 'hover:bg-white/80 hover:text-slate-900'
                }`}
        >
            {children}
        </CustomLink>
    );
});

NavLink.displayName = 'NavLink';

const AxodianNavbar = forwardRef(({ refs }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navItems = [
        // { label: 'Home', href: '#home', ref: refs?.homeRef },
        // { label: 'Problem to Outcome', href: '#problem-to-outcome', ref: refs?.problemToOutcomeRef },
        { label: 'Three Pillars', href: '#three-pillars', ref: refs?.threePillarsRef },
        { label: 'Walkthrough', href: '#walkthrough', ref: refs?.walkthroughRef },
        // { label: 'Why How Axodian', href: '#why-how-axodian', ref: refs?.whyHowAxodianRef },
        // { label: 'For Businesses', href: '#for-businesses', ref: refs?.forBusinessesRef },
        { label: 'Security', href: '#security', ref: refs?.securityRef },
        // { label: 'FAQs', href: '#faqs', ref: refs?.faqsRef },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white backdrop-blur-lg text-gray-800'}`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <CustomLink href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }}
                            className="flex items-center cursor-pointer">
                            <Image src="/images/axodian-Logo-nav.webp" alt="axodian logo" height={45} width={180} priority />
                        </CustomLink>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative">
                                <NavLink
                                    href={item.href}
                                    isActive={typeof window !== 'undefined' ? `#${window.location.hash}` === item.href : false}
                                    scrollToRef={item.ref}
                                >
                                    {item.label}
                                </NavLink>
                            </div>
                        ))}
                        <div className="flex items-center ml-4 space-x-4">
                            <AxodianDailogForm showProductOptions={true} defaultSelected={['remittance', 'document_management', 'trade_finance']}>
                                <Button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-color hover:bg-primary-color/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer">
                                    Get Started
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Button>
                            </AxodianDailogForm>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Open main menu</span>
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader className="mb-6">
                                    <SheetTitle className="text-left">Menu</SheetTitle>
                                </SheetHeader>
                                <div className="space-y-4">
                                    {navItems.map((item) => (
                                        <SheetClose asChild key={item.label}>
                                            <div
                                                onClick={() => {
                                                    if (item.ref?.current) {
                                                        window.scrollTo({
                                                            top: item.ref.current.offsetTop - 80,
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                }}
                                                className="flex items-center px-3 py-3 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                                            >
                                                {item.label}
                                            </div>
                                        </SheetClose>
                                    ))}
                                    <div className="pt-4 border-t border-slate-200 mt-4">
                                        <SheetClose asChild>
                                            <AxodianDailogForm showProductOptions={true} defaultSelected={['remittance', 'document_management', 'trade_finance']}>
                                                <Button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary-color hover:bg-primary-color/80">
                                                    Get Started
                                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </AxodianDailogForm>
                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
});

AxodianNavbar.displayName = 'AxodianNavbar';

export default AxodianNavbar;