
import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useEffect } from 'react';
import OtpInput from 'react-otp-input';
import { Label } from '@/components/ui/label';

const BookCall = ({ defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans', 'book_call'] }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        remittance: defaultSelected.includes('remittance') || undefined,
        document_management: defaultSelected.includes('document_management') || undefined,
        trade_finance: defaultSelected.includes('trade_finance') || undefined,
        secured_loans: defaultSelected.includes('secured_loans') || undefined,
        unsecured_loans: defaultSelected.includes('unsecured_loans') || undefined,
        bill_of_discounting: defaultSelected.includes('bill_of_discounting') || undefined,
        factoring_loans: defaultSelected.includes('factoring_loans') || undefined,
        one_compliance: defaultSelected.includes('one_compliance') || undefined,
        book_call: defaultSelected.includes('book_call') || undefined,
        from: "",
        medium: "",
        campaign: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [showPhoneOtp, setShowPhoneOtp] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [sendOtpToken, setSendOtpToken] = useState('');
    const [verifyOtpToken, setVerifyOtpToken] = useState('');

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
                setSubmitted(true);
            } else {
                setError(res.data.message || 'Submission failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Form submission error');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Book a 10-Minute Call</title>
                <meta name="description" content="Book a quick 10-minute call with our team." />
                <meta name="robots" content="noindex" />
            </Head>

            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Book a 10-Minute Call
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Share your name and phone number below, and our team will connect with you for a quick 10-minute call.
                    </p>
                </div>

                {!submitted ? (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="first_name">Name <span className="text-red-500">*</span></Label>
                                <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Enter your name" required className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-color/50 focus:ring-primary-color/50" />
                            </div>
                            <div className="space-y-2">
                                <div className='flex justify-between items-center'>
                                    <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
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
                                                color: 'black',
                                                backgroundColor: '#f3f4f6',
                                                fontWeight: '600',
                                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                            }}
                                            renderInput={(props) => <input {...props} />}
                                            containerStyle="flex justify-center"
                                        />
                                    )}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-3 py-2 border border-gray-300 bg-gray-50 rounded-l-md text-gray-700">+91</span>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                        className="rounded-l-none"
                                        readOnly={phoneVerified}
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="mt-2 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        <Button type="submit" disabled={loading || !phoneVerified} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-color hover:bg-primary-color/80">
                            {loading ? 'Submitting...' : 'Book a 15-min Demo'}
                        </Button>
                    </form>
                ) : (
                    <div className="mt-8 p-4 bg-green-50 rounded-md">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800">
                                    Thank you!
                                </h3>
                                <div className="mt-2 text-sm text-green-700">
                                    <p>
                                        We've received your number and will be in touch shortly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookCall;