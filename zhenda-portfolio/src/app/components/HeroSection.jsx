"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="hero">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  <p className="text-[#64FFDA] text-base sm:text-1xl lg:text-2xl font-mono bg-clip-text">{"Hi, my name is "}</p> 
                  Zhenda Hu.
              </h1>
              <h1 className="text-gray-50 mb-4 text-1xl sm:text-2xl lg:text-3xl font-mono">
                <TypeAnimation
                  sequence={[
                    'Creative Thinker.',
                    1000, 
                    'Problem Solver.',
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
                  I'm a Computer Science student at UCLA that thrives in solving challenging problems in a team environment, and creating quality systems that exceed user expectations.
              </p>
              <p className="text-[#ADB7BE] text-xs sm:text-sm mr-6 mb-6 lg:text-base">
              Please feel free to reach out and shoot me an email at <span className='text-[#64FFDA]'>zhendahu@gmail.com</span>! Regardless of whether you have a burning question, an open opportunity, or just want to drop in and say hi, my inbox is always open. I'll try my best to get back to you as soon as I can!
              </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className='rounded-full bg-[#2f3b3d] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
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