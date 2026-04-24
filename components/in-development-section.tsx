'use client'

import { FileQuestion, BookOpen, Video, Construction } from 'lucide-react'

const upcomingFeatures = [
  {
    icon: FileQuestion,
    title: 'FAQs',
    description: 'Comprehensive answers to common questions about our services and processes.',
  },
  {
    icon: BookOpen,
    title: 'Articles',
    description: 'In-depth technical articles and thought leadership from our team.',
  },
  {
    icon: Video,
    title: 'Videos',
    description: 'Tutorials, case studies, and behind-the-scenes content.',
  },
]

export function InDevelopmentSection() {
  return (
    <section id="resources" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Construction className="h-6 w-6 text-gold" />
            <span className="text-sm font-medium uppercase tracking-widest text-gold">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            In <span className="text-gold">Development</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re building more resources to help you understand our work
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/30 p-8 text-center transition-all duration-300 hover:border-gold/30 hover:bg-card/50"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/20">
                <feature.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>

              {/* Coming Soon Badge */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                  </span>
                  In Progress
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
