export interface TeamMember {
  id: string
  name: string
  username: string
  role: string
  avatar: string
  bio: string
  gender?: string
  pronouns?: string
  specialties: string[]
  socialLinks: {
    linkedin?: string
    github?: string
  }
  projectIds: string[]
}

export interface ProjectTechGroup {
  category: string
  items: string[]
}

export interface Project {
  id: string
  name: string
  logo: string
  description: string
  fullDescription: string
  techStack: string[]
  techGroups?: ProjectTechGroup[]
  teamMemberIds: string[]
  partnership?: string
  status: 'active' | 'development'
}

export const teamMembers: TeamMember[] = [
  {
    id: 'andre-felipe',
    name: 'André Felipe de Barros A. N.',
    username: 'andrefelipebarros',
    role: 'Lead Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/andrefelipebarros.png',
    bio: 'Developer involved in the evolution of multiple KairoLab partner projects, collaborating on architecture, product direction and software delivery.',
    specialties: ['Full Stack', 'Product Development', 'Architecture'],
    socialLinks: {
      github: 'https://github.com/andrefelipebarros',
    },
    projectIds: ['animes-cegal', 'fynco', 'less', 'vavahelper'],
  },
  {
    id: 'gabriel-alves',
    name: 'Gabriel Alves Varella da Costa',
    username: 'gavar-dev',
    role: 'Full Stack Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/gavar-dev.png',
    bio: 'Computer Science graduate focused on building useful software solutions, collaborating on frontend, backend and product improvements across different projects.',
    specialties: ['Full Stack', 'Java', 'TypeScript'],
    socialLinks: {
      github: 'https://github.com/gavar-dev',
      linkedin: 'https://www.linkedin.com/in/gabriel-alves-varella-da-costa-07883a235/',
    },
    projectIds: ['animes-cegal', 'fynco', 'vavahelper'],
  },
  {
    id: 'juliana-nadruz',
    name: 'Juliana Nadruz',
    username: 'Nadruz',
    role: 'Data Scientist & Full Stack Developer',
    gender: 'Female',
    pronouns: 'she/her',
    avatar: 'https://github.com/Nadruz.png',
    bio: 'Data scientist and developer contributing to backend and frontend development, combining data analysis, implementation and product collaboration across KairoLab initiatives.',
    specialties: ['Data Science', 'Backend', 'Frontend'],
    socialLinks: {
      github: 'https://github.com/Nadruz',
    },
    projectIds: ['animes-cegal', 'vavahelper', 'fynco'],
  },
  {
    id: 'star-alice',
    name: 'Alice Sofia',
    username: 'star-alice',
    role: 'Developer',
    gender: 'Trans woman',
    pronouns: 'she/her',
    avatar: 'https://github.com/star-alice.png',
    bio: 'Developer collaborating on accessibility and interface-related initiatives inside the project ecosystem.',
    specialties: ['Frontend', 'Accessibility', 'Collaboration'],
    socialLinks: {
      github: 'https://github.com/star-alice',
    },
    projectIds: ['animes-cegal', 'vavahelper', 'fynco'],
  },
  {
    id: 'igao',
    name: 'Igor de Araujo Cunha C.',
    username: 'igoraraujocunha',
    role: 'Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/igoraraujocunha.png',
    bio: 'Developer working across collaborative web projects with a focus on implementation and team delivery.',
    specialties: ['Web Development', 'Team Collaboration'],
    socialLinks: {
      github: 'https://github.com/igoraraujocunha',
    },
    projectIds: ['fynco', 'vavahelper', 'animes-cegal'],
  },
  {
    id: 'matheus-rocha',
    name: 'Matheus Rocha',
    username: 'matheus-rmds',
    role: 'Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/matheus-rmds.png',
    bio: 'Developer participating in the LESS project and supporting its digital presence and implementation.',
    specialties: ['Fullstack Development', 'Maintenance Engineer', 'Product Support'],
    socialLinks: {
      github: 'https://github.com/matheus-rmds',
      linkedin: 'https://www.linkedin.com/in/matheus-rocha-martins-de-souza/',
    },
    projectIds: ['less'],
  },
  {
    id: 'matheus-nunes',
    name: 'Matheus Nunes',
    username: 'Matheusnuns',
    role: 'Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/Matheusnuns.png',
    bio: 'Developer contributing to the Fynco project and supporting feature implementation within the product team.',
    specialties: ['Frontend', 'Product Development'],
    socialLinks: {
      github: 'https://github.com/Matheusnuns',
    },
    projectIds: ['fynco'],
  },
  {
    id: 'rafael-sartorio',
    name: 'Rafael Sartório',
    username: 'RafaelSartorio',
    role: 'Developer',
    gender: 'Male',
    pronouns: 'he/him',
    avatar: 'https://github.com/RafaelSartorio.png',
    bio: 'Developer collaborating on the Vava Helper ecosystem, contributing to feature delivery and project execution.',
    specialties: ['Development', 'Team Delivery'],
    socialLinks: {
      github: 'https://github.com/RafaelSartorio',
    },
    projectIds: ['vavahelper'],
  },
  {
    id: 'luninha',
    name: 'Luna França',
    username: 'luninha4',
    role: 'Design & Marketing',
    avatar: 'https://github.com/luninha4.png',
    bio: 'Design and marketing member at KairoLab, contributing to visual identity, communication, content and brand positioning across the project ecosystem.',
    specialties: ['Design', 'Marketing', 'Branding'],
    socialLinks: {
      github: 'https://github.com/luninha4',
    },
    projectIds: ['vavahelper'],
  },
  {
    id: 'rafael-gomes',
    name: 'Rafael Gomes de Almeida',
    username: 'rRafaelGomes',
    role: 'Data Scientist',
    avatar: 'https://github.com/rRafaelGomes.png',
    bio: 'Data scientist collaborating on KairoLab projects, supporting data analysis, insights and technical decision-making for product development.',
    specialties: ['Data Science', 'Data Analysis', 'Insights'],
    socialLinks: {
      github: 'https://github.com/rRafaelGomes',
    },
    projectIds: ['vavahelper'],
  },
]

export const projects: Project[] = [
  {
    id: 'animes-cegal',
    name: 'Animes Cegal',
    logo: '/cegal.png',
    description: 'AnimeVision accessibility initiative focused on anime consumption with accessibility resources.',
    fullDescription:
      'Animes Cegal is part of the AnimeVision initiative, a project focused on accessible anime experiences. The stack combines a modern Angular frontend, a robust ASP.NET Core API, Python support services and PostgreSQL to help deliver an accessible and scalable platform.',
    techStack: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core 8', 'Python', 'PostgreSQL', 'pnpm'],
    techGroups: [
      { category: 'Frontend', items: ['Angular', 'TypeScript'] },
      { category: 'Backend / API', items: ['C#', 'ASP.NET Core 8', 'Python'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Tooling', items: ['pnpm'] },
    ],
    teamMemberIds: ['andre-felipe', 'juliana-nadruz', 'gabriel-alves', 'star-alice'],
    status: 'active',
  },
  {
    id: 'fynco',
    name: 'Fynco',
    logo: '/fynco.png',
    description: 'Modern product experience built with Next.js and integrated with a Spring Boot REST API.',
    fullDescription:
      'Fynco is built with a modern TypeScript-first frontend and a backend integrated through a RESTful API. The project emphasizes performance, clean UI, scalability and efficient team workflows.',
    techStack: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS v4', 'Lucide React', 'Sonner', 'Axios', 'Spring Boot', 'pnpm'],
    techGroups: [
      { category: 'Frontend', items: ['Next.js 16', 'React', 'TypeScript'] },
      { category: 'Styling & UI', items: ['Tailwind CSS v4', 'Lucide React', 'Sonner'] },
      { category: 'API Integration', items: ['Axios', 'Spring Boot REST API'] },
      { category: 'Tooling', items: ['pnpm'] },
    ],
    teamMemberIds: ['andre-felipe', 'gabriel-alves', 'igao', 'matheus-nunes'],
    status: 'active',
  },
  {
    id: 'less',
    name: 'LESS',
    logo: '/less.png',
    description: 'Digital support project for the Laboratório de Estudos em Saúde e Sociedade (UFRJ).',
    fullDescription:
      'LESS is a project connected to UFRJ and the Laboratório de Estudos em Saúde e Sociedade. Its purpose is to support the lab with a digital presence and product development aligned with academic and social impact goals.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'UFRJ Partnership'],
    techGroups: [
      { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript'] },
      { category: 'Styling & UI', items: ['Tailwind CSS'] },
      { category: 'Institutional Context', items: ['UFRJ Partnership', 'Academic support'] },
    ],
    teamMemberIds: ['andre-felipe', 'matheus-rocha'],
    partnership: 'UFRJ',
    status: 'active',
  },
  {
    id: 'vavahelper',
    name: 'Vava Helper',
    logo: '/vavahelper.png',
    description: 'Official website and backend ecosystem for the Vava Helper project.',
    fullDescription:
      'Vava Helper combines a website built with Next.js and TypeScript with a backend centered on Java and Spring technologies. The project is organized for collaborative development and structured delivery.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Java 17', 'Spring Boot 3', 'Spring Security', 'JPA', 'PostgreSQL', 'JWT', 'Maven', 'pnpm'],
    techGroups: [
      { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend / API', items: ['Java 17', 'Spring Boot 3', 'JPA'] },
      { category: 'Security & Auth', items: ['Spring Security', 'JWT'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Tooling', items: ['Maven', 'pnpm'] },
    ],
    teamMemberIds: ['andre-felipe', 'juliana-nadruz', 'gabriel-alves', 'igao', 'rafael-sartorio', 'luninha', 'rafael-gomes', 'star-alice'],
    status: 'active',
  },
]

export function getProjectsByMemberId(memberId: string): Project[] {
  return projects.filter((project) => project.teamMemberIds.includes(memberId))
}

export function getMembersByProjectId(projectId: string): TeamMember[] {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return []
  return teamMembers.filter((member) => project.teamMemberIds.includes(member.id))
}

export function getMemberById(memberId: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === memberId)
}

export function getProjectById(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId)
}
