'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { InDevelopmentSection } from '@/components/in-development-section'
import { Footer } from '@/components/footer'
import { projects, teamMembers } from '@/lib/data'

export default function Home() {
  // Calculate partnership count dynamically
  const partnershipCount = projects.filter((p) => p.partnership).length
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Projects Preview Section */}
      <section id="projects" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our <span className="text-gold">Projects</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                Innovative solutions that drive impact and create value
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="group border-gold/50 text-gold hover:bg-gold/10">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Projects Grid Preview */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.id}
                href={`/projects?project=${project.id}`}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
              >
                {/* Development Badge */}
                <Badge
                  variant="outline"
                  className="absolute right-4 top-4 border-gold/50 bg-gold/10 text-[10px] text-gold"
                >
                  In Dev
                </Badge>

                {/* Logo */}
                <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-lg bg-white/5 p-2">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
                  {project.name}
                </h3>
                <p className="mb-3 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Partnership Badge - only show if project has partnership */}
                {project.partnership && (
                  <div className="flex items-center gap-1.5 text-xs text-gold/80">
                    <Building2 className="h-3 w-3" />
                    <span className="line-clamp-1">Partnership</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section id="team" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our <span className="text-gold">Team</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                The talented people behind our innovative solutions
              </p>
            </div>
            <Link href="/team">
              <Button variant="outline" className="group border-gold/50 text-gold hover:bg-gold/10">
                View All Members
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Team Grid Preview */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.slice(0, 5).map((member) => (
              <Link
                key={member.id}
                href={`/team?member=${member.id}`}
                className="group flex flex-col items-center overflow-hidden rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
              >
                {/* Avatar */}
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full border border-border/50 bg-muted">
                  <Image
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-1 text-base font-semibold text-foreground transition-colors group-hover:text-gold">
                  {member.name}
                </h3>
                <p className="text-xs text-gold/80">{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 rounded-2xl border border-border/50 bg-card/50 p-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">{projects.length}</div>
              <div className="mt-2 text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">{teamMembers.length}</div>
              <div className="mt-2 text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">2026</div>
              <div className="mt-2 text-sm text-muted-foreground">Founded</div>
            </div>
            {partnershipCount > 0 && (
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">{partnershipCount}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {partnershipCount === 1 ? 'Partnership' : 'Partnerships'}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <InDevelopmentSection />
      <Footer />
    </main>
  )
}
