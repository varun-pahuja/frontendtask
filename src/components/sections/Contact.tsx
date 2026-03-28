'use client'

import { FormEvent, useState } from 'react'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ContactCard } from '@/components/ui/contact-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-max">
        <ContactCard
          className="border-cyan-400/35 bg-slate-950/90 text-cyan-50 shadow-[0_0_30px_rgba(0,229,255,0.12)]"
          formSectionClassName="border-cyan-400/25 bg-cyan-950/20"
          title="Get in touch"
          description="Have questions or want to learn more about Research Quest? Fill out the form and we will respond within one business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: 'Email',
              value: 'hello@researchquest.tech',
            },
            {
              icon: PhoneIcon,
              label: 'Phone',
              value: '+1 (555) 903-2048',
            },
            {
              icon: MapPinIcon,
              label: 'Address',
              value: 'Global Virtual Hackathon',
              className: 'md:col-span-2 lg:col-span-1',
            },
          ]}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px]"
                placeholder="How can we help you?"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  )
}
