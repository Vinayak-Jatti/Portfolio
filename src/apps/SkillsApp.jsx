import { motion } from "framer-motion";

const SkillsApp = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "📘" },
        { name: "bootstrap", level: 90, icon: "💚" },
        { name: "HTML & CSS", level: 98, icon: "🎨" },
        { name: "Tailwind CSS", level: 95, icon: "💨" },
        { name: "Framer Motion", level: 70, icon: "✨" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 95, icon: "🟢" },
        { name: "Express", level: 90, icon: "🚂" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "FastAPI", level: 80, icon: "⚡" },
        { name: "REST APIs", level: 95, icon: "🌐" },
        { name: "GraphQL", level: 70, icon: "🔷" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "Oracal", level: 70, icon: "🐘" },
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "Redis", level: 60, icon: "📦" },
        { name: "MySQL", level: 80, icon: "🗄️" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 50, icon: "🐳" },
        { name: "Git", level: 75, icon: "📚" },
        { name: "AWS", level: 60, icon: "☁️" },
        { name: "CI/CD", level: 50, icon: "🔄" },
        { name: "Postman", level: 70, icon: "🐧" },
      ],
    },
  ];

  return (
    <div className="h-full p-6 overflow-y-auto mb-20px">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Skills</h1>
        <p className="text-black/70 mb-8 font-mono">
          Technical expertise and proficiency
        </p>

        <div className="space-y-6 text-slate-900">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>{category.category}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-950 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-green-300 text-xs font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 0.6,
                          }}
                          className="h-full bg-gradient-to-r from-green-700 to-purple-700 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsApp;
