'use client'

import Image from 'next/image'
import { Code2, Lightbulb, Search, Cpu } from 'lucide-react'

const specialties = [
  { icon: Search, label: 'R&D' },
  { icon: Code2, label: 'Software Development' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Cpu, label: 'Technology Solutions' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/20 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/kairo.png"
                  alt="KairoLab Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-gold">KAIRO</span>
                  <span className="text-foreground">LAB</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Technology & Impact Studio
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Transforming complex ideas into sustainable digital solutions since 2026.
            </p>
          </div>

          {/* About Column */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">
              About Us
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">Founded:</span> 2026
              </li>
              <li>
                <span className="text-foreground">Sector:</span> Information Technology
              </li>
              <li>
                <span className="text-foreground">Focus:</span> Impact-driven Solutions
              </li>
              <li>
                <span className="text-foreground">Location:</span> Brazil
              </li>
            </ul>
          </div>

          {/* Specialties Column */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">
              Core Specialties
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {specialties.map((specialty) => (
                <div
                  key={specialty.label}
                  className="flex items-center gap-2 rounded-lg border border-border/30 bg-card/30 px-3 py-2"
                >
                  <specialty.icon className="h-4 w-4 text-gold" />
                  <span className="text-xs text-foreground">{specialty.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 KairoLab. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span>Innovation with Impact</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
