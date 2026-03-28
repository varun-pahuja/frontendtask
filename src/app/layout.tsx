import type { Metadata } from 'next'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Research Quest - Hackathon Platform',
  description: 'Unleash your research, build the future. Connect with real-world challenges and showcase your innovations.',
  keywords: 'hackathon, research, innovation, competition',
  authors: [{ name: 'Research Quest Team' }],
  openGraph: {
    title: 'Research Quest - Hackathon',
    description: 'Unleash your research, build the future.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  )
}
