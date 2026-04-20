const Services = () => {
  const experiences = [
    {
      role: 'Django Full Stack Developer Intern',
      company: 'MEVI Technology',
      location: 'India',
      date: '2026',
      icon: '🚀',
      achievements: [
        'Developed and deployed dynamic web applications using Django, improving application responsiveness by 30%',
        'Designed and implemented REST APIs, enhancing data processing efficiency by 25%',
        'Optimized backend logic and database queries, reducing response time by 20%',
        'Collaborated with team members to deliver scalable and secure application features'
      ]
    },
    {
      role: 'Cybersecurity Intern',
      company: 'Technograde',
      location: 'India',
      date: '2025',
      icon: '🛡️',
      achievements: [
        'Performed vulnerability assessment including SQL Injection, XSS, and CSRF attacks',
        'Identified and mitigated security risks, improving application security by 35%',
        'Analyzed HTTP traffic using Burp Suite for penetration testing',
        'Strengthened knowledge in web security practices and ethical hacking'
      ]
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center text-center space-y-3">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <div className="bg-gray-800 rounded-full px-4 py-1 text-primary text-sm font-semibold mt-2">
                    {exp.date}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-tech font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-secondary mb-4">
                    {exp.company}, {exp.location}
                  </h4>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 