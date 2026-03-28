'use client'

import AnimatedList from '@/components/AnimatedList'

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

  const timelineItems = events.map(
    (event) => `${event.date} | ${event.title} | ${event.description}`
  )

  return (
    <section id="timeline" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container-max">
        <div className="space-y-12 relative z-10">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-heading-2 font-display uppercase tracking-wide">Event Timeline</h2>
            <p className="text-body max-w-2xl">
              Mark your calendar. Here is what to expect throughout the hackathon.
            </p>
          </div>

          {/* Timeline as Animated List */}
          <div className="timeline-animated-list-wrapper w-full">
            <AnimatedList
              items={timelineItems}
              className="timeline-animated-list w-full"
              itemClassName="timeline-animated-item"
              showGradients={false}
              enableArrowNavigation
              displayScrollbar={false}
              initialSelectedIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
