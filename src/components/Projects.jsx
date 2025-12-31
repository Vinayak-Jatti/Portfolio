import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce solution with cart management and checkout flow.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      tech: ['React', 'D3.js', 'Node.js'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team collaboration.',
      tech: ['React', 'Firebase', 'Framer Motion'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 4,
      title: 'Weather Forecast',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      tech: ['React', 'API Integration', 'Charts'],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media management dashboard with scheduling and analytics.',
      tech: ['React', 'GraphQL', 'Apollo'],
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      id: 6,
      title: 'Music Player',
      description: 'Modern music player with playlist management and audio visualization.',
      tech: ['React', 'Web Audio API', 'CSS Animations'],
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="projects" className="min-h-screen py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card glass-card-hover p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg bg-white/10 text-xs text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

