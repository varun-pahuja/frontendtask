'use client'

export default function Themes() {
  const themes = [
    {
      id: 1,
      title: 'Healthcare & Biotech',
      description: 'Innovative solutions in medical research and biotechnology',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Climate & Sustainability',
      description: 'Environmental research and green technology innovations',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI and machine learning applications',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      title: 'Fintech & Blockchain',
      description: 'Financial technology and blockchain innovations',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section id="themes" className="section-padding bg-primary">
      <div className="container-max">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2">Hackathon Themes</h2>
            <p className="text-body max-w-2xl">
              Choose your track and tackle real-world challenges in your area of expertise.
            </p>
          </div>

          {/* Theme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="group relative p-8 rounded-2xl border border-secondary bg-secondary/50 hover:bg-secondary transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                  <p className="text-gray-400 mb-4">{theme.description}</p>
                  <button className="text-accent-coral font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                    Learn More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
