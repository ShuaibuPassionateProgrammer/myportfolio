"use client";

import { ArrowDownToLine, Download, Code, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center space-y-8 pt-16 pb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h1 className="text-5xl sm:text-7xl font-heading font-bold leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ibrahim Shuaibu Isa
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Full-Stack Software Developer &amp; Mobile App Developer
        </p>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
          With <strong>5+ years of experience</strong>, I craft scalable web and mobile applications
          using modern technologies. Passionate about clean architecture, intuitive design,
          and real-world problem-solving.
        </p>
      </motion.div>

      {/* Tech highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-8 py-6"
      >
        <div className="flex items-center gap-2 text-indigo-600">
          <Globe className="w-6 h-6" />
          <span className="font-medium">Web Development</span>
        </div>
        <div className="flex items-center gap-2 text-purple-600">
          <Smartphone className="w-6 h-6" />
          <span className="font-medium">Mobile Apps</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <Code className="w-6 h-6" />
          <span className="font-medium">Full-Stack</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex justify-center gap-4 pt-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <ArrowDownToLine className="w-5 h-5" />
          View My Work
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
      >
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-indigo-600">5+</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-purple-600">50+</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-blue-600">15+</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
        </div>
      </motion.div>
    </section>
  );
}