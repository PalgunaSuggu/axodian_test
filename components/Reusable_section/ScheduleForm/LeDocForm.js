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

const LEDOC_CONSTANTS = {
    turnover: [
        { id: 1, value: "50L-1CR", label: "₹50 Lakhs – ₹1 Crore" },
        { id: 2, value: "1CR-5CR", label: "₹1 Crore – ₹5 Crores" },
        { id: 3, value: "5CR-25CR", label: "₹5 Crores – ₹25 Crores" },
        { id: 4, value: "25CR-100CR", label: "₹25 Crores – ₹100 Crores" },
        { id: 5, value: "100CR+", label: "Above ₹100 Crores" }
    ],
    export_documents: [
        { id: 1, value: "<10", label: "Less than 10" },
        { id: 2, value: "10-25", label: "10 – 25" },
        { id: 3, value: "25-50", label: "25 – 50" },
        { id: 4, value: ">100", label: "More than 100" }
    ],
};

const LeDocForm = ({
    onSuccess, buttonText = "Request a Demo", defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'] }) => {
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
        is_exporter: null,
        export_documents: "",
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
            setFormData(prev => ({ ...prev, [name]: value === 'yes' }));
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

        if (!formData.turnover || !formData.export_documents) {
            setError('Please select Annual Turnover and Export Documents Per Month.');
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="first_name" className="text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></Label>
                    <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Full Name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className='flex justify-between items-center'>
                            <Label htmlFor="phone" className="text-gray-700 font-medium">Phone <span className="text-red-500">*</span></Label>
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
                                        borderRadius: '5px',
                                        border: '2px solid #234fdf',
                                        color: '#1A4FFF',
                                        backgroundColor: '#F5F7FF',
                                        fontWeight: '600',
                                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                    }}
                                    renderInput={(props) => <input {...props} />}
                                    containerStyle="flex justify-center"
                                />
                            )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-700">+91</span>
                            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required
                                className={`p-3 border rounded-r-lg w-full ${phoneVerified ? 'bg-green-50 border-green-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`} readOnly={phoneVerified} />
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center'>
                            <Label htmlFor="to_email" className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></Label>
                        </div>
                        <Input id="to_email" name="to_email" type="email" value={formData.to_email} onChange={handleChange} placeholder="example@domain.com" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>

                {formData.phone && (
                    <div className="text-sm">
                        {error ? (
                            <p className="text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</p>
                        ) : phoneVerified ? (
                            <p className="text-green-600 bg-green-50 border border-green-200 rounded p-2 flex">
                                Phone number successfully verified!
                            </p>
                        ) : showPhoneOtp ? (
                            <p className="text-blue-700 bg-blue-50 border border-blue-200 rounded p-2">
                                OTP sent to +91 {formData.phone}
                            </p>
                        ) : null}
                    </div>
                )}

                <div>
                    <Label htmlFor="Company" className="text-gray-700 font-medium">Company Name <span className="text-red-500">*</span></Label>
                    <Input id="Company" name="Company" value={formData.Company} onChange={handleChange} placeholder="Your company name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div>
                    <Label htmlFor="is_exporter" className="text-gray-700 font-medium">
                        Are you an exporter? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                        onValueChange={(val) => handleSelectChange('is_exporter', val)}
                        value={formData.is_exporter === null ? undefined : formData.is_exporter ? 'yes' : 'no'}
                    >
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Label>Latest Annual Turnover<span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('turnover', val)} value={formData.turnover}>
                            <SelectTrigger><SelectValue placeholder="Select turnover range" /></SelectTrigger>
                            <SelectContent>
                                {LEDOC_CONSTANTS.turnover.map((item) => (
                                    <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Export Documents Per Month<span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => handleSelectChange('export_documents', val)} value={formData.export_documents}>
                            <SelectTrigger><SelectValue placeholder="Select export documents" /></SelectTrigger>
                            <SelectContent>
                                {LEDOC_CONSTANTS.export_documents.map((item) => (
                                    <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="description" className="text-gray-700 font-medium">Additional Information</Label>
                    <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={4} className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} required className="mt-1" />
                    <Label htmlFor="agree" className="text-sm text-gray-600">
                        {`By submitting this form, I agree to Axodian's`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-indigo-600">Privacy Policy</Link> <span className="text-red-500">*</span>
                    </Label>
                </div>

                <Button
                    type="submit"
                    disabled={loading || !agree || !phoneVerified || !formData.turnover || !formData.export_documents || !formData.is_exporter || !formData.Company || !formData.to_email || !formData.first_name}
                    className="text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg hover:opacity-90 px-6 py-3"
                >
                    {loading ? 'Submitting...' : buttonText}
                </Button>
            </form>
        </div>
    );
};

export default LeDocForm;