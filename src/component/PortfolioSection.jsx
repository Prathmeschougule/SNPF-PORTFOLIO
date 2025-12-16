import React from 'react'

function PortfolioSection() {
  return (
    <>
       <div className="h-screen w-screen py-5 lg:py-20">
  <div className="text-center mb-10">
    <p className="text-xl uppercase">portfolio</p>
    <h1 className="text-3xl lg:text-[6vw]">Featured Story</h1>
  </div>

  <div className="flex items-end  justify-center overflow-hidden">
    {/* firstDiv */}
    <div className="firstDiv p-7 ">
      <h1 className="mb-4 text-7xl font-bold text-[#B58B61]">01</h1>
      <h1 className="textHeading text-3xl">Ricardo & Michelle</h1>
      <p className="text-2xl font-semibold">
        Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique
         purus vehicula felis velit.
      </p>
    </div>

    {/* Image Divs */}
    <div className="flex gap-7">
      <div className="h-[450px] w-[400px] bg-amber-200">
        <img src="/portfolio/WhatsApp Image 2025-11-29 at 21.39.18_0ff02d06.jpg" alt="" className=' h-full w-full object-cover' />
      </div>
      <div className="h-[450px] w-[400px] bg-amber-700">
        <img src="/portfolio/WhatsApp Image 2025-11-29 at 21.39.19_b481f66f.jpg" alt="" className='h-full w-full object-cover' />
      </div>
    </div>

   
  </div>
  <div className='flex justify-end mr-5 mt-10 '>
      <a href="" className='bg-[#E9E1D9] py-4 px-7'>View Gallery</a>
  </div>
   
</div>

    </>
  )
}

export default PortfolioSection
