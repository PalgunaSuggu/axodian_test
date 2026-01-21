import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

const ONECOMPLIANCE_CONSTANTS = {
    turnover: [
        { id: 1, value: "0-1CR", label: "₹0 – ₹1 Crore" },
        { id: 2, value: "1CR-5CR", label: "₹1 Crore – ₹5 Crores" },
        { id: 3, value: "5CR-25CR", label: "₹5 Crores – ₹25 Crores" },
        { id: 4, value: "25CR-100CR", label: "₹25 Crores – ₹100 Crores" },
        { id: 5, value: "100CR+", label: "Above ₹100 Crores" }
    ],
    export_type: [
        { id: 1, value: "goods", label: "Goods" },
        { id: 2, value: "services", label: "Services" },
        { id: 3, value: "both", label: "Both" }
    ]
};

const OneComplianceForm = ({ onSuccess, defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'] }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        to_email: '',
        phone: '',
        Company: '',
        description: '',
        remittance: defaultSelected.includes('remittance') || undefined,
        document_management: defaultSelected.includes('document_management') || undefined,
        trade_finance: defaultSelected.includes('trade_finance') || undefined,
        secured_loans: defaultSelected.includes('secured_loans') || undefined,
        unsecured_loans: defaultSelected.includes('unsecured_loans') || undefined,
        bill_of_discounting: defaultSelected.includes('bill_of_discounting') || undefined,
        factoring_loans: defaultSelected.includes('factoring_loans') || undefined,
        from: "",
        medium: "",
        campaign: "",
        turnover: "",
        export_type: "",
        bank_name: "",
        designation: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [agree, setAgree] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [showPhoneOtp, setShowPhoneOtp] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [sendOtpToken, setSendOtpToken] = useState('');
    const [verifyOtpToken, setVerifyOtpToken] = useState('');

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData((prev) => ({ ...prev, phone: digits }));
            setPhoneVerified(false);
            setError(null);
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSelectChange = (name, value) => {
        if (name === 'is_exporter') {
            setFormData(prev => ({ ...prev, [name]: value }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    useEffect(() => {
        const sendOtp = async () => {
            if (!formData.phone || formData.phone.length < 10 || phoneVerified) return;
            try {
                const response = await axios.post('/api/otp_verification/send-otp', { phone: formData.phone });
                if (response.data.success) {
                    setShowPhoneOtp(true);
                    setSendOtpToken(response.data.token);
                    setError(null);
                } else {
                    setError(response.data.message || 'Failed to send OTP');
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Error sending OTP');
            }
        };
        const delay = setTimeout(() => {
            if (formData.phone.length === 10 && !phoneVerified) sendOtp();
        }, 600);
        return () => clearTimeout(delay);
    }, [formData.phone, phoneVerified]);

    useEffect(() => {
        const verifyPhoneOtp = async () => {
            if (phoneOtp.length === 4 && sendOtpToken && !phoneVerified) {
                try {
                    const res = await axios.post('/api/otp_verification/verify-otp', {
                        phone: formData.phone, otp: phoneOtp, token: sendOtpToken, type: 'phone',
                    });
                    if (res.data.success && res.data.verified) {
                        setPhoneVerified(true);
                        setShowPhoneOtp(false);
                        setVerifyOtpToken(res.data.token || '');
                    } else {
                        setError('Invalid OTP');
                    }
                } catch (err) {
                    setError(err.response?.data?.message || 'OTP verification failed');
                }
            }
        };
        verifyPhoneOtp();
    }, [phoneOtp, sendOtpToken, phoneVerified, formData.phone]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!phoneVerified || !verifyOtpToken) {
            setError('Please verify your phone number.');
            return;
        }

        if (!formData.turnover || !formData.export_type) {
            setError('Please select Annual Turnover and Export Type.');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('/api/contact-us', {
                ...formData,
                from: sessionStorage.getItem('from') || '',
                medium: sessionStorage.getItem('medium') || '',
                campaign: sessionStorage.getItem('campaign') || '',
                token: verifyOtpToken,
            }, {
                headers: { Authorization: `Bearer ${verifyOtpToken}` },
            });

            if (res.data.success) {
                setPhoneOtp('');
                setShowPhoneOtp(false);
                onSuccess?.();
                router.push({
                    pathname: '/thank-you',
                    query: {
                        heading: 'Thank You!',
                        message: 'Thanks for your interest. We have received your request, and our team will reach out to you shortly.',
                        subtext: 'You can return to the  homepage by clicking the button below.',
                        button: 'Return to Home',
                        redirect: '/',
                    },
                });
            } else {
                setError(res.data.message || 'Submission failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Form submission error');
        }
        setLoading(false);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
                {/* Full width Name */}
                <div className="space-y-2">
                    <Label htmlFor="first_name" className="text-gray-200">Name <span className="text-red-500">*</span></Label>
                    <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Enter your name" required className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="to_email" className="text-gray-200">Email <span className="text-red-500">*</span></Label>
                        <Input id="to_email" name="to_email" value={formData.to_email} onChange={handleChange} type="email" placeholder="Enter work email" required className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <div className='flex justify-between items-center'>
                            <Label htmlFor="phone" className="text-gray-200">Phone <span className="text-red-500">*</span></Label>
                            {formData.phone.length === 10 && showPhoneOtp && !phoneVerified && (
                                <OtpInput
                                    value={phoneOtp}
                                    onChange={setPhoneOtp}
                                    numInputs={4}
                                    inputStyle={{
                                        width: '26px',
                                        height: '26px',
                                        margin: '0 4px',
                                        fontSize: '1rem',
                                        borderRadius: '2px',
                                        border: '1px solid #777777',
                                        color: 'white',
                                        backgroundColor: '#3b3b3b',
                                        fontWeight: '600',
                                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    }}
                                    renderInput={(props) => <input {...props} />}
                                    containerStyle="flex justify-center"
                                />
                            )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="px-3 py-2 border border-white/10 bg-white/5 rounded-l-md text-white">+91</span>
                            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" readOnly={phoneVerified} />
                        </div>
                    </div>
                </div>

                <div className="text-sm space-y-2 w-full">
                    {formData.phone && (
                        <>
                            {error ? (
                                <p className="text-red-500 bg-white/5 border border-red-200 rounded p-2">{error}</p>
                            ) : phoneVerified ? (
                                <p className="text-green-500 bg-white/5 border border-green-200 rounded p-2 flex">
                                    Phone number successfully verified!
                                </p>
                            ) : showPhoneOtp ? (
                                <p className="text-tertiary-light-color bg-white/5 border border-tertiary-light-color rounded p-2">
                                    OTP sent to +91 {formData.phone}
                                </p>
                            ) : null}
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Type of Exporter */}
                    <div className="space-y-2">
                        <Label className="text-gray-200">Type of Exporter <span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('export_type', val)} value={formData.export_type}>
                            <SelectTrigger className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                {ONECOMPLIANCE_CONSTANTS.export_type.map((item) => (
                                    <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Annual Export Turnover */}
                    <div className="space-y-2">
                        <Label className="text-gray-200">Annual Export Turnover Range <span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('turnover', val)} value={formData.turnover}>
                            <SelectTrigger className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50">
                                <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                                {ONECOMPLIANCE_CONSTANTS.turnover.map((item) => (
                                    <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Designation */}
                    <div className="space-y-2">
                        <Label htmlFor="designation" className="text-gray-200">Designation <span className="text-red-500">*</span></Label>
                        <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                    </div>

                    {/* Bank(s) */}
                    <div className="space-y-2">
                        <Label htmlFor="bank_name" className="text-gray-200">Bank(s) you work with <span className="text-red-500">*</span></Label>
                        <Input id="bank_name" name="bank_name" value={formData.bank_name} onChange={handleChange} placeholder="e.g. HDFC, SBI, ICICI" required className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                    </div>
                </div>

                <div className="space-y-2 w-full">
                    <Label htmlFor="description" className="text-gray-200">Brief note on your current EDPMS/EBRC pain point (Optional)</Label>
                    <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your challenges..." className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50 min-h-[100px]" />
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex items-start mt-1">
                        <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} className="h-4 w-4 rounded border-white/30 bg-white/5 text-primary-color focus:ring-primary-color/50 cursor-pointer" />
                    </div>
                    <Label htmlFor="agree" className="text-gray-400 text-sm leading-5">
                        {`By submitting this form, you agree to our`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="text-indigo-400 hover:text-indigo-300 underline">Terms & Conditions and Privacy Policy,</Link> {`and consent to be contacted about One Compliance.`} <span className="text-red-500">*</span>
                    </Label>
                </div>

                <div className="pt-4">
                    <Button
                        type="submit"
                        disabled={loading || !agree || !phoneVerified}
                        className="w-full bg-white hover:bg-gray-100 text-secondary-color font-bold py-6 text-lg rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    >
                        {loading ? 'Submitting...' : 'Book a 15-min Demo'}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default OneComplianceForm