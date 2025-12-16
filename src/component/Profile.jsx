import React from 'react'

function Profile() {
  return (
   <>
     <div className=' flex flex-col lg:flex-row '>
        {/* profile */}
        <div className='w-full lg:h-screen lg:w-[40%] object-contain'>
            <img src="src/img/WhatsApp Image 2025-11-29 at 21.34.55_5f42450a.jpg" alt=""  className='h-full w-full object-cover '/>
        </div>

        {/* about information  */}
        <div className='pt-10 px-15 lg:w-[60%] text-center'>
            <h1 className='text-9xl lg:text-[6vw]    text-[#E9E1D9]'>"</h1>
            <h1 className='textHeading text-3xl lg:text-[3vw] pb-5'>Hello, My Name is Sainath </h1>
            <p className=' text-xl lg:text-2xl pb-5'>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.
            </p>
            <p className='text-xl lg:text-2xl pb-2'>
                Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.
            </p>
            <img src="src/img/home/image4.png" alt="" className='h-6 m-7 mx-auto' />
            <h1 className='text-2xl p-9'>Sainath .N</h1>
            <a href="" className='py-4  px-5 text-xl  text-black bg-[#E9E1D9]' >Learn More</a>
        </div>
     </div>  
   </>
  )
}

export default Profile
