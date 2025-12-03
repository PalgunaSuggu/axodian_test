'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useRouter } from 'next/router';

// Constants
const LEFIN_CONSTANTS = {
    turnover: [{ id: 1, value: '30L-1CR', label: '₹30L – ₹1CR' }, { id: 2, value: '1CR-25CR', label: '₹1CR – ₹25CR' }, { id: 3, value: '25CR-50CR', label: '₹25CR – ₹50CR' }, { id: 4, value: '50CR-100CR', label: '₹50CR – ₹100CR' }, { id: 5, value: '100CR', label: 'Above ₹100CR' },],
    vintage: [{ id: 1, value: "0-1", label: "0 - 1 Year" }, { id: 2, value: "2-5", label: "2 - 5 Years" }, { id: 3, value: "5-10", label: "5 - 10 Years" }, { id: 4, value: "10+", label: "Above 10 Years" }],
    shipments_completed: [{ id: 1, value: '2-10', label: '2 - 10 Shipments' }, { id: 2, value: '10+', label: '>10 Shipments' },],
};

const LeFinForm = ({ onSuccess, buttonText = "Submit", defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'] }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        first_name: '',
        to_email: '',
        phone: '',
        Company: '',
        description: '',
        trade_finance: defaultSelected.includes('trade_finance') || undefined,
        from: '',
        medium: '',
        campaign: '',
        turnover: '',
        vintage: '',
        shipments_completed: '',
        post_shipment: false,
        pre_shipment: false,
        business_loan: false,
    });

    const [phoneVerified, setPhoneVerified] = useState(false);
    const [showPhoneOtp, setShowPhoneOtp] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [sendOtpToken, setSendOtpToken] = useState('');
    const [verifyOtpToken, setVerifyOtpToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [agree, setAgree] = useState(false);

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

    const handleSelectChange = (field) => (val) => {
        if (field === 'product') {
            setFormData((prev) => ({
                ...prev,
                product: val,
                post_shipment: val === 'post_shipment',
                pre_shipment: val === 'pre_shipment',
                business_loan: val === 'business_loan',
            }));
        } else {
            setFormData((prev) => ({ ...prev, [field]: val }));
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

        if (!formData.turnover || !formData.shipments_completed || !formData.vintage) {
            setError('Please select Annual Turnover, Business Vintage, and Shipments Completed.');
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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">

                {/* Name */}
                <div>
                    <Label htmlFor="first_name">Full Name<span className="text-red-500">*</span></Label>
                    <Input id="first_name" name="first_name" placeholder="Full Name" value={formData.first_name} onChange={handleChange} required />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className='flex justify-between items-center'>
                            <Label htmlFor="phone">Phone<span className="text-red-500">*</span></Label>
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
                                    }}
                                    renderInput={(props) => <input {...props} />}
                                    containerStyle="flex justify-center"
                                />
                            )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-700">+91</span>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className={`p-3 border rounded-r-lg w-full ${phoneVerified ? 'bg-green-50 border-green-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
                                readOnly={phoneVerified}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="to_email">Email<span className="text-red-500">*</span></Label>
                        <Input id="to_email" name="to_email" type="email" value={formData.to_email} onChange={handleChange} required placeholder="example@domain.com" />
                    </div>
                </div>

                {/* PHONE VERIFICATION STATUS */}
                {formData.phone && (
                    <div className="text-sm">
                        {error ? (
                            <p className="text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</p>
                        ) : phoneVerified ? (
                            <p className="text-green-600 bg-green-50 border border-green-200 rounded p-2">Phone number successfully verified!</p>
                        ) : showPhoneOtp ? (
                            <p className="text-blue-700 bg-blue-50 border border-blue-200 rounded p-2">OTP sent to +91 {formData.phone}</p>
                        ) : null}
                    </div>
                )}

                {/* Company + Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="Company" className="text-gray-700 font-medium">Company Name <span className="text-red-500">*</span></Label>
                        <Input id="Company" name="Company" value={formData.Company} onChange={handleChange} placeholder="Your company name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <Label>Product Required</Label>
                        <Select onValueChange={handleSelectChange('product')} value={formData.product || ''}>
                            <SelectTrigger><SelectValue placeholder="Select product" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="post_shipment">Post-Shipment Finance</SelectItem>
                                <SelectItem value="pre_shipment">Pre-Shipment Finance</SelectItem>
                                <SelectItem value="business_loan">Business Loan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                {/* Annual Turnover + Business Vintage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Label>Latest Annual Turnover<span className="text-red-500">*</span></Label>
                        <Select onValueChange={handleSelectChange('turnover')} value={formData.turnover}>
                            <SelectTrigger className={!formData.turnover && error ? 'border-red-500' : ''}><SelectValue placeholder="Select turnover" /></SelectTrigger>
                            <SelectContent>
                                {LEFIN_CONSTANTS.turnover.map(item => <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Business Vintage<span className="text-red-500">*</span></Label>
                        <Select onValueChange={handleSelectChange('vintage')} value={formData.vintage}>
                            <SelectTrigger className={!formData.vintage && error ? 'border-red-500' : ''}><SelectValue placeholder="Select business vintage" /></SelectTrigger>
                            <SelectContent>
                                {LEFIN_CONSTANTS.vintage.map(item => <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* SHIPMENTS */}
                <div>
                    <Label>Total Shipments Completed (Min. Shipments required is 2)<span className="text-red-500">*</span></Label>
                    <Select onValueChange={handleSelectChange('shipments_completed')} value={formData.shipments_completed}>
                        <SelectTrigger className={!formData.shipments_completed && error ? 'border-red-500' : ''}><SelectValue placeholder="Select shipments" /></SelectTrigger>
                        <SelectContent>
                            {LEFIN_CONSTANTS.shipments_completed.map(item => <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>

                {/* DESCRIPTION */}
                <div>
                    <Label htmlFor="description">Additional Information</Label>
                    <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={4} />
                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-2">
                    <input type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} required className="mt-1" />
                    <Label htmlFor="agree" className="text-sm text-gray-600">
                        {`By submitting this form, I agree to LeRemitt's`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-indigo-600">Privacy Policy</Link><span className="text-red-500">*</span>
                    </Label>
                </div>

                {/* SUBMIT */}
                <Button
                    type="submit"
                    disabled={loading || !agree || !phoneVerified || !formData.turnover || !formData.shipments_completed || !formData.vintage || !formData.Company || !formData.to_email || !formData.first_name}
                    className="text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg hover:opacity-90 px-6 py-3"
                >
                    {loading ? 'Submitting...' : buttonText}
                </Button>
            </div>
        </form>
    );
};

export default LeFinForm;


// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
// import { Textarea } from '@/components/ui/textarea';
// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useEffect, useState, useCallback, useRef } from 'react';
// import OtpInput from 'react-otp-input';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog";

// const LEFIN_CONSTANTS = {
//     turnover: [{ id: 1, value: "30L-1CR", label: "₹30L – ₹1CR" }, { id: 2, value: "1CR-25CR", label: "₹1CR – ₹25CR" }, { id: 3, value: "25CR-50CR", label: "₹25CR – ₹50CR" }, { id: 4, value: "50CR-100CR", label: "₹50CR – ₹100CR" }, { id: 5, value: "100CR", label: "Above ₹100CR" }],
//     business_loan_turnover: [{ id: 1, value: "0-30L", label: "₹0 – ₹30L" }, { id: 2, value: "30L-1CR", label: "₹30L – ₹1CR" }, { id: 3, value: "1CR-25CR", label: "₹1CR – ₹25CR" }, { id: 4, value: "25CR-50CR", label: "₹25CR – ₹50CR" }, { id: 5, value: "50CR-100CR", label: "₹50CR – ₹100CR" }, { id: 6, value: "100CR", label: "Above ₹100CR" }],
//     export_turnover: [{ id: 1, value: "30L-1CR", label: "₹30L – ₹1CR" }, { id: 2, value: "1CR-25CR", label: "₹1CR – ₹25CR" }, { id: 3, value: "5CR-10CR", label: "5CR - 10CR" }, { id: 4, value: "10CR-50CR", label: "10CR - 50CR" }, { id: 5, value: "50+", label: "Above 50CR" }],
//     vintage: [{ id: 1, value: "0-1", label: "0 - 1 Year" }, { id: 2, value: "2-5", label: "2 - 5 Years" }, { id: 3, value: "5-10", label: "5 - 10 Years" }, { id: 4, value: "10+", label: "Above 10 Years" }],
//     business_loan_vintage: [{ id: 1, value: "0-1", label: "0 - 1 Year" }, { id: 2, value: "1-5", label: "1 - 5 Years" }, { id: 3, value: "5-10", label: "5 - 10 Years" }, { id: 4, value: "10+", label: "Above 10 Years" }],
//     shipments_completed: [{ id: 1, value: "0-1", label: "0 - 1" }, { id: 2, value: "2-5", label: "2 - 5" }, { id: 3, value: "5-10", label: "5 - 10" }, { id: 4, value: "10-50", label: "10 - 50" }, { id: 5, value: "50+", label: "Above 50" }]
// };

// const LeFinForm = ({ onSuccess, buttonText = "Submit", defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans'] }) => {
//     const [formData, setFormData] = useState({
//         first_name: '', last_name: '', to_email: '', phone: '', company: '', description: '',
//         trade_finance: defaultSelected.includes('trade_finance') || undefined,
//         from: "", medium: "", campaign: "", vintage: "", turnover: "", export_turnover: "", shipments_completed: "", post_shipment: true, pre_shipment: undefined, business_loan: undefined,
//     });

//     const router = useRouter();

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [agree, setAgree] = useState(false);
//     const [phoneVerified, setPhoneVerified] = useState(false);
//     const [showPhoneOtp, setShowPhoneOtp] = useState(false);
//     const [phoneOtp, setPhoneOtp] = useState('');
//     const [sendOtpToken, setSendOtpToken] = useState('');
//     const [verifyOtpToken, setVerifyOtpToken] = useState('');

//     const [showEligibilityModal, setShowEligibilityModal] = useState(false);
//     const [modalTitle, setModalTitle] = useState('');
//     const [modalDescription, setModalDescription] = useState('');
//     const [modalActions, setModalActions] = useState([]);
//     const [eligibilityProductType, setEligibilityProductType] = useState('');

//     const [showCountdownText, setShowCountdownText] = useState(false);
//     const [redirectCountdown, setRedirectCountdown] = useState(5);
//     const countdownIntervalRef = useRef(null);

//     const resetBusinessLoanFields = () => {
//         setFormData(prev => ({
//             ...prev, turnover: '', vintage: '',
//         }));
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         if (name === 'phone') {
//             const digits = value.replace(/\D/g, '').slice(0, 10);
//             setFormData(prev => ({ ...prev, phone: digits }));
//             setPhoneVerified(false);
//             setError(null);
//             setShowPhoneOtp(false);
//             setPhoneOtp('');
//             setSendOtpToken('');
//             setVerifyOtpToken('');
//         } else {
//             setFormData(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const directRedirectToHome = useCallback(() => {
//         if (countdownIntervalRef.current) {
//             clearInterval(countdownIntervalRef.current);
//         }
//         router.push('/');
//         setShowEligibilityModal(false);
//         setShowCountdownText(false);
//     }, [router]);

//     const initiateCountdownRedirect = useCallback(() => {
//         if (countdownIntervalRef.current) {
//             clearInterval(countdownIntervalRef.current);
//         }
//         setModalTitle('Thank You!');
//         setModalDescription('redirecting_home');
//         setModalActions([]);
//         setShowEligibilityModal(true);
//         setShowCountdownText(true);
//         setRedirectCountdown(5);

//         countdownIntervalRef.current = setInterval(() => {
//             setRedirectCountdown((prevCount) => {
//                 if (prevCount === 1) {
//                     clearInterval(countdownIntervalRef.current);
//                     router.push('/');
//                     setShowEligibilityModal(false);
//                     setShowCountdownText(false);
//                     return 0;
//                 }
//                 return prevCount - 1;
//             });
//         }, 1000);
//     }, [router]);

//     const handleSelectChange = useCallback((name, value) => {
//         setFormData(prev => {
//             const newState = { ...prev, [name]: value };

//             if ((newState.post_shipment || newState.pre_shipment) &&
//                 newState.turnover && newState.vintage && newState.shipments_completed &&
//                 (name === 'turnover' || name === 'vintage' || name === 'shipments_completed')) {
//                 const { turnover, vintage, shipments_completed } = newState;

//                 const isNotEligibleForShipmentLoan = (
//                     (turnover === "30L-1CR" || turnover === "1CR-25CR") ||
//                     vintage === "0-1" ||
//                     shipments_completed === "0-1"
//                 );

//                 if (isNotEligibleForShipmentLoan) {
//                     setModalTitle('Eligibility Alert');
//                     setEligibilityProductType(newState.post_shipment ? 'Post-Shipment financing' : 'Pre-Shipment financing');
//                     setModalDescription('shipment_not_eligible');
//                     setModalActions([
//                         {
//                             label: 'Yes', onClick: () => {
//                                 setFormData(current => ({
//                                     ...current,
//                                     business_loan: true,
//                                     pre_shipment: undefined,
//                                     post_shipment: undefined,
//                                     turnover: '',
//                                     vintage: '',
//                                     export_turnover: '',
//                                     shipments_completed: ''
//                                 }));
//                                 setShowEligibilityModal(false);
//                             }
//                         },
//                         {
//                             label: 'No', onClick: () => {
//                                 initiateCountdownRedirect();
//                             }
//                         }
//                     ]);
//                     setShowEligibilityModal(true);
//                 }
//             } else if (newState.business_loan && newState.turnover && newState.vintage &&
//                 (name === 'turnover' || name === 'vintage')) {
//                 const { turnover, vintage } = newState;
//                 if (turnover === "0-30L" || vintage === "0-1") {
//                     setModalTitle('Eligibility Alert');
//                     setModalDescription('business_not_eligible');
//                     setModalActions([
//                         {
//                             label: 'OK', onClick: () => { resetBusinessLoanFields(); initiateCountdownRedirect(); }
//                         }
//                     ]);
//                     setShowEligibilityModal(true);
//                 }
//             }

//             return newState;
//         });
//     }, [initiateCountdownRedirect]);

//     useEffect(() => {
//         const sendOtp = async () => {
//             if (!formData.phone || formData.phone.length < 10 || phoneVerified) {
//                 setShowPhoneOtp(false);
//                 return;
//             }
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const response = await axios.post('/api/otp_verification/send-otp', { phone: formData.phone });
//                 if (response.data.success) {
//                     setShowPhoneOtp(true);
//                     setSendOtpToken(response.data.token);
//                 } else {
//                     setError(response.data.message || 'Failed to send OTP');
//                 }
//             } catch (err) {
//                 setError(err.response?.data?.message || 'Error sending OTP');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const delayDebounce = setTimeout(() => {
//             if (formData.phone.length === 10 && !phoneVerified) {
//                 sendOtp();
//             }
//         }, 600);

//         return () => clearTimeout(delayDebounce);
//     }, [formData.phone, phoneVerified]);

//     useEffect(() => {
//         const verifyPhoneOtp = async () => {
//             if (phoneOtp.length === 4 && !phoneVerified && sendOtpToken) {
//                 try {
//                     setLoading(true);
//                     setError(null);
//                     const response = await axios.post('/api/otp_verification/verify-otp', {
//                         phone: formData.phone,
//                         otp: phoneOtp,
//                         token: sendOtpToken,
//                         type: 'phone',
//                     });

//                     if (response.data.success && response.data.verified) {
//                         setPhoneVerified(true);
//                         setShowPhoneOtp(false);
//                         setError(null);
//                         if (response.data.token) {
//                             setVerifyOtpToken(response.data.token);
//                         }
//                     } else {
//                         setPhoneVerified(false);
//                         setError('Invalid OTP');
//                     }
//                 } catch (err) {
//                     setPhoneVerified(false);
//                     setError(err.response?.data?.message || 'OTP verification failed');
//                 } finally {
//                     setLoading(false);
//                 }
//             }
//         };

//         verifyPhoneOtp();
//     }, [phoneOtp, formData.phone, sendOtpToken, phoneVerified]);

//     const submitForm = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('/api/contact-us', {
//                 ...formData,
//                 from: sessionStorage.getItem('from') || '',
//                 medium: sessionStorage.getItem('medium') || '',
//                 campaign: sessionStorage.getItem('campaign') || '',
//                 token: verifyOtpToken,
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${verifyOtpToken}`,
//                 }
//             });

//             if (response.data.success) {
//                 setPhoneOtp('');
//                 setSendOtpToken('');
//                 setVerifyOtpToken('');
//                 setShowPhoneOtp(false);
//                 onSuccess?.();
//                 return true;
//             } else {
//                 setError(response.data.message || 'Something went wrong');
//                 return false;
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Form submission failed');
//             return false;
//         } finally {
//             setLoading(false);
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if ((formData.post_shipment || formData.pre_shipment) && !formData.export_turnover) {
//             setError("Please select your Export Turnover.");
//             return;
//         }

//         if (!phoneVerified) {
//             setError('Please verify your phone number to proceed.');
//             return;
//         }

//         if (!verifyOtpToken) {
//             setError('Verification token missing. Please re-verify your phone number.');
//             return;
//         }

//         if (formData.business_loan) {
//             if ((formData.turnover === "0-30L" || formData.vintage === "0-1")) {
//                 setModalTitle('Eligibility Alert');
//                 setModalDescription('business_not_eligible');
//                 setModalActions([
//                     {
//                         label: 'OK', onClick: () => {
//                             resetBusinessLoanFields();
//                             initiateCountdownRedirect();
//                         }
//                     }
//                 ]);
//                 setShowEligibilityModal(true);
//                 return;
//             } else {
//                 const submissionSuccess = await submitForm();
//                 if (submissionSuccess) {
//                     router.push('/thank-you');
//                 }
//                 return;
//             }
//         }

//         const defaultSubmissionSuccess = await submitForm();
//         if (defaultSubmissionSuccess) {
//             router.push('/thank-you');
//         }
//     };

//     useEffect(() => {
//         return () => {
//             if (countdownIntervalRef.current) {
//                 clearInterval(countdownIntervalRef.current);
//             }
//         };
//     }, []);

//     const handleProductChange = (val) => {
//         setFormData((prev) => ({
//             ...prev,
//             post_shipment: val === 'post_shipment' ? true : undefined,
//             pre_shipment: val === 'pre_shipment' ? true : undefined,
//             business_loan: val === 'business_loan' ? true : undefined,
//             turnover: '',
//             vintage: '',
//             export_turnover: '',
//             shipments_completed: '',
//         }));
//     };

//     const getSelectedProduct = () => {
//         if (formData.post_shipment) return 'post_shipment';
//         if (formData.pre_shipment) return 'pre_shipment';
//         if (formData.business_loan) return 'business_loan';
//         return '';
//     };

//     const renderModalDescription = () => {
//         switch (modalDescription) {
//             case 'shipment_not_eligible':
//                 return (
//                     <>
//                         <p className='text-md text-black'>{`We regret to inform you that you're currently not eligible for`} <span className="font-bold">{eligibilityProductType}</span>.</p>
//                         <p className='text-md text-black'>{`However, we can assist you with`} <span className="font-bold">Business Loan</span> options. {`Please let us know if you’d like us to get in touch to discuss further.`}</p>
//                     </>
//                 );
//             case 'business_not_eligible':
//                 return (
//                     <p className='text-md text-black'>We are sorry to inform that you are currently not eligible for <span className='font-bold'>Business Loan</span>. Thanks for reaching out to us.</p>
//                 );
//             case 'request_received_submission':
//                 return (
//                     <p className='text-md text-black'>We have received your request, and our Finance team will reach out to you shortly.</p>
//                 );
//             case 'redirecting_home':
//                 return (
//                     <>
//                         {showCountdownText && (
//                             <>
//                                 <p className='text-md text-black'>Thanks for your response, please do reach out to us again when you have a requirement.</p>
//                                 <p className='text-md mt-2 text-black'>
//                                     Redirecting to home page in {redirectCountdown} seconds...
//                                 </p>
//                             </>
//                         )}
//                     </>
//                 );
//             default:
//                 return null;
//         }
//     };

//     const renderLoanSpecificFields = () => {
//         if (formData.business_loan) {
//             return (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <Label>Latest Annual Turnover<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('turnover', val)} value={formData.turnover}>
//                             <SelectTrigger><SelectValue placeholder="Select turnover range" /></SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.business_loan_turnover.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <div>
//                         <Label>Business Vintage<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('vintage', val)} value={formData.vintage}>
//                             <SelectTrigger>
//                                 <SelectValue placeholder="Select business vintage" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.business_loan_vintage.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>
//             );
//         } else if (formData.post_shipment || formData.pre_shipment) {
//             return (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <Label>Latest Annual Turnover<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('turnover', val)} value={formData.turnover}>
//                             <SelectTrigger><SelectValue placeholder="Select turnover range" /></SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.turnover.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <div>
//                         <Label>Export Turnover<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('export_turnover', val)} value={formData.export_turnover}>
//                             <SelectTrigger><SelectValue placeholder="Select export turnover" /></SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.export_turnover.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <div>
//                         <Label>Business Vintage<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('vintage', val)} value={formData.vintage}>
//                             <SelectTrigger>
//                                 <SelectValue placeholder="Select business vintage" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.vintage.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <div>
//                         <Label>Total Shipments Completed<span className="text-red-500">*</span></Label>
//                         <Select onValueChange={(val) => handleSelectChange('shipments_completed', val)} value={formData.shipments_completed}>
//                             <SelectTrigger><SelectValue placeholder="Select shipment count" /></SelectTrigger>
//                             <SelectContent>
//                                 {LEFIN_CONSTANTS.shipments_completed.map((item) => (
//                                     <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-4">
//                 <div>
//                     <Label htmlFor="first_name">Full Name<span className="text-red-500">*</span></Label>
//                     <Input id="first_name" name="first_name" placeholder='Full Name' value={formData.first_name} onChange={handleChange} required />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                         <div className='flex justify-between items-center'>
//                             <Label htmlFor="phone" className="text-gray-700 font-medium">Phone <span className="text-red-500">*</span></Label>
//                             {formData.phone.length === 10 && showPhoneOtp && !phoneVerified && (
//                                 <OtpInput
//                                     value={phoneOtp}
//                                     onChange={setPhoneOtp}
//                                     numInputs={4}
//                                     inputStyle={{
//                                         width: '26px',
//                                         height: '26px',
//                                         margin: '0 4px',
//                                         fontSize: '1rem',
//                                         borderRadius: '5px',
//                                         border: '2px solid #234fdf',
//                                         color: '#1A4FFF',
//                                         backgroundColor: '#F5F7FF',
//                                         fontWeight: '600',
//                                         boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
//                                     }}
//                                     renderInput={(props) => <input {...props} />}
//                                     containerStyle="flex justify-center"
//                                 />
//                             )}
//                         </div>
//                         <div className="flex items-center gap-2 mt-2">
//                             <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-700">+91</span>
//                             <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required
//                                 className={`p-3 border rounded-r-lg w-full ${phoneVerified ? 'bg-green-50 border-green-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`} readOnly={phoneVerified} />
//                         </div>
//                     </div>

//                     <div>
//                         <div className='flex justify-between items-center'>
//                             <Label htmlFor="to_email" className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></Label>
//                         </div>
//                         <Input id="to_email" name="to_email" type="email" value={formData.to_email} onChange={handleChange} placeholder="example@domain.com" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
//                     </div>
//                 </div>

//                 {formData.phone && (
//                     <div className="text-sm">
//                         {error ? (
//                             <p className="text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</p>
//                         ) : phoneVerified ? (
//                             <p className="text-green-600 bg-green-50 border border-green-200 rounded p-2 flex">
//                                 Phone number successfully verified!
//                             </p>
//                         ) : showPhoneOtp ? (
//                             <p className="text-blue-700 bg-blue-50 border border-blue-200 rounded p-2">
//                                 OTP sent to +91 {formData.phone}
//                             </p>
//                         ) : null}
//                     </div>
//                 )}
//                 <div>
//                     <Label htmlFor="company">Company Name<span className="text-red-500">*</span></Label>
//                     <Input id="company" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
//                 </div>

//                 {/* Product Selection */}
//                 <div>
//                     <Label>Product Required<span className="text-red-500">*</span></Label>
//                     <Select onValueChange={handleProductChange} value={getSelectedProduct()}>
//                         <SelectTrigger>
//                             <SelectValue placeholder="Select a product" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectItem value="post_shipment">Post-Shipment Finance</SelectItem>
//                             <SelectItem value="pre_shipment">Pre-Shipment Finance</SelectItem>
//                             <SelectItem value="business_loan">Business Loan</SelectItem>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 {renderLoanSpecificFields()}

//             </div>

//             <div>
//                 <Label htmlFor="description">Additional Information</Label>
//                 <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={2} />
//             </div>

//             <div className="flex items-start gap-2">
//                 <input type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} required className="mt-1" />
//                 <Label htmlFor="agree" className="text-sm text-gray-600">
//                     {`By submitting this form, I agree to LeRemitt's`} <Link href="https://www.leremitt.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-indigo-600">Privacy Policy</Link> <span className="text-red-500">*</span>
//                 </Label>
//             </div>

//             <Button
//                 type="submit"
//                 disabled={loading || !agree || !phoneVerified}
//                 className="text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg hover:opacity-90 px-6 py-3"
//             >
//                 {loading ? 'Submitting...' : buttonText}
//             </Button>

//             {showEligibilityModal && <Dialog
//                 open={showEligibilityModal}
//                 onOpenChange={(isOpen) => {
//                     if (!isOpen && modalDescription !== 'redirecting_home') {
//                         setShowEligibilityModal(false);
//                     }
//                     if (!isOpen && (modalDescription === 'shipment_not_eligible' || modalDescription === 'business_not_eligible')) {
//                         directRedirectToHome();
//                     }
//                 }}
//             >
//                 <DialogContent
//                     onPointerDownOutside={e => {
//                         if (modalDescription === 'redirecting_home') { e.preventDefault(); }
//                     }}
//                     onEscapeKeyDown={e => {
//                         if (modalDescription === 'redirecting_home') { e.preventDefault(); }
//                     }}
//                     onInteractOutside={(e) => e.preventDefault()}
//                 >
//                     <DialogHeader>
//                         <DialogTitle>{showEligibilityModal && modalTitle}</DialogTitle>
//                         <DialogDescription>
//                             {renderModalDescription()}
//                         </DialogDescription>
//                     </DialogHeader>
//                     {modalDescription !== 'redirecting_home' && (
//                         <DialogFooter>
//                             {modalActions.map((action, index) => (
//                                 <Button key={index} onClick={action.onClick}>
//                                     {action.label}
//                                 </Button>
//                             ))}
//                         </DialogFooter>
//                     )}
//                 </DialogContent>
//             </Dialog>}
//         </form>
//     );
// };

// export default LeFinForm;