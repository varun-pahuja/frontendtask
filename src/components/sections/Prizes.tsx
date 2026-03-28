'use client'

import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from '@/components/ui/card-curtain-reveal'

export default function Prizes() {
  const prizes = [
    {
      position: '1st Place',
      amount: '$10,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2060&auto=format&fit=crop',
    },
    {
      position: '2nd Place',
      amount: '$6,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2069&auto=format&fit=crop',
    },
    {
      position: '3rd Place',
      amount: '$3,000',
      rewards: ['Prize money', 'Internship offer', 'Mentorship', 'Portfolio boost'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop',
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {prizes.map((prize, index) => (
              <CardCurtainReveal
                key={index}
                className="h-[520px] border border-cyan-300/35 bg-zinc-950 text-zinc-50 shadow-[0_0_24px_rgba(0,229,255,0.16)]"
              >
                <CardCurtainRevealBody className="relative z-10">
                  <CardCurtainRevealTitle className="font-display text-3xl font-medium tracking-tight text-cyan-200">
                    {prize.position}
                    <br />
                    <span className="text-cyan-300">{prize.amount}</span>
                  </CardCurtainRevealTitle>

                  <CardCurtainRevealDescription className="my-4">
                    <ul className="space-y-2 text-sm text-cyan-50/90">
                      {prize.rewards.map((reward, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          {reward}
                        </li>
                      ))}
                    </ul>
                  </CardCurtainRevealDescription>

                  <div className="mt-4 flex">
                    <Button variant="secondary" size="icon" className="aspect-square rounded-full">
                      <ArrowUpRight />
                    </Button>
                  </div>

                  <CardCurtain className="bg-cyan-50" />
                </CardCurtainRevealBody>

                <CardCurtainRevealFooter className="mt-auto h-[220px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width="100%"
                    height="100%"
                    alt={`${prize.position} visual`}
                    src={prize.image}
                    className="h-full w-full object-cover"
                  />
                </CardCurtainRevealFooter>
              </CardCurtainReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
