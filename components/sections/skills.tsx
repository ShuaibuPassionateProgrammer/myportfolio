import { SectionHeader } from '@/components/shared/section-header'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container py-8 md:py-12 lg:py-24">
      <SectionHeader
        title="My Skills"
        description="Technologies I work with and my proficiency level"
      />
      
      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="space-y-4">
            <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
            <div className="space-y-3">
              {skillCategory.items.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}