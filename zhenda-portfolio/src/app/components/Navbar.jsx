import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-white font-semibold">
                LOGO
            </Link> 
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                    <li><Link href={"#about"} className="block py-2 pl-3 pr-4 text-[#64FFDA] sm:text-base rounded md:p-0 font-mono">01. <span className="text-white hover:text-[#64FFDA]">About</span></Link></li>
                </ul>    
            </div>   
        </div>
    </nav>
  )
}
