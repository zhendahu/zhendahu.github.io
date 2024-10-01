"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import aws from '../../../public/images/aws.png'
import reffie from '../../../public/images/reffie.png'
import mksemi from '../../../public/images/mksemi.png'
import ucla from '../../../public/images/ucla.png'
import Image from 'next/image'


const TAB_DATA = [
    {
        title: "aws",
        id: "aws",
        content: (
            <div>
                <p>
                    <span className='text-md font-mono text-[#64FFDA]'> Software Development Engineer (Embedded) Intern</span>
                    <br></br>
                    <br></br>
                    <span className='text-[#64FFDA]'>▹</span> Part of the AWS EC2 Blackfoot Peering team, responsible for handling all direct connect (DX), peering, and Site-to-Site VPN connections to EC2.
                    <br></br>
                    <br></br>
                    <span className='text-[#64FFDA]'>▹</span> Designed and built an event store for EC2 network address translation (NAT) devices using AWS EventBridge, Lambda, CloudWatch, SNS, and SQS. 
                    <br></br>
                    <br></br>
                    <span className='text-[#64FFDA]'>▹</span> Reduced average time taken for operators to diagnose and repair device failures by 25% by creating an aggregate queryable event dashboard and single-pane event history.
                </p>
                <Image src={aws} alt='aws logo' className='mt-8'></Image>
            </div>
            
        )
    },
    {
        title: "ucla",
        id: "ucla",
        content: (
            <div>
                <p>
                    <span className='text-md font-mono text-[#64FFDA]'> Software Engineer </span>
                    <br></br>
                    <br></br>
                    <span className='text-[#64FFDA]'>▹</span> Re-constituted EGG signal processing C++ script from DLL to standalone windows EXE.
                    <br></br>
                    <br></br>
                    <span className='text-[#64FFDA]'>▹</span> Engineered and developed intuitive, streamlined, and user-friendly UI to adjust 9 different parameters of the EGG signal processing script as well as redirect input/output between compiled C++ executable and Python script using Python&apos;s subprocess module.
                </p>
                <div className='flex justify-center items-center'> 
                    <Image src={ucla} alt='ucla logo' className='mt-8 w-1/2 h-1/2'></Image> 
                </div>
            </div>
        )
    },
    {
        title: "reffie",
        id: "reffie",
        content: (
            <div>
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
                <div className='flex justify-center items-center'>
                    <Image src={reffie} alt='reffie logo' className='mt-8'></Image>
                </div>
                
            </div>
        )
    },
    {
        title: "mksemi",
        id: "mksemi",
        content: (
            <div>
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
                <div className='flex justify-center items-center'>
                    <Image src={mksemi} alt='mksemi logo' className='flex justify-center items-center mt-8'></Image>
                </div>
                
            </div>
        )
    }
]

const ExperienceSection = () => {

    const [tab, setTab] = useState("aws")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <div className='py-8 sm:py-16' id="experience">
        <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent'>Where I&apos;ve Worked</p>
        </div>
        <section className='mt-6 text-left flex flex-col h-full px-2 items-center xl:px-16'>
            <h2 className='text-3xl md:text-5xl text-white font-bold'> <span className='font-mono text-[#64FFDA] text-base'>02.</span> Work Experience</h2>
        </section>
        
        <div className='items-center flex flex-col'>
            <hr className="h-px my-4 bg-gray-200 dark:bg-gray-700 w-1/2" />
        </div>
        <section className='md:grid md:grid-cols-2 gap-2 items-center py-4 px-2 xl:gap-2 sm:py-8 xl:px-16'>
            <div className='flex flex-col gap-4 xl:gap-6'>
                <TabButton selectTab={() => handleTabChange("aws")} active={tab === "aws"}>AWS</TabButton>
                <TabButton selectTab={() => handleTabChange("ucla")} active={tab === "ucla"}>UCLA</TabButton>
                <TabButton selectTab={() => handleTabChange("reffie")} active={tab === "reffie"}>Reffie</TabButton>
                <TabButton selectTab={() => handleTabChange("mksemi")} active={tab === "mksemi"}>MKSemi</TabButton>
            </div>
            <div className='text-[#ADB7BE]'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            {/* <div className='flex justify-center items-center'>
                <Image src={TAB_DATA.find((t) => t.id === tab).image}></Image>
            </div> */}
        </section>
    </div>


  )
}

export default ExperienceSection