'use client'

import FlowingMenu from '@/components/FlowingMenu'

export default function Themes() {
  const badgeImage = (title: string, color: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="180" viewBox="0 0 480 180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#04141f"/><stop offset="100%" stop-color="${color}"/></linearGradient></defs><rect width="480" height="180" rx="26" fill="url(#g)"/><rect x="12" y="12" width="456" height="156" rx="20" fill="none" stroke="rgba(0,229,255,.55)" stroke-width="2"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="rgba(182,247,255,0.95)" letter-spacing="2">${title}</text></svg>`
    )}`

  const themeItems = [
    {
      link: '#contact',
      text: 'Healthcare + Biotech',
      image: badgeImage('HEALTHCARE', '#0f766e'),
    },
    {
      link: '#contact',
      text: 'Climate + Sustainability',
      image: badgeImage('CLIMATE', '#14532d'),
    },
    {
      link: '#contact',
      text: 'AI + Machine Learning',
      image: badgeImage('AI + ML', '#0e7490'),
    },
    {
      link: '#contact',
      text: 'Fintech + Blockchain',
      image: badgeImage('FINTECH', '#312e81'),
    },
  ]

  return (
    <section id="themes" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container-max">
        <div className="space-y-12 relative z-10">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2 font-display uppercase tracking-wide">Hackathon Themes</h2>
            <p className="text-body max-w-2xl">
              Choose your track and tackle real-world challenges in your area of expertise.
            </p>
          </div>

          {/* Flowing Menu */}
          <div className="h-[26rem] md:h-[34rem] rounded-2xl overflow-hidden border border-cyan-400/25 shadow-[0_0_30px_rgba(0,229,255,0.18)]">
            <FlowingMenu
              items={themeItems}
              speed={18}
              textColor="rgba(204, 246, 255, 0.95)"
              bgColor="#02070d"
              marqueeBgColor="#00e5ff"
              marqueeTextColor="#041019"
              borderColor="rgba(0,229,255,0.30)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
