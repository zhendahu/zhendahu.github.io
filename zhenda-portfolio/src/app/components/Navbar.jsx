"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavBarLink from './NavBarLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "00. Home",
        path: "#home",
    },
    {
        title: "01. About",
        path:"#about",
    },
    {
        title:"02. Experience",
        path:"#experience",
    },
    {
        title:"03. Projects",
        path:"#projects",
    },
    {
        title:"04. Contact Me",
        path:"#contact",
    }
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#152342] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto py-3 px-6">
            <div></div>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavBarLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>    
            </div>   
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
