'use client'

import WaitlistForm from './waitlist-form'

export default function Waitlist() {
  return (
    <section id="waitlist" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Be among the first to experience intelligent expense tracking. We&apos;re launching soon with early access for waitlist members.
          </p>
        </div>

        {/* Form */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
