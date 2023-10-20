import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Services from './component/Services'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='service' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
