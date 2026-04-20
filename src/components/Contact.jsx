import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
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
            message: formData.message,
            _subject: "New Portfolio Contact Message"
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message: ' + (data.message || 'Unknown error'))
      }
    } catch (error) {
      alert('There was an error connecting to the email service. Please email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:itheshjs2004@gmail.com',
      icon: '📧',
      value: 'itheshjs2004@gmail.com'
    },
    {
      name: 'Phone',
      url: 'tel:+919019816016',
      icon: '📞',
      value: '+91 9019816016'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ithesh-j-s-a65600350',
      icon: '💼',
      value: 'linkedin.com/in/ithesh-j-s-a65600350'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Itheshjs',
      icon: '🐙',
      value: 'github.com/Itheshjs'
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-tech font-semibold mb-6 text-gradient">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-tech font-semibold mb-6 text-gradient">
                Contact Information
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="card">
              <h4 className="text-xl font-tech font-semibold mb-4 text-gradient">
                Quick Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300">Always learning new technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Based in Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-tech font-semibold mb-4 text-gradient">
              Let's Build Something Amazing Together!
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                View My Work
              </button>
              <a
                href="mailto:itheshjs2004@gmail.com"
                className="btn-primary"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 