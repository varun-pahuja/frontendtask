'use client'

export default function Prizes() {
  const prizes = [
    {
      position: '🥇 1st Place',
      amount: '$10,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      highlighted: true,
    },
    {
      position: '🥈 2nd Place',
      amount: '$6,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      highlighted: false,
    },
    {
      position: '🥉 3rd Place',
      amount: '$3,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      highlighted: false,
    },
  ]

  return (
    <section id="prizes" className="section-padding bg-primary">
      <div className="container-max">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-heading-2">Prize Pool</h2>
            <p className="text-body max-w-2xl mx-auto">
              Compete for over $50,000 in total rewards, plus internship opportunities and mentorship.
            </p>
          </div>

          {/* Prize Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  prize.highlighted
                    ? 'md:scale-105 border-2 border-accent-coral bg-secondary'
                    : 'border border-secondary bg-secondary/50 hover:bg-secondary/80'
                }`}
              >
                <div className={`p-8 space-y-6 ${prize.highlighted ? 'bg-gradient-accent/10' : ''}`}>
                  {/* Position */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{prize.position}</h3>
                    <p className={`text-3xl font-bold ${prize.highlighted ? 'text-accent-coral' : ''}`}>
                      {prize.amount}
                    </p>
                  </div>

                  {/* Rewards */}
                  <ul className="space-y-3">
                    {prize.rewards.map((reward, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-accent-coral" />
                        {reward}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className={prize.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                    Apply Now
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
