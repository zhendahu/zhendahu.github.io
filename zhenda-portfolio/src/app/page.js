import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Navbar } from './components/Navbar'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#152342]">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 py-20">
        <HeroSection />
      </container>
      <container className="container mt-24 mx-auto px-12 py-20">
        <AboutSection />
      </container>
    </main>
  )
}
