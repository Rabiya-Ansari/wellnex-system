import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutWellnex from '../components/About'
import FlagshipApps from '../components/FlagshipApps'
import Wellnes from '../components/Wellnes'
import Testimonials from '../components/Testimonials'


function Home() {
  return (
    <>
        <div>
            <Header/>
            <Hero/>
            <AboutWellnex/>
            <FlagshipApps/>
            <Wellnes/>
            <Testimonials/>
        </div>
    </>
  )
}

export default Home