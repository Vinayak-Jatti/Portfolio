# Windows 11 OS-Style Portfolio

A professional, Windows 11-inspired portfolio website built as a mini operating system using React, Vite, Tailwind CSS, Framer Motion, and GSAP.

## 🎯 Project Overview

This is a single-page React application that simulates a Windows 11 desktop experience to showcase a full-stack developer's skills, projects, and resume. The project is architected as a complete OS system with:

- **Desktop System** - Landing screen with wallpaper and clickable icons
- **Window Management System** - Open, close, minimize, maximize, z-index handling
- **Taskbar System** - Active apps, restore/minimize behavior, clock
- **Application System** - Independent app modules (Projects, About, Skills, Resume, Contact)

## ✨ Features

### Core Systems

- **Desktop Layer**: Full-screen desktop with Windows 11-style wallpaper and icon grid
- **Window Manager**: Complete window lifecycle management with drag, resize, minimize, maximize, and close
- **Taskbar**: Persistent taskbar showing active windows with clock and date
- **Z-Index Management**: Proper window stacking and focus management
- **Application Modules**: Five independent apps rendered inside windows

### Application Modules

1. **Projects App**: Full-stack project showcase with problem statements, features, tech stack, and links
2. **About App**: Professional introduction and career focus
3. **Skills App**: Categorized technical skills with proficiency levels
4. **Resume App**: In-app resume preview with download functionality
5. **Contact App**: Validated contact form with backend integration ready

### Design & UX

- Windows 11 Fluent Design principles
- Glassmorphism effects with backdrop blur
- Smooth animations with Framer Motion
- Professional, interview-ready presentation
- Fully responsive design

## 🛠️ Technology Stack

- **Frontend**: React 18 (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── src/
│   ├── context/
│   │   └── WindowContext.jsx      # Global window state management
│   ├── components/
│   │   ├── Desktop.jsx            # Desktop layer with icons
│   │   ├── Window.jsx             # Reusable window component
│   │   └── Taskbar.jsx            # Taskbar with active apps & clock
│   ├── apps/
│   │   ├── ProjectsApp.jsx        # Projects showcase
│   │   ├── AboutApp.jsx           # About section
│   │   ├── SkillsApp.jsx          # Skills display
│   │   ├── ResumeApp.jsx          # Resume preview
│   │   ├── ContactApp.jsx         # Contact form
│   │   └── index.js               # App exports
│   ├── App.jsx                    # Main app orchestrator
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎮 Usage

1. **Opening Apps**: Double-click any desktop icon to open an application window
2. **Window Controls**:
   - **Minimize**: Click the minimize button (-) or click the taskbar icon
   - **Maximize**: Click the maximize button (□)
   - **Close**: Click the close button (✕)
3. **Moving Windows**: Click and drag the title bar
4. **Resizing Windows**: Drag the resize handle in the bottom-right corner
5. **Taskbar**: Click taskbar icons to restore minimized windows or minimize active windows

## 🏗️ Architecture

### State Management

The application uses React Context API (`WindowContext`) to manage global window state:

- Window list and their states
- Z-index management
- Window lifecycle operations (open, close, minimize, maximize)
- Position and size management

### Component Hierarchy

```
App
└── WindowProvider (Context)
    └── WindowManager
        ├── Desktop
        ├── Window[] (dynamically rendered)
        └── Taskbar
```

### Window System

Each window contains:
- Unique ID
- Title and icon
- Component reference
- Position (x, y)
- Size (width, height)
- State (minimized, maximized)
- Z-index

## 🎨 Customization

### Adding New Apps

1. Create a new component in `src/apps/YourApp.jsx`
2. Export it from `src/apps/index.js`
3. Add icon data to `Desktop.jsx` desktopIcons array
4. Import and add to appComponentMap in `App.jsx`

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Glassmorphism utilities are in `src/index.css` (`.glass-effect`, `.glass-card`)

### Content

- **Projects**: Edit `src/apps/ProjectsApp.jsx` projects array
- **About**: Edit `src/apps/AboutApp.jsx`
- **Skills**: Edit `src/apps/SkillsApp.jsx` skillCategories array
- **Resume**: Edit `src/apps/ResumeApp.jsx` and add resume PDF
- **Contact**: Edit `src/apps/ContactApp.jsx` form handling

## 📦 Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (auto-detects Vite)

### Other Platforms

Build the project and deploy the `dist` folder:

```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🔧 Technical Decisions

- **Context API over Redux**: Simpler state management for this use case
- **Functional Components**: Modern React patterns with hooks
- **Tailwind CSS**: Utility-first CSS for rapid development
- **Framer Motion**: Declarative animations
- **No External CSS**: All styles via Tailwind utilities

## 📝 Interview Readiness

This project demonstrates:

- **System Design**: OS-like architecture with separated systems
- **State Management**: Centralized state with Context API
- **Component Architecture**: Reusable, composable components
- **User Experience**: Intuitive interactions and smooth animations
- **Code Quality**: Clean, maintainable, production-ready code

## 📄 License

MIT

## 🙏 Acknowledgments

- Windows 11 design language inspiration
- Fluent Design System principles
