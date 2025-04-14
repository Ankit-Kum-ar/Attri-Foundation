import React from 'react'
import { Footer, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
