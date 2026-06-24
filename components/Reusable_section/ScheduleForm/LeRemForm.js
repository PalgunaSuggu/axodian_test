import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/router';
import Link from 'next/link';

const LeRemForm = ({ onSuccess, buttonText = "Request a Demo", defaultSelected = ['remittance', 'document_management'] }) => {
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
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [agree, setAgree] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [showPhoneOtp, setShowPhoneOtp] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [sendOtpToken, setSendOtpToken] = useState(''); // Token from send-otp
    const [verifyOtpToken, setVerifyOtpToken] = useState(''); // Token from verify-otp

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 10); // Keep only 10 digits
            setFormData(prev => ({ ...prev, phone: digits }));
            setPhoneVerified(false);
            setError(null);
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
                    setSendOtpToken(response.data.token); // Store send-otp token
                    setError(null);
                } else {
                    setError(response.data.message || 'Failed to send OTP');
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Error sending OTP');
            }
        };

        const delayDebounce = setTimeout(() => {
            if (formData.phone.length === 10 && !phoneVerified) sendOtp();
        }, 600);

        return () => clearTimeout(delayDebounce);
    }, [formData.phone, phoneVerified]);

    useEffect(() => {
        const verifyPhoneOtp = async () => {
            if (phoneOtp.length === 4 && !phoneVerified && sendOtpToken) {
                try {
                    const response = await axios.post('/api/otp_verification/verify-otp', {
                        phone: formData.phone,
                        otp: phoneOtp,
                        token: sendOtpToken, // Pass the send-otp token
                        type: 'phone',
                    });

                    if (response.data.success && response.data.verified) {
                        setPhoneVerified(true);
                        setShowPhoneOtp(false);
                        setError(null);
                        // Store the new token from verify-otp response
                        if (response.data.token) {
                            setVerifyOtpToken(response.data.token);
                        }
                    } else {
                        setPhoneVerified(false);
                        setError('Invalid OTP');
                    }
                } catch (err) {
                    setPhoneVerified(false);
                    setError(err.response?.data?.message || 'OTP verification failed');
                }
            }
        };

        if (phoneOtp.length === 4 && !phoneVerified && sendOtpToken) {
            verifyPhoneOtp();
        }
    }, [phoneOtp, formData.phone, sendOtpToken, phoneVerified]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!phoneVerified) {
            setError('Please verify phone');
            return;
        }

        if (!verifyOtpToken) {
            setError('Verification token missing');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/contact-us', {
                ...formData,
                from: sessionStorage.getItem('from') || '',
                medium: sessionStorage.getItem('medium') || '',
                campaign: sessionStorage.getItem('campaign') || '',
                token: verifyOtpToken, // Use the verify-otp token
            }, {
                headers: {
                    Authorization: `Bearer ${verifyOtpToken}`, // Use the verify-otp token
                }
            });

            if (response.data.success) {
                onSuccess?.();
                router.push('/thank-you');
            } else {
                setError(response.data.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Form submission failed');
        }
        setLoading(false);
    };

    // Cleanup tokens after navigation
    useEffect(() => {
        if (router.pathname === '/thank-you') {
            setSendOtpToken('');
            setVerifyOtpToken('');
        }
    }, [router.pathname]);

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="first_name" className="text-gray-700 font-medium">First Name <span className="text-red-500">*</span></Label>
                        <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <Label htmlFor="last_name" className="text-gray-700 font-medium">Last Name <span className="text-red-500">*</span></Label>
                        <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
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
                    <Label htmlFor="description" className="text-gray-700 font-medium">Additional Information</Label>
                    <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={4} className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} className="mt-1" />
                    <Label htmlFor="agree" className="text-sm text-gray-600">
                        {`By submitting this form, I agree to Axodian's`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-indigo-600">Privacy Policy</Link> <span className="text-red-500">*</span>
                    </Label>
                </div>

                <Button
                    type="submit"
                    disabled={loading || !agree || !phoneVerified}
                    className="text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg hover:opacity-90 px-6 py-3"
                >
                    {loading ? 'Submitting...' : buttonText}
                </Button>
            </form>
        </div>
    );
};

export default LeRemForm;

