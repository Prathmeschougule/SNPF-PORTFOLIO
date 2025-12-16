import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../component/Social'
import MobileNav from '../component/MobileNav'
import "../index.css";

function Header() {
  return (
     <div className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px]  flex items-center bg-[#f8f8f8a5] '>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
          {/* Logo */}
          {/* <Link to={'/'}>
              <img src="src/assets/logo (2).png" alt="" className='max-w-[200px] w-[100px]' />
          </Link> */}
          <div>
              <h1 className='text-5xl font-bold text-[#BBA085] tracking-tight'>SNPF</h1>
          <p className='text-[9px] tracking-tight'>Sainat Nandavdekar Photography</p>
          </div>
          

          {/* hidden nav bar  */}
          <nav className='hidden lg:flex gap-x-12 font-semibold'>
            <Link to={'/'} 
            className='hover:text-blue-400 transition duration-300'>
            Home
            </Link>
          
             <Link to={'/about'} 
            className='hover:text-blue-400 transition duration-300'>
            About
             </Link>
            
             <Link to={'/portfolio'} 
            className='hover:text-blue-400 transition duration-300'>
            Portfolio
            </Link> 

            <Link to={'/contact'} 
            className='hover:text-blue-400 transition duration-300'>
            Contact
            </Link>

          </nav>

         
        </div>
          {/* social */}
          <Social/>
          {/* Mobile view bar  */}
          <MobileNav/>
      </div>
  )
}

export default Header
