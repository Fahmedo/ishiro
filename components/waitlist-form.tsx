'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface FormData {
  name: string
  email: string
  country: string
  userType: string
  expenseChallenge: string
  gmailWilling: string
  suggestion: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  country: '',
  userType: '',
  expenseChallenge: '',
  gmailWilling: '',
  suggestion: ''
}

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const steps = [
    {
      title: 'Basic Information',
      description: 'Let&apos;s get to know you',
      fields: ['name', 'email']
    },
    {
      title: 'Your Setup',
      description: 'Tell us about your situation',
      fields: ['country', 'userType']
    },
    {
      title: 'Your Challenges',
      description: 'What problem are we solving?',
      fields: ['expenseChallenge']
    },
    {
      title: 'Gmail & Payment',
      description: 'Final details',
      fields: ['gmailWilling', 'suggestion']
    }
  ]

  const validateStep = (stepIndex: number) => {
    const step = steps[stepIndex]
    setError('')

    for (const field of step.fields) {
      if (!formData[field as keyof FormData]?.trim()) {
        setError(`Please fill in all required fields`)
        return false
      }
    }

    if (stepIndex === 0) {
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setError('Please enter a valid email address')
        return false
      }
    }

    return true
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handlePrev = () => {
    setError('')
    setCurrentStep(Math.max(0, currentStep - 1))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setLoading(true)
    try {
      const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScHTqrPc5dWG1ZkDKUzPeW-j-Gn2OnWDwf86ZfeWaw8GLCZ4w/formResponse', {
        method: 'POST', // Specifies the request method
        headers: {
          'Content-Type': 'application/json' // Tells the server we are sending JSON
        },
        body:  JSON.stringify(formData) // Converts JavaScript object to JSON string
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json(); // Parses the JSON response from server
      console.log('Success:', result);
    } catch (error) {
      console.error('Error sending data:', error);
    }  finally {
      setLoading(false)
    }
  }
  

  if (submitted) {
    return (
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl p-8 text-center border border-green-200 bg-gradient-to-b from-green-50 to-white">
          <motion.div
            className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle2 size={32} className="text-green-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-primary mb-2">You&apos;re In!</h3>
          <p className="text-muted-foreground mb-6">
            Thanks for joining the Ishiro early access program. We&apos;ll be in touch soon.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Check your email: <span className="font-semibold text-primary">{formData.email}</span>
          </p>
          <Button
            onClick={() => {
              setCurrentStep(0)
              setFormData(initialFormData)
              setSubmitted(false)
            }}
            variant="outline"
            className="w-full"
          >
            Start Over
          </Button>
        </div>
      </motion.div>
    )
  }

  const step = steps[currentStep]
  const progressPercent = ((currentStep + 1) / steps.length) * 100

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-primary">{step.title}</h2>
            <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
          </div>
          <div className="text-sm font-semibold text-secondary">
            {currentStep + 1}/{steps.length}
          </div>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-secondary to-secondary/80"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex gap-2 mb-8">
        {steps.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 flex-1 rounded-full transition-colors ${
              idx < currentStep
                ? 'bg-secondary'
                : idx === currentStep
                ? 'bg-secondary/60'
                : 'bg-muted'
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        ))}
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 mb-8"
        >
          {currentStep === 0 && (
            <>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Sarah Johnson"
                  className="rounded-lg h-12 border-border focus:border-secondary text-base"
                />
              </div>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="sarah@company.com"
                  className="rounded-lg h-12 border-border focus:border-secondary text-base"
                />
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  Where are you based?
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary text-base"
                >
                  <option value="">Select country</option>
                  <option value="NG">Nigeria</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  What best describes you?
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary text-base"
                >
                  <option value="">Select user type</option>
                  <option value="individual">Individual/Freelancer</option>
                  <option value="small-business">Small Business Owner</option>
                  <option value="finance-team">Finance Team Member</option>
                  <option value="founder">Startup Founder</option>
                </select>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  What&apos;s your biggest expense tracking challenge?
                </label>
                <select
                  name="expenseChallenge"
                  value={formData.expenseChallenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary text-base"
                >
                  <option value="">Select a challenge</option>
                  <option value="manual-entry">Manual data entry</option>
                  <option value="categorization">Automatic categorization</option>
                  <option value="reconciliation">Reconciliation</option>
                  <option value="insights">Getting insights</option>
                  <option value="multiple-accounts">Managing multiple accounts</option>
                </select>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div>
                <label className="block text-base font-bold text-black mb-3">
                  Would you connect your Gmail for receipt tracking?
                </label>
                <div className="space-y-2">
                  {['Yes, definitely', 'Maybe', 'No thanks'].map((option) => (
                    <motion.label
                      key={option}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="gmailWilling"
                        value={option}
                        checked={formData.gmailWilling === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-secondary"
                      />
                      <span className="font-medium text-foreground">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-base font-bold text-primary mb-3">
                  Interest in premium features?
                </label>
                <motion.div
                      
                      className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <textarea
                        name="suggestion"
                        value={formData.suggestion}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-secondary"
                      />
                     
                    </motion.div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Error Message */}
      {error && (
        <motion.div
          className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        {currentStep > 0 && (
          <Button
            onClick={handlePrev}
            variant="outline"
            className="flex-1 h-12 rounded-lg"
            disabled={loading}
          >
            <ArrowLeft size={18} />
          </Button>
        )}
        <Button
          onClick={handleNext}
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 rounded-lg font-semibold flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              {currentStep === steps.length - 1 ? 'Join Waitlist' : 'Next'}
              {currentStep < steps.length - 1 && <ArrowRight size={18} />}
            </>
          )}
        </Button>
      </div>
    </motion.div>
  )
}
