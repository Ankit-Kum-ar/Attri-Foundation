import React from 'react'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
