'use client'

import { Shield, Eye, Trash2 } from 'lucide-react'

export default function Privacy() {
  const policies = [
    {
      icon: Shield,
      title: 'Zero Data Storage',
      description: 'We analyze your transactions in real-time but never store them. Your data stays with you and your bank.'
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'You control exactly what Ishiro can access. Revoke permission instantly anytime, just like you would with any app.'
    },
    {
      icon: Trash2,
      title: 'Delete On Demand',
      description: 'Want to delete all your data? One click and everything is permanently erased from our systems.'
    }
  ]

  return (
    <section id="privacy" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Privacy First. Always.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Your financial data is sacred. We treat it that way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {policies.map((policy, index) => {
            const Icon = policy.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-background border border-border text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="inline-block p-4 rounded-lg bg-secondary/10">
                    <Icon className="text-secondary" size={28} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {policy.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Compliance Badges */}
        <div className="p-8 rounded-xl bg-background border border-border">
          <h3 className="text-lg font-semibold text-primary mb-6 text-center">
            Industry Compliance & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SOC 2 Type II', 'GDPR Compliant', 'PCI DSS Level 1', 'Open Banking Ready'].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="inline-block px-4 py-2 rounded-lg bg-secondary/10 mb-2">
                  <div className="w-6 h-6 rounded-full bg-secondary"></div>
                </div>
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
