/* File: app/components/Projects.tsx */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DevFinder",
    description: "A GitHub profile search app using the GitHub API, built with Next.js and Tailwind.",
    image: "/projects/devfinder.png",
    tech: ["Next.js", "Tailwind", "API"],
    demo: "https://devfinder.vercel.app",
    code: "https://github.com/your-username/devfinder",
  },
  {
    title: "Taskify",
    description: "A drag-and-drop kanban board for task management, built with React and Zustand.",
    image: "/projects/taskify.png",
    tech: ["React", "Zustand", "Framer Motion"],
    demo: "https://taskify.vercel.app",
    code: "https://github.com/your-username/taskify",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-heading font-semibold text-center"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-md">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
