import { Suspense } from 'react'
import ProjectsClient from './projects-client'

function ProjectsClientLoading() {
  return (
    <div className="min-h-screen bg-background px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-muted-foreground">Loading projects...</p>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsClientLoading />}>
      <ProjectsClient />
    </Suspense>
  )
}
