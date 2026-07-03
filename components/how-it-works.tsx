'use client'

import { Zap, Brain, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Zap,
      title: 'Connect',
      description: 'Link your bank accounts securely through Plaid. No data is stored—we just read transactions.'
    },
    {
      number: '2',
      icon: Brain,
      title: 'Analyze',
      description: 'Our AI engine automatically categorizes expenses with 99.2% accuracy and identifies patterns.'
    },
    {
      number: '3',
      icon: TrendingUp,
      title: 'Act',
      description: 'Get personalized insights and recommendations to optimize your spending and save money.'
    }
  ]

  return (
    <section id="how-it-works" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How Ishiro Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Three simple steps to complete expense visibility and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                )}

                <div className="p-8 rounded-xl bg-background border border-border">
                  {/* Step Number */}
                  <div className="inline-block mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/10">
                    <Icon className="text-secondary" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
