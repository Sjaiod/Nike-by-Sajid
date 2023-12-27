import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'

const Nav = () => {
    const [open,setOpen]=useState(false)
   
  return (
<header className="padding-x py-8 absolute  z-10 w-full">
    <nav className="flex justify-between  items-center max-container">
        <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29}  />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
            {navLinks && navLinks.map((item)=>(
               <li key={item.label}>
               <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
           </li>
            ))}
        </ul>
        <div className="hidden cursor-pointer max-lg:block">
            <img width={25} height={25} src={hamburger} onClick={e=>setOpen(!open)} alt="" />
        </div>
        {open && (
         <div className="  absolute top-20 left-1/3  bg-slate-100 padding-x py-20 translate-y-0 transition" >
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:block ">
            {navLinks && navLinks.map((item)=>(
               <li key={item.label}>
               <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
           </li>
            ))}
        </ul>
         </div>
        )}
        
    </nav>
</header>
  )
}

export default Nav
