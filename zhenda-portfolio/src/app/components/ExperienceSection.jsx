"use client"
import React, { useTransition, useState } from 'react'

const ExperienceSection = () => {

    const [tab, setTab] = useState("UCLA")
    const [startTransition, isPending] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <section className='text-white flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-mono text-[#64FFDA]'> <span className='text-white font-mono text-base'>02.</span> Experience</h2>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className='text-[#ADB7BE] text-xs sm:text-sm mr-6 mb-4 lg:text-base'>
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
                </p>                                                                                                                                                                                                      
    </section>
  )
}

export default ExperienceSection