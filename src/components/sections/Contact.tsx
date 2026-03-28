'use client'

import { FormEvent, useState } from 'react'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-heading-2">Get In Touch</h2>
              <p className="text-body">
                Have questions or want to learn more about Research Quest? We'd love to hear from you. Reach out and let's build the future together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-secondary">
              <div className="flex gap-4">
                <div className="text-accent-coral text-2xl flex-shrink-0">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@researchquest.tech" className="text-gray-400 hover:text-accent-coral transition-colors">
                    hello@researchquest.tech
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent-coral text-2xl flex-shrink-0">📍</div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Virtual Event</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent-coral text-2xl flex-shrink-0">🔗</div>
                <div>
                  <p className="font-semibold">Follow Us</p>
                  <div className="flex gap-3 mt-2">
                    {['Twitter', 'LinkedIn', 'Discord'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-accent-coral transition-colors font-semibold text-sm"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary rounded-2xl p-8 border border-secondary/50">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:border-accent-coral focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:border-accent-coral focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:border-accent-coral focus:outline-none transition-colors resize-none h-32"
                placeholder="Your message..."
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
