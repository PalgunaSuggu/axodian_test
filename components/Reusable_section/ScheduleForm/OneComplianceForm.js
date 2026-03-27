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

const OneComplianceForm = ({ onSuccess, redirectTo = '/thank-you', defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'], textColor = 'text-white', buttonText = 'Book a 15-min Demo' }) => {
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
        one_compliance: defaultSelected.includes('one_compliance') || undefined,
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
            setError('Please fill in all mandatory fields: Annual Turnover and Export Type.');
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

                // Check if redirectTo is an external URL
                if (redirectTo && redirectTo.startsWith('http')) {
                    const phoneWithCountryCode = `+91${formData.phone}`;
                    const separator = redirectTo.includes('?') ? '&' : '?';
                    const finalUrl = `${redirectTo}${separator}name=${encodeURIComponent(formData.first_name)}&email=${encodeURIComponent(formData.to_email)}&a1=${encodeURIComponent(formData.Company)}&a2=${encodeURIComponent(phoneWithCountryCode)}&a3=${encodeURIComponent(formData.designation)}&a4=${encodeURIComponent(formData.description)}`;
                    window.location.href = finalUrl;
                } else {
                    router.push({
                        pathname: redirectTo || '/thank-you',
                        query: {
                            heading: 'Thank You!',
                            message: 'Thanks for your interest. We have received your request, and our team will reach out to you shortly.',
                            subtext: 'You can return to the homepage by clicking the button below.',
                            button: 'Return to Home',
                            redirect: '/',
                        },

                    });
                }
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
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/20 p-4 rounded-3xl border border-white/10 backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Full width Name */}
                    <div>
                        <Label htmlFor="first_name" className={`${textColor}`}>Name <span className="text-red-500">*</span></Label>
                        <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Enter your name" required className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>
                    {/* Email */}
                    <div>
                        <Label htmlFor="to_email" className={`${textColor}`}>Email <span className="text-red-500">*</span></Label>
                        <Input id="to_email" name="to_email" value={formData.to_email} onChange={handleChange} type="email" placeholder="Enter work email" required className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>

                    {/* Phone */}
                    <div>
                        <div className='flex justify-between items-center'>
                            <Label htmlFor="phone" className={`${textColor}`}>Phone <span className="text-red-500">*</span></Label>
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
                            <span className={`px-3 py-2 border border-white/10 bg-white/20 rounded-l-md ${textColor}`}>+91</span>
                            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className={`bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} readOnly={phoneVerified} />
                        </div>
                    </div>

                    {/* Company name */}
                    <div>
                        <Label htmlFor="Company" className={`${textColor}`}>Company Name <span className="text-red-500">*</span></Label>
                        <Input id="Company" name="Company" value={formData.Company} onChange={handleChange} placeholder="Your company name" required className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>

                    {/* Type of Exporter */}
                    <div>
                        <Label className={`${textColor}`}>Type of Exporter <span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('export_type', val)} value={formData.export_type}>
                            <SelectTrigger className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`}>
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
                    <div>
                        <Label className={`${textColor}`}>Annual Export Turnover Range <span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('turnover', val)} value={formData.turnover}>
                            <SelectTrigger className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`}>
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
                    <div>
                        <Label htmlFor="designation" className={`${textColor}`}>Designation <span className="text-red-500">*</span></Label>
                        <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>

                    {/* Bank(s) */}
                    <div className="w-full">
                        <Label htmlFor="bank_name" className={`${textColor}`}>Bank(s) you work with <span className="text-red-500">*</span></Label>
                        <Input id="bank_name" name="bank_name" value={formData.bank_name} onChange={handleChange} placeholder="e.g. HDFC, SBI, ICICI" required className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="description" className={`${textColor}`}>Brief note on your current EDPMS/EBRC pain point (Optional)</Label>
                        <Textarea rows={0} id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your challenges..." className={`w-full bg-white/20 border-white/10 ${textColor} placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50`} />
                    </div>

                    <div>
                        <div className="flex items-start gap-3 mb-4">
                            <div className="flex items-start mt-1">
                                <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} className="h-4 w-4 rounded border-white/30 bg-white/20 text-primary-color focus:ring-primary-color/50 cursor-pointer" />
                            </div>
                            <Label htmlFor="agree" className={`${textColor === 'text-white' ? 'text-gray-400' : 'text-gray-600'} text-sm leading-5`}>
                                {`By submitting this form, I agree to Axodian's`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="text-indigo-400 hover:text-indigo-300 underline">Terms & Conditions and Privacy Policy,</Link> <span className="text-red-500">*</span>
                            </Label>
                        </div>
                        <Button
                            type="submit"
                            disabled={loading || !agree || !phoneVerified}
                            className="w-full bg-white hover:bg-gray-100 text-secondary-color font-bold py-6 text-lg rounded-xl transition-all duration-200 hover:scale-[1.02]"
                        >
                            {loading ? 'Submitting...' : buttonText}
                        </Button>
                    </div>
                </div>

                <div className="text-sm w-full">
                    {formData.phone && (
                        <>
                            {error ? (
                                <p className="text-red-500 bg-white/20 border border-red-200 rounded p-2">{error}</p>
                            ) : phoneVerified ? (
                                <p className="text-green-500 bg-white/20 border border-green-200 rounded p-2 flex">
                                    Phone number successfully verified!
                                </p>
                            ) : showPhoneOtp ? (
                                <p className="text-primary-color font-semibold bg-white/5">
                                    OTP sent to +91 {formData.phone}
                                </p>
                            ) : null}
                        </>
                    )}
                </div>


            </form>
        </div>
    );
}

export default OneComplianceForm