import { useState } from "react";
import { WindowProvider } from "./context/WindowContext";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import { useWindow } from "./context/WindowContext";
import {
  ProjectsApp,
  AboutApp,
  SkillsApp,
  ResumeApp,
  ContactApp,
} from "./apps";

const WindowManager = () => {
  const { windows } = useWindow();
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const appComponentMap = {
    ProjectsApp: <ProjectsApp />,
    AboutApp: <AboutApp />,
    SkillsApp: <SkillsApp />,
    ResumeApp: <ResumeApp />,
    ContactApp: <ContactApp />,
  };

  const handleStartMenuToggle = () => {
    setIsStartMenuOpen((prev) => !prev);
  };

  const handleStartMenuClose = () => {
    setIsStartMenuOpen(false);
  };

  return (
    <>
      <Desktop />
      {windows.map((win) => (
        <Window
          key={win.id}
          window={{
            ...win,
            component: appComponentMap[win.component] || null,
          }}
        />
      ))}
      <Taskbar onStartMenuToggle={handleStartMenuToggle} />
      <StartMenu isOpen={isStartMenuOpen} onClose={handleStartMenuClose} />
    </>
  );
};

function App() {
  return (
    <WindowProvider>
      <div className="fixed inset-0 overflow-hidden">
        <WindowManager />
      </div>
    </WindowProvider>
  );
}

export default App;
