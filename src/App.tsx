
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Services from '@/pages/Services'
import NotFound from '@/pages/NotFound'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
