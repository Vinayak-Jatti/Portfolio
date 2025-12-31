import { motion } from "framer-motion";

const ProjectsApp = () => {
  const projects = [
    {
      id: 1,
      title: "WonderRooms",
      description:
        "Full-stack rental platform for students to find and book affordable rooms and PG accommodations. A comprehensive web-based solution connecting students with verified rental properties.",
      problem:
        "Students struggle to find affordable, verified, and safe accommodation near their educational institutions. Existing platforms lack student-specific features and verification processes.",
      features: [
        "User authentication & authorization",
        "Property listing with search & filters",
        "Room/PG booking system",
        "Student verification",
        "Property owner dashboard",
        "Booking management",
        "Review & rating system",
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Joi",
        "Method-Override",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Vinayak-Jatti/wonderRooms-repo.git",
      live: "https://wonderrooms-home.onrender.com/listings",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-house-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
          <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description:
        "Full-stack stock trading web application replicating Zerodha's core features, including user authentication, real-time dashboard analytics, holdings management, and positions tracking.",
      problem:
        "Learning stock trading platforms requires understanding complex financial interfaces. Building a clone helps understand trading workflows, real-time data handling, and financial calculations.",
      features: [
        "User authentication & authorization",
        "Real-time stock data integration",
        "Interactive dashboard with analytics",
        "Holdings & positions tracking",
        "Chart visualization with Chart.js",
        "Portfolio management",
        "Order placement system",
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
        "Mongoose",
        "Postman",
        "Jest",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Vinayak-Jatti/Zerodha_Clone.git",
      live: null,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-graph-up-arrow"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Placement Portal",
      description:
        "Production-ready full-stack placement management system for managing placement drives, student profiles, and recruitment workflows. Designed for Students, HODs, and TPOs with comprehensive features.",
      problem:
        "Educational institutions need a centralized system to manage placement drives, track student applications, coordinate between students, HODs, and TPOs, and generate reports efficiently.",
      features: [
        "Role-based dashboards (Student, HOD, TPO)",
        "Resume builder & management",
        "Drive management & scheduling",
        "Application tracking system",
        "Approval workflows",
        "Analytics & reporting",
        "Excel export functionality",
        "Email notifications",
      ],
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Multer",
        "Node Mailer",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Vinayak-Jatti/Student_Job_Portal.git",
      live: null,
      image: (
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
    },
  ];

  return (
    <div className="h-full p-6 overflow-y-auto font-sans text-lg text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold  mb-2">Projects</h1>
        <p className=" mb-8 font-mono text-slate-700">
          Full-stack applications and solutions
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{project.image}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold ">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  #Problem Statement:
                </h3>
                <p className=" text-sm">{project.problem}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">#Key Features:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className=" text-sm flex items-center gap-2">
                      <span className="text-blue-950">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold  mb-2">#Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-300/50 text-blue-950 font-semibold rounded-lg text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/50 hover:bg-black/70 rounded-lg text-sm text-white/80 transition-colors border border-white/20 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black hover:bg-blue-950 rounded-lg text-sm text-white transition-colors border border-blue-500/30 flex items-center gap-2"
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsApp;
