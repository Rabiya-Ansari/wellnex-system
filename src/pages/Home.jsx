import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutWellnex from '../components/About'
import FlagshipApps from '../components/FlagshipApps'

function Home() {
  return (
    <>
        <div>
            <Header/>
            <Hero/>
            <AboutWellnex/>
            <FlagshipApps/>
        </div>
    </>
  )
}

export default Home