'use client'

import { useState } from 'react'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Clock, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Loader2, Youtube } from 'lucide-react'
import CustomLink from '../Reusable_section/CustomLink/CustomLink'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', to_email: '', phone: '', description: '' })
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState({ type: '', text: '' })
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post('/api/contact-us', formData)
      if (response.data.success) {
        setDialogMessage({ type: 'success', text: response.data.message })
        setFormData({ first_name: '', last_name: '', to_email: '', phone: '', description: '' })
      } else {
        setDialogMessage({ type: 'error', text: response.data.message })
      }
    } catch (err) {
      setDialogMessage({
        type: 'error',
        text: err.response?.data?.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setLoading(false)
      setDialogOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center my-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-md md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Have a question, idea, or need support? We’re here to help.
            Reach out and our team will get back to you shortly.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden grid md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-tertiary-color text-white p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <ContactInfo
                icon={MapPin}
                label="Our Office"
                value="Axodian, 1st Floor, Obeya Tranquil, Next to Sapna Book House, 1185, 5th Main Road, 7th Sector, HSR Layout Bengaluru, 560102"
                href="https://maps.app.goo.gl/zC1fd9SiQDfTZo1g8" />

              <ContactInfo icon={Mail} label="Email Us" value="connect@axodian.com" href="mailto:connect@axodian.com" />
              <ContactInfo icon={Phone} label="Call Us" value="+91 8050087593" href="tel:+918050087593" />
              <ContactInfo icon={Clock} label="Working Hours" value="Monday - Friday: 10:30 AM – 7:00 PM" />
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialIcon href="https://www.facebook.com/LeRemitt" icon={Facebook} />
                {/* <SocialIcon href="https://www.youtube.com/@LeRemitt" icon={Youtube} /> */}
                <SocialIcon href="https://www.linkedin.com/company/axodian/" icon={Linkedin} />
                {/* <SocialIcon href="https://www.instagram.com/leremitt_com/" icon={Instagram} /> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="first_name" name="first_name" required placeholder="John" className="text-base py-3 px-4" value={formData.first_name} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="last_name" name="last_name" required placeholder="Doe" className="text-base py-3 px-4" value={formData.last_name} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="to_email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="to_email" name="to_email" type="email" required placeholder="your@email.com" className="text-base py-3 px-4" value={formData.to_email} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="phone" type='number' name="phone" required placeholder="+91 1234567890" className="text-base py-3 px-4" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea id="description" name="description" placeholder="How can we help you?" className="h-24 text-base py-2 px-4" value={formData.description} onChange={handleChange} />
              </div>

              {/* Add this checkbox section just before the submit button */}
              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree" checked={agree} onChange={() => setAgree(!agree)} required className="mt-1" />
                <Label htmlFor="agree" className="text-sm text-muted-foreground">
                  By submitting this form, I confirm and agree to storing and processing of my data by Axodian as described in the{' '}
                  <Link href="/Documents/6Point3_PrivacyPolicy.pdf" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link> <span className="text-red-500">*</span>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-tertiary-color hover:bg-tertiary-color/90 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Feedback Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className={`text-${dialogMessage.type === 'success' ? 'green' : 'red'}-600`}>
              {dialogMessage.type === 'success' ? 'Message Sent Successfully!' : 'Oops! Something Went Wrong'}
            </DialogTitle>
            <DialogDescription className="mt-2 text-gray-600">
              {dialogMessage.text}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setDialogOpen(false)}
              className={`bg-${dialogMessage.type === 'success' ? 'green' : 'red'}-600 hover:bg-${dialogMessage.type === 'success' ? 'green' : 'red'}-700`}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ContactInfo({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-primary-light-color rounded-lg">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-md md:text-xl text-white">{label}</h3>
        {href ? (
          <CustomLink href={href} className="text-white hover:underline">
            {value}
          </CustomLink>
        ) : (
          <p className="text-white text-md md:text-lg">{value}</p>
        )}
      </div>
    </div>
  )
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <CustomLink
      href={href} target="_blank" rel="noopener noreferrer"
      className="p-2 bg-primary-light-color rounded-full text-white hover:bg-primary-light-color/90 transition-colors duration-300"
    >
      <Icon className="w-5 h-5" />
    </CustomLink>
  )
}