"use client";

import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Handle keyboard navigation for footer links
  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.hash = href;
    }
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ShuaibuPassionateProgrammer",
      icon: Github,
      label: "Visit my GitHub profile"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shuaibu-ibrahim-76970b279",
      icon: Linkedin,
      label: "Connect on LinkedIn"
    },
    {
      name: "Twitter",
      href: "https://x.com/shuaibu92685472",
      icon: Twitter,
      label: "Follow on Twitter"
    },
    {
      name: "Email",
      href: "mailto:shuaibuibrahim523@gmail.com",
      icon: Mail,
      label: "Send me an email"
    }
  ];

  return (
    <footer className="relative mt-10 xs:mt-12 sm:mt-16 md:mt-20 border-t border-slate-200 dark:border-slate-800" role="contentinfo">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 animate-pulse" />

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl pt-6 xs:pt-8 pb-5 xs:pb-6 sm:pt-10 sm:pb-8">
        <div className="w-full px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 justify-center sm:justify-start">
                <span className="inline-block w-3 h-3 xs:w-4 xs:h-4 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 shadow-lg animate-pulse" />
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  SHUAIBU
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 xs:mb-5 leading-relaxed max-w-md text-xs sm:text-sm md:text-base text-center sm:text-left italic">
                Full-Stack Software Developer specializing in the design and development of high-performance web and mobile applications. Adept at delivering scalable, maintainable, and innovative solutions, with a strong focus on clean code and best development practices. Driven by a passion for continuous learning and staying ahead of industry trends.
              </p>
              <div className="flex items-center gap-1.5 xs:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 animate-pulse">
                <span>Built with precision using Next.js & TypeScript.</span>
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center sm:items-start"
            >
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 dark:bg-indigo-900/50 -z-10 rounded-lg"></span>
              </h4>
              <div className="space-y-4 w-full max-w-xs sm:max-w-none" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 group text-center sm:text-left text-base py-3 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:p-0"
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                    tabIndex={0}
                    role="link"
                  >
                    <span className="flex items-center gap-2 justify-center sm:justify-start">
                      {link.label}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center sm:items-start"
            >
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
                <span className="relative z-10">Connect</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 dark:bg-purple-900/50 -z-10 rounded-lg"></span>
              </h4>
              <div className="space-y-5 w-full max-w-xs sm:max-w-none">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 group justify-center sm:justify-start p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:p-0"
                      tabIndex={0}
                      role="link"
                    >
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300 transform group-hover:scale-110 shadow-md flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-base sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent dark:from-transparent dark:via-indigo-900/10 dark:to-transparent rounded-xl p-4 mt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left font-medium">
                © {currentYear} Ibrahim Shuaibu Isa. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#hero"
                  className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium transform hover:scale-105 inline-flex items-center gap-2 hover:shadow-md"
                >
                  Back to Top <span className="animate-bounce">↑</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
