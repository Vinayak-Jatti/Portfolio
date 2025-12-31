import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useWindow } from '../context/WindowContext'

const StartMenu = ({ isOpen, onClose }) => {
  const { openWindow } = useWindow()
  const [searchQuery, setSearchQuery] = useState('')

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const pinnedApps = [
    {
      id: 'projects',
      title: 'Projects',
      icon: '💼',
      component: 'ProjectsApp',
      defaultWidth: 1000,
      defaultHeight: 700,
    },
    {
      id: 'about',
      title: 'About Me',
      icon: '👤',
      component: 'AboutApp',
      defaultWidth: 800,
      defaultHeight: 600,
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '⚡',
      component: 'SkillsApp',
      defaultWidth: 800,
      defaultHeight: 650,
    },
    {
      id: 'resume',
      title: 'Resume',
      icon: '📄',
      component: 'ResumeApp',
      defaultWidth: 900,
      defaultHeight: 700,
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '📧',
      component: 'ContactApp',
      defaultWidth: 700,
      defaultHeight: 600,
    },
  ]

  const quickLinks = [
    { title: 'GitHub', icon: '🔗', url: 'https://github.com/Vinayak-Jatti' },
    { title: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/vinayak-jatti' },
    { title: 'Email', icon: '📧', url: 'mailto:vinayakjatti044@gmail.com' },
  ]

  const handleAppClick = (app) => {
    openWindow(app.id, {
      title: app.title,
      icon: app.icon,
      component: app.component,
      defaultWidth: app.defaultWidth,
      defaultHeight: app.defaultHeight,
    })
    onClose()
  }

  const filteredApps = pinnedApps.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998]"
            onClick={onClose}
          />

          {/* Start Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-16 md:bottom-20 left-4 z-[9999] w-[90vw] sm:w-[480px] md:w-[520px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-effect rounded-2xl shadow-2xl backdrop-blur-[40px] border border-white/20 overflow-hidden">
              {/* Search Bar */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus-within:border-white/30 focus-within:bg-white/10 transition-all">
                  <svg
                    className="w-5 h-5 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type here to search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {/* Pinned Apps */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-2">
                    Pinned
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredApps.map((app) => (
                      <motion.button
                        key={app.id}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAppClick(app)}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <div className="text-3xl">{app.icon}</div>
                        <span className="text-xs text-white font-medium text-center">
                          {app.title}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-2">
                    Quick Links
                  </h3>
                  <div className="space-y-1">
                    {quickLinks.map((link) => (
                      <motion.a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="text-sm text-white font-medium">{link.title}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* User Account Section */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">Vinayak Jatti</div>
                      <div className="text-xs text-white/60">Full-Stack Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default StartMenu

