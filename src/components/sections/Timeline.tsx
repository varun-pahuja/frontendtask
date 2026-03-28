'use client'

export default function Timeline() {
  const events = [
    {
      id: 1,
      title: 'Registration Opens',
      date: 'April 1, 2024',
      description: 'Start your journey. Limited spots available.',
    },
    {
      id: 2,
      title: 'Team Formation',
      date: 'April 15, 2024',
      description: 'Form teams and choose your track.',
    },
    {
      id: 3,
      title: 'Hackathon Starts',
      date: 'May 1, 2024',
      description: '48-hour intensive coding and innovation sprint.',
    },
    {
      id: 4,
      title: 'Final Submissions',
      date: 'May 3, 2024',
      description: 'Submit your projects for evaluation.',
    },
    {
      id: 5,
      title: 'Judging & Presentations',
      date: 'May 4, 2024',
      description: 'Present your solutions to expert judges.',
    },
    {
      id: 6,
      title: 'Awards & Recognition',
      date: 'May 5, 2024',
      description: 'Celebrate winners and outstanding projects.',
    },
  ]

  return (
    <section id="timeline" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2">Event Timeline</h2>
            <p className="text-body max-w-2xl">
              Mark your calendar. Here's what to expect throughout the hackathon.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className="relative flex gap-6 md:gap-8">
                {/* Timeline node */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent-coral relative z-10 flex-shrink-0" />
                  {index !== events.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-accent-coral to-transparent mt-2" />
                  )}
                </div>

                {/* Event content */}
                <div className="pb-8 flex-1">
                  <div className="bg-primary rounded-xl p-6 border border-secondary hover:border-accent-coral transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <span className="text-sm text-accent-coral font-semibold">{event.date}</span>
                    </div>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
