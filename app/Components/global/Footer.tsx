import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import arvo  from 'next/font'
const Footer = () => {
  return (
    <div className='bg-[#CC5500] w-full h-96 flex md:flex-row flex-col'>
      <div className='flex w-1/2 flex-row '>
        <div className=' p-8' >
       <h4 className=' font-arvo font-bold tracking-wider text-xs md:text-base text-[#1c1b1b] uppercase'>
       Culinary Canvas </h4>
       <ul className='flex mt-2 flex-col text-wrap text-xs md:text-base text-gray-700'>
	   <li><Link href="/">About</Link></li>
	   <li><Link href="/">Blog</Link></li>
	   <li><Link href="/">Recipe Index</Link></li>
	   <li><Link href="/">Blogging Resources</Link></li>
	   <li><Link href="/">Income Reports</Link></li>
	   <li><Link href="/">Sponsored Content</Link></li>
	   <li><Link href="/">Media Mentions</Link></li>
	   <li><Link href="/">Contact</Link></li>
       </ul>
       </div>
       <div className=' p-8 ' >
       <h4 className=' font-arvo font-bold tracking-wider text-xs md:text-base text-[#1c1b1b] uppercase'>
       Food & Recipes</h4>
       <ul className='flex mt-2 text-xs md:text-base flex-col text-gray-700'>
	   <li><Link href="/">Sugar Free January</Link></li>
	   <li><Link href="/">Freezer Meals 101</Link></li>
	   <li><Link href="/">Quick and Easy Recipes</Link></li>
	   <li><Link href="/">Instant Pot Recipes</Link></li>
	   <li><Link href="/">Pasta Recipes</Link></li>
	   <li><Link href="/">Vegan Recipes</Link></li>
	   <li><Link href="/">Soup Recipes</Link></li>
	   <li><Link href="/">Taco Recipes</Link></li>
       <li><Link href="/">Meal Prep Recipes</Link></li>
       </ul>
       </div> </div>
       <div className='ml-20 w-1/2 mt-6'>
       <div className='bg-black w-11/12 h-44'>
        <div> <p className="flex space-x-2  xl:text-base justify-center text-white font-arvo uppercase tracking-wider">
            <span className='mt-2 flex font-semibold  justify-center md:text-xl' >Sign Up</span>
            <span className='font-extrabold mt-3'>For email updates</span>
         </p>
         <p className='flex xl:text- justify-center text-white font-arvo uppercase tracking-wider'>Get a Free eCookbook with our top 25 recipes.</p>
        <form></form>
         </div>
         <div className=''>
            <form ></form>
         </div>
       </div>  
       <div className="flex justify-center mb-10 md:pt-10 space-x-4">
		<a className="w-9 h-9 bg-black hover:bg-gray-700 rounded-full flex items-center justify-center" href="/"><Image alt="insta" width={25} height={25} src="/insta.png"/></a>
		<a className="w-9 h-9 bg-black hover:bg-gray-700 rounded-full flex items-center justify-center" href="/"><Image alt="insta" width={27} height={27} src="/pin.png"/></a>
		<a className="w-9 h-9 bg-black hover:bg-gray-700 rounded-full flex items-center justify-center" href="/"><Image alt="insta" width={25} height={25} src="/tik.png"/></a>
		<a className="w-9 h-9 bg-black hover:bg-gray-700 rounded-full flex items-center justify-center" href="/"><Image alt="insta" width={25} height={25} src="/face.png"/></a>
		<a className="w-9 h-9 bg-black hover:bg-gray-700 rounded-full flex items-center justify-center" href="/"><Image alt="insta" width={27} height={27} src="/twi.png"/></a>
	</div>
    </div>
   </div>
  )
}

export default Footer
