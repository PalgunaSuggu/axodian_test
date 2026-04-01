"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import OneComplianceDailogForm from '../Reusable_section/ScheduleForm/OneComplianceDailogForm';

const OneCompNavbar = ({ redirectTo, buttonText = "Book a Demo", showForm = true }) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            const sections = ['overview', 'solutions', 'features', 'how-it-works', 'faqs'];
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 100)) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleScrollTo = (id) => {
        setOpen(false); // Close mobile menu if open
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    };

        const scrollToHome = () => {
        const homeElement = document.getElementById('home');
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/export-compliance-edpms-ebrc" className="flex-shrink-0">
                    <div className="relative h-12 w-36">
                        <Image src="/images/OneCompliance.webp" alt="Axodian OneCompliance" fill className="object-contain" priority />
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Center Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {['Overview', 'Solutions', 'Features', 'How It Works', 'FAQ'].map((item) => {
                            const id = item === 'FAQ' ? 'faqs' : item.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <button
                                    key={item}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollTo(id);
                                    }}
                                    className={`text-md font-normal transition-colors ${activeSection === id ? 'text-primary-color font-extrabold' : 'text-gray-600 hover:text-black'}`}
                                >
                                    {item}
                                </button>
                            )
                        })}
                    </div>

                    {/* Desktop Right Side Actions */}
                    <div className="hidden md:block">
                        {showForm ? (
                            <OneComplianceDailogForm defaultSelected={['one_compliance']} showProductOptions={true} buttonText={buttonText} redirectTo={redirectTo}>
                                <Button className="bg-primary-color text-white hover:bg-primary-color/90 font-semibold px-6 py-2 rounded-md transition-all duration-300 border border-primary-color">
                                    {buttonText}
                                </Button>
                            </OneComplianceDailogForm>
                        ) : (
                            <Button 
                                onClick={scrollToHome}
                                className="bg-primary-color text-white hover:bg-primary-color/90 font-semibold px-6 py-2 rounded-md transition-all duration-300 border border-primary-color"
                            >
                                {buttonText}
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className='w-64 p-2 px-4'>
                            <div className="flex justify-between items-center gap-4 border-b border-solid border-gray-200">
                                <Link href="/" className="flex-shrink-0">
                                    <div className="relative h-10 w-32">
                                        <Image src="/images/OneCompliance.webp" alt="Axodian OneCompliance" fill className="object-contain" priority />
                                    </div>
                                </Link>
                                <SheetTrigger asChild>
                                    <button><X size={24} /></button>
                                </SheetTrigger>
                            </div>
                            <div className="flex flex-col gap-6 mt-6">
                                <div className="flex flex-col gap-4">
                                    {['Overview', 'Solutions', 'Features', 'How It Works', 'FAQ'].map((item) => {
                                        const id = item === 'FAQ' ? 'faqs' : item.toLowerCase().replace(/\s+/g, '-');
                                        return (
                                            <button
                                                key={item}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleScrollTo(id);
                                                }}
                                                className={`text-left text-lg font-medium transition-colors ${activeSection === id ? 'text-primary-color font-bold' : 'text-gray-800 hover:text-primary-color'}`}
                                            >
                                                {item}
                                            </button>
                                        )
                                    })}
                                </div>
                                <div>
                                    {showForm ? (
                                        <OneComplianceDailogForm defaultSelected={['one_compliance']} showProductOptions={true} redirectTo={redirectTo}>
                                            <Button className="w-full bg-primary-color text-white hover:bg-primary-color/90 font-semibold py-3 rounded-md transition-all duration-300 border border-primary-color">
                                                {buttonText}
                                            </Button>
                                        </OneComplianceDailogForm>
                                    ) : (
                                        <Button 
                                            onClick={scrollToHome}
                                            className="w-full bg-primary-color text-white hover:bg-primary-color/90 font-semibold py-3 rounded-md transition-all duration-300 border border-primary-color"
                                        >
                                            {buttonText}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default OneCompNavbar;
