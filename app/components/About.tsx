"use client";

import { motion } from "framer-motion";
import { Award, Users, Code2, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality First",
      description: "Passionate about clean code, testing, and CI/CD"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship",
      description: "Active mentor & tech community supporter"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Open Source",
      description: "Contributor to several open-source projects"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always learning and embracing new technologies"
    }
  ];

  return (
    <motion.section
      id="about"
      className="space-y-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image Card */}
      <div className="flex justify-center">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-full p-2 shadow-lg border-4 border-indigo-100 dark:border-slate-800">
          <Image
            src="/img/rounded_profile.png"
            alt="Ibrahim Shuaibu Isa"
            width={144}
            height={144}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-heading font-semibold text-center"
      >
        About Me
      </motion.h2>
      <div className="flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I&apos;m a <strong className="text-indigo-600">Full-Stack Software Developer</strong> with over 
            <strong className="text-purple-600"> 5 years of experience</strong> crafting scalable web and mobile applications. 
            My passion lies in building robust, user-centered products that solve real-world problems.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I specialize in modern web technologies like <strong>React</strong>, <strong>Next.js</strong>, 
            and <strong>Node.js</strong>, while also building cross-platform mobile apps with 
            <strong> Flutter</strong> and <strong>React Native</strong>. My backend expertise spans 
            from <strong>Express.js</strong> to <strong>Laravel</strong>, with experience in various databases 
            and cloud platforms.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether it&lsquo;s architecting scalable systems, optimizing performance, or mentoring fellow developers, 
            I&#39;m always pushing the boundaries of what&lsquo;s possible. I believe in clean architecture, 
            intuitive design, and the power of collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col items-center"
            >
              <div className="text-indigo-600 mb-3">{highlight.icon}</div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{highlight.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow flex flex-col gap-4"
      >
        <h3 className="text-2xl font-semibold text-center mb-4">Achievements & Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4 text-center">
          <a
            href="https://www.freecodecamp.org/certification/ShuaibuPassionateProgrammer/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-xl shadow p-4 transition hover:shadow-lg hover:ring-2 hover:ring-indigo-400 dark:hover:ring-indigo-600"
          >
            <div className="text-indigo-600 font-semibold">Responsive Web Design</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">freeCodeCamp Certification</div>
          </a>
          <a
            href="https://www.freecodecamp.org/certification/ShuaibuPassionateProgrammer/javascript-algorithms-and-data-structures-v8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-xl shadow p-4 transition hover:shadow-lg hover:ring-2 hover:ring-indigo-400 dark:hover:ring-indigo-600"
          >
            <div className="text-purple-600 font-semibold">JavaScript Algorithms & Data Structures</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">freeCodeCamp Certification</div>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="max-w-3xl mx-auto text-center space-y-6">
//       <motion.h2
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl sm:text-4xl font-heading font-semibold"
//       >
//         About Me
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
//       >
//         I&apos;m a <strong className="text-indigo-600">frontend developer</strong> with a passion for
//         crafting user-centric, performant, and accessible web experiences. I enjoy working with
//         modern frameworks like <strong>React</strong> and <strong>Next.js</strong>, and I love
//         building beautiful UIs with <strong>Tailwind CSS</strong>.
//         <br /><br />
//         Whether it&rsquo;s optimizing performance, creating reusable components, or collaborating in teams,
//         I&#39;m always learning and pushing myself. When I&rsquo;m not coding, you&rsquo;ll find me exploring coffee
//         shops or sketching interface ideas.
//       </motion.p>
//     </section>
//   );
// }