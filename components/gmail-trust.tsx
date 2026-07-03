'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Shield, Eye, Lock, CheckCircle2 } from 'lucide-react'

export default function GmailTrust() {
  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-50 border border-blue-200" variants={fadeInUp}>
            <Shield size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Gmail Integration Security</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            variants={fadeInUp}
          >
            Gmail Read-Only Access
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We only read your email receipts. Never send, modify, or store your email data.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: How it Works */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 className="text-2xl font-bold text-primary" variants={fadeInUp}>
              How Gmail Access Works
            </motion.h3>

            {[
              {
                num: '1',
                title: 'OAuth Connection',
                desc: 'You authorize Ishiro via Google OAuth. No password sharing.',
              },
              {
                num: '2',
                title: 'Receipt Scanning',
                desc: 'We only read and analyze receipt emails. Nothing else touches your data.',
              },
              {
                num: '3',
                title: 'Automatic Extraction',
                desc: 'Receipt details (vendor, amount, date) are instantly extracted and categorized.',
              },
              {
                num: '4',
                title: 'Zero Storage',
                desc: 'Email data is never stored. We only store the extracted insights.',
              },
            ].map((step, idx) => (
              <motion.div key={idx} className="flex gap-4" variants={fadeInUp}>
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.num}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Security Features */}
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 className="text-2xl font-bold text-primary" variants={fadeInUp}>
              Security Guarantees
            </motion.h3>

            {[
              {
                icon: Eye,
                title: 'Read-Only Access',
                desc: "We can't send, modify, or delete emails. Only read receipts.",
              },
              {
                icon: Lock,
                title: 'Encrypted Connection',
                desc: 'All data transfers are encrypted with TLS 1.3. Always end-to-end.',
              },
              {
                icon: Shield,
                title: 'SOC 2 Certified',
                desc: 'Annual audits confirm security, availability, and privacy controls.',
              },
              {
                icon: CheckCircle2,
                title: 'GDPR Compliant',
                desc: 'Full data portability and deletion rights. Your data, your control.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={20} className="text-secondary" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Security Flow Diagram */}
        <motion.div
          className="bg-background border border-border rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-primary mb-8 text-center">Data Flow</h3>
          
          <div className="space-y-6">
            {/* Your Gmail to Ishiro */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-1">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-semibold text-blue-900">Your Gmail Account</p>
                  <p className="text-sm text-blue-700">Secure OAuth Connection</p>
                </div>
              </div>
              <motion.div
                className="px-6 flex justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl text-secondary font-bold">→</div>
              </motion.div>
              <div className="flex-1">
                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                  <p className="font-semibold text-primary">Ishiro Processing</p>
                  <p className="text-sm text-muted-foreground">Reads Receipts Only</p>
                </div>
              </div>
            </motion.div>

            {/* What We Keep */}
            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary mb-3">What We Extract & Keep:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Vendor Name', 'Amount', 'Date', 'Category'].map((item) => (
                    <motion.div
                      key={item}
                      className="bg-secondary/20 rounded px-3 py-2 text-sm font-medium text-primary text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* What We Delete */}
            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-red-50 to-transparent border border-red-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-900 mb-3">What We Never Store:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Email Body', 'Sender Address', 'Timestamps', 'Email Files'].map((item) => (
                    <motion.div
                      key={item}
                      className="bg-red-100 rounded px-3 py-2 text-sm font-medium text-red-700 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: '🔐', label: 'SOC 2 Type II' },
            { icon: '🌍', label: 'GDPR Compliant' },
            { icon: '🔒', label: 'OAuth Only' },
            { icon: '✅', label: 'No Email Storage' },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium text-sm text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
