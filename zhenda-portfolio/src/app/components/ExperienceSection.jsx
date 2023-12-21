"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'

const ExperienceSection = () => {

    const [tab, setTab] = useState("UCLA")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <div>
        <section className='mt-4 md:mt-0 text-left flex flex-col h-full px-2 items-center xl:px-16'>
            <h2 className='text-3xl text-white font-bold'> <span className='font-mono text-[#64FFDA] text-base'>02.</span> Work Experience</h2>
        </section>
        
        <div className='items-center flex flex-col'>
            <hr class="h-px my-4 bg-gray-200 dark:bg-gray-700 w-1/2" />
        </div>
        <section className='md:grid md:grid-cols-2 gap-6 items-center py-4 px-2 xl:gap-6 sm:py-8 xl:px-16'>
            <div className='flex flex-col gap-6'>
                <TabButton selectTab={() => handleTabChange("ucla")} active={tab === "ucla"}>UCLA</TabButton>
                <TabButton selectTab={() => handleTabChange("reffie")} active={tab === "reffie"}>Reffie</TabButton>
                <TabButton selectTab={() => handleTabChange("mksemi")} active={tab === "mksemi"}>MKSemi</TabButton>
            </div>
        </section>
    </div>


  )
}

export default ExperienceSection