const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-light border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-tech font-bold text-gradient mb-4">
              ITHESH JS
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Aspiring Full-Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-gray-400 text-xs">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="mailto:itheshjs2004@gmail.com"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                title="Email"
              >
                📧
              </a>
              <a
                href="https://linkedin.com/in/ithesh-js-a65600350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com/Itheshjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="tel:+919019816016"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                title="Phone"
              >
                📞
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Ithesh JS. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
            >
              <span>Back to Top</span>
              <span className="text-lg">↑</span>
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Made with ❤️ using React, Tailwind CSS, and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 