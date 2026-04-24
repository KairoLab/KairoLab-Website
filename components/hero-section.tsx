'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Background gradient accent */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold/5 to-transparent" />
      
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="relative h-32 w-32 md:h-40 md:w-40">
          <Image
            src="/kairo.png"
            alt="KairoLab Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-gold">KAIRO</span>
          <span className="text-foreground/90">LAB</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl lg:text-2xl">
          Technology & Impact Studio
        </p>

        {/* Tagline */}
        <p className="max-w-3xl text-pretty text-base text-foreground/70 md:text-lg">
          Transforming complex ideas into sustainable digital solutions. We bridge innovation with impact to create technology that matters.
        </p>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProjects}
          className="mt-8 flex animate-bounce flex-col items-center gap-2 text-gold/70 transition-colors hover:text-gold"
          aria-label="Scroll to projects"
        >
          <span className="text-sm uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
