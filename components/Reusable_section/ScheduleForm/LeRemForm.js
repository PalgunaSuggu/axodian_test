// import React, { useState } from 'react';
// import axios from 'axios';
// import OtpInput from 'react-otp-input';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// const LeRemForm = ({ onSuccess, buttonText = "Request a Demo", defaultSelected = ['remittance', 'document_management', 'trade_finance'] }) => {
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         to_email: '',
//         phone: '',
//         Company: '',
//         description: '',
//         remittance: defaultSelected.includes('remittance'),
//         document_management: defaultSelected.includes('document_management'),
//         trade_finance: defaultSelected.includes('trade_finance'),
//     });

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [agree, setAgree] = useState(false);
//     const router = useRouter();

//     // Verification states
//     const [phoneVerified, setPhoneVerified] = useState(false);
//     const [emailVerified, setEmailVerified] = useState(false);
//     const [showPhoneOtp, setShowPhoneOtp] = useState(false);
//     const [showEmailOtp, setShowEmailOtp] = useState(false);
//     const [phoneOtp, setPhoneOtp] = useState('');
//     const [emailOtp, setEmailOtp] = useState('');
//     const [sendingOtp, setSendingOtp] = useState({ email: false, phone: false, disableEmail: false, disablePhone: false });
//     const [verifyingOtp, setVerifyingOtp] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });

//         // Reset verification if field changes
//         if (name === 'phone') setPhoneVerified(false);
//         if (name === 'to_email') setEmailVerified(false);
//     };

//     const sendPhoneOtp = async () => {
//         if (!formData.phone) {
//             setError('Please enter a valid phone number');
//             return;
//         }

//         setSendingOtp((prev) => ({ ...prev, phone: true, disablePhone: true }));
//         try {
//             const response = await axios.post('/api/otp_verification/send-otp', {
//                 phone: formData.phone,
//             });

//             if (response.data.success) {
//                 setShowPhoneOtp(true);
//                 setError(null);
//             } else {
//                 setError(response.data.message || 'Failed to send OTP');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Failed to send OTP to your phone');
//         } finally {
//             setSendingOtp((prev) => ({ ...prev, phone: false }));
//         }
//     };

//     const verifyPhoneOtp = async () => {
//         if (phoneOtp.length !== 4) {
//             setError('Please enter a valid 4-digit OTP');
//             return;
//         }

//         setVerifyingOtp(true);
//         try {
//             const response = await axios.post('/api/otp_verification/verify-otp', {
//                 phone: formData.phone,
//                 otp: phoneOtp,
//             });

//             if (response.data.success && response.data.verified) {
//                 setPhoneVerified(true);
//                 setSendingOtp((prev) => ({ ...prev, disablePhone: false }));
//                 setShowPhoneOtp(false);
//                 setError(null);
//             } else {
//                 setError(response.data.message || 'Invalid OTP');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Invalid phone OTP');
//         } finally {
//             setVerifyingOtp(false);
//         }
//     };

//     const sendEmailOtp = async () => {
//         if (!formData.to_email || !formData.phone) {
//             setError('Please enter both phone and email to receive the OTP');
//             return;
//         }

//         setSendingOtp((prev) => ({ ...prev, email: true, disableEmail: true }));
//         try {
//             const response = await axios.post('/api/otp_verification/send-otp', {
//                 email: formData.to_email,
//                 phone: formData.phone, // ✅ include this
//                 type: 'email'
//             });

//             if (response.data.success) {
//                 setShowEmailOtp(true);
//                 setError(null);
//             } else {
//                 setError(response.data.message || 'Failed to send OTP');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Failed to send OTP to your email');
//         } finally {
//             setSendingOtp((prev) => ({ ...prev, email: false }));
//         }
//     };


//     const verifyEmailOtp = async () => {
//         if (emailOtp.length !== 4) {
//             setError('Please enter a valid 4-digit OTP');
//             return;
//         }

//         setVerifyingOtp(true);
//         try {
//             const response = await axios.post('/api/otp_verification/verify-otp', {
//                 to_email: formData.to_email, phone: formData.phone,
//                 otp: emailOtp,
//                 type: 'email'
//             });

//             if (response.data.success && response.data.verified) {
//                 setEmailVerified(true);
//                 setSendingOtp((prev) => ({ ...prev, disableEmail: false }));
//                 setShowEmailOtp(false);
//                 setError(null);
//             } else {
//                 setError(response.data.message || 'Invalid OTP');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Invalid email OTP');
//         } finally {
//             setVerifyingOtp(false);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!phoneVerified || !emailVerified) {
//             setError('Please verify both phone and email');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('/api/contact-us', formData);
//             if (response.data.success) {
//                 if (onSuccess) onSuccess();
//                 router.push('/thank-you');
//             } else {
//                 setError(response.data.message || "Something went wrong");
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Form submission failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Custom OTP input styles
//     const otpInputStyle = {
//         width: '26px',
//         height: '26px',
//         margin: '0 4px',
//         fontSize: '1rem',
//         borderRadius: '5px',
//         border: '2px solid #234fdf',
//         color: '#1A4FFF',
//         backgroundColor: '#F5F7FF',
//         fontWeight: '600',
//         boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
//     };

//     return (
//         <div className="w-full">
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Name Fields */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                         <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
//                         <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required className="mt-2" />
//                     </div>
//                     <div>
//                         <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
//                         <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required className="mt-2" />
//                     </div>
//                 </div>

//                 {/* Phone with verification */}
//                 <div className='w-full'>
//                     <div className='flex justify-between items-center'>
//                         <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
//                         {showPhoneOtp && (
//                             <div className="bg-blue-50 rounded-lg border border-blue-200">
//                                 <div className="flex items-center gap-2">
//                                     <OtpInput value={phoneOtp} onChange={setPhoneOtp} numInputs={4} renderSeparator={<span></span>} inputStyle={otpInputStyle} renderInput={(props) => <input {...props} />} containerStyle="flex justify-center" />
//                                     <Button type="button" onClick={verifyPhoneOtp} disabled={verifyingOtp} className="bg-secondary-light-color hover:bg-blue-700 p-2">
//                                         {verifyingOtp ? "Verifying..." : "Verify OTP"}
//                                     </Button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div className="flex space-x-2">
//                         <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required className={`mt-2 ${phoneVerified ? 'bg-green-50 border-green-500 text-green-800' : ''}`} readOnly={phoneVerified} />
//                         <Button type="button" onClick={phoneVerified ? () => { setPhoneVerified(false) } : sendPhoneOtp} disabled={sendingOtp.disablePhone || phoneVerified} className={`mt-2 ${phoneVerified ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-50 hover:bg-blue-100 border border-solid border-blue-500 text-blue-600'}`}>
//                             {phoneVerified ? "Verified ✓" : sendingOtp.phone ? "Sending..." : "Send OTP"}
//                         </Button>
//                     </div>

//                     {showPhoneOtp && (
//                         <div className='flex justify-between items-center mt-2'>
//                             <div className="text-sm text-blue-800 font-medium">Code sent to {formData.phone}</div>
//                             <div className="text-sm text-blue-700">
//                                 <button type="button" onClick={sendPhoneOtp} disabled={sendingOtp.phone} className="underline hover:text-blue-900">
//                                     {sendingOtp.phone ? "Sending..." : "Resend OTP"}
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                 </div>

//                 {/* Email with verification */}
//                 <div className='w-full'>
//                     <div className='flex items-center justify-between'>
//                         <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
//                         {showEmailOtp && (
//                             <div className="bg-blue-50 rounded-lg border border-blue-200">
//                                 <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 items-center">
//                                     <OtpInput value={emailOtp} onChange={setEmailOtp} numInputs={4} renderSeparator={<span></span>} inputStyle={otpInputStyle} renderInput={(props) => <input {...props} />} containerStyle="flex justify-center" />
//                                     <Button type="button" onClick={verifyEmailOtp} disabled={verifyingOtp} className="bg-secondary-light-color hover:bg-blue-700 p-2">
//                                         {verifyingOtp ? "Verifying..." : "Verify OTP"}
//                                     </Button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div className="flex space-x-2">
//                         <Input id="to_email" name="to_email" type="email" value={formData.to_email} onChange={handleChange} placeholder="you@example.com" required className={`mt-2 ${emailVerified ? 'bg-green-50 border-green-500 text-green-800' : ''}`} readOnly={emailVerified} />
//                         <Button type="button" onClick={emailVerified ? () => { setEmailVerified(false) } : sendEmailOtp} disabled={sendingOtp.disableEmail || emailVerified} className={`mt-2 ${emailVerified ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-50 hover:bg-blue-100 border border-solid border-blue-500 text-blue-600'}`}>
//                             {emailVerified ? "Verified ✓" : sendingOtp.email ? "Sending..." : "Send OTP"}
//                         </Button>
//                     </div>

//                     {showEmailOtp && (
//                         <div className='flex justify-between items-center mt-2'>
//                             <div className="text-sm text-blue-800 font-medium">Code sent to {formData.to_email}</div>
//                             <div className="text-sm text-blue-700">
//                                 <button type="button" onClick={sendEmailOtp} disabled={sendingOtp} className="underline hover:text-blue-900">
//                                     {sendingOtp ? "Sending..." : "Resend OTP"}
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                     <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg">
//                         {error}
//                     </div>
//                 )}

//                 {/* Company Name */}
//                 <div>
//                     <Label htmlFor="company">Company Name <span className="text-red-500">*</span></Label>
//                     <Input id="Company" name="Company" value={formData.Company} onChange={handleChange} placeholder="Your company name" required className="mt-2" />
//                 </div>

//                 {/* Additional Info */}
//                 <div>
//                     <Label htmlFor="description">Additional Information</Label>
//                     <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={4} />
//                 </div>

//                 {/* Privacy Policy Checkbox */}
//                 <div className="flex items-start gap-2">
//                     <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} required className="mt-1" />
//                     <Label htmlFor="agree" className="text-sm text-muted-foreground">
//                         By submitting this form, I confirm and agree to storing and processing of my data by LeRemitt as described in the <Link href="https://www.leremitt.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</Link> <span className="text-red-500">*</span>
//                     </Label>
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                     type="submit"
//                     disabled={loading || !agree || !phoneVerified || !emailVerified}
//                     className="text-white text-md font-semibold bg-gradient-to-b from-[#234fdf] to-[#1A4FFF] rounded-lg hover:opacity-90 px-6 py-2"
//                 >
//                     {loading ? 'Submitting...' : buttonText}
//                 </Button>

//                 {/* Verification Status Indicators */}
//                 <div className="text-xs text-gray-600 flex space-x-4">
//                     <span className={phoneVerified ? "text-green-600" : "text-gray-500"}>
//                         {phoneVerified ? "✓ Phone verified" : "⊗ Phone verification pending"}
//                     </span>
//                     <span className={emailVerified ? "text-green-600" : "text-gray-500"}>
//                         {emailVerified ? "✓ Email verified" : "⊗ Email verification pending"}
//                     </span>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LeRemForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/router';
import Link from 'next/link';

const LeRemForm = ({ onSuccess, buttonText = "Request a Demo", defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'] }) => {
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
        } finally {
            setLoading(false);
        }
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
                    <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} required className="mt-1" />
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

