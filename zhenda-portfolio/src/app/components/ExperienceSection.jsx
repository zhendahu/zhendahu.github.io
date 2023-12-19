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
    <section className=''>
        <div className='md:grid md:grid-cols-2 gap-6 items-center py-8 px-2 xl:gap-6 sm:py-16 xl:px-16'>
            <TabButton selectTab={() => handleTabChange("UCLA")} active={tab === "UCLA"}>UCLA</TabButton>
        </div>                                                                                                                                                                                              
    </section>
  )
}

export default ExperienceSection