// /* File: app/components/Contact.tsx */
// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="contact" className="max-w-xl mx-auto space-y-8 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-heading font-semibold"
//       >
//         Contact Me
//       </motion.h2>

//       <p className="text-lg text-slate-600 dark:text-slate-300">
//         Have an idea, opportunity, or question? I'd love to hear from you.
//       </p>

//       {submitted ? (
//         <p className="text-green-600 text-md">Thanks for reaching out! I’ll get back to you soon.</p>
//       ) : (
//         <form
//           action="https://formspree.io/f/YOUR_FORM_ID"
//           method="POST"
//           onSubmit={() => setSubmitted(true)}
//           className="flex flex-col gap-4 text-left"
//         >
//           <input
//             type="text"
//             name="name"
//             required
//             placeholder="Your Name"
//             className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none"
//           />
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="Your Email"
//             className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none"
//           />
//           <textarea
//             name="message"
//             required
//             rows={5}
//             placeholder="Your Message"
//             className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition"
//           >
//             Send Message
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto space-y-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-heading font-semibold"
      >
        Contact Me
      </motion.h2>

      <div className="flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-4" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg max-w-xl mx-auto text-slate-600 dark:text-slate-300"
      >
        I’m currently open to freelance opportunities, collaborations, or full-time roles.<br />
        Let’s build something great together!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center gap-6"
      >
        <a
          href="mailto:shuaibuibrahim523@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700 shadow hover:shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition group"
        >
          <Mail className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300" />
          <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-200">
            shuaibuibrahim523@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/shuaibu-ibrahim-76970b279/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700 shadow hover:shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition group"
        >
          <Linkedin className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300" />
          <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-200">
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/ShuaibuPassionateProgrammer/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700 shadow hover:shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition group"
        >
          <Github className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300" />
          <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-200">
            GitHub
          </span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow flex flex-col gap-4 items-center">
          <div className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
            Prefer a direct message?
          </div>
          <a
            href="mailto:shuaibuibrahim523@gmail.com"
            className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}