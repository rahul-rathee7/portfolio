import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm flex flex-col md:flex-row gap-2 items-center justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:underline underline-offset-4" href={site.links.github} target="_blank">GitHub</a>
          <a className="hover:underline underline-offset-4" href={site.links.linkedin} target="_blank">LinkedIn</a>
          <a className="hover:underline underline-offset-4" href={site.links.twitter} target="_blank">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
