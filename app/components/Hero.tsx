"use client";

import { ArrowDownToLine, Download, Code, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-gradient-to-br from-indigo-300 via-purple-200 to-blue-200 dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-full opacity-20 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl shadow-2xl px-6 py-12 sm:py-16 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extrabold font-heading leading-tight tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ibrahim Shuaibu Isa
          </span>
        </motion.h1>
        {/* Animated gradient border */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200"
        >
          Full-Stack Software Developer &amp; Mobile App Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          With <strong>5+ years of experience</strong>, I craft scalable web and mobile applications
          using modern technologies. Passionate about clean architecture, intuitive design,
          and real-world problem-solving.
        </motion.p>

        {/* Tech highlights */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 py-8"
        >
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/40 shadow border border-indigo-100 dark:border-indigo-900 font-medium text-indigo-700 dark:text-indigo-200 text-base">
            <Globe className="w-5 h-5" />
            Web Development
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 shadow border border-purple-100 dark:border-purple-900 font-medium text-purple-700 dark:text-purple-200 text-base">
            <Smartphone className="w-5 h-5" />
            Mobile Apps
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 shadow border border-blue-100 dark:border-blue-900 font-medium text-blue-700 dark:text-blue-200 text-base">
            <Code className="w-5 h-5" />
            Full-Stack
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
          >
            <ArrowDownToLine className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-10"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 drop-shadow">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 drop-shadow">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 drop-shadow">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}