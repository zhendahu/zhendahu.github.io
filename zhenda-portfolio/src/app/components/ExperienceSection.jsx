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
            <h2 className='text-3xl text-white font-bold'> <span className='font-mono text-[#64FFDA] text-base'>02.</span> Experience</h2>
        </section>
        
        <div className='items-center flex flex-col'>
            <hr class="h-px my-4 bg-gray-200 dark:bg-gray-700 w-1/2" />
        </div>
        <section className='md:grid md:grid-cols-2 gap-6 items-center py-4 px-2 xl:gap-6 sm:py-8 xl:px-16'>
            <div className='flex flex-col gap-6'>
                <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                <TabButton selectTab={() => handleTabChange("UCLA")} active={tab === "UCLA"}>UCLA</TabButton>
                <TabButton selectTab={() => handleTabChange("Reffie")} active={tab === "Reffie"}>Reffie</TabButton>
                <TabButton selectTab={() => handleTabChange("MKSemi")} active={tab === "MKSemi"}>MKSemi</TabButton>
            </div>
        </section>
    </div>


  )
}

export default ExperienceSection