import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from 'next/link';
import Image from 'next/image';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    website: '',
    email: '',
    phone: '',
    location: '',
    organizationType: '',
    partnershipType: '',
    clientBase: '',
    questions: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual form submission logic
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form or show success message
      alert('Your partner application has been submitted successfully. Our team will contact you within 2 business days.');
      
      // Optional: Reset form
      setFormData({
        fullName: '',
        companyName: '',
        designation: '',
        website: '',
        email: '',
        phone: '',
        location: '',
        organizationType: '',
        partnershipType: '',
        clientBase: '',
        questions: ''
      });
      setAgree(false);
      
    } catch (err) {
      setError('There was an error submitting your application. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section - Left Side */}
        <div className="w-full lg:w-3/5 p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-gray-800 mb-2">Partner Application Form</h3>
            <p className="text-gray-600">Fill out the form below and our Partnerships Team will be in touch within 2 business days.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name and Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name <span className="text-red-500">*</span></Label>
                <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company name" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Designation/Role and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Designation/Role */}
              <div>
                <Label htmlFor="designation" className="text-gray-700 font-medium">Designation/Role <span className="text-red-500">*</span></Label>
                <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Your role in the company" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>

              {/* Website */}
              <div>
                <Label htmlFor="website" className="text-gray-700 font-medium">Company Website</Label>
                <Input id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://www.example.com" className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address <span className="text-red-500">*</span></Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@domain.com" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-700">+91</span>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="p-3 border rounded-r-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>

            {/* City & Country */}
            <div>
              <Label htmlFor="location" className="text-gray-700 font-medium">City & Country <span className="text-red-500">*</span></Label>
              <Input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Mumbai, India" required className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Organization Type and Partnership Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Organization Type */}
              <div>
                <Label htmlFor="organizationType" className="text-gray-700 font-medium">Organization Type <span className="text-red-500">*</span></Label>
                <Select name="organizationType" value={formData.organizationType} onValueChange={(value) => handleSelectChange('organizationType', value)} required>
                  <SelectTrigger className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="Select organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistics">Logistics Company</SelectItem>
                    <SelectItem value="consultant">Chartered Accountant/Consultant</SelectItem>
                    <SelectItem value="technology">Technology Platform or ERP</SelectItem>
                    <SelectItem value="other">Other (please specify in notes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Partnership Type */}
              <div>
                <Label htmlFor="partnershipType" className="text-gray-700 font-medium">Partnership Type <span className="text-red-500">*</span></Label>
                <Select name="partnershipType" value={formData.partnershipType} onValueChange={(value) => handleSelectChange('partnershipType', value)} required>
                  <SelectTrigger className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="referral">Referral Partnership</SelectItem>
                    <SelectItem value="reseller">Reseller Partnership</SelectItem>
                    <SelectItem value="integration">Integration/Tech Partnership</SelectItem>
                    <SelectItem value="alliance">Strategic Alliance</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Client Base */}
            <div>
              <Label htmlFor="clientBase" className="text-gray-700 font-medium">{`Describe your client base and why you're interested in partnering with us`}</Label>
              <Textarea id="clientBase" name="clientBase" value={formData.clientBase} onChange={handleChange} placeholder="Tell us about your clients and your interest in partnership" rows={3} className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Questions */}
            <div>
              <Label htmlFor="questions" className="text-gray-700 font-medium">Any questions or notes for us?</Label>
              <Textarea id="questions" name="questions" value={formData.questions} onChange={handleChange} placeholder="Any specific questions or additional information" rows={3} className="mt-2 p-3 border rounded-lg w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {error && (
              <div className="text-red-600 bg-red-50 border border-red-200 rounded p-3">
                {error}
              </div>
            )}

            <div className="flex items-start gap-2">
              <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} required className="mt-1" />
              <Label htmlFor="agree" className="text-sm text-gray-600">
                {`By submitting this form, I agree to Axodian's`} <Link href="https://www.axodian.com/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-blue-600">Privacy Policy</Link> <span className="text-red-500">*</span>
              </Label>
            </div>

            <Button type="submit" disabled={loading || !agree} className="text-white bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg hover:opacity-90 px-6 py-3 w-full md:w-auto">
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
        
        {/* Image Section - Right Side */}
        <div className="w-full lg:w-2/5 bg-gradient-to-t from-blue-600/20 to-transparent flex flex-col items-center justify-center p-6">
          <div className="w-full h-[500px] mb-4 relative">
            <Image src="/images/PartnerForm.webp" alt="Business partnership" fill style={{ objectFit: 'cover' }}unoptimized={true}/>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm w-full">
            <h3 className="text-lg font-semibold text-blue-800">Grow Your Business with LeRemitt</h3>
            <p className="text-sm text-gray-700 mt-2">Join our network of trusted partners and expand your business opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
