import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Dock = () => {
  const dockRef = useRef(null)
  const iconsRef = useRef([])

  const dockIcons = [
    { name: 'Home', icon: '🏠', href: '#home' },
    { name: 'Projects', icon: '💼', href: '#projects' },
    { name: 'About', icon: '👤', href: '#about' },
    { name: 'Skills', icon: '⚡', href: '#skills' },
    { name: 'Contact', icon: '📧', href: '#contact' },
  ]

  useEffect(() => {
    // GSAP animation for dock entrance
    if (dockRef.current) {
      gsap.from(dockRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      })
    }

    // Stagger animation for icons
    const icons = iconsRef.current.filter(Boolean)
    if (icons.length > 0) {
      gsap.from(icons, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        delay: 1,
      })
    }
  }, [])

  const handleIconHover = (index) => {
    gsap.to(iconsRef.current[index], {
      scale: 1.5,
      y: -10,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleIconLeave = (index) => {
    gsap.to(iconsRef.current[index], {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50" ref={dockRef}>
      <div className="glass-effect rounded-3xl px-4 py-3 shadow-2xl backdrop-blur-[40px] border border-white/20">
        <div className="flex items-center gap-3">
          {dockIcons.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              ref={(el) => (iconsRef.current[index] = el)}
              onMouseEnter={() => handleIconHover(index)}
              onMouseLeave={() => handleIconLeave(index)}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer relative group"
              title={item.name}
            >
              <span className="text-2xl">{item.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 px-3 py-1 rounded-lg glass-effect text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dock

