export type Project = {
  title: string
  description: string
  href?: string
  image?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Skiper-UI-Project",
    description: "A modern, responsive UI project built with Next.js and shadcn/ui.",
    href: "https://skiper-ui-project-rosy.vercel.app/",
    image: "https://res.cloudinary.com/dgxwp0k8w/image/upload/v1755493709/Screenshot_From_2025-08-18_10-37-27_ihvtml.png",
    tags: ["Next.js", "shadcn/ui", "Tailwind", "Responsive Design"]
  },
  {
    title: "E‑commerce Store",
    description: "A Job Portal built with Next.js, Tailwind CSS, and MongoDB. It features user authentication, job listings and allows users to apply for jobs.",
    href: "https://github.com/rahul-rathee7/Job-Portal.git",
    image: "https://res.cloudinary.com/dgxwp0k8w/image/upload/v1755502090/Screenshot_From_2025-08-18_12-55-52_jinrte.png",
    tags: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "Portfolio vCard",
    description: "This site — clean, fast, animated and responsive.",
    href: "#",
    image: "https://res.cloudinary.com/dgxwp0k8w/image/upload/v1755491838/WhatsApp_Image_2025-08-18_at_10.01.54_AM_1_xpksiq.jpg",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  }
]
