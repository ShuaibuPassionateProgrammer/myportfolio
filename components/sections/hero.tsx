import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Full Stack Developer specializing in modern web technologies. I build
          fast, accessible, and responsive web applications.
        </p>
        <div className="flex gap-4">
          <Button size="lg">View Projects</Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
        <div className="flex gap-4 pt-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}