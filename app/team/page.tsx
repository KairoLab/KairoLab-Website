'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, ArrowLeft, Briefcase, Linkedin, Github } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { teamMembers, projects, getProjectsByMemberId, type TeamMember } from '@/lib/data'

export default function TeamPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const memberId = searchParams.get('member')
    if (memberId) {
      const member = teamMembers.find((m) => m.id === memberId)
      if (member) {
        setSelectedMember(member)
        setModalOpen(true)
      }
    }
  }, [searchParams])

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        member.name.toLowerCase().includes(query) ||
        member.username.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.specialties.some((specialty) => specialty.toLowerCase().includes(query))

      const matchesProject =
        selectedProjects.length === 0 ||
        selectedProjects.some((projectId) => member.projectIds.includes(projectId))

      return matchesSearch && matchesProject
    })
  }, [searchQuery, selectedProjects])

  const memberProjects = selectedMember ? getProjectsByMemberId(selectedMember.id) : []

  const toggleProject = (projectId: string) => {
    setSelectedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId],
    )
  }

  const handleModalClose = (open: boolean) => {
    setModalOpen(open)
    if (!open) {
      setSelectedMember(null)
      router.replace('/team', { scroll: false })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/kairo.png" alt="KairoLab Logo" fill className="object-contain" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-gold">KAIRO</span>
              <span className="text-foreground">LAB</span>
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Current <span className="text-gold">Team</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Meet the current developers contributing to the active KairoLab projects.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, username, role or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-border/50 bg-card pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-border/50 bg-card">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Project
                {selectedProjects.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-gold/20 text-gold">
                    {selectedProjects.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {projects.map((project) => (
                <DropdownMenuCheckboxItem
                  key={project.id}
                  checked={selectedProjects.includes(project.id)}
                  onCheckedChange={() => toggleProject(project.id)}
                >
                  {project.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredMembers.length} of {teamMembers.length} members
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => {
                setSelectedMember(member)
                setModalOpen(true)
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-5 text-left transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border/50 bg-muted">
                  <Image
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-foreground transition-colors group-hover:text-gold">
                    {member.name}
                  </h3>
                  <p className="truncate text-sm text-muted-foreground">@{member.username}</p>
                  <p className="text-sm text-gold/80">{member.role}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {member.specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="bg-muted/50 text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                <Briefcase className="h-3 w-3" />
                <span>{member.projectIds.length} project(s)</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <Dialog open={modalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-card sm:max-w-2xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border/50 bg-muted">
                    <Image
                      src={selectedMember.avatar}
                      alt={`Foto de ${selectedMember.name}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <DialogTitle className="text-2xl text-foreground">
                      {selectedMember.name}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Profile and details for {selectedMember.name}
                    </DialogDescription>
                    <p className="mt-1 text-muted-foreground">@{selectedMember.username}</p>
                    <p className="text-gold">{selectedMember.role}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    About
                  </h4>
                  <p className="text-foreground/90">{selectedMember.bio}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                    <h4 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Details
                    </h4>
                    <div className="space-y-2 text-sm text-foreground/90">
                      <p>
                        <span className="text-muted-foreground">Projects:</span>{' '}
                        {selectedMember.projectIds.length}
                      </p>
                      {selectedMember.gender && (
                        <p>
                          <span className="text-muted-foreground">Gender:</span>{' '}
                          {selectedMember.gender}
                        </p>
                      )}
                      {selectedMember.pronouns && (
                        <p>
                          <span className="text-muted-foreground">Pronouns:</span>{' '}
                          {selectedMember.pronouns}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                    <h4 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="bg-muted/50">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Connect
                  </h4>
                  <div className="flex gap-3">
                    {selectedMember.socialLinks.linkedin && (
                      <a
                        href={selectedMember.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-gold/50 hover:text-gold"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {selectedMember.socialLinks.github && (
                      <a
                        href={selectedMember.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-gold/50 hover:text-gold"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    Projects
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {memberProjects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => {
                          setModalOpen(false)
                          router.push(`/projects?project=${project.id}`)
                        }}
                        className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 text-left transition-all hover:border-gold/50"
                      >
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-border/50 bg-white/5 p-1.5">
                          <Image src={project.logo} alt={project.name} fill className="object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{project.name}</p>
                          <p className="line-clamp-1 text-xs text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
