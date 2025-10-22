import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Wellnes from '../components/Wellnes'
import Testimonials from '../components/Testimonials'
import VisionSection from '../components/VisionSection'
import FlagshipApps from '../components/FlagshipApps'
import ComingSoon from '../components/ComingSoon'


function Home() {
  return (
    <>
        <div>
            <Header/>
            <Hero/>
            <Wellnes/>
            <VisionSection/>
            <FlagshipApps/>
            <ComingSoon/>
            <Testimonials/>
        </div>
    </>
  )
}

export default Home