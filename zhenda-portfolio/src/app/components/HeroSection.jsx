"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  <p className="text-[#64FFDA] text-base sm:text-1xl lg:text-2xl font-mono bg-clip-text">{"Hi, my name is "}</p> 
                  Zhenda Hu.
              </h1>
              <h1 className="text-gray-50 mb-4 text-1xl sm:text-2xl lg:text-3xl font-mono">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Web Developer.',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Application Engineer.',
                    1000,
                    'Obsessive Learner.',
                    1000,
                    'Team Player.',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#ADB7BE] text-xs sm:text-sm mr-6 mb-6 lg:text-base">
                  I'm a Computer Science student at UCLA that thrives in solving challenging problems in a team environment, and creating quality systems that exceed user expectations. Currently, I'm learning about building exceptional digital experiences through web development, and looking for employment opportunities to demonstrate my skills and passion. 
              </p>
              <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-500 text-white font-mono">
                  Hire Me
                </button>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-500 text-white mt-3 font-mono'>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                  src="/images/zhenda_memoji.png"
                  alt="hero image"
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  width={300}
                  height={300}
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;