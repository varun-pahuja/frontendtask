'use client'

import Hyperspeed from '@/components/Hyperspeed'
import { hyperspeedPresets } from '@/components/HyperSpeedPresets'

const heroHyperspeedOptions = {
  ...hyperspeedPresets.one,
  distortion: 'turbulentDistortion',
  length: 420,
  lanesPerRoad: 4,
  speedUp: 2.4,
  carLightsFade: 0.45,
  colors: {
    ...hyperspeedPresets.one.colors,
    roadColor: 0x05070b,
    islandColor: 0x08111a,
    background: 0x010204,
    shoulderLines: 0x1b2733,
    brokenLines: 0x1b2733,
    leftCars: [0x00e5ff, 0x4fd8ff, 0x73f6ff],
    rightCars: [0x7ed0ff, 0x1c7ec2, 0x105fa8],
    sticks: 0x00e5ff,
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={heroHyperspeedOptions} />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />

      {/* Main Content - Centered */}
      <div className="relative z-20 text-center max-w-3xl px-4 animate-fade-in">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-wider leading-tight uppercase">
          <span className="block text-white mb-4">Research Quest</span>
          <span className="block heading-glow">Hackathon 2026</span>
        </h1>

        {/* Divider Line */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-12 font-light">
          Build real-world AI solutions, team up with top innovators, and ship your ideas into impact.
        </p>

        {/* CTA Button */}
        <button className="btn-cyber-primary">
          JOIN THE QUEST
        </button>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-400 text-sm">
          <span>MEET OUR PARTNERS</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Subtle Grid Overlay Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-20" />
    </section>
  )
}
