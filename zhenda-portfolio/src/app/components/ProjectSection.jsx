"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'
import convo from '../../../public/images/convo.png'
import ecoscan from '../../../public/images/ecoscan.png'
import flappy_bird from '../../../public/images/flappy_bird_ai.png'

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
    <div>
        <div className="container">
            <div className='flex justify-center'>
                <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent'>Real-world Results</p>
            </div>
            <div className='flex justify-center'>
                <h2 className='text-3xl text-white font-bold mt-6'> <span className='font-mono text-[#64FFDA] text-base'>03.</span> Featured Projects</h2>
            </div>
            
            <p>See how I transformed concepts into engaging digital experiences.</p>
            <div>
                {TAB_DATA.map(project => (
                    <div key={project.title}>
                        <div>
                            <span>{project.company}</span>
                            <span>{project.year}</span>
                        </div>
                        <h3>{project.title}</h3>
                        <hr />
                        <ul>
                            {project.results.map(result => (
                                <li>{result.title}</li>
                            ))}
                        </ul>
                        <a href={project.link}>
                            <button> View Project</button>
                        </a>
                        <Image src={project.image} alt={project.title}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
   );
}

export default ProjectSection