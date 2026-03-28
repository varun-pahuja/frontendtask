'use client'

import ScrollVelocity from '@/components/ScrollVelocity'

const partnerRows = [
  'GOOGLE CLOUD | MICROSOFT | OPENAI | NVIDIA | GITHUB | ANTHROPIC',
  'FIGMA | NOTION | VERCEL | CLOUDFLARE | SUPABASE | HUGGING FACE',
]

export default function PartnersVelocity() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-y border-cyan-400/20 bg-black/90 py-10 md:py-14"
      aria-label="Partner marquee"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 mb-6 text-center px-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative z-10">
        <ScrollVelocity
          texts={partnerRows}
          velocity={42}
          damping={45}
          stiffness={300}
          numCopies={5}
          className="partner-chip"
          parallaxClassName="partner-parallax"
          scrollerClassName="partner-scroller"
          velocityMapping={{ input: [0, 1200], output: [0, 4.5] }}
        />
      </div>
    </section>
  )
}
