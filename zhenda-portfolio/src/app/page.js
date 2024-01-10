import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Navbar } from './components/Navbar'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import EmailSection from './components/EmailSection'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#152342]">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 py-20"> {/* Maybe put py-20 on containers? Space them out a bit more?*/}
        <HeroSection />
      </container>
      <container className="container mt-24 mx-auto px-12 py-20">
        <AboutSection />
      </container>
      <container className="container mx-auto px-12 py-20">
        <ExperienceSection />
      </container>
      <container className="container mx-auto px-12 py-20">
        <EmailSection />
      </container>
      <footer className='fixed bottom-0 left-0 z-20 p-4 flex flex-col gap-4'>
        <Link href={"https://github.com/zhendahu"} target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href={"https://www.linkedin.com/in/zhendahu/"} target='_blank'>
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
        </Link>

      </footer>
    </main>
  )
}
