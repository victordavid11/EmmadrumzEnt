import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Artists from './components/Artists'
import Event from './components/Events'
import Mixtapes from './components/Mixtapes'
import  { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="w-full  overflow-hidden">
      {/* Navbar fixed at the top */}
      <Navbar />

      {/* Routes Section for Pages Including Home */}
      <div className="relative w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/event" element={<Event />} />
          <Route path="/mixtapes" element={<Mixtapes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App