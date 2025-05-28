/* File: app/components/Skills.tsx */
"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-heading font-semibold text-center"
      >
        Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md space-y-4"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 text-sm rounded-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
