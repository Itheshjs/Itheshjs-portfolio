import { useState } from 'react'
import { 
  Code2, 
  Layers, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Check, 
  Sparkles 
} from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    {
      id: 'wordpress',
      title: 'WordPress & Client Web Solutions',
      icon: Layers,
      description: 'Practical client website customization, CMS management, responsive layouts, and routine maintenance.',
      skills: [
        { name: 'WordPress', badge: 'CMS', desc: 'Theme & plugin customization, layouts, client site updates' },
        { name: 'PHP', badge: 'Web', desc: 'Template hierarchy, functions, and backend customizations' },
        { name: 'Responsive Web Design', badge: 'Design', desc: 'Ensuring sites function across desktop, tablet, and mobile' },
        { name: 'WordPress Customization', badge: 'CMS', desc: 'Custom themes, plugins, layouts, and client requirements' },
        { name: 'Website Maintenance', badge: 'Workflow', desc: 'Page layout improvements, content updates, and bug fixes' },
        { name: 'Debugging & Testing', badge: 'Quality', desc: 'Real-world debugging, testing, and cross-browser checks' }
      ]
    },
    {
      id: 'frontend',
      title: 'Core Frontend Technologies & Tools',
      icon: Code2,
      description: 'Core web markup, styling, scripting, and source code management.',
      skills: [
        { name: 'HTML5', badge: 'Frontend', desc: 'Semantic page structure, accessibility, and modern markup' },
        { name: 'CSS3', badge: 'Frontend', desc: 'Responsive styling, Flexbox, Grid, and clean stylesheets' },
        { name: 'JavaScript (ES6+)', badge: 'Frontend', desc: 'DOM manipulation, dynamic interactions, and modern syntax' },
        { name: 'Git & GitHub', badge: 'Tools', desc: 'Version control, repositories, and collaborative workflows' },
        { name: 'Bootstrap & Tailwind', badge: 'Styling', desc: 'Utility-first styling and rapid responsive layouts' },
        { name: 'VS Code & XAMPP', badge: 'Tools', desc: 'Local development environment, Apache, and editor tools' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend, Databases & Additional Skills',
      icon: Database,
      description: 'Full-stack fundamentals, APIs, and relational/document databases.',
      skills: [
        { name: 'Python', badge: 'Backend', desc: 'Backend development, scripting, and project logic' },
        { name: 'Django', badge: 'Framework', desc: 'Backend web applications, ORM, and secure routing' },
        { name: 'REST APIs', badge: 'APIs', desc: 'RESTful API creation, JSON data exchange, and integration' },
        { name: 'SQL & PostgreSQL', badge: 'Database', desc: 'Relational data querying, table structure, and data handling' },
        { name: 'React.js', badge: 'Frontend', desc: 'Component architecture, state handling, and interactive UIs' },
        { name: 'MongoDB', badge: 'Database', desc: 'Document store and JSON data structures' }
      ]
    },
    {
      id: 'fundamentals',
      title: 'Computer Science Fundamentals & Security',
      icon: Cpu,
      description: 'Foundational computer science principles from B.E. CSE coursework and certifications.',
      skills: [
        { name: 'Data Structures & Algorithms', badge: 'Core CS', desc: 'Foundational problem solving, arrays, trees, and logic' },
        { name: 'Object-Oriented Programming (OOP)', badge: 'Core CS', desc: 'Modular design, encapsulation, and clean structure' },
        { name: 'Computer Networks (CCNA)', badge: 'Networking', desc: 'TCP/IP protocols, DNS, client-server models, and routing' },
        { name: 'Web Security Fundamentals', badge: 'Security', desc: 'Sanitization, basic vulnerability testing, and secure practices' }
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'wordpress', label: 'WordPress & Client Work' },
    { id: 'frontend', label: 'Frontend & Tools' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'fundamentals', label: 'CS Fundamentals' }
  ]

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory)

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Practical web development skills, WordPress customization, and core technical foundations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div 
                key={cat.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-800/60 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-sm group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                          {skill.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills