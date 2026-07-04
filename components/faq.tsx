'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Ishiro keep my data secure?',
      answer:
        'Ishiro uses bank-level AES-256 encryption. We never store your transaction data—we analyze it in real-time and discard it. Your financial information only ever exists between you and your bank.',
    },
    {
      question: 'Which banks and financial institutions are supported?',
      answer:
        'Ishiro connects to 11,000+ financial institutions through Plaid, covering all major US banks, UK banks, and most European financial institutions. Support for additional regions is coming soon.',
    },
    {
      question: 'Can I use Ishiro for my business?',
      answer:
        'Yes! Ishiro works for individuals, freelancers, and businesses. Our team features make it easy to share reports and collaborate with accountants or team members.',
    },
    {
      question: 'What happens if I disconnect my bank account?',
      answer:
        'When you disconnect, Ishiro immediately stops accessing your bank data. All transaction data is instantly purged from our systems. You remain in control at all times.',
    },
    {
      question: 'Is there a free tier?',
      answer:
        'Yes, early access users get lifetime access to our base tier. When we launch, we&apos;ll offer a free tier with essential features and premium plans for advanced analytics and team features.',
    },
    {
      question: 'Can I export my expense data?',
      answer:
        'Absolutely. You can export your categorized expenses in multiple formats including CSV, PDF reports, or direct integration with accounting software like QuickBooks and Xero.',
    },
    {
      question: 'Is my data GDPR compliant?',
      answer:
        'Yes. Ishiro is fully GDPR compliant and SOC 2 Type II certified. You have complete control over your data and can request deletion anytime.',
    },
    {
      question: 'How accurate is the AI categorization?',
      answer:
        'Our machine learning model achieves 99.2% accuracy in categorizing transactions. You can always manually adjust categories, and the AI learns from your corrections.',
    },
  ];

  return (
    <section id="faq" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Got questions? We&apos;ve got answers. Can&apos;t find what
            you&apos;re looking for? Reach out to hello@ishiro.app
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-start justify-between hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-8 rounded-xl bg-secondary/10 border border-secondary/20 text-center">
          <p className="text-foreground font-semibold mb-2">
            Still have questions?
          </p>
          <p className="text-muted-foreground mb-4">
            Our team is happy to help. Contact us anytime.
          </p>
          <a
            href="mailto:hello@ishiro.app"
            className="inline-block px-6 py-2 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
