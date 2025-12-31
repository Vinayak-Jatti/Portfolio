import { createContext, useContext, useState, useCallback } from 'react'

const WindowContext = createContext()

export const useWindow = () => {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindow must be used within WindowProvider')
  }
  return context
}

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([])
  const [zIndexCounter, setZIndexCounter] = useState(1000)

  // Open a new window
  const openWindow = useCallback((appId, appData) => {
    setWindows((prev) => {
      // Check if window is already open
      const existingIndex = prev.findIndex((w) => w.id === appId)
      if (existingIndex !== -1) {
        // Bring existing window to front
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          minimized: false,
          zIndex: zIndexCounter + 1,
        }
        setZIndexCounter((z) => z + 1)
        return updated
      }

      // Create new window
      const newWindow = {
        id: appId,
        title: appData.title,
        icon: appData.icon,
        component: appData.component,
        minimized: false,
        maximized: false,
        zIndex: zIndexCounter + 1,
        position: {
          x: Math.random() * 200 + 100,
          y: Math.random() * 200 + 100,
        },
        size: {
          width: appData.defaultWidth || 900,
          height: appData.defaultHeight || 600,
        },
      }
      setZIndexCounter((z) => z + 1)
      return [...prev, newWindow]
    })
  }, [zIndexCounter])

  // Close a window
  const closeWindow = useCallback((windowId) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId))
  }, [])

  // Minimize a window
  const minimizeWindow = useCallback((windowId) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, minimized: true } : w))
    )
  }, [])

  // Maximize/Restore a window
  const toggleMaximizeWindow = useCallback((windowId) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId ? { ...w, maximized: !w.maximized } : w
      )
    )
  }, [])

  // Bring window to front
  const focusWindow = useCallback((windowId) => {
    setWindows((prev) => {
      const updated = prev.map((w) =>
        w.id === windowId
          ? { ...w, zIndex: zIndexCounter + 1, minimized: false }
          : w
      )
      setZIndexCounter((z) => z + 1)
      return updated
    })
  }, [zIndexCounter])

  // Restore minimized window
  const restoreWindow = useCallback((windowId) => {
    focusWindow(windowId)
  }, [focusWindow])

  // Update window position
  const updateWindowPosition = useCallback((windowId, position) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, position } : w))
    )
  }, [])

  // Update window size
  const updateWindowSize = useCallback((windowId, size) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, size } : w))
    )
  }, [])

  const value = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    focusWindow,
    restoreWindow,
    updateWindowPosition,
    updateWindowSize,
  }

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  )
}

