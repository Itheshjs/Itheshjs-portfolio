import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EducationCertifications from './components/EducationCertifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ResumeModal from './components/ResumeModal'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  useEffect(() => {
    // Quick sleek loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const openResume = () => setIsResumeModalOpen(true)
  const closeResume = () => setIsResumeModalOpen(false)

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="App min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar onOpenResume={openResume} />
      
      <main className="flex-1">
        <Hero onOpenResume={openResume} />
        <About onOpenResume={openResume} />
        <Experience />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>

      <Footer onOpenResume={openResume} />

      {/* Interactive & Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={closeResume} 
      />
    </div>
  )
}

export default App
