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