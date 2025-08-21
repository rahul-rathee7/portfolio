import { services } from "@/data/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as Icons from "lucide-react"

export function Services() {
  return (
    <section id="services" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = (Icons as any)[s.icon] ?? Icons.Wand2
          return (
            <Card key={s.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex-row items-center gap-3">
                <Icon className="h-6 w-6" />
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {s.description}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
