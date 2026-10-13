import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  Briefcase, 
  Clock, 
  Globe 
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [copiedType, setCopiedType] = useState(null)

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("https://formsubmit.co/ajax/itheshjs2004@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          message: formData.message,
          _subject: `New Portfolio Recruiter Inquiry from ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Open for Junior Web Developer, WordPress Developer, Frontend, and Remote Web Development opportunities worldwide.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Recruiter Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-700/80 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" /> Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Reach out directly via phone, WhatsApp, or email. Responses are typically sent within a few hours.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Email</span>
                    <a href="mailto:itheshjs2004@gmail.com" className="text-xs sm:text-sm font-medium text-white hover:text-sky-400 truncate block">
                      itheshjs2004@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('itheshjs2004@gmail.com', 'email')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors flex-shrink-0"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card with Copy button */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Phone / WhatsApp</span>
                    <a href="tel:+919019816016" className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 truncate block">
                      +91 9019816016
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919019816016', 'phone')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors flex-shrink-0"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/919019816016?text=Hi%20Ithesh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              {/* Social Link Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/ithesh-j-s-a65600350"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center gap-2.5 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Itheshjs"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white flex items-center gap-2.5 transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-200 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">GitHub Profile</span>
                </a>
              </div>

            </div>

            {/* Recruiter Availability Summary */}
            <div className="glass-card rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Recruiter Quick Details
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Current Location:</span>
                  <span className="font-semibold text-white">Karnataka, India</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Notice Period:</span>
                  <span className="font-semibold text-emerald-400">Immediate / Negotiable</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Preferred Locations:</span>
                  <span className="font-semibold text-white">Bengaluru, Remote, Worldwide</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Roles Targeted:</span>
                  <span className="font-semibold text-sky-400">Junior Web Dev, WordPress, Frontend</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have an opportunity or interview inquiry? Fill out the form below to reach my inbox directly.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <Check className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message sent successfully!</span>
                    Thank you for reaching out. I will review your message and reply promptly.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm">
                  Failed to send message automatically. Please email directly at <a href="mailto:itheshjs2004@gmail.com" className="underline font-semibold">itheshjs2004@gmail.com</a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / Recruiter Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="e.g. recruiter@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="e.g. TechCorp Solutions"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message / Job Opportunity Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none transition-colors resize-none"
                    placeholder="Provide details about the role, technical requirements, or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Inquiry to Ithesh JS'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact