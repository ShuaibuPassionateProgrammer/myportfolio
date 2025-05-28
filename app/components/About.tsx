"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-semibold"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        I&apos;m a <strong className="text-indigo-600">frontend developer</strong> with a passion for
        crafting user-centric, performant, and accessible web experiences. I enjoy working with
        modern frameworks like <strong>React</strong> and <strong>Next.js</strong>, and I love
        building beautiful UIs with <strong>Tailwind CSS</strong>.
        <br /><br />
        Whether it&rsquo;s optimizing performance, creating reusable components, or collaborating in teams,
        I&#39;m always learning and pushing myself. When I&rsquo;m not coding, you&rsquo;ll find me exploring coffee
        shops or sketching interface ideas.
      </motion.p>
    </section>
  );
}