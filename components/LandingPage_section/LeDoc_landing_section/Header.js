import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Mail, Menu, MessageSquareText, Phone, X } from "lucide-react"
import Image from 'next/image'
import CustomLink from '../../Reusable_section/CustomLink/CustomLink'

const headerButtons = [
    {
        id: 'email',
        text: 'Email Us',
        icon: Mail,
        color: 'text-black hover:text-blue-600 hover:bg-blue-100',
        href: 'mailto:connect@axodian.com',
    },
    {
        id: 'phone',
        text: 'Call Us',
        icon: Phone,
        color: 'text-black hover:text-gray-600 hover:bg-gray-100',
        href: 'tel:+918050087593',
    },
    {
        id: 'whatsapp',
        text: 'WhatsApp',
        icon: MessageSquareText,
        color: 'text-black hover:text-green-600 hover:bg-green-50',
        href: 'https://wa.me/918050087594',
    },
]

const Header = () => {
    const [sheetOpen, setSheetOpen] = useState(false)

    return (
        <header className="bg-gradient-to-r from-white via-blue-50 to-white text-black shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="bg-white px-2 pb-1 rounded-md">
                    <Image src="https://www.axodian.com/images/LeDocLogo.webp" alt="LeDoc AI Logo" width={120} height={40} priority />
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    {headerButtons.map((button) => (
                        <CustomLink href={button.href} key={button.id} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className={`gap-2 ${button.color}`}>
                                <button.icon className="h-5 w-5" />
                                {button.text}
                            </Button>
                        </CustomLink>
                    ))}
                </div>

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
                            <Image src="https://www.axodian.com/images/LeDocLogo.webp" alt="LeDoc AI Logo" width={120} height={30} className="bg-white rounded-md p-1" />
                            <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-2">
                            {headerButtons.map((button) => (
                                <CustomLink href={button.href} key={button.id} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start gap-2 ${button.color}`}
                                    >
                                        <button.icon className="h-5 w-5" />
                                        {button.text}
                                    </Button>
                                </CustomLink>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header
