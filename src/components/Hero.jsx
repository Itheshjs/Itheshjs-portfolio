import { useEffect, useRef } from 'react'
import { 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Github, 
  Linkedin, 
  Mail,
  Phone,
  CheckCircle2
} from 'lucide-react'

const Hero = ({ onOpenResume }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    // Subtle ambient particles
    const particles = []
    const particleCount = Math.min(40, Math.floor(window.innerWidth / 30))

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.35
        this.vy = (Math.random() - 0.5) * 0.35
        this.size = Math.random() * 2 + 0.8
        this.opacity = Math.random() * 0.3 + 0.1
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      setSize()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        style={{ zIndex: 0 }}
      />

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200 font-medium">Junior Web Developer Intern @ BrandElite</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-sky-400 hidden sm:inline font-mono text-xs">Open to Web &amp; Remote Roles</span>
            </div>

            {/* Headline */}
            <div>
              <p className="text-sm sm:text-base font-semibold tracking-wide text-sky-400 uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mt-1 leading-[1.1]">
                ITHESH <span className="text-gradient">JS</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mt-3">
                Junior Web Developer &amp; <span className="text-sky-300">WordPress Specialist</span>
              </h2>
            </div>

            {/* Natural professional elevator pitch */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              2026 Computer Science Engineering graduate currently in the final month of my Junior Web Developer internship at <span className="text-white font-semibold">BrandElite, India</span>. Hands-on experience developing and maintaining real client websites using <span className="text-white font-semibold">WordPress, HTML, CSS, JavaScript, and PHP</span>, with previous backend internship experience in <span className="text-white font-semibold">Django &amp; REST APIs</span> at MEVI Technology. Eager to grow as a dedicated web and frontend developer.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {['WordPress', 'HTML5 & CSS3', 'JavaScript', 'PHP', 'Responsive Design', 'Theme Customization', 'Python / Django', 'Git & GitHub'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 font-medium hover:border-sky-500/40 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-3">
              <button
                onClick={onOpenResume}
                className="btn-primary"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-secondary"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919019816016?text=Hi%20Ithesh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <a 
                href="https://linkedin.com/in/ithesh-j-s-a65600350" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-sky-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Itheshjs" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:itheshjs2004@gmail.com" 
                className="hover:text-sky-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:+919019816016" 
                className="hover:text-sky-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Card & Recruiter Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Profile Avatar Card with Badges */}
            <div className="relative group w-full max-w-sm">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Profile Box */}
              <div className="relative glass-card rounded-3xl p-6 border border-slate-700/80 bg-slate-900/90 text-center space-y-4">
                
                {/* Image */}
                <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden border-2 border-sky-500/30 p-1 bg-gradient-to-br from-sky-500/20 to-indigo-500/20 shadow-xl">
                  <img 
                    src="/profile.png" 
                    alt="Ithesh JS" 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-xl bg-slate-800 text-3xl font-bold text-sky-400 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    IJ
                  </div>
                </div>

                {/* Name & Title in Card */}
                <div>
                  <h3 className="text-xl font-bold text-white">ITHESH JS</h3>
                  <p className="text-xs text-sky-400 font-medium mt-0.5">B.E. Computer Science Engineering</p>
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> Karnataka, India
                  </p>
                </div>

                {/* Recruiter Highlights List */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-left text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Briefcase className="w-3.5 h-3.5 text-sky-400" /> Current Role
                    </span>
                    <span className="font-semibold text-white">BrandElite (Final Month)</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="flex items-center gap-2 text-slate-300">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" /> B.E. CSE (2026)
                    </span>
                    <span className="font-semibold text-emerald-400">8.04 CGPA</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Core Focus
                    </span>
                    <span className="font-semibold text-white">WordPress &amp; Frontend</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="flex items-center gap-2 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Prior Experience
                    </span>
                    <span className="font-semibold text-white">Django Intern @ MEVI</span>
                  </div>
                </div>

                {/* Quick Action in Card */}
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" /> View Detailed Resume
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-sky-400">BrandElite</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Current Internship</div>
            <div className="text-[11px] text-slate-500">Real Client Websites &amp; WordPress</div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">8.04</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">B.E. CSE (2026)</div>
            <div className="text-[11px] text-slate-500">Govt Engg College Mosalehosalli</div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-purple-400">MEVI Tech</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Completed Internship</div>
            <div className="text-[11px] text-slate-500">Django &amp; REST APIs</div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400">Available</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Career Opportunity</div>
            <div className="text-[11px] text-slate-500">Junior, Frontend &amp; Remote Roles</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero