"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'
import convo from '../../../public/images/convo.png'
import ecoscan from '../../../public/images/ecoscan.png'
import flappy_bird from '../../../public/images/flappy_bird_ai.png'
import arrowupright from '../../../public/images/arrowupright.svg'

const TAB_DATA = [
    {
        title: "EcoScan",
        id: "ecoscan",
        company: "LA Hacks",
        year: "2024",
        results: [
            { title: "Developed personalized language app that recognizes how users learn and understand material through conversations with our trained language model, then generates personalized reading comprehension test questions through recursive prompting." },
            { title: "Utilized prompt-engineering techniques such as Chain of Thought prompting." },
            { title: "Leveraged Next.js to create scalable front-end, used React bootstrap for front-end components." },
        ],
        link: "https://devpost.com/software/eco-scan-njzqcp",
        image: ecoscan
    },
    {
        title: "Convo",
        id: "convo",
        company: "LA Hacks",
        year: "2023",
        results: [
            { title: "Developed personalized language app that recognizes how users learn and understand material through conversations with our trained language model, then generates personalized reading comprehension test questions through recursive prompting." },
            { title: "Utilized prompt-engineering techniques such as Chain of Thought prompting." },
            { title: "Leveraged Next.js to create scalable front-end, used React bootstrap for front-end components." },
        ],
        link: "https://devpost.com/software/convo-eun0ab",
        image: convo
    },
    {
        title: "Flappy Bird AI",
        id: "flappy_bird_ai",
        company: "Personal project",
        year: "2023",
        results: [
            { title: "Developed an AI agent to play Flappy Bird using the NEAT algorithm, showcasing practical experience with evolutionary algorithms and neural networks." },
            { title: "Achieed significant performance improvements in the AI agent's gameplay, demonstrating the efficacy of NEAT in training complex behaviors through evolutionary strategies." },
        ],
        link: "https://github.com/zhendahu/flappy-bird-AI",
        image: flappy_bird,
    }
]

const ProjectSection = () => {
   return(
    <section className='pb-16'>
        <div>
            <div className="container">
                <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent'>Real-world Results</p>
                </div>
                <div className='flex justify-center'>
                    <h2 className='text-3xl text-white font-bold mt-6'> <span className='font-mono text-[#64FFDA] text-base'>03.</span> Featured Projects</h2>
                </div>

                <div className='flex flex-col mt-10 gap-20 justify-center'>
                    {TAB_DATA.map(project => (
                        <div key={project.title} className="bg-[#202b43] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pl-8 pr-8 pt-8 text-white">
                            <div className='flex'>
                                <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                            <h3 className='font-mono text-2xl mt-2'>{project.title}</h3>
                            <hr className='border-t-2 border-white/5 mt-4'></hr>
                            <hr />
                            <ul className='flex flex-col gap-4 mt-4'>
                                {project.results.map(result => (
                                    <li className='flex gap-2 text-sm'>
                                        <span className='text-[#64FFDA]'>▹</span> <span>{result.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={project.link}>
                                <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'> 
                                    <span>View Project</span>
                                    <arrowupright></arrowupright>
                                </button>
                            </a>
                            <Image src={project.image} alt={project.title} className='mt-8 -mb-4'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
   );
}

export default ProjectSection