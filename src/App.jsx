
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RouteEffects from './components/RouteEffects'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

import SmartFinancialCoach from './pages/SmartFinancialCoach'
import FileIntegrityVerification from './pages/FileIntegrityVerification'
import VoyagerPro from './pages/VoyagerPro'
import AltronAI from './pages/AltronAI'
import AESFaultInjection from './pages/AESFaultInjection'

import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app-root">
      <RouteEffects />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/experience"
            element={<Experience />}
          />

          <Route
            path="/certifications"
            element={<Certifications />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/projects/smart-financial-coach"
            element={<SmartFinancialCoach />}
          />

          <Route
            path="/projects/file-integrity-verification"
            element={<FileIntegrityVerification />}
          />

          <Route
            path="/projects/voyager-pro"
            element={<VoyagerPro />}
          />

          <Route
            path="/projects/altron-ai-assistant"
            element={<AltronAI />}
          />

          <Route
            path="/projects/aes-fault-injection"
            element={<AESFaultInjection />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
