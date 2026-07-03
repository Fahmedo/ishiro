'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  country: string
  bank: string
  userType: string
  expenseChallenge: string
  gmailWilling: string
  valuePerception: string
  paymentInterest: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  country: '',
  bank: '',
  userType: '',
  expenseChallenge: '',
  gmailWilling: '',
  valuePerception: '',
  paymentInterest: ''
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email')
      return false
    }
    if (!formData.country) {
      setError('Country is required')
      return false
    }
    if (!formData.userType) {
      setError('User type is required')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Save to localStorage for persistence
      localStorage.setItem('ishiro_waitlist', JSON.stringify(formData))
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitted(true)
      setFormData(initialFormData)
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-16">
        <div className="inline-block mb-6 p-4 rounded-full bg-secondary/10">
          <CheckCircle className="text-secondary" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">
          You&apos;re on the list!
        </h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ll send you early access as soon as Ishiro launches. Check your email for updates.
        </p>
        <p className="text-sm text-muted-foreground">
          Didn&apos;t receive a confirmation? Check your spam folder or contact us at hello@ishiro.app
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
          <AlertCircle className="text-destructive mt-0.5 flex-shrink-0" size={20} />
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Full Name *
        </label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full h-10"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full h-10"
        />
      </div>

      {/* Two Column Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Bank */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Primary Bank
          </label>
          <select
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
          >
            <option value="">Select a bank</option>
            <option value="chase">Chase</option>
            <option value="bofa">Bank of America</option>
            <option value="wellsfargo">Wells Fargo</option>
            <option value="citi">Citi</option>
            <option value="amex">American Express</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* User Type */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          I am a... *
        </label>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
        >
          <option value="">Select user type</option>
          <option value="individual">Individual / Freelancer</option>
          <option value="small-business">Small Business Owner</option>
          <option value="accountant">Accountant / Bookkeeper</option>
          <option value="finance-team">Finance Team Member</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Expense Challenge */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          My biggest expense tracking challenge
        </label>
        <select
          name="expenseChallenge"
          value={formData.expenseChallenge}
          onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
        >
          <option value="">Select a challenge</option>
          <option value="categorization">Manual categorization</option>
          <option value="reconciliation">Reconciliation</option>
          <option value="reporting">Reporting</option>
          <option value="visibility">Lack of visibility</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Gmail Willing */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Willing to connect Gmail for receipt parsing?
        </label>
        <select
          name="gmailWilling"
          value={formData.gmailWilling}
          onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
        >
          <option value="">Select option</option>
          <option value="yes">Yes, absolutely</option>
          <option value="maybe">Maybe, needs more info</option>
          <option value="no">No, privacy concerns</option>
        </select>
      </div>

      {/* Value Perception */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          What would you pay for Ishiro?
        </label>
        <select
          name="valuePerception"
          value={formData.valuePerception}
          onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
        >
          <option value="">Select a range</option>
          <option value="free">Free only</option>
          <option value="5-10">$5-10/month</option>
          <option value="10-20">$10-20/month</option>
          <option value="20-50">$20-50/month</option>
          <option value="50+">$50+/month</option>
        </select>
      </div>

      {/* Payment Interest */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Interested in payment processing integration?
        </label>
        <select
          name="paymentInterest"
          value={formData.paymentInterest}
          onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
        >
          <option value="">Select option</option>
          <option value="very-interested">Very interested</option>
          <option value="somewhat">Somewhat interested</option>
          <option value="not-interested">Not interested</option>
        </select>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-11 font-semibold"
      >
        {loading ? 'Joining...' : 'Join the Waitlist'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        No spam, just updates about Ishiro. Unsubscribe anytime.
      </p>
    </form>
  )
}
