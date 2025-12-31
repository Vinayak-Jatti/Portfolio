import { motion } from 'framer-motion'

const AboutApp = () => {
  return (
    <div className="h-full p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">About Me</h1>
        <p className="text-white/70 mb-8">Full-stack developer & technical architect</p>

        <div className="glass-card p-8 rounded-2xl mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-5xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">Full-Stack Developer</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                I'm a passionate full-stack developer with expertise in building scalable web applications
                and robust software solutions. With a strong foundation in both frontend and backend
                technologies, I specialize in creating seamless user experiences powered by efficient,
                maintainable code.
              </p>
              <p className="text-white/80 leading-relaxed">
                My approach combines technical excellence with user-centric design, ensuring that every
                application I build is not only performant but also intuitive and accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Career Focus</h3>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Building scalable web applications</span>
              </li>
              <li className="text-white/80 flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>System architecture & design patterns</span>
              </li>
              <li className="text-white/80 flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Performance optimization</span>
              </li>
              <li className="text-white/80 flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Clean code & best practices</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-1">Senior Full-Stack Developer</h4>
                <p className="text-white/60 text-sm mb-1">Tech Company • 2021 - Present</p>
                <p className="text-white/80 text-sm">
                  Leading development of enterprise applications with React and Node.js
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Full-Stack Developer</h4>
                <p className="text-white/60 text-sm mb-1">Startup Inc. • 2019 - 2021</p>
                <p className="text-white/80 text-sm">
                  Built and maintained multiple production applications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutApp

