import { Suspense } from 'react'
import TeamClient from './team-client'

function TeamClientLoading() {
  return (
    <div className="min-h-screen bg-background px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-muted-foreground">Loading team...</p>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <Suspense fallback={<TeamClientLoading />}>
      <TeamClient />
    </Suspense>
  )
}
