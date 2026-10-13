import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, FileText } from 'lucide-react'

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                IJ
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ITHESH JS
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Junior Web Developer &amp; WordPress Specialist. Experienced in client website development, responsive design, and modern frontend technologies.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:bg-sky-500/20 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="space-y-2.5 text-sm">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Education & Certifications', href: '#education' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Contact */}
          <div className="md:col-span-4 text-center md:text-left space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href="mailto:itheshjs2004@gmail.com" className="hover:text-white transition-colors">
                  itheshjs2004@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+919019816016" className="hover:text-white transition-colors">
                  +91 9019816016
                </a>
              </p>
              <p className="text-slate-500">Karnataka, India (Available for Relocation)</p>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-3">
              <a
                href="https://linkedin.com/in/ithesh-j-s-a65600350"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Itheshjs"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:itheshjs2004@gmail.com"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Ithesh JS. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with React &amp; Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-sky-400 font-semibold cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer