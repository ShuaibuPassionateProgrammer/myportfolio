import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    tags: ['React', 'Firebase', 'TypeScript'],
  },
  // Add more projects...
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>
      </div>
      <div className="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="h-full transition-all hover:scale-[1.02]">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}