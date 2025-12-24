import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, PhoneCall, Youtube } from 'lucide-react'
import CustomLink from '../../../Reusable_section/CustomLink/CustomLink'
import LeFinDailogFrom from '../../../Reusable_section/ScheduleForm/LeFinDailogForm'

const FinalCTA = () => {
    return (
        <section className="first:bg-gradient-to-br from-blue-50 via-white to-sky-100 pt-16 md:pt-24">
            <div className="max-w-7xl px-6 md:px-16 py-16 md:py-24 rounded-lg mx-auto text-start bg-cover bg-center text-white bg-secondary-light-color" style={{ backgroundImage: "url('/images/FinCtaBg.webp')" }}>
                <h1 className="leading-tight mb-4">
                    Ready to Grow Your Export Business?
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                    Apply for a quick, flexible loan — designed only for exporters.
                </p>

                {/* Main Action Buttons */}
                <div className="flex flex-col md:flex-row justify-start gap-4 mb-6">
                    <LeFinDailogFrom showProductOptions={true} buttonText="Submit" defaultSelected={['trade_finance']} formTitle="Know More">
                        <Button className="bg-white hover:bg-blue-50 text-blue-800 text-lg p-6 rounded-lg">
                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </LeFinDailogFrom>

                    <CustomLink href="mailto:connect@axodian.com" >
                        <Button className="flex items-center gap-2 w-full bg-transparent hover:bg-transparent text-white font-semibold p-6 rounded-lg border border-solid border-white transition">
                            <Mail size={18} />
                            Email Us
                        </Button>
                    </CustomLink>
                </div>

                {/* Contact Buttons */}
                <CustomLink href="tel:+91 80500 87593" className="flex justify-start">
                    <div className="bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white flex items-center gap-2 p-6">
                        <PhoneCall className="mr-2 w-5 h-5" />
                        <span> +91 80500 87593</span>
                    </div>
                </CustomLink>
            </div>

            {/* Footer at the Bottom */}
            <footer className="text-white w-full pt-16 md:pt-24">
                <div className="px-6">
                    <Separator className="bg-gray-200" />
                </div>
                <div className="container mx-auto my-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 px-4">
                    <p>© 2025 LeRemitt All rights reserved</p>
                    <div className="flex gap-4 my-2 md:my-0">
                        {[{ text: "Terms of Use", file: "6Point3_TermsandConditions.pdf" }, { text: "Privacy Policy", file: "6Point3_PrivacyPolicy.pdf" }].map((item) => (
                            <CustomLink key={item.text} href={`https://www.axodian.com/Documents/${item.file}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                                {item.text}
                            </CustomLink>
                        ))}
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
        </section>
    )
}

export default FinalCTA

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/leremit/" },
    { icon: Facebook, href: "https://www.facebook.com/Axodian.leremitt/" },
    // { icon: Instagram, href: "https://www.instagram.com/leremitt_com/" },
    // { icon: Youtube, href: "https://www.youtube.com/@LeRemitt" },
];