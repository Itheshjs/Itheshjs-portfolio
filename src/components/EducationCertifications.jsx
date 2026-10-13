import { GraduationCap, Award, CheckCircle2, ShieldCheck, Calendar, MapPin, ExternalLink, Star } from 'lucide-react'

const EducationCertifications = () => {
  const educationList = [
    {
      degree: 'B.E Computer Science Engineering',
      institution: 'Govt Engineering College Mosalehosalli',
      location: 'Karnataka, India',
      period: '2023 – 2026',
      scoreType: 'CGPA',
      score: '8.04 / 10.0',
      badge: 'Completed 2026',
      color: 'border-sky-500/30 bg-sky-500/5',
      accent: 'text-sky-400',
      highlights: [
        'Specialization in Core Computing, Object-Oriented Design, and Software Systems.',
        'Practical labs in Database Management, Operating Systems, and Network Architecture.',
        'Academic projects in AI Detection & Automated Evaluation Systems.'
      ]
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Govt Polytechnic Belur',
      location: 'Karnataka, India',
      period: '2020 – 2023',
      scoreType: 'CGPA',
      score: '8.56 / 10.0',
      badge: 'Distinction',
      color: 'border-indigo-500/30 bg-indigo-500/5',
      accent: 'text-indigo-400',
      highlights: [
        'Graduated with First Class with Distinction (CGPA 8.56).',
        'Built strong foundation in engineering mechanics, computational logic, and problem-solving.',
        'Lateral entry merit transition into Computer Science Engineering.'
      ]
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'GJC Mudigere',
      location: 'Karnataka, India',
      period: '2020',
      scoreType: 'Percentage',
      score: '77.76%',
      badge: 'Completed',
      color: 'border-purple-500/30 bg-purple-500/5',
      accent: 'text-purple-400',
      highlights: [
        'Strong academic performance in Mathematics and Science fundamentals.'
      ]
    }
  ]

  const certificationsList = [
    {
      title: 'Software Development Certified',
      issuer: 'Microsoft & LinkedIn',
      year: '2025',
      category: 'Software Engineering',
      description: 'Comprehensive industry certification validating core programming concepts, software development lifecycle (SDLC), algorithms, and modern developer workflows.',
      skills: ['Software Lifecycle', 'Algorithms', 'Clean Architecture', 'Microsoft Standards']
    },
    {
      title: 'Cybersecurity Certified',
      issuer: 'Microsoft & LinkedIn',
      year: '2025',
      category: 'Information Security',
      description: 'Credential covering security defense, vulnerability mitigation, identity & access management, risk evaluation, and secure coding practices.',
      skills: ['Application Security', 'Threat Assessment', 'Network Defense', 'Identity Management']
    },
    {
      title: 'CCNA 200-301 (Cisco Certified Network Associate)',
      issuer: 'Simplilearn',
      year: '2025',
      category: 'Networking',
      description: 'Rigorous networking course covering IP connectivity, IPv4/IPv6 subnetting, routing protocols, network security basics, and switching architecture.',
      skills: ['TCP/IP', 'Subnetting', 'Routing & Switching', 'Network Security']
    }
  ]

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academics &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Verified academic excellence and professional industry accreditations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Two Columns: Education & Certifications */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                <p className="text-xs text-slate-400">Formal engineering degrees &amp; school credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx}
                  className={`glass-card rounded-2xl p-6 border ${edu.color} transition-all duration-200 hover:scale-[1.01]`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 ${edu.accent} border border-slate-700`}>
                          {edu.badge}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" /> {edu.period}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-left sm:text-right pt-2 sm:pt-0">
                      <span className="text-xs text-slate-400 block">{edu.scoreType}</span>
                      <span className="text-base sm:text-lg font-extrabold text-emerald-400">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
                <p className="text-xs text-slate-400">Industry-recognized technical credentials (2025)</p>
              </div>
            </div>

            <div className="space-y-4">
              {certificationsList.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-slate-700/80 hover:border-purple-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                          {cert.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          {cert.year}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-sky-400 mt-0.5">
                        Issued by: {cert.issuer}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400 border border-slate-700">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {cert.skills.map((s) => (
                      <span 
                        key={s}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter verification callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>All degree certificates, mark sheets, and credential IDs are available for verification upon HR request.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default EducationCertifications
