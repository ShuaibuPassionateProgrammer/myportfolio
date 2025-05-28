/* File: app/components/Contact.tsx */
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-heading font-semibold"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg max-w-xl mx-auto text-slate-600 dark:text-slate-300"
      >
        I’m currently open to freelance opportunities, collaborations, or full-time roles. Let’s build something great together!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6"
      >
        <a
          href="mailto:ibrahimshuaibuisa7@gmail.com"
          className="flex items-center gap-2 text-indigo-600 hover:underline"
        >
          <Mail className="w-5 h-5" /> ibrahimshuaibuisa7@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/shuaibu-ibrahim-76970b279/"
          target="_blank"
          className="flex items-center gap-2 text-indigo-600 hover:underline"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a
          href="https://github.com/ShuaibuPassionateProgrammer/"
          target="_blank"
          className="flex items-center gap-2 text-indigo-600 hover:underline"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
      </motion.div>
    </section>
  );
}
