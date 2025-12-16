import React from 'react'
import "../index.css";

function HeroSection() {
  return (
   <>
   <div className='h-screen w-screen relative overflow-hidden '>
        <img src="src/img/home/image.png" alt="" 
             className='h-full w-full object-cover object-[10%_0%] 
                     sm:object-[20%_0%] 
                     md:object-[30%_0%] '
        />
        <div className=' absolute inset-0 flex flex-col items-center justify-center '>
            <h1  className=' text-lg lg:text-[2vw] text-[#BBA085] '>
             Your Dream Wedding Awaits
            </h1>
            <h1 className='text-amber-50 textHeading lg:text-[4vw] font-bold text-center'>
                Artistic Wedding Photography
            </h1>
        </div>   
   </div>
   </>
  )
}

export default HeroSection
