'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Themes', href: '#themes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'FAQs', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold gradient-text">
            Research Quest
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent-coral transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn-primary">
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-secondary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-accent-coral hover:bg-secondary rounded transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 btn-primary">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
