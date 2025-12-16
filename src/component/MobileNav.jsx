import React, { useState } from 'react'

// import icons 
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

// import link
import { Link } from 'react-router-dom'

// import motion 
import { motion } from 'framer-motion'
import { nav } from 'framer-motion/client'


function MobileNav() {

  const[openMenu , setOpenMenu] = useState(false)

  // menu variant 
  const menuVariant ={
    hidden:{
      x:'100%'
    },
    show:{
      x:0,
      transition:{
        ease:[0.6,0.01,-0.05,0.9],
      },
    },
  };

  return (
    <nav className='text-black xl:hidden'>
      {/* nav open button  */}
      <div
      onClick={()=>setOpenMenu(true)}
       className='text-3xl cursor-pointer'>
          <CgMenuRight/>
      </div>
      <motion.div 
      variants={menuVariant}
      initial='hidden'
      animate={openMenu ? 'show' : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        {/*  icon menu list  */}
          <div 
          onClick={()=>setOpenMenu(false)}
          className='text-4xl cursor-pointer absolute z-30 left-4 top-14'>
            <IoMdClose/>
           </div>

          {/* menu */}
          <ul className='primaryFont h-full flex flex-col justify-center items-center gap-y-8  text-primary font-primary font-bold text-3xl'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/portfolio'}>Portfolio</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
      </motion.div >
    </nav>
  )
}

export default MobileNav
