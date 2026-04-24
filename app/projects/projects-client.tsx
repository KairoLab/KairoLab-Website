'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, ArrowLeft, Users, Code, Building2 } from 'lucide-react'
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
import { projects, getMembersByProjectId, type Project, type TeamMember } from '@/lib/data'

export default function ProjectsClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Handle deep linking to specific project
  useEffect(() => {
    const projectId = searchParams.get('project')
    if (projectId) {
      const project = projects.find((p) => p.id === projectId)
      if (project) {
        setSelectedProject(project)
        setModalOpen(true)
      }
    }
  }, [searchParams])

  // Get all unique tech stacks
  const allTechStacks = useMemo(() => {
    const techSet = new Set<string>()
    projects.forEach((project) => {
      project.techStack.forEach((tech) => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.some((tech) => project.techStack.includes(tech))

      return matchesSearch && matchesTech
    })
  }, [searchQuery, selectedTech])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  const projectMembers = selectedProject
    ? getMembersByProjectId(selectedProject.id)
    : []

  const handleModalClose = (open: boolean) => {
    setModalOpen(open)
    if (!open) {
      setSelectedProject(null)
      // Clear the URL parameter
      router.replace('/projects', { scroll: false })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/kairo.png"
                alt="KairoLab Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold">
              <span className="text-gold">KAIRO</span>
              <span className="text-foreground">LAB</span>
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Our <span className="text-gold">Projects</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Explore our innovative solutions and ongoing developments
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, description, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-border/50 bg-card pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-border/50 bg-card">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Tech
                {selectedTech.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-gold/20 text-gold">
                    {selectedTech.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {allTechStacks.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTech.includes(tech)}
                  onCheckedChange={() => toggleTech(tech)}
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Active Filters */}
        {selectedTech.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="cursor-pointer bg-gold/20 text-gold hover:bg-gold/30"
                onClick={() => toggleTech(tech)}
              >
                {tech} &times;
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTech([])}
              className="h-6 text-xs text-muted-foreground"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-6 text-left transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
            >
              {/* Development Badge */}
              <Badge
                variant="outline"
                className="absolute right-4 top-4 border-gold/50 bg-gold/10 text-gold"
              >
                In Development
              </Badge>

              {/* Logo */}
              <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-lg bg-white/5 p-2">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-gold">
                {project.name}
              </h3>
              <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted/50 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge variant="secondary" className="bg-muted/50 text-xs">
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>

              {/* Partnership Badge */}
              {project.partnership && (
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Building2 className="h-3 w-3" />
                  <span>{project.partnership}</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="text-lg font-medium text-foreground">No projects found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>

      {/* Project Modal */}
      <Dialog open={modalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-card sm:max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white/5 p-2">
                    <Image
                      src={selectedProject.logo}
                      alt={`${selectedProject.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl text-foreground">
                      {selectedProject.name}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Details about the {selectedProject.name} project
                    </DialogDescription>
                    <Badge
                      variant="outline"
                      className="mt-1 border-gold/50 bg-gold/10 text-gold"
                    >
                      In Development
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Partnership */}
                {selectedProject.partnership && (
                  <div className="flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2 text-sm text-gold">
                    <Building2 className="h-4 w-4" />
                    <span>Partnership: {selectedProject.partnership}</span>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    About
                  </h4>
                  <p className="text-foreground/90">{selectedProject.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    <Code className="h-4 w-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Team Members
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {projectMembers.map((member) => (
                      <button
                        key={member.id}
                        onClick={() => {
                          setModalOpen(false)
                          router.push(`/team?member=${member.id}`)
                        }}
                        className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 text-left transition-all hover:border-gold/50"
                      >
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border/50 bg-muted">
                          <Image
                            src={member.avatar}
                            alt={`Foto de ${member.name}`}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {member.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
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
