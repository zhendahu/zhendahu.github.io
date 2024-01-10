"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title: "ucla",
        id: "ucla",
        content: (
            <p>
                <span className='text-md font-mono text-[#64FFDA]'> Software Engineer </span>
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Re-constituted EGG signal processing C++ script from DLL to standalone windows EXE.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Engineered and developed intuitive, streamlined, and user-friendly UI to adjust 9 different parameters of the EGG signal processing script as well as redirect input/output between compiled C++ executable and Python script using Python's subprocess module.
            </p>
        )
    },
    {
        title: "reffie",
        id: "reffie",
        content: (
            <p>
                <span className='text-md font-mono text-[#64FFDA]'> Backend Software Engineering Intern </span>
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Wrote Python scripts to parse listing emails from real estate sites (Zillow, Apartments.com, Rentlinx) and store+maintain metadata in Postgres database.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Frontend and backend integration of Facebook Marketplace and Messenger API with Reffie web application using access token authorization, json parsing, and Pydantic schema validation.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Led weekly sprint planning meetings and performed code reviews for team of 4 junior interns.
            </p>
        )
    },
    {
        title: "mksemi",
        id: "mksemi",
        content: (
            <p>
                <span className='text-md font-mono text-[#64FFDA]'> Software Engineering Intern </span>
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Engineered Ultra Wideband (UWB) technology as part of a team of 5 to provide real-time centimeter-grade precision 2-D location estimation.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Wrote Python and C scripts for microprocessor hardware to analyze and process real-time location data.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Developed android and desktop applications for 2D and AR visualization of location data used in customer demos and internal debugging via serial port and BLE transmission.
                <br></br>
                <br></br>
                <span className='text-[#64FFDA]'>▹</span> Designed and maintained SQLite database for internal debugging data outputted by UWB chip.
            </p>
        )
    }
]

const ExperienceSection = () => {

    const [tab, setTab] = useState("ucla")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <div>
        <section className='mt-4 md:mt-0 text-left flex flex-col h-full px-2 items-center xl:px-16 py-8 sm:py-16' id="experience">
            <h2 className='text-3xl text-white font-bold'> <span className='font-mono text-[#64FFDA] text-base'>02.</span> Work Experience</h2>
        </section>
        
        <div className='items-center flex flex-col'>
            <hr class="h-px my-4 bg-gray-200 dark:bg-gray-700 w-1/2" />
        </div>
        <section className='md:grid md:grid-cols-2 gap-2 items-center py-4 px-2 xl:gap-2 sm:py-8 xl:px-16'>
            <div className='flex flex-col gap-4 xl:gap-6'>
                <TabButton selectTab={() => handleTabChange("ucla")} active={tab === "ucla"}>UCLA</TabButton>
                <TabButton selectTab={() => handleTabChange("reffie")} active={tab === "reffie"}>Reffie</TabButton>
                <TabButton selectTab={() => handleTabChange("mksemi")} active={tab === "mksemi"}>MKSemi</TabButton>
            </div>
            <div className='text-[#ADB7BE]'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </section>
    </div>


  )
}

export default ExperienceSection