import { 
  X, 
  Printer, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Github, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  FileText 
} from 'lucide-react'

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.open('/resume.html', '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-slate-800/95 border-b border-slate-700/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">ITHESH JS — Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">Junior Web Developer | WordPress &amp; Frontend Specialist</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
              title="Open full page & print"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open &amp; Print PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Content */}
        <div id="printable-resume" className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-white text-slate-900 font-sans selection:bg-sky-200">
          
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">ITHESH JS</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
              <a href="mailto:itheshjs2004@gmail.com" className="text-sky-700 hover:underline">itheshjs2004@gmail.com</a>
              <span>|</span>
              <span>+91 9019816016</span>
              <span>|</span>
              <a href="https://itheshjs-portfolio.vercel.app" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">itheshjs-portfolio.vercel.app</a>
              <span>|</span>
              <a href="https://github.com/Itheshjs" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">github.com/Itheshjs</a>
              <span>|</span>
              <a href="https://linkedin.com/in/ithesh-j-s-a65600350" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">linkedin.com/in/ithesh-j-s-a65600350</a>
              <span>|</span>
              <span>Karnataka, India</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
              2026 Computer Science Engineering graduate currently in the final month of my Junior Web Developer internship at BrandElite, India. Experienced in building, customizing, and maintaining real-world client websites using HTML, CSS, JavaScript, PHP, and WordPress. Previously completed a Django Full Stack Developer internship at MEVI Technology, working on REST APIs and backend development. Built an AI-powered interview preparation platform and forensic video checker projects. Seeking junior web developer, WordPress developer, frontend, or remote web development opportunities.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Experience
            </h2>

            <div className="space-y-4">
              {/* BrandElite */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>Junior Web Developer Intern at BrandElite, India</span>
                  <span className="text-slate-500 font-medium text-xs">May 2026 – Present (Current)</span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1.5 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Developed and maintained real-world client websites using HTML, CSS, JavaScript, PHP, and WordPress.</li>
                  <li>Worked on responsive web development, ensuring websites function effectively across desktop, tablet, and mobile devices.</li>
                  <li>Customized WordPress websites, themes, plugins, layouts, and website functionality based on client requirements.</li>
                  <li>Contributed to page layout improvements, content updates, bug fixes, and continuous website maintenance.</li>
                  <li>Gained hands-on experience in real-world web development workflows, debugging, testing, and website deployment.</li>
                </ul>
              </div>

              {/* MEVI Technology */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>Django Full Stack Developer Intern at MEVI Technology, India</span>
                  <span className="text-slate-500 font-medium text-xs">February 2026 – May 2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1.5 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Developed web applications using Django and improved response speed by 30%.</li>
                  <li>Built REST APIs to handle data and increased processing efficiency by 25%.</li>
                  <li>Optimized backend code and reduced server response time by 20%.</li>
                  <li>Worked with team members to deliver stable and secure features.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              <p><strong className="text-slate-950">Web &amp; CMS:</strong> HTML5, CSS3, JavaScript, WordPress, PHP, Responsive Web Design, WordPress Customization</p>
              <p><strong className="text-slate-950">Workflow &amp; Tools:</strong> Website Maintenance, Debugging &amp; Testing, Git, GitHub, VS Code, XAMPP, Bootstrap</p>
              <p><strong className="text-slate-950">Backend &amp; Databases (Additional):</strong> Python, Django, REST APIs, SQL, PostgreSQL, MongoDB, React</p>
              <p><strong className="text-slate-950">Core Concepts:</strong> Data Structures, Object-Oriented Programming, Computer Networks, Web Security Fundamentals</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Projects
            </h2>

            <div className="space-y-3.5">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>AI-Powered Interview Preparation Platform — <span className="font-normal text-slate-600">HTML, CSS, JavaScript, Node.js, Flask</span></span>
                  <span className="text-slate-500 font-medium text-xs">2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Developed an AI-powered platform for interview preparation and resume analysis.</li>
                  <li>Integrated multi-AI question generation and mock interview evaluation system.</li>
                  <li>Designed a responsive interface with real-time feedback and score tracking.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>Forensic Video Checker — <span className="font-normal text-slate-600">Python, AI</span></span>
                  <span className="text-slate-500 font-medium text-xs">2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Built a system to detect deepfake videos using AI techniques.</li>
                  <li>Implemented logic to identify manipulated media content.</li>
                  <li>Improved understanding of digital forensics and cybersecurity.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              <li><strong className="text-slate-950">Software Development Certified</strong>, Microsoft &amp; LinkedIn — 2025</li>
              <li><strong className="text-slate-950">Cybersecurity Certified</strong>, Microsoft &amp; LinkedIn — 2025</li>
              <li><strong className="text-slate-950">CCNA 200-301</strong>, Simplilearn — 2025</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2.5">
              <div className="flex justify-between items-start text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-950 text-xs sm:text-sm">B.E Computer Science Engineering</h4>
                  <p className="text-slate-600">Govt Engineering College Mosalehosalli</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sky-700">CGPA: 8.04</span>
                  <p className="text-slate-500">2023 – 2026</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-950 text-xs sm:text-sm">Diploma Mechanical Engineering</h4>
                  <p className="text-slate-600">Govt Polytechnic Belur</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sky-700">CGPA: 8.56</span>
                  <p className="text-slate-500">2020 – 2023</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-950 text-xs sm:text-sm">SSLC</h4>
                  <p className="text-slate-600">GJC Mudigere</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sky-700">77.76%</span>
                  <p className="text-slate-500">2020</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info in Modal */}
        <div className="px-6 py-3.5 bg-slate-800 border-t border-slate-700 text-xs text-slate-400 flex items-center justify-between">
          <span className="text-slate-300">Ready for recruiter review &amp; automated ATS screening</span>
          <a 
            href="/resume.html" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
          >
            Open Standalone Printable Page <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default ResumeModal
