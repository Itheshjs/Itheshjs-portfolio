import { useState, useEffect } from 'react'
import { FileText, Menu, X, Sparkles, Send } from 'lucide-react'

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo & Recruiter Availability Badge */}
          <div className="flex items-center gap-3">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                IJ
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  ITHESH JS
                </span>
                <span className="hidden sm:block text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                  Junior Web Developer
                </span>
              </div>
            </a>

            {/* Recruiter Availability Chip */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3.5 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Action: Resume & Quick Contact */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all duration-200 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-semibold"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800 text-xs text-emerald-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Junior &amp; Remote Web Roles
                </span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2.5 text-left text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/80 rounded-xl transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800 flex gap-2">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }}
                  className="flex-1 py-2.5 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-300 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" /> View Resume
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Contact
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar