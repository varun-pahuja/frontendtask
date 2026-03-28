import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Themes from '@/components/sections/Themes'
import Timeline from '@/components/sections/Timeline'
import Prizes from '@/components/sections/Prizes'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Prizes />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
