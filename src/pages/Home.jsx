import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Wellnes from '../components/Wellnes'
import Testimonials from '../components/Testimonials'
import About from './About'


function Home() {
  return (
    <>
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Wellnes/>
            <Testimonials/>
        </div>
    </>
  )
}

export default Home