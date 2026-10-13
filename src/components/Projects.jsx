import { useState } from 'react'
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Bot, 
  ShieldAlert, 
  Users, 
  BookOpen, 
  CalendarClock, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Interview Preparation Platform',
      year: '2025',
      featured: true,
      category: 'ai-web',
      icon: Bot,
      iconColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      tagline: 'Interactive mock interview system with resume analysis',
      description: 'A responsive web application built to help candidates practice technical interviews, parse resume details, and receive real-time evaluation feedback.',
      bullets: [
        'Developed an AI-powered platform for interview preparation and resume analysis.',
        'Integrated multi-AI question generation and mock interview evaluation features.',
        'Designed a responsive interface with real-time feedback and score tracking.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Flask'],
      github: 'https://github.com/Itheshjs'
    },
    {
      id: 2,
      title: 'Forensic Video Checker (Deepfake Detection)',
      year: '2025',
      featured: true,
      category: 'ai',
      icon: ShieldAlert,
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      tagline: 'Deepfake video detection using AI and computer vision',
      description: 'A digital forensics project developed using Python to analyze video content for manipulations, inconsistencies, and deepfake artifacts.',
      bullets: [
        'Built a system to detect deepfake videos using AI techniques.',
        'Implemented logic to identify manipulated media content.',
        'Improved understanding of digital forensics and media security.'
      ],
      technologies: ['Python', 'AI', 'OpenCV', 'Digital Forensics'],
      github: 'https://github.com/Itheshjs'
    },
    {
      id: 3,
      title: 'Student Attendance Management System',
      year: '2024',
      featured: false,
      category: 'web',
      icon: Users,
      iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      tagline: 'Campus attendance tracking with session rules and reporting',
      description: 'A full-stack web application designed for academic departments to monitor classroom attendance, manage session slots, and audit attendance thresholds.',
      bullets: [
        'Built real-time session management with time-restricted windows and authentication.',
        'Implemented automated defaulter alert detection when attendance drops below 75%.',
        'Engineered responsive visual analytics dashboards for faculty and administrative reports.'
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/Itheshjs'
    },
    {
      id: 4,
      title: 'EduAR — Interactive Learning Platform',
      year: '2024',
      featured: false,
      category: 'web',
      icon: BookOpen,
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      tagline: 'Interactive web learning modules with 3D Augmented Reality',
      description: 'A web-based educational project combining foundational computer science modules with interactive browser-based 3D visualizations.',
      bullets: [
        'Built interactive simulations for automata theory and AI search algorithm models.',
        'Integrated browser-based 3D spatial models using A-Frame for zero-install visualization.',
        'Created structured student assessment checkpoints and walkthrough modules.'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'A-Frame'],
      github: 'https://github.com/Itheshjs'
    },
    {
      id: 5,
      title: 'Birthday & Event Message Scheduler',
      year: '2024',
      featured: false,
      category: 'web',
      icon: CalendarClock,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      tagline: 'Automated scheduled email notifications with background queuing',
      description: 'A scheduled messaging service automating personalized occasion greetings via email with persistent queuing and reliable delivery.',
      bullets: [
        'Configured automated background cron logic for scheduled time-sensitive email delivery.',
        'Integrated PHPMailer with template rendering and error logging.',
        'Stored dynamic schedules and event recipient logs in MongoDB with fallback handling.'
      ],
      technologies: ['PHP', 'MongoDB', 'PHPMailer', 'JavaScript', 'Cron Jobs'],
      github: 'https://github.com/Itheshjs'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category.includes(filter))

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Practical web applications, AI platforms, and technical projects built with clean code and modern tools.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects (5)' },
            { id: 'featured', label: 'Featured Highlights' },
            { id: 'web', label: 'Web Development' },
            { id: 'ai', label: 'AI & Forensics' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === btn.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon
            return (
              <div 
                key={project.id}
                className="glass-card rounded-2xl p-6 border border-slate-700/80 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${project.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {project.year}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 uppercase tracking-wide">
                          Resume Pick
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400/90 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Resume Bullets */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                    {project.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center flex-shrink-0 border border-slate-700">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">More Repositories on GitHub</h4>
              <p className="text-xs sm:text-sm text-slate-400">Explore additional open-source repositories, experiments, and code samples.</p>
            </div>
          </div>
          <a
            href="https://github.com/Itheshjs"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary whitespace-nowrap text-xs sm:text-sm"
          >
            <span>Visit github.com/Itheshjs</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects