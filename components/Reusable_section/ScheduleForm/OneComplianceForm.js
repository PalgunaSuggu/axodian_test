import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const OneComplianceForm = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)", }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-white mb-6 leading-tight">Ready to simplify your export compliance?</h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">Leave your details and we’ll get you early access as soon as Beta ends unless you would like to be part of Beta.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form className="space-y-6 bg-white/5 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-200">Name</Label>
                                <Input id="name" placeholder="Enter your name" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>

                            {/* Company Name */}
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-200">Company Name</Label>
                                <Input id="company" placeholder="Enter company name" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>

                            {/* Designation */}
                            <div className="space-y-2">
                                <Label htmlFor="designation" className="text-gray-200">Designation</Label>
                                <Input id="designation" placeholder="Enter your designation" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-200">Email</Label>
                                <Input id="email" type="email" placeholder="Enter work email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>

                            {/* Mobile */}
                            <div className="space-y-2">
                                <Label htmlFor="mobile" className="text-gray-200">Mobile</Label>
                                <Input id="mobile" type="tel" placeholder="Enter mobile number" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>

                            {/* Type of Exporter */}
                            <div className="space-y-2">
                                <Label className="text-gray-200">Type of Exporter</Label>
                                <Select>
                                    <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="goods">Goods</SelectItem>
                                        <SelectItem value="services">Services</SelectItem>
                                        <SelectItem value="both">Both</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Annual Export Turnover */}
                            <div className="space-y-2">
                                <Label className="text-gray-200">Annual Export Turnover Range</Label>
                                <Select>
                                    <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50">
                                        <SelectValue placeholder="Select range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0-1cr">₹0 - ₹1 Cr</SelectItem>
                                        <SelectItem value="1-10cr">₹1 Cr - ₹10 Cr</SelectItem>
                                        <SelectItem value="10-50cr">₹10 Cr - ₹50 Cr</SelectItem>
                                        <SelectItem value="50cr+">₹50 Cr+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Bank(s) */}
                            <div className="space-y-2">
                                <Label htmlFor="banks" className="text-gray-200">Bank(s) you work with</Label>
                                <Input id="banks" placeholder="e.g. HDFC, SBI, ICICI" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>
                        </div>

                        {/* Pain Point (Optional) */}
                        <div className="space-y-2">
                            <Label htmlFor="pain-point" className="text-gray-200">Brief note on your current EDPMS/EBRC pain point (Optional)</Label>
                            <Textarea id="pain-point" placeholder="Tell us about your challenges..." className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50 min-h-[100px]" />
                        </div>

                        <div className="pt-4">
                            <Button className="w-full bg-white hover:bg-gray-100 text-secondary-color font-bold py-6 text-lg rounded-xl transition-all duration-200 hover:scale-[1.02]">
                                Request Beta Access
                            </Button>
                            <p className="text-center text-gray-400 text-sm mt-4">
                                By submitting this form, you agree to our Terms & Conditions and
                                Privacy Policy, and consent to be contacted about One Compliance.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default OneComplianceForm