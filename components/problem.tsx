'use client'

import { CreditCard, AlertCircle, Zap } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: CreditCard,
      title: 'Manual Data Entry',
      description: 'Spending hours categorizing transactions in spreadsheets and accounting software is tedious and error-prone.'
    },
    {
      icon: AlertCircle,
      title: 'Fragmented Systems',
      description: 'Your financial data lives across multiple platforms with no unified view of what you actually spend.'
    },
    {
      icon: Zap,
      title: 'Wasted Insights',
      description: 'Traditional expense trackers give you data, not wisdom. You need actionable insights to make better decisions.'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Expense Tracking Is Broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Traditional solutions waste your time and hide what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/10">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
