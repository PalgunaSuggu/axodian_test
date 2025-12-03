'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

const LEFIN_CONSTANTS = {
    turnover: [{ id: 1, value: '30L-1CR', label: '₹30L – ₹1CR' }, { id: 2, value: '1CR-25CR', label: '₹1CR – ₹25CR' }, { id: 3, value: '25CR-50CR', label: '₹25CR – ₹50CR' }, { id: 4, value: '50CR-100CR', label: '₹50CR – ₹100CR' }, { id: 5, value: '100CR', label: 'Above ₹100CR' },],
    vintage: [{ id: 1, value: "0-1", label: "0 - 1 Year" }, { id: 2, value: "2-5", label: "2 - 5 Years" }, { id: 3, value: "5-10", label: "5 - 10 Years" }, { id: 4, value: "10+", label: "Above 10 Years" }],
    shipments_completed: [{ id: 1, value: '2-10', label: '2 - 10 Shipments' }, { id: 2, value: '10+', label: '>10 Shipments' },],
};

const AxodianForm = ({ onSuccess, buttonText = "Request a Demo", defaultSelected = ['remittance', 'document_management', 'trade_finance', 'secured_loans', 'unsecured_loans', 'bill_of_discounting', 'factoring_loans', 'axodina'] }) => {
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
        primary_interest: '',
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
        if (field === 'primary_interest') {
            setFormData((prev) => ({
                ...prev,
                primary_interest: val,
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
        <div className="w-full">
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
                                        inputStyle={{ width: '26px', height: '26px', margin: '0 4px', fontSize: '1rem', borderRadius: '5px', border: '2px solid #234fdf', color: '#1A4FFF', backgroundColor: '#F5F7FF', fontWeight: '600', }} renderInput={(props) => <input {...props} />} containerStyle="flex justify-center" />)}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-700">+91</span>
                                <Input
                                    id="phone"
                                    name="phone" type="tel"
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

                    <div>
                        <Label htmlFor="Company" className="text-gray-700 font-medium">Company Name <span className="text-red-500">*</span></Label>
                        <Input id="Company" name="Company" value={formData.Company} onChange={handleChange} placeholder="Your company name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    {/* Company + Primary Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div>
                            <Label>Primary interest</Label>
                            <Select onValueChange={handleSelectChange('primary_interest')} value={formData.primary_interest || ''}>
                                <SelectTrigger><SelectValue placeholder="Select primary interest" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="documentation">Documentation & Compliance</SelectItem>
                                    <SelectItem value="payments">Payments</SelectItem>
                                    <SelectItem value="financing">Financing</SelectItem>
                                    <SelectItem value="not_sure">Not sure</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Monthly export volume<span className="text-red-500">*</span></Label>
                            <Select onValueChange={handleSelectChange('turnover')} value={formData.turnover}>
                                <SelectTrigger className={!formData.turnover && error ? 'border-red-500' : ''}><SelectValue placeholder="Select monthly export volume" /></SelectTrigger>
                                <SelectContent>
                                    {LEFIN_CONSTANTS.turnover.map(item => <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    <div>
                        <Label>Role</Label>
                        <Select onValueChange={handleSelectChange('role')} value={formData.role || ''}>
                            <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                            <SelectContent className='max-w-60'>
                                <SelectItem value="owner">Owner</SelectItem>
                                <SelectItem value="manager">Manager</SelectItem>
                                <SelectItem value="employee">Employee</SelectItem>
                                <SelectItem value="director">Director</SelectItem>
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
                        disabled={loading || !agree || !phoneVerified || !formData.turnover || !formData.vintage || !formData.Company || !formData.to_email || !formData.first_name}
                        className="text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg hover:opacity-90 px-6 py-3"
                    >
                        {loading ? 'Submitting...' : buttonText}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AxodianForm