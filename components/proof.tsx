'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { AnimatedCounter } from './animated-counter';

const avatarImages = [
  { name: 'Sarah', color: 'bg-purple-400', initials: 'SC' },
  { name: 'Michael', color: 'bg-blue-400', initials: 'MR' },
  { name: 'Emma', color: 'bg-pink-400', initials: 'ET' },
];

export default function Proof() {
  const testimonials = [
    {
      quote:
        'Ishiro saved us 20+ hours per month on expense categorization. The accuracy is unbelievable.',
      author: 'Sarah Chen',
      role: 'CFO, Tech Startup',
      stars: 5,
      avatar: { name: 'Sarah', color: 'bg-purple-400', initials: 'SC' },
    },
    {
      quote:
        "Finally, a solution that doesn't treat my financial data like it's their asset. Privacy-first is the way.",
      author: 'Michael Rodriguez',
      role: 'Freelance Consultant',
      stars: 5,
      avatar: { name: 'Michael', color: 'bg-blue-400', initials: 'MR' },
    },
    {
      quote:
        'Our team went from dreading expense reports to actually getting insights we can act on.',
      author: 'Emma Thompson',
      role: 'Finance Manager, SaaS Company',
      stars: 5,
      avatar: { name: 'Emma', color: 'bg-pink-400', initials: 'ET' },
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            variants={fadeInUp}
          >
            Loved by Finance Professionals
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            variants={fadeInUp}
          >
            See what early users are saying about Ishiro.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-background border border-border hover:border-secondary/50 transition-all hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star size={18} className="fill-secondary text-secondary" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author with Avatar */}
              <motion.div
                className="border-t border-border pt-4 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-full ₦{testimonial.avatar.color} flex items-center justify-center text-white font-bold text-sm`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {testimonial.avatar.initials}
                </motion.div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with Animated Counters */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-border"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="text-center py-8"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold text-secondary mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                to={99.2}
                duration={2.5}
                suffix="%"
                className="text-4xl md:text-5xl font-bold"
              />
            </motion.p>
            <p className="text-muted-foreground">Categorization Accuracy</p>
          </motion.div>
          <motion.div
            className="text-center py-8"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold text-secondary mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                to={50000}
                duration={2.5}
                suffix="+"
                className="text-4xl md:text-5xl font-bold"
              />
            </motion.p>
            <p className="text-muted-foreground">Transactions Analyzed</p>
          </motion.div>
          <motion.div
            className="text-center py-8"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold text-secondary mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                to={4.9}
                duration={2.5}
                suffix="/5"
                className="text-4xl md:text-5xl font-bold"
              />
            </motion.p>
            <p className="text-muted-foreground">Average Rating</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
