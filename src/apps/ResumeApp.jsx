import { motion } from "framer-motion";

const ResumeApp = () => {
  // Resume PDF Configuration
  // Option 1: Local file (place resume.pdf in public folder)
  // Option 2: Google Drive (get shareable link and use direct download URL)
  // Option 3: Any external URL (Dropbox, OneDrive, etc.)

  // For Google Drive:
  // 1. Upload PDF to Google Drive
  // 2. Right-click > Share > Anyone with the link
  // 3. Get the file ID from the URL: https://drive.google.com/file/d/FILE_ID/view
  // 4. Use: https://drive.google.com/uc?export=download&id=FILE_ID

  // For local file, use: '/resume.pdf'
  // For external URL, use the full URL
  const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";
  const RESUME_NAME = "Vinayak_Jatti_Resume.pdf";

  const handleDownload = () => {
    // Download resume PDF
    const link = document.createElement("a");
    link.href = RESUME_URL;

    // For external URLs, we need to fetch and download
    if (RESUME_URL.startsWith("http")) {
      fetch(RESUME_URL)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          link.href = url;
          link.download = RESUME_NAME;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading resume:", error);
          // Fallback: open in new tab
          window.open(RESUME_URL, "_blank");
        });
    } else {
      // Local file
      link.download = RESUME_NAME;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleView = () => {
    // Open resume in new tab
    window.open(RESUME_URL, "_blank");
  };

  return (
    <div className="h-full p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-cyan-950 mb-2">Resume</h1>
            <p className="text-gray-800 font-[corpareate mono]">
              Download or view my professional resume
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleView}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors border border-white/20 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>View PDF</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-6 py-3 bg-black/85 hover:bg-black/75 rounded-lg text-white font-medium transition-colors border border-blue-500/30 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download PDF</span>
            </motion.button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="glass-card p-8 rounded-2xl bg-white/5 font-[corparate mono]">
          <div className="bg-gray-300 text-gray-900 p-8 rounded-lg">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
              <h2 className="text-4xl font-bold mb-2">VINAYAK JATTI</h2>
              <p className="text-gray-600 text-lg font-medium">
                Full Stack Web Developer
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm text-gray-700">
                <span> vinayakjatti044@gmail.com </span>
                <span> | +91-84310 59255 |</span>
                <span> Vijayapura, Karnataka</span>
              </div>
              <div className="flex justify-center gap-4 mt-3 text-sm">
                <a
                  href="https://www.linkedin.com/in/vinayak-jatti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-800 underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Vinayak-Jatti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-800 underline"
                >
                  GitHub
                </a>
              </div>
            </div>
            <hr className="border-white/20 my-6" />

            {/* Objective */}
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                #OBJECTIVE
              </h3>
              <p className="text-gray-700 leading-relaxed font-[corparate mono]">
                Full Stack Web Developer with hands-on MERN stack experience,
                building responsive, scalable applications, delivering efficient
                solutions for real-world problems. Proficient in intuitive UI
                with robust backend development.
              </p>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                #EDUCATION
              </h3>
              <div className="space-y-3">
                <div>
                  <ul></ul>
                  <h4 className="font-semibold text-lg font-[corparate mono]">
                    BCA (Bachelor of Computer Applications)
                  </h4>
                  <p className="text-gray-600">
                    Rani Channamma University, Belagavi
                  </p>
                  <p className="text-gray-700">CGPA: 7.26</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg font-[corparate mono] ">
                    PUC (Pre-University Course)
                  </h4>
                  <p className="text-gray-600">
                    PDJ Pre-University College, Vijayapura
                  </p>
                  <p className="text-gray-700">Percentage: 66%</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">
                    Languages:
                  </h5>
                  <p className="text-sm">
                    JavaScript, Java (Intermediate), Python (Intermediate)
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">
                    Frontend:
                  </h5>
                  <p className="text-sm">
                    HTML5, CSS3 (Bootstrap, Tailwind, Material UI), JS (ES6+),
                    React.js, Next.js
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Backend:</h5>
                  <p className="text-sm">
                    Node.js, Express.js, RESTful APIs, JSON, AJAX
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">
                    Databases:
                  </h5>
                  <p className="text-sm">MongoDB, MySQL, Firebase</p>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-semibold mb-2 text-gray-900">
                    Tools & Platforms:
                  </h5>
                  <p className="text-sm">
                    Git, GitHub, VS Code, Postman, npm, Redux
                  </p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                PROJECTS
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg">
                    WonderRooms | Full Stack Rental Application
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Web-based rental platform for students to find and book
                    affordable rooms/PG's.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Tech Stack:</strong> HTML, CSS, JavaScript, EJS,
                    Node.js, Express.js, MongoDB, Mongoose, Joi,
                    Method-Override, Git, GitHub
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    Zerodha Clone | Full Stack Trading Application
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Developed a full-stack stock trading web application
                    replicating Zerodha's core features, including user
                    authentication, dashboard analytics, holdings, and positions
                    tracking.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Tech Stack:</strong> HTML, CSS, JavaScript,
                    React.js, Node.js, Express.js, MongoDB, Chart.js,
                    npm-packages, MongoDB, Mongoose, Git, GitHub, Postman, Jest
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    Placement Portal | Full-Stack Placement Management System
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    Developed a production-ready portal for managing placement
                    drives, student profiles, recruitment workflows for
                    Students, HODs, and TPOs. Built features like dashboards,
                    resume builder, drive management, application tracking,
                    approvals, analytics, and Excel exports.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Tech Stack:</strong> React, Vite, Tailwind CSS,
                    Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Node
                    mailer
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                CERTIFICATIONS
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Full Stack Web Development – APNA COLLEGE</li>
                <li>DSA on Java – APNA COLLEGE</li>
                <li>UI/UX Workshop – INNOOVATUM</li>
              </ul>
            </section>

            {/* Soft Skills */}
            <section>
              <h3 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                SOFT SKILLS
              </h3>
              <p className="text-gray-700">
                Problem-Solving | Team Collaboration | Creativity | Attention to
                Detail | Adaptability | Fluent in English
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeApp;
