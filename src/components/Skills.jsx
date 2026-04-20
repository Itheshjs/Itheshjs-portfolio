import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pulse')
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'React & Django', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'Databases (SQL/NoSQL)', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Cybersecurity Testing', level: 75, color: 'from-purple-500 to-pink-500' },
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 90, color: 'from-green-500 to-teal-500' },
    { name: 'Team Collaboration', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'Communication', level: 80, color: 'from-purple-500 to-violet-500' },
    { name: 'Adaptability', level: 85, color: 'from-orange-500 to-yellow-500' },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card">
            <h3 className="text-2xl font-tech font-semibold mb-8 text-gradient">
              Programming Languages & Tools
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      ref={(el) => (skillRefs.current[`tech-${index}`] = el)}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      onAnimationStart={(e) => {
                        setTimeout(() => {
                          e.target.style.width = `${skill.level}%`
                        }, 100)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card">
            <h3 className="text-2xl font-tech font-semibold mb-8 text-gradient">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-secondary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      ref={(el) => (skillRefs.current[`soft-${index}`] = el)}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      onAnimationStart={(e) => {
                        setTimeout(() => {
                          e.target.style.width = `${skill.level}%`
                        }, 100)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-tech font-semibold mb-8 text-center text-gradient">
            Additional Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HTML, CSS & Bootstrap',
              'MongoDB & PostgreSQL',
              'REST APIs & Postman',
              'Burp Suite',
              'Git & GitHub',
              'VS Code & XAMPP',
              'Data Structures & OOP',
              'Web Security & Auth',
            ].map((skill) => (
              <div key={skill} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-3">💻</div>
                <h4 className="font-medium text-gray-300 group-hover:text-primary transition-colors duration-300">
                  {skill}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills 