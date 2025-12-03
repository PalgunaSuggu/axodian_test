'use client';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CustomLink from '../../Reusable_section/CustomLink/CustomLink';
import LeFinDailogFrom from '../../Reusable_section/ScheduleForm/LeFinDailogForm';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={clsx('w-full fixed top-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between backdrop-blur-md', isScrolled ? 'bg-white/50 shadow-md' : 'bg-white shadow-none')}>
            {/* Left: Logo */}
            <CustomLink href="/">
                <Image src="/images/LeFinLogo.webp" alt="logo" height={10} width={100} priority className="hidden sm:block" />
                <Image src="/images/LeFin_F_Logo.webp" alt="logo" height={10} width={30} priority className="block sm:hidden" />
            </CustomLink>

            {/* Right: Buttons */}
            <div className="flex items-center gap-4">
                <LeFinDailogFrom showProductOptions={true} buttonText="Submit" defaultSelected={['trade_finance']} formTitle="Know More">
                    <Button className="text-white bg-secondary-light-color hover:bg-blue-700 text-sm px-5 py-2 rounded-lg">
                        Apply Now
                    </Button>
                </LeFinDailogFrom>

                <CustomLink href="tel:+918050087593" passHref legacyBehavior>
                    <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg text-sm flex items-center gap-2"
                    >
                        <PhoneCall className="w-4 h-4" />
                        +91 80500 87593
                    </Button>
                </CustomLink>
            </div>
        </header>
    );
};

export default Header;
