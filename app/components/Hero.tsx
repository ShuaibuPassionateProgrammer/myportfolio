/* File: app/components/Hero.tsx */
"use client";

import { ArrowDownToLine, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center space-y-6 pt-10">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-heading font-bold"
      >
        Hi, I’m <span className="text-indigo-600">Your Name</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl max-w-xl mx-auto text-slate-600 dark:text-slate-300"
      >
        I build fast, accessible, and elegant web experiences using modern frontend technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-4 pt-6"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition shadow-md"
        >
          <ArrowDownToLine className="w-4 h-4" />
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-800 transition shadow-sm"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}