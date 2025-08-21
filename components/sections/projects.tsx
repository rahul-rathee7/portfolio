import Image from "next/image"
import { projects } from "@/data/projects"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden hover:shadow-md transition-shadow">
            {p.image && (
              <div className="relative w-full h-56">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-xl border px-2 py-0.5 text-xs bg-secondary/50">{t}</span>
                ))}
              </div>
              {p.href && (
                <a href={p.href} className="text-sm underline underline-offset-4 mt-2 inline-block" target="_blank" rel="noreferrer">
                  Visit
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
