import { testimonials } from "@/data/testimonials"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <p className="italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
