"use client";

import { motion } from "framer-motion";
import { Globe, Server, Smartphone, Database, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Frontend & Web",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", 
      "HTML5", "CSS3", "jQuery", "AJAX"
    ],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend & APIs",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Node.js", "Express.js", "Laravel", "PHP", 
      "RESTful APIs", "NextAuth.js", "JWT"
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      "Flutter", "Dart", "React Native", "Java", 
      "Kotlin", "Cross-platform"
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Databases & Cloud",
    color: "from-orange-500 to-red-500",
    skills: [
      "MongoDB", "MySQL", "PostgreSQL", "Firebase", 
      "Supabase", "Prisma", "Mongoose"
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX & Design",
    color: "from-indigo-500 to-purple-500",
    skills: [
      "Tailwind CSS", "Bootstrap", "Shadcn UI", 
      "Chakra UI", "Framer Motion", "Responsive Design"
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "DevOps & Tools",
    color: "from-gray-500 to-slate-500",
    skills: [
      "Git", "GitHub", "Docker", "Vercel", 
      "CI/CD", "Testing", "Debugging"
    ],
  },
];

const programmingLanguages = [
  { name: "JavaScript", level: 95, color: "bg-yellow-500" },
  { name: "TypeScript", level: 90, color: "bg-blue-500" },
  { name: "Dart", level: 88, color: "bg-cyan-500" },
  { name: "PHP", level: 85, color: "bg-purple-500" },
  { name: "Java", level: 80, color: "bg-red-500" },
  { name: "C++", level: 75, color: "bg-green-500" },
  { name: "Kotlin", level: 78, color: "bg-orange-500" },
  { name: "C#", level: 70, color: "bg-indigo-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-12 sm:space-y-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center"
      >
        Skills & Technologies
      </motion.h2>

      {/* Technology Categories */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 px-3 py-2 text-sm rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Programming Languages Proficiency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
          Programming Languages Proficiency
        </h3>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-700 dark:text-slate-300">{lang.name}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{lang.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full ${lang.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}