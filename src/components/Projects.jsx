import { useState } from 'react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Interview Preparation Bot',
      description: 'Designed and developed an AI chatbot system improving user interaction efficiency by 40%. Implemented a resume analysis feature to enhance the candidate evaluation process and built a responsive UI enabling real-time communication and feedback.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django'],
      status: 'Completed',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Forensic Video Checker',
      description: 'Developed a deepfake detection system to identify manipulated videos with improved accuracy. Implemented AI-based analysis techniques for digital forensics and enhanced cybersecurity awareness through real-world application use cases.',
      technologies: ['Python', 'AI'],
      status: 'Completed',
      icon: '🔍',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Birthday Message Scheduler',
      description: 'A web application that automates sending personalized birthday and special occasion messages via email at scheduled times. Includes a background scheduler with configurable logic, REST APIs, and fallback storage.',
      technologies: ['PHP', 'MongoDB', 'PHPMailer', 'JavaScript'],
      status: 'Completed',
      icon: '🎂',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'EduAR - E-Learning with Augmented Reality',
      description: 'A web-based educational platform integrating interactive learning modules with AR capabilities for computer science subjects. Features an interactive Wumpus World AI simulation, NFA/DFA automata simulator, and expands traditional e-learning with AR visualizations.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'A-Frame'],
      status: 'Completed',
      icon: '🎓',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'Student Attendance Management System',
      description: 'A full-stack web application for automated student attendance tracking. Features real-time session management with time-restricted windows, dual authentication, automated defaulter detection (<75%), and visual analytics dashboards.',
      technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'Heroku'],
      status: 'Completed',
      icon: '📊',
      color: 'from-red-500 to-orange-500'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-tech font-semibold mb-8 text-center text-gradient">
            Completed Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-tech font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-primary">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center rounded-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{project.icon}</div>
                      <h4 className="text-xl font-tech font-semibold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 text-sm px-4">
                        Click to view more details
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Projects */}
        <div className="card">
          <h3 className="text-2xl font-tech font-semibold mb-6 text-gradient">
            Future Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 p-4 glass rounded-lg">
              <div className="text-3xl">🚀</div>
              <div>
                <h4 className="font-semibold text-white">Coming Soon...</h4>
                <p className="text-gray-400 text-sm">More innovative projects in development</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 glass rounded-lg">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-semibold text-white">Open to Ideas</h4>
                <p className="text-gray-400 text-sm">Always exploring new technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl font-tech font-bold text-primary mb-2">5</div>
            <div className="text-gray-300 text-sm">Completed Projects</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-tech font-bold text-secondary mb-2">5+</div>
            <div className="text-gray-300 text-sm">Technologies Used</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-tech font-bold text-primary mb-2">100%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-tech font-bold text-secondary mb-2">∞</div>
            <div className="text-gray-300 text-sm">Future Potential</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 