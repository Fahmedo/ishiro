'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import WaitlistForm from './waitlist-form'

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="w-full py-20 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent -z-10"></div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">Limited spots available</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto text-balance">
            Join the waitlist now and be among the first to transform how you manage expenses. Early access members get lifetime pricing locked in.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow"
          variants={fadeInUp}
          whileHover={{ y: -4 }}
        >
          <WaitlistForm />
        </motion.div>

        {/* Trust Message */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          variants={fadeInUp}
        >
          ✓ No spam, just updates • ✓ Cancel anytime • ✓ Your data is always private
        </motion.p>
      </motion.div>
    </section>
  )
}
