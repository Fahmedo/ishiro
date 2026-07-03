'use client'

import { Star } from 'lucide-react'

export default function Proof() {
  const testimonials = [
    {
      quote: "Ishiro saved us 20+ hours per month on expense categorization. The accuracy is unbelievable.",
      author: "Sarah Chen",
      role: "CFO, Tech Startup",
      stars: 5
    },
    {
      quote: "Finally, a solution that doesn't treat my financial data like it's their asset. Privacy-first is the way.",
      author: "Michael Rodriguez",
      role: "Freelance Consultant",
      stars: 5
    },
    {
      quote: "Our team went from dreading expense reports to actually getting insights we can act on.",
      author: "Emma Thompson",
      role: "Finance Manager, SaaS Company",
      stars: 5
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Loved by Finance Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what early users are saying about Ishiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">99.2%</p>
            <p className="text-muted-foreground">Categorization Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">50K+</p>
            <p className="text-muted-foreground">Transactions Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">4.9/5</p>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
