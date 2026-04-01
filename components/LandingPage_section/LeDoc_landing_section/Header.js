import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
    {
        id: 'features',
        text: 'Features',
        href: '#features',
    },
    {
        id: 'how-it-works',
        text: 'How It Works',
        href: '#how-it-works',
    },
    {
        id: 'faqs',
        text: 'FAQs',
        href: '#faqs',
    },
    {
        id: 'contact',
        text: 'Contact',
        href: '#contact',
    },
]

const Header = ({ src, alt }) => {
    const [sheetOpen, setSheetOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('features')

    const handleScrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1); // Remove the # symbol
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = 80; // Adjust based on your header height
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (sheetOpen) {
            setSheetOpen(false);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id)
            const scrollPosition = window.scrollY + 100 // Offset for header

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="bg-gradient-to-r from-white via-blue-50 to-white text-black shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="bg-white px-2 pb-1 rounded-md">
                    <Image src={src} alt={alt} width={120} height={40} priority />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.id} onClick={(e) => handleScrollToSection(e, item.href)}>
                            <span className={`text-black transition-colors font-medium ${
                                activeSection === item.id 
                                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                                    : 'hover:text-blue-600'
                            }`}>
                                {item.text}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6 text-black" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 px-4 py-4">
                        {/* Top bar with logo and close button */}
                        <div className="flex items-center justify-between mb-6">
                            <Image src={src} alt={alt} width={120} height={30} className="bg-white rounded-md p-1" />
                            <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link href={item.href} key={item.id} onClick={(e) => handleScrollToSection(e, item.href)}>
                                    <span className={`text-black transition-colors font-medium text-lg ${
                                        activeSection === item.id 
                                            ? 'text-blue-600 border-l-4 border-blue-600 pl-2' 
                                            : 'hover:text-blue-600'
                                    }`}>
                                        {item.text}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header
