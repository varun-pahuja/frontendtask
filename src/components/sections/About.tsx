'use client'

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
    <section id="about" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2">What Can Get?</h2>
            <p className="text-body max-w-2xl">
              Join a vibrant community of researchers and innovators. Gain experience, build your network, and make an impact.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-primary rounded-xl border border-secondary hover:border-accent-coral transition-all duration-300 hover:shadow-lg hover:shadow-accent-coral/20 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
