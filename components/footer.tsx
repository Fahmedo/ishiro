'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <Image
                  src={'/ishiro-dark.png'}
                  alt="ishiro logo"
                  width="100"
                  height="100"
                  className="object-center"
                />
              </div>
              <span className="text-xl font-bold">Ishiro</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Intelligent expense tracking built for professionals who value
              privacy.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  DPA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {year} Ishiro Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* <a
              href="mailto:hello@ishiro.app"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail size={16} />
              hello@ishiro.app
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
