'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is a Research Quest Hackathon?',
      answer: 'Research Quest is a 48-hour innovation competition where researchers and developers tackle real-world challenges, build prototypes, and showcase their solutions to industry experts.',
    },
    {
      question: 'What are the eligibility requirements?',
      answer: 'Participants must be enrolled students or recent graduates. No experience level restrictions - beginners to experts welcome.',
    },
    {
      question: 'Can I form my own team?',
      answer: 'Yes! Teams can be 2-5 members. You can form a team before registering or find teammates during the team formation phase.',
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, chargers, and ideas. We provide wifi, meals, and mentors. All software is open-source and free.',
    },
    {
      question: 'Are there any costs?',
      answer: 'Participation is completely free! We cover meals, snacks, swag, and venue.',
    },
    {
      question: 'How are winners judged?',
      answer: 'Projects are evaluated on innovation, technical execution, impact, and presentation. Expert judges from partner companies will score submissions.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="space-y-12 max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-heading-2">Frequently Asked Questions</h2>
            <p className="text-body">
              Have questions? We've got answers. Can't find what you're looking for? Reach out to us directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-secondary rounded-xl overflow-hidden hover:border-accent-coral transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-left">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-accent-coral flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-primary/50 border-t border-secondary text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
