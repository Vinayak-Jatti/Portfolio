import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindow } from "../context/WindowContext";

const Window = ({ window: win }) => {
  const {
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindow();

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest(".window-controls")) return;
    if (e.target.closest(".window-resize")) return;

    focusWindow(win.id);
    setIsDragging(true);
    setDragStart({
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && !win.maximized) {
        updateWindowPosition(win.id, {
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart, win.maximized, win.id, updateWindowPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      width: win.size.width,
      height: win.size.height,
    });
  };

  const handleResizeMouseMove = useCallback(
    (e) => {
      if (isResizing && !win.maximized && dragStart.width && dragStart.height) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        updateWindowSize(win.id, {
          width: Math.max(400, dragStart.width + deltaX),
          height: Math.max(300, dragStart.height + deltaY),
        });
      }
    },
    [isResizing, dragStart, win.maximized, win.id, updateWindowSize]
  );

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleResizeMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleResizeMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing, handleResizeMouseMove, handleMouseUp]);

  const windowVariants = {
    minimized: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    normal: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {!win.minimized && (
        <motion.div
          ref={windowRef}
          variants={windowVariants}
          initial="minimized"
          animate="normal"
          exit="minimized"
          transition={{ duration: 0.2 }}
          className="absolute bg-white/5 backdrop-blur-[40px] border border-white/20 rounded-t-2xl shadow-2xl overflow-hidden"
          style={{
            left: win.maximized ? 0 : win.position.x,
            top: win.maximized ? 0 : win.position.y,
            width: win.maximized ? "100%" : win.size.width,
            height: win.maximized ? "100%" : win.size.height,
            zIndex: win.zIndex,
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between h-11 bg-white/10 backdrop-blur-md border-b border-white/10 px-4 cursor-move">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-2xl text-black">{win.icon}</span>
              <span className="text-lg font-bold font-sans text-gray-700 truncate">
                {win.title}
              </span>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1 window-controls">
              <button
                onClick={() => minimizeWindow(win.id)}
                className="w-10 h-10 flex items-center justify-center hover:bg-yellow-50 rounded transition-colors"
              >
                <span className="text-zinc-700 text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => toggleMaximizeWindow(win.id)}
                className="w-10 h-10 flex items-center justify-center hover:bg-green-100 rounded transition-colors"
              >
                <span className="text-zinc-700 text-sm">
                  {win.maximized ? "❐" : "□"}
                </span>
              </button>
              <button
                onClick={() => closeWindow(win.id)}
                className="w-10 h-10 flex items-center justify-center hover:bg-red-400/80 rounded transition-colors"
              >
                <span className="text-zinc-700 text-sm">✕</span>
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="h-[calc(100%-44px)] overflow-auto bg-white/5">
            {win.component}
          </div>

          {/* Resize Handle */}
          {!win.maximized && (
            <div
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize window-resize"
              onMouseDown={handleResizeMouseDown}
            >
              <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-white/30" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
