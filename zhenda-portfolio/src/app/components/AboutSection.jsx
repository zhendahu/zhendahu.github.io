import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
       <div className='md:grid md:grid-cols-2 gap-6 items-center py-8 px-2 xl:gap-6 sm:py-16 xl:px-16'>
            <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative rounded-2xl'>
                <Image src="/images/zhenda_about.jpg" alt="about section image" className='' width={500} height={500} />
            </div>
            <div className='mt-4 md:mt-0 text-left  flex flex-col h-full'>
                <h2 className='text-3xl font-mono text-[#64FFDA] mb-4'> <span className='text-white font-mono text-base'>01.</span> About Me</h2>
                <p className='text-[#ADB7BE] text-xs sm:text-sm mr-6 mb-6 lg:text-base'>
                    Hey, thanks for stopping by! 
                    <br></br>
                    <br></br>
                    My name is Zhenda Hu, currently a third year Computer Science student at UCLA. I've always viewed computing as the most powerful creative medium, in that your creations can cause the most impact with the least amount of resources. I started developing and creating applications first in the form of video games, as a bored high schooler during the pandemic, and have never looked back since. 
                    <br></br>
                    <br></br>
                    Fast forward to today, my toolbox and maturity as a developer has expanded tenfold. I've had the opportunity to learn a wide variety of programming languages (from object oriented to functional, low level to high level), as well as the privilege to apply the knowledge in a variety of <span className='text-[#64FFDA]'>professional experiences</span> (from application engineering to full stack web development). 
                    <br></br>
                    <br></br>
                    Here are a few technologies I've been working with recently:
                    <br></br>
                    <br></br>
                    <ul className='md:grid md:grid-cols-2 font-mono text-sm'>
                        <li><span className='text-[#64FFDA]'>▹</span> Python</li>
                        <li><span className='text-[#64FFDA]'>▹</span> C++</li>
                        <li><span className='text-[#64FFDA]'>▹</span> Javascript</li>
                        <li><span className='text-[#64FFDA]'>▹</span> Next.js</li>
                        <li><span className='text-[#64FFDA]'>▹</span> PostgreSQL</li>
                        <li><span className='text-[#64FFDA]'>▹</span> Django</li>
                    </ul>
                    <br></br>
                    <br></br>
                    Outside of work, my hobbies include drawing, brazilian jiu-jitsu, MMA, and video games. Onwards and upwards!
                </p>
            </div>
       </div>
    </section>
  )
}

export default AboutSection