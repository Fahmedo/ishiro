'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Stop Wasting Time on Expenses
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Join hundreds of professionals who are reclaiming hours each month with intelligent expense tracking.
        </p>

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
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          🚀 Early access launching Q3 2024. Limited spots available.
        </p>
      </div>
    </section>
  )
}
