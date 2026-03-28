'use client'

import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'

export default function About() {
  const features = [
    {
      icon: '🎓',
      title: 'Mentors & Experts',
      description: 'Learn from industry leaders and domain experts',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Build teams and network with innovators',
    },
    {
      icon: '💰',
      title: 'Prize Pool',
      description: 'Compete for substantial rewards',
    },
    {
      icon: '🚀',
      title: 'Showcase Work',
      description: 'Display your projects to top companies',
    },
    {
      icon: '📊',
      title: 'Skills Building',
      description: 'Develop technical and soft skills',
    },
    {
      icon: '🌐',
      title: 'Job Opportunities',
      description: 'Direct hiring opportunities from partners',
    },
  ]

  return (
    <section id="about" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container-max">
        <div className="space-y-12 relative z-10">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2 font-display uppercase tracking-wide">
              What You Can Get
            </h2>
            <p className="text-body max-w-2xl">
              Join a vibrant community of researchers and innovators. Gain experience, build your network, and make an impact.
            </p>
          </div>

          {/* Scroll Stack */}
          <div className="h-[72vh] md:h-[78vh]">
            <ScrollStack
              className="about-stack"
              itemDistance={90}
              itemScale={0.03}
              itemStackDistance={28}
              stackPosition="18%"
              scaleEndPosition="8%"
              baseScale={0.86}
              rotationAmount={0.6}
              blurAmount={0.4}
              useWindowScroll={false}
            >
              {features.map((feature) => (
                <ScrollStackItem key={feature.title} itemClassName="about-stack-card">
                  <div className="about-stack-icon">{feature.icon}</div>
                  <h3 className="about-stack-title">{feature.title}</h3>
                  <p className="about-stack-description">{feature.description}</p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  )
}
