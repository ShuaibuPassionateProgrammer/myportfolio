"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "CodeAlpha",
    period: "15th September – 15th October 2025",
    description:
      "Gaining hands-on experience in modern web development practices, working on real-world projects and contributing to the development team with cutting-edge technologies.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Engineer Intern",
    company: "Flexisaf",
    period: "September – December 2025",
    description:
      "Developing responsive user interfaces and implementing interactive features for enterprise applications while collaborating with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "JavaScript", "CSS", "Git", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-heading font-semibold text-center"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-6 border-l-2 border-indigo-500 space-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <span className="absolute -left-[6.5px] top-1.5 w-3 h-3 bg-indigo-500 rounded-full" />
            <h3 className="text-xl font-semibold">
              {exp.role} – <span className="text-indigo-600">{exp.company}</span>
            </h3>
            <p className="text-sm text-slate-500">{exp.period}</p>
            <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {exp.tech.map((tech, index) => (
                <li
                  key={index}
                  className="bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/80 dark:text-indigo-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}