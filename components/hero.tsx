'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-muted border border-border">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <span className="text-sm font-medium text-foreground">Now accepting early access applications</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
          Bank-Connected Expense Tracking That Just Works
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Connect your accounts once. Ishiro automatically categorizes expenses, reconciles transactions, and gives you insights that actually matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center gap-2 h-12 px-8"
            size="lg"
          >
            Join the Waitlist
            <ArrowRight size={18} />
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-muted text-foreground h-12 px-8"
            size="lg"
          >
            View Demo
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            </div>
            <span>Bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            </div>
            <span>SOC 2 Type II certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            </div>
            <span>Zero data storage</span>
          </div>
        </div>
      </div>
    </section>
  )
}
