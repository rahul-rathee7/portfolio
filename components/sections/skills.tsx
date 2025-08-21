import { skills } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="rounded-xl border px-3 py-1 text-sm bg-secondary/50 hover:bg-gray-200 bg-secondary/80 bg-secondary/80 dark:hover:bg-gray-600">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
