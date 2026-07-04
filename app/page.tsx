'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Problem from '@/components/problem';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import Dashboard from '@/components/dashboard';
import Privacy from '@/components/privacy';
import GmailTrust from '@/components/gmail-trust';
import Waitlist from '@/components/waitlist';
import Proof from '@/components/proof';
import FAQ from '@/components/faq';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Dashboard />
      <Privacy />
      <GmailTrust />
      <Waitlist />
      {/* <Proof /> */}
      {/* <FAQ /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
