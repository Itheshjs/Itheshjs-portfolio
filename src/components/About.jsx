const About = () => {
  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download feature coming soon!')
  }

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Certifications */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-tech font-semibold mb-4 text-gradient">
                Profile Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Results-driven Computer Science undergraduate with strong experience in full-stack development, cybersecurity, and AI-based applications. Proven ability to develop scalable web applications and improve system efficiency through optimized backend logic. Experienced in Django, Python, and security testing with hands-on internship exposure. Seeking an entry-level software development role to contribute technical expertise and problem-solving skills.
              </p>
            </div>

            <div className="card">
              <h4 className="text-2xl font-tech font-semibold mb-4 text-gradient">
                Certifications
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <span className="text-white font-medium">Software Development Certified</span>
                    <p className="text-gray-400 text-sm">Microsoft & LinkedIn (2025)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <span className="text-white font-medium">Cybersecurity Certified</span>
                    <p className="text-gray-400 text-sm">Microsoft & LinkedIn (2025)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <span className="text-white font-medium">CCNA 200-301</span>
                    <p className="text-gray-400 text-sm">Simplilearn (2025)</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={downloadResume}
              className="btn-primary w-full sm:w-auto"
            >
              📄 Download Resume
            </button>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-tech font-semibold mb-6 text-gradient">
                Education
              </h3>
              
              <div className="space-y-6">
                {/* Current Education */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      B.E. Computer Science Engineering
                    </h4>
                    <p className="text-primary font-medium">
                      Govt Engineering College Hassan
                    </p>
                    <p className="text-gray-400 text-sm">
                      2026 | CGPA: 7.73
                    </p>
                  </div>
                </div>

                {/* Diploma */}
                <div className="relative pl-8 border-l-2 border-secondary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      Diploma Mechanical Engineering
                    </h4>
                    <p className="text-secondary font-medium">
                      Govt Polytechnic Belur
                    </p>
                    <p className="text-gray-400 text-sm">
                      2023 | CGPA: 8.56
                    </p>
                  </div>
                </div>

                {/* SSLC */}
                <div className="relative pl-8 border-l-2 border-primary border-b-transparent">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      SSLC
                    </h4>
                    <p className="text-primary font-medium">
                      GJC Mudigere
                    </p>
                    <p className="text-gray-400 text-sm">
                      2020 | 77.76%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 