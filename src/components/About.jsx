import { FileText, CheckCircle2, Shield, Code, Server, Database, Sparkles, MapPin, Mail, Phone } from 'lucide-react'

const About = ({ onOpenResume }) => {
  const highlights = [
    {
      title: 'WordPress & Client Websites',
      desc: 'Hands-on experience with real client websites, customizing themes and plugins, page layout improvements, and content updates.',
      icon: Code,
      color: 'from-sky-500/20 to-sky-500/5',
      border: 'border-sky-500/30',
      iconColor: 'text-sky-400'
    },
    {
      title: 'Responsive Frontend Development',
      desc: 'Building clean, responsive web pages with HTML5, CSS3, and JavaScript, ensuring seamless layouts across desktop, tablet, and mobile devices.',
      icon: Server,
      color: 'from-indigo-500/20 to-indigo-500/5',
      border: 'border-indigo-500/30',
      iconColor: 'text-indigo-400'
    },
    {
      title: 'Practical Problem-Solving',
      desc: 'Active debugging, cross-browser testing, layout issue resolution, and routine website maintenance to deliver reliable user experiences.',
      icon: Shield,
      color: 'from-purple-500/20 to-purple-500/5',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Full-Stack & Backend Foundations',
      desc: 'Working knowledge of Python, Django, REST APIs, PHP, and databases (PostgreSQL, SQL) from practical internship exposure.',
      icon: Database,
      color: 'from-emerald-500/20 to-emerald-500/5',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400'
    }
  ]

  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Building Practical Web Solutions with <span className="text-gradient">Real-World Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Two-Column About Overview */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Official Profile Summary from Resume */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" /> Professional Profile
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                2026 CSE Graduate &amp; Web Developer
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a 2026 Computer Science Engineering graduate currently in the final month of my Junior Web Developer internship at <span className="text-white font-semibold">BrandElite, India</span>. During this internship, I have gained substantial hands-on experience working directly on real client websites, turning functional requirements and design ideas into responsive, accessible web pages using <span className="text-white font-semibold">HTML, CSS, JavaScript, PHP, and WordPress</span>.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              My day-to-day responsibilities include customizing WordPress themes and plugins, improving page layouts, performing routine maintenance, updating website content, debugging issues, and verifying cross-device responsiveness. Combined with a previous internship in <span className="text-white font-semibold">Django and REST APIs at MEVI Technology</span>, I bring strong problem-solving habits, attention to detail, and genuine enthusiasm to learn and master new web technologies.
            </p>

            <div className="pt-2 border-t border-slate-800/80 grid sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Karnataka, India (Open to Relocation)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="truncate">itheshjs2004@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>+91 9019816016</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Available for Immediate Joining</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={onOpenResume}
                className="btn-primary"
              >
                <FileText className="w-4 h-4" />
                <span>View Complete CV</span>
              </button>
              <a
                href="#contact"
                className="btn-secondary"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl bg-slate-900/80 border ${item.border} hover:scale-[1.02] transition-transform duration-200`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-slate-800 ${item.iconColor} flex-shrink-0 mt-0.5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default About