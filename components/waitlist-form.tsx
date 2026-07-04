'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  userType: string;
  expenseChallenges: string[];
  suggestion: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  userType: '',
  expenseChallenges: [],
  suggestion: '',
};

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLScHTqrPc5dWG1ZkDKUzPeW-j-Gn2OnWDwf86ZfeWaw8GLCZ4w/formResponse';

const GOOGLE_FORM_FIELDS = {
  name: 'entry.834388694',
  email: 'entry.632844704',
  userType: 'entry.906725908',
  expenseChallenge: 'entry.1260052493',
  suggestion: 'entry.953029984',
} as const;

const userTypeOptions = [
  'Individual/Freelancer',
  'Small Business Owner',
  'Finance Team Member',
  'Startup Founder',
  'Others',
];

const expenseChallengeOptions = [
  'Manual data entry',
  'Automatic categorization',
  'Reconciliation',
  'Getting insights',
  'Managing multiple accounts',
];

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      title: 'Basic Information',
      description: `Let's get to know you`,
      fields: ['name', 'email'] as const,
    },
    {
      title: 'Your Setup',
      description: 'Tell us about your situation',
      fields: ['userType'] as const,
    },
    {
      title: 'Your Challenges',
      description: 'What problem are we solving?',
      fields: ['expenseChallenges'] as const,
    },
    {
      title: 'Final Details',
      description: 'Anything else you want us to know?',
      fields: [] as const,
    },
  ];

  const validateStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setError('');

    for (const field of step.fields) {
      const value = formData[field];

      if (Array.isArray(value) ? value.length === 0 : !value.trim()) {
        setError('Please fill in all required fields');
        return false;
      }
    }

    if (
      stepIndex === 0 &&
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrev = () => {
    setError('');
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSelectChange = (field: 'userType', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const toggleMultiSelect = (field: 'expenseChallenges', value: string) => {
    setFormData((prev) => {
      const hasValue = prev[field].includes(value);

      return {
        ...prev,
        [field]: hasValue
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      };
    });
    setError('');
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setLoading(true);

    try {
      const payload = new URLSearchParams();

      payload.append(GOOGLE_FORM_FIELDS.name, formData.name);
      payload.append(GOOGLE_FORM_FIELDS.email, formData.email);
      payload.append(GOOGLE_FORM_FIELDS.userType, formData.userType);

      formData.expenseChallenges.forEach((value) => {
        payload.append(GOOGLE_FORM_FIELDS.expenseChallenge, value);
      });

      if (formData.suggestion.trim()) {
        payload.append(GOOGLE_FORM_FIELDS.suggestion, formData.suggestion);
      }

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
      });

      setSubmitted(true);
      setError('');
    } catch (submitError) {
      console.error('Error sending data:', submitError);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <h3 className="text-2xl font-bold text-black mb-2">
            You&apos;re In!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thanks for joining the Ishiro early access program. We&apos;ll be in
            touch soon.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Check your email:{' '}
            <span className="font-semibold text-black">{formData.email}</span>
          </p>
          <Button
            onClick={() => {
              setCurrentStep(0);
              setFormData(initialFormData);
              setSubmitted(false);
            }}
            variant="outline"
            className="w-full"
          >
            Start Over
          </Button>
        </div>
      </motion.div>
    );
  }

  const step = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-black">{step.title}</h2>
            <p className="text-green-600 text-sm mt-1">{step.description}</p>
          </div>
          <div className="text-sm font-semibold text-secondary">
            {currentStep + 1}/{steps.length}
          </div>
        </div>
      </div>

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

      <AnimatePresence mode="wait">
        <motion.form
          key={currentStep}
          onSubmit={handleFormSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-4 mb-8">
            {currentStep === 0 && (
              <>
                <FormField label="Full Name" htmlFor="name">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Sarah Johnson"
                    className="rounded-lg h-12 border-border focus:border-secondary text-base"
                  />
                </FormField>
                <FormField label="Email Address" htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sarah@company.com"
                    className="rounded-lg h-12 border-border focus:border-secondary text-base"
                  />
                </FormField>
              </>
            )}

            {currentStep === 1 && (
              <FormField
                label="What best describes you?"
                description="Choose the one that fits you best."
              >
                <div className="space-y-2">
                  {userTypeOptions.map((option) => (
                    <SelectableCard
                      key={option}
                      type="radio"
                      name="userType"
                      label={option}
                      checked={formData.userType === option}
                      onChange={() => handleSelectChange('userType', option)}
                    />
                  ))}
                </div>
              </FormField>
            )}

            {currentStep === 2 && (
              <FormField
                label="What's your biggest expense tracking challenge?"
                description="Select all that apply."
              >
                <div className="space-y-2">
                  {expenseChallengeOptions.map((option) => (
                    <SelectableCard
                      key={option}
                      type="checkbox"
                      label={option}
                      checked={formData.expenseChallenges.includes(option)}
                      onChange={() =>
                        toggleMultiSelect('expenseChallenges', option)
                      }
                    />
                  ))}
                </div>
              </FormField>
            )}

            {currentStep === 3 && (
              <FormField
                label="Have a request in mind? Kindly let us know"
                htmlFor="suggestion"
              >
                <textarea
                  id="suggestion"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleInputChange}
                  placeholder="Tell us what you'd love Ishiro to help with..."
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-secondary focus:ring-1 focus:ring-secondary resize-none"
                />
              </FormField>
            )}
          </div>

          {error && (
            <motion.div
              className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </motion.div>
          )}

          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button
                type="button"
                onClick={handlePrev}
                variant="outline"
                className="flex-1 h-12 rounded-lg"
                disabled={loading}
              >
                <ArrowLeft size={18} />
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 rounded-lg font-semibold flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {isLastStep ? 'Join Waitlist' : 'Next'}
                  {!isLastStep && <ArrowRight size={18} />}
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </AnimatePresence>
    </motion.div>
  );
}

function FormField({
  label,
  htmlFor,
  description,
  children,
}: {
  label: string;
  htmlFor?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label
          htmlFor={htmlFor}
          className="block text-base font-bold text-black"
        >
          {label}
        </label>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function SelectableCard({
  type,
  name,
  label,
  checked,
  onChange,
}: {
  type: 'checkbox' | 'radio';
  name?: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <motion.label
      className="flex items-center gap-3 rounded-lg border border-border p-3 cursor-pointer transition-colors hover:bg-muted/50"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-secondary"
      />
      <span className="font-medium text-black">{label}</span>
    </motion.label>
  );
}
