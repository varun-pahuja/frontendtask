'use client'

import CybercoreBackground from '@/components/ui/cybercore-section-hero'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background Cybercore Animation */}
      <div className="absolute inset-0 z-0">
        <CybercoreBackground beamCount={100} />
      </div>

      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-40 px-4 md:px-8 pt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
            <span className="text-cyan-400 glow-text">CYBERCORE</span>
          </h2>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#protocols" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm tracking-wide">
              Protocols
            </a>
            <a href="#network" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm tracking-wide">
              Network
            </a>
            <a href="#developers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm tracking-wide">
              Developers
            </a>
            <a href="#connect" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm tracking-wide">
              Connect
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content - Centered */}
      <div
        className={`relative z-20 text-center max-w-3xl px-4 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wider leading-tight">
          <span className="block text-white mb-4">Enter the</span>
          <span className="block heading-glow">Grid</span>
        </h1>

        {/* Divider Line */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-12 font-light">
          Experience the next evolution of decentralized infrastructure, where data flows with unparalleled speed and security.
        </p>

        {/* CTA Button */}
        <button className="btn-cyber-primary">
          EXPLORE THE NETWORK
        </button>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-400 text-sm">
          <span>SCROLL TO DISCOVER</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Subtle Grid Overlay Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-10" />
    </section>
  )
}
