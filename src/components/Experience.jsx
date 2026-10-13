import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle, ArrowUpRight, Zap, Shield } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Junior Web Developer Intern',
      company: 'BrandElite',
      location: 'India',
      period: 'May 2026 – Present',
      type: 'Current Role (Final Month)',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      summary: 'Developing and maintaining real-world client websites, responsive layouts, and WordPress customizations.',
      achievements: [
        'Developed and maintained real-world client websites using HTML, CSS, JavaScript, PHP, and WordPress.',
        'Worked on responsive web development, ensuring websites function effectively across desktop, tablet, and mobile devices.',
        'Customized WordPress websites, themes, plugins, layouts, and website functionality based on client requirements.',
        'Handled page layout improvements, content updates, bug fixes, and regular website maintenance.',
        'Gained hands-on experience in real-world web development workflows, debugging, testing, and website deployment.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PHP', 'Responsive Design', 'Theme Customization', 'Git']
    },
    {
      role: 'Django Full Stack Developer Intern',
      company: 'MEVI Technology',
      location: 'India',
      period: 'February 2026 – May 2026',
      type: 'Completed Internship',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      summary: 'Developed web applications using Django and engineered REST APIs with backend query optimization.',
      achievements: [
        'Developed web applications using Django, improving backend response speed by 30%.',
        'Built REST APIs to handle data and increased processing efficiency by 25%.',
        'Optimized backend code and reduced server response time by 20%.',
        'Worked with team members to deliver stable, secure, and maintainable application features.'
      ],
      skills: ['Python', 'Django', 'REST APIs', 'SQL', 'Backend Development', 'Git']
    }
  ]

  return (
    <section id="experience" className="section-padding relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Hands-on client website development at BrandElite and backend engineering at MEVI Technology.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 hover:border-sky-500/40 transition-all duration-300 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${exp.badgeColor}`}>
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-base font-semibold text-sky-400 mt-1">
                    {exp.company}
                  </h4>
                </div>

                {/* Optional Metrics Strip */}
                {exp.metrics && (
                  <div className="flex items-center gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 self-start">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center px-2 border-r last:border-r-0 border-slate-700/80">
                        <div className="text-sm sm:text-base font-extrabold text-emerald-400">{m.value}</div>
                        <div className="text-[10px] text-slate-400 whitespace-nowrap">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Achievements Bullet Points */}
              <div className="pt-6 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities &amp; Impact
                </h5>
                <ul className="space-y-2.5">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2">Technologies:</span>
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
