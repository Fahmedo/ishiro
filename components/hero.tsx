'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import MiniDashboard from './mini-dashboard'

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent -z-10"></div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="order-2 md:order-1">
            {/* Announcement Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Now accepting early access</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight text-balance"
              variants={fadeInUp}
            >
              Stop Fighting With{' '}
              <span className="text-secondary">Expense Chaos</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-balance leading-relaxed"
              variants={fadeInUp}
            >
              Connect your bank once. Ishiro automatically categorizes expenses, reconciles transactions, and surfaces insights that move the needle.
            </motion.p>

            {/* Value Props */}
            <motion.div className="space-y-3 mb-8" variants={fadeInUp}>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Zap size={14} className="text-secondary" />
                </div>
                <span className="text-foreground font-medium">Categorizes 100% of transactions automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <TrendingUp size={14} className="text-secondary" />
                </div>
                <span className="text-foreground font-medium">Real-time spending insights & trends</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-12" variants={fadeInUp}>
              <Button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center gap-2 h-12 px-8 text-base font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-secondary/30"
                size="lg"
              >
                Join Early Access
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-muted text-foreground h-12 px-8 text-base font-semibold rounded-lg"
                size="lg"
              >
                View Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div className="flex flex-wrap gap-4 text-sm text-muted-foreground" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span>256-bit encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span>No data storage</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            className="order-1 md:order-2"
            variants={fadeInUp}
          >
            <MiniDashboard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
