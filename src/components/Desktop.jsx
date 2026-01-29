import { useWindow } from "../context/WindowContext";
import { motion } from "framer-motion";

const Desktop = () => {
  const { openWindow } = useWindow();

  const desktopIcons = [
    {
      id: "projects",
      title: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-briefcase-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
        </svg>
      ),
      component: "ProjectsApp",
      defaultWidth: 1000,
      defaultHeight: 700,
    },
    {
      id: "about",
      title: "About Me",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-person-vcard-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
        </svg>
      ),
      component: "AboutApp",
      defaultWidth: 800,
      defaultHeight: 600,
    },
    {
      id: "skills",
      title: "Skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-gear-wide-connected"
          viewBox="0 0 16 16"
        >
          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
        </svg>
      ),
      component: "SkillsApp",
      defaultWidth: 800,
      defaultHeight: 650,
    },
    {
      id: "resume",
      title: "Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-file-earmark-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
        </svg>
      ),
      component: "ResumeApp",
      defaultWidth: 900,
      defaultHeight: 700,
    },
    {
      id: "contact",
      title: "Contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-envelope-plus-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
        </svg>
      ),
      component: "ContactApp",
      defaultWidth: 700,
      defaultHeight: 600,
    },
  ];

  const handleIconDoubleClick = (icon) => {
    openWindow(icon.id, {
      title: icon.title,
      icon: icon.icon,
      component: icon.component,
      defaultWidth: icon.defaultWidth,
      defaultHeight: icon.defaultHeight,
    });
  };

  return (
    <div className="fixed inset-0">
      {/* Windows 11 Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Desktop Icons Grid */}
      <div className="absolute left-8 top-8 grid grid-cols-1 gap-8 z-10">
        {desktopIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 120,
              damping: 14,
              mass: 0.6,
            }}
            className="flex flex-col items-center cursor-pointer group select-none"
            onDoubleClick={() => handleIconDoubleClick(icon)}
            whileHover={{
              scale: 1.12,
              y: -4,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 18,
              },
            }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Icon Container */}
            <motion.div
              className="w-16 h-16 flex items-center justify-center
               bg-white/10 backdrop-blur-md rounded-2xl mb-2
               border border-white/20 shadow-lg"
              whileHover={{
                boxShadow: "0px 12px 30px rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.22)",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="text-3xl">{icon.icon}</span>
            </motion.div>

            {/* Icon Label */}
            <motion.div
              className="px-2 py-0.5 rounded
               bg-white/50 backdrop-blur-sm
               text-black text-xs font-medium text-center
               max-w-[80px] truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.15 }}
            >
              {icon.title}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
