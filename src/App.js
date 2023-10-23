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
import AclReconstruction from './component/Replacement/AclReconstruction'
import Bankart from './component/Replacement/Bankart'
import Cuff from './component/Replacement/Cuff'
import Dislocation from './component/Replacement/Dislocation'
import Hip from './component/Replacement/Hip'
import Knee from './component/Replacement/Knee'
import Meniscus from './component/Replacement/Meniscus'
import PartialKnee from './component/Replacement/PartialKnee'
import ReverseShoulde from './component/Replacement/ReverseShoulde'
import Revision from './component/Replacement/Revision'
import Unicompartmental from './component/Replacement/Unicompartmental'
import Shoulder from './component/Replacement/Shoulder'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='service' element={<Services />} />
        <Route path='acl-reconstruction' element={<AclReconstruction />} />
        <Route path='bankart' element={<Bankart />} />
        <Route path='cuff' element={<Cuff />} />
        <Route path='dislocation' element={<Dislocation />} />
        <Route path='hip' element={<Hip />} />
        <Route path='knee' element={<Knee />} />
        <Route path='meniscus' element={<Meniscus />} />
        <Route path='partial-knee' element={<PartialKnee />} />
        <Route path='reverse-shoulde' element={<ReverseShoulde />} />
        <Route path='revision' element={<Revision />} />
        <Route path='unicompartmental' element={<Unicompartmental />} />
        <Route path='shoulder' element={<Shoulder />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
