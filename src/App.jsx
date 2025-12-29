import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certificate from './pages/Certificate';





const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={< Project/>} />
        <Route path="/resume" element={< Resume/>} />
        <Route path="/certificate" element={< Certificate/>} />
        
      </Routes>
    </Router>
    </div>
  )
}



export default App
