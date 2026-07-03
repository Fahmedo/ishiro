'use client'

import { BarChart3, Lock, Zap, Users, Bell, FileText } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track spending trends, budget progress, and financial health with intuitive dashboards updated instantly.'
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'AES-256 encryption with zero transaction storage. We read and analyze—we never keep your data.'
    },
    {
      icon: Zap,
      title: 'Instant Reconciliation',
      description: 'Transactions are automatically reconciled, categorized, and tagged using machine learning.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share expense reports with stakeholders, assign approvers, and maintain full audit trails.'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified about unusual spending patterns, budget overages, and important transactions.'
    },
    {
      icon: FileText,
      title: 'Export Anywhere',
      description: 'Generate tax reports, accounting exports, or share data with your accountant in seconds.'
    }
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Powerful Features, Built for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to take control of your finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/10">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
