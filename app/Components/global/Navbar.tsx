import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header className='bg-[#CC5500] h-24 w-full '>
       <nav className=" h-28 mx-auto flex justify-between items-center
    sm:px-5 px-3 ">
   <Link href="/" className="mb-3  flex justify-center items-center ">
    <Image 
    src="/logo.png" alt="Car Hub Logo"  width={80} height={6} />
    </Link>
    <div className="md:hidden flex justify-center items-center">
    <button className="focus:outline-none flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
    <div className="bg-white w-6 h-[1px] mb-1 will-change: transform; transform: none;"></div>
    <div className="bg-white w-6 h-[1px] mb-1 will-change: transform; transform: none; width: 23.9944px;"></div>
    <div className="bg-white w-6 h-[1px] will-change: transform; transform: none;"></div></div></button></div>
    <div className='md:flex-row justify-center items-center m-4 hidden md:flex '>
    <Link href="/" className="flex justify-center items-center"> 
    <h2 className='font-bold mx-1 text-sm md:text-base sm:mx-5 uppercase tracking-wider text-[#1c1b1b] font-sans'>HOME
    </h2></Link>
    <Link href="/about" className="flex justify-center items-center"> 
    <h2 className='font-bold mx-1 text-sm md:text-base sm:mx-5 uppercase tracking-wider text-[#1c1b1b] font-sans'>ABOUT
    </h2></Link>
    <Link href="/recipes" className="flex justify-center items-center"> 
    <h2 className='font-bold mx-1 text-sm md:text-base sm:mx-5 uppercase tracking-wider text-[#1c1b1b] font-sans'>RECIPES
    </h2></Link>
    <Link href="/start-here" className="flex justify-center items-center"> 
    <h2 className='font-bold mx-1 text-sm md:text-base sm:mx-5 uppercase tracking-wider text-[#1c1b1b] font-sans'>START HERE
    </h2></Link>
    <Link href="/search" className="flex justify-center  mx-1 sm:mx-5 items-center uppercase tracking-wider text-[#1c1b1b] font-sans"> 
       <Image alt="search" src="/search.png"
         width={22} height={22}/></Link>
    </div>
    </nav>
    </header>
  )
}

export default Navbar
