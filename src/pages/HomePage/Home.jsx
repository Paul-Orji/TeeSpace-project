import React from 'react'
import Clients from './clientt/Clients'
import Custom from './custom/Custom'
import Features from './features/Features'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Nav from './nav/Nav'
import Navlinks from './nav-links/Navlinks'
import Pricing from './pricing/Pricing'
import Servic from './servic/Services'
import Shop from './shop/Shop'
import Stores from './stores/Stores'
import Subscribe from './subscribe/Subscribes'

const Home = () => {
  return (
    <>
     <Nav/>
     <Navlinks/>
     <Hero/>
     <Servic/>
     <Shop/>
     <Stores/>
     <Custom/>
     <Features/>
     <Clients/>
     <Pricing/>
     <Subscribe/>
     <Footer/>
  
    </>
   
  )
}

export default Home
