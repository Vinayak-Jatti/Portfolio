import { motion } from "framer-motion";

const AboutApp = () => {
  return (
    <div className="h-full p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold font-sans text-black mb-2">
          About Me
        </h1>
        <p className="text-black/40 mb-8 font-mono font-thin">
          Full-stack developer & technical architect
        </p>

        <div className="glass-card p-8 rounded-2xl mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-black/80 to-white/100 flex items-center justify-center text-5xl">
              <img className=" backdrop-filter" src="\image.png" alt="image" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Full-Stack Developer
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                I'm a passionate full-stack developer with expertise in building
                scalable web applications and robust software solutions. With a
                strong foundation in both frontend and backend technologies, I
                specialize in creating seamless user experiences powered by
                efficient, maintainable code.
              </p>
              <p className="text-gray-900 leading-relaxed">
                My approach combines technical excellence with user-centric
                design, ensuring that every application I build is not only
                performant but also intuitive and accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              #Career Focus
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-900 flex items-start gap-3">
                <span className="text-blue-900 mt-1">→</span>
                <span>Building scalable web applications</span>
              </li>
              <li className="text-gray-900 flex items-start gap-3">
                <span className="text-blue-900 mt-1">→</span>
                <span>System architecture & design patterns</span>
              </li>
              <li className="text-gray-900 flex items-start gap-3">
                <span className="text-blue-900 mt-1">→</span>
                <span>Performance optimization</span>
              </li>
              <li className="text-gray-900 flex items-start gap-3">
                <span className="text-blue-900 mt-1">→</span>
                <span>Clean code & best practices</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 120,
              damping: 16,
              mass: 0.6,
            }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold  text-slate-900 mb-4">
              #Education
            </h3>

            <div className="space-y-5">
              {/* BCA */}
              <div>
                <h4 className="text-gray-900 font-semibold mb-1">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-gray-900 text-sm mb-1">
                  Rani Channamma University, Belagavi
                </p>
                <p className="text-gray-900 text-sm">
                  CGPA: <span className="font-medium">7.02</span>
                </p>
              </div>

              {/* PUC */}
              <div>
                <h4 className="text-gray-900 font-semibold mb-1">
                  Pre-University Course (PUC)
                </h4>
                <p className="text-gray-900 text-sm mb-1">
                  PDJ Pre-University College, Vijayapura
                </p>
                <p className="text-gray-900 text-sm">
                  Percentage: <span className="font-medium">66%</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutApp;
