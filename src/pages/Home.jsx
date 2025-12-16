import React from 'react'
import '../App.css'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection'
import AwardWinng  from '../component/AwardWinng'
import Profile  from '../component/Profile'
import Service  from '../component/Service'
import Creative from '../component/Creative'
import Portfolio from './Portfolio'
import PortfolioSection from '../component/PortfolioSection'
import Testimonial from '../component/Testimonial'
import WeddingDrems from '../component/WeddingDrems'
import ContactForm from '../component/ContactForm'
import Footer from '../component/Footer'
function Home() {
  return (
  <>
    <section className='section'> 
       <Header/>
       <HeroSection/>
       <AwardWinng/>
       <Profile/>
       <Service/>
       <Creative/>
       <PortfolioSection/>
       <Testimonial/>
       <WeddingDrems/>
       <ContactForm/>
       <Footer/>
    </section>
   
</>  )
}

export default Home
