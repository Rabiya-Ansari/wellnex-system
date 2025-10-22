import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'   
import FlagshipApps from './components/FlagshipApps'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About/>}></Route>
          <Route path='app' element={<FlagshipApps/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
