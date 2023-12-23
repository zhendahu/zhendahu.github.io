import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Navbar } from './components/Navbar'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import EmailSection from './components/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#152342]">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 "> {/* Maybe put py-20 on containers? Space them out a bit more?*/}
        <HeroSection />
      </container>
      <container className="container mt-24 mx-auto px-12 ">
        <AboutSection />
      </container>
      <container className="container mx-auto px-12">
        <ExperienceSection />
      </container>
      <container className="container mx-auto px-12">
        <EmailSection />
      </container>
    </main>
  )
}
