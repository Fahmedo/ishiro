# Ishiro - Intelligent Expense Tracking

Ishiro is a bank-connected expense tracking platform that automatically categorizes transactions, reconciles expenses, and provides real-time financial insights. This repository contains the premium landing page and early access signup experience for Ishiro.

## Features

- **Intelligent Automation**: Automatically categorizes 100% of transactions with 99.2% accuracy
- **Bank-Connected**: Secure, bank-level 256-bit encryption for all connections
- **Privacy-First**: Read-only Gmail access for receipt tracking - we never store your email data
- **Real-Time Insights**: Monitor spending trends and get actionable financial analytics
- **Multi-Step Waitlist Form**: Optimized 4-step signup flow for early access
- **Premium Design**: Modern fintech UI with smooth animations and interactions
- **Mobile Optimized**: Fully responsive design for all device sizes
- **Nigeria-Focused**: Built specifically for Nigerian businesses and freelancers

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Charts**: [Recharts](https://recharts.org)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript

## Project Structure

```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with branding
└── globals.css           # Theme colors and typography

components/
├── header.tsx            # Sticky navigation header
├── hero.tsx              # Hero section with animated dashboard
├── mini-dashboard.tsx    # Interactive dashboard mockup
├── problem.tsx           # Problem statement section
├── how-it-works.tsx      # 3-step process flow
├── features.tsx          # Feature highlights
├── dashboard.tsx         # Full dashboard preview
├── privacy.tsx           # Privacy & security section
├── gmail-trust.tsx       # Gmail security & transparency
├── waitlist.tsx          # Waitlist form wrapper
├── waitlist-form.tsx     # Multi-step signup form (4 steps)
├── proof.tsx             # Social proof & testimonials with avatars
├── faq.tsx               # FAQ accordion section
├── final-cta.tsx         # Final call-to-action
├── footer.tsx            # Footer with links
├── animated-counter.tsx  # Animated number counter
└── ui/                   # shadcn/ui components

lib/
├── animations.ts         # Reusable Framer Motion variants
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone <repo-url>
cd ishiro
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page auto-updates as you edit `app/page.tsx`.

## Waitlist Form

The waitlist form is a 4-step multi-step experience:

**Step 1 - Basic Information**
- Full Name
- Email Address

**Step 2 - Your Setup**
- Country (Nigeria-focused)
- User Type (Individual/Freelancer, Small Business, Enterprise)

**Step 3 - Your Challenges**
- Biggest expense tracking challenge

**Step 4 - Preferences**
- Gmail receipt tracking interest
- Premium features interest

Form data is persisted to localStorage and validated before submission.

## Key Components

### Hero Section
Animated hero with compelling copy, value propositions, and an interactive mini-dashboard preview showing real-time spending analytics.

### Mini Dashboard
Interactive preview featuring:
- Animated monthly spend counter
- Spending trends bar chart
- Category breakdown donut chart
- Floating "Real-time synced" badge

### Gmail Trust Section
Dedicated section explaining read-only Gmail OAuth flow with:
- Step-by-step security explanation
- Data flow diagram showing what we extract vs. never store
- SOC 2 Type II and compliance badges

### Social Proof
Testimonial cards with animated avatars and counters showing:
- 99.2% categorization accuracy
- 50K+ transactions analyzed
- 4.9/5 average rating

### Animations
All sections feature smooth entrance animations, hover effects, and interactive elements powered by Framer Motion for a premium feel.

## Design System

### Colors
- **Primary**: Navy (#0F1F40)
- **Secondary**: Green (#4FB63D)
- **Background**: Off-white (#F8FAF7)
- **Border**: Light gray (#E8EBE7)

### Typography
- **Font Family**: Geist (sans-serif)
- **Headings**: Bold, up to 7xl on hero
- **Body**: Regular, readable line-height (1.4-1.6)

## Environment Variables

No environment variables required for the landing page. The form uses localStorage for data persistence.

## Deployment

This project is built with [Vercel](https://vercel.com) deployment in mind:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on push

```bash
pnpm build
```

## Development with v0

This repository is linked to a [v0](https://v0.app) project for visual development:

[Continue working on v0 →](https://v0.app/chat/projects/prj_uQPk542IKJT28kX5YshaJfcj0Dww)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [shadcn/ui Components](https://ui.shadcn.com)

## License

MIT
