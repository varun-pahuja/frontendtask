import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ClickSpark";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const dxLactos = localFont({
  src: '../assets/fonts/DxLactos-Medium.otf',
  variable: '--font-dx-lactos',
  display: 'swap',
});
const magtis = localFont({
  src: '../assets/fonts/Magtis-ExtraBold.otf',
  variable: '--font-magtis',
  display: 'swap',
});

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
    <html lang="en" className={cn("font-sans", inter.variable, dxLactos.variable, magtis.variable)}>
      <body className="bg-primary text-white antialiased min-h-screen">
        <ClickSpark
          sparkColor="#00e5ff"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={10}
          duration={450}
          easing="ease-out"
          extraScale={1.1}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  )
}
