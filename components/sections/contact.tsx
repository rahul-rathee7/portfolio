"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus("loading")
    setError(null)
    const body = Object.fromEntries(formData.entries())
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Failed")
      setStatus("success")
    } catch (e: any) {
      setStatus("error")
      setError(e.message)
    }
  }

  return (
    <section id="contact" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <form action={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Your name" required minLength={2} />
        <Input name="email" type="email" placeholder="Your email" required />
        <div className="md:col-span-2">
          <Textarea name="message" placeholder="Your message" required minLength={10} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send message"}
          </Button>
          {status === "success" && <p className="text-sm text-green-600">Thanks! I&apos;ll get back to you soon.</p>}
          {status === "error" && <p className="text-sm text-red-600">{error}</p>}
        </div>
      </form>
    </section>
  )
}
