import React from 'react'
import { Footer, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, WhatWeDo } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
