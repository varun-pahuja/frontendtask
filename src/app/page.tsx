import Hero from '@/components/sections/Hero'
import PartnersVelocity from '@/components/sections/PartnersVelocity'
import About from '@/components/sections/About'
import Themes from '@/components/sections/Themes'
import Timeline from '@/components/sections/Timeline'
import Prizes from '@/components/sections/Prizes'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import BottomNavBar from '@/components/ui/bottom-nav-bar'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PartnersVelocity />
        <About />
        <Themes />
        <Timeline />
        <Prizes />
        <FAQ />
        <Contact />
      </main>
      <BottomNavBar stickyBottom defaultIndex={0} />
      <Footer />
    </>
  )
}
