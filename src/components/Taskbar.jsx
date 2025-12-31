import { useWindow } from "../context/WindowContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Taskbar = ({ onStartMenuToggle }) => {
  const { windows, restoreWindow, minimizeWindow } = useWindow();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleTaskbarIconClick = (window) => {
    if (window.minimized) {
      restoreWindow(window.id);
    } else {
      minimizeWindow(window.id);
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-[9999]"
    >
      {/* Windows 11 Taskbar - Full width, flat bottom */}
      <div className="w-full h-11 sm:h-12 md:h-14 bg-slate-300/30 backdrop-blur-[40px] border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
        <div className="h-full flex items-center justify-between px-2 md:px-4">
          {/* Left Section - Start Button */}
          <div className="flex items-center h-full">
            <motion.button
              onClick={onStartMenuToggle}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md transition-colors relative group"
              aria-label="Start"
            >
              {/* Windows Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-microsoft"
                viewBox="0 0 16 16"
              >
                <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
              </svg>
            </motion.button>
          </div>

          {/* Center Section - App Icons (Windows 11 Style) */}
          <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 h-full px-1 md:px-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center gap-1 md:gap-2 h-full">
              {windows.map((window) => (
                <motion.button
                  key={window.id}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTaskbarIconClick(window)}
                  className={`relative h-9 w-9 md:h-12 md:w-12 flex items-center justify-center rounded-md transition-all duration-200 min-w-[36px] md:min-w-[48px] ${
                    !window.minimized ? "bg-white/10" : ""
                  }`}
                  title={window.title}
                >
                  {/* Active Window Indicator - Underline */}
                  {!window.minimized && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white rounded-full"
                    />
                  )}

                  {/* App Icon */}
                  <span className="text-base md:text-xl">{window.icon}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Section - System Tray */}
          <div className="flex items-center h-full gap-1 md:gap-2">
            {/* System Icons (Placeholder for WiFi, Battery, etc.) */}
            <div className="hidden md:flex items-center gap-1">
              <div className="h-8 w-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-wifi-off"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.706 3.294A12.6 12.6 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4q.946 0 1.852.148zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.45 8.45 0 0 1 3.51-1.27zm2.596 1.404.785-.785q.947.362 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.5 8.5 0 0 0-1.98-.932zM8 10l.933-.933a6.5 6.5 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.53.53 0 0 1-.611.09A5.5 5.5 0 0 0 8 10m4.905-4.905.747-.747q.886.451 1.685 1.03a.485.485 0 0 1 .047.737.52.52 0 0 1-.668.05 11.5 11.5 0 0 0-1.811-1.07M9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A2 2 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z" />
                </svg>
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded hover:bg-white/5 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  class="bi bi-battery-charging"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
                  <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
                  <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  <path d="M12 10h-1.783l1.542-1.639q.146-.156.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
                </svg>
              </div>
            </div>

            {/* Date & Time */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="h-8 sm:h-9 md:h-10 px-2 md:px-3 flex flex-col items-end justify-center rounded-md hover:bg-white/5 transition-colors cursor-pointer min-w-[50px] sm:min-w-[60px] md:min-w-[80px]"
            >
              <div className="text-[10px] sm:text-[13px] md:text-xs font-medium text-white leading-tight whitespace-nowrap">
                {formatTime(currentTime)}
              </div>
              <div className="text-[9px] sm:text-[13px] text-white/70 leading-tight hidden sm:block">
                {formatDate(currentTime)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Taskbar;
