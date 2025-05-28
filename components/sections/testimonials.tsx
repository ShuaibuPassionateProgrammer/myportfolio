import { SectionHeader } from '@/components/shared/section-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: '/avatars/sarah.jpg',
    content:
      'Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our project two weeks ahead of schedule. The code quality was exceptional and he was always willing to go the extra mile.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    image: '/avatars/michael.jpg',
    content:
      'John transformed our frontend architecture completely. His expertise in Next.js and performance optimization helped us achieve a 40% faster load time. Highly recommend for any complex frontend challenges.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead at CreativeStudio',
    image: '/avatars/emily.jpg',
    content:
      'As a designer, I appreciate developers who understand UI/UX principles. John not only implemented our designs perfectly but also suggested improvements that made the final product even better. A true collaborator.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container py-8 md:py-12 lg:py-24">
      <SectionHeader
        title="Client Testimonials"
        description="What people I've worked with say about me"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold leading-none tracking-tight">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 