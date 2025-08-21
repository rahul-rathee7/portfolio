"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import { projects } from "@/data/projects"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {site.name}
            <span className="block text-primary mt-2">{site.role}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-muted-foreground max-w-prose"
          >
            {site.heroTagline}
          </motion.p>
          <div className="mt-8 flex gap-3">
            <Button asChild><a href="#projects">View Work</a></Button>
            <Button variant="outline" asChild><a href="#contact">Contact Me</a></Button>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block rounded-2xl shadow-lg overflow-hidden dark:shadow-[5px_5px_10px_rgb(255,255,255)] shadow-[8px_8px_10px_rgba(0,0,0)]"
        >
          <Image
            src={`${projects[2].image}`}
            alt="Hero Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
