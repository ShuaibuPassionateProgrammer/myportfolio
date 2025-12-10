"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Briefcase, Phone, DollarSign, Clock, User, MessageSquare, Building } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Ready to bring your vision to life? I&apos;m currently available for freelance projects,
          full-time opportunities, and strategic collaborations.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info & Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I specialize in building scalable web applications and delivering exceptional user experiences.
              Let&apos;s discuss how I can contribute to your team&apos;s success.
            </p>
          </div>

          <div className="space-y-4">
            <motion.a
              href="mailto:shuaibuibrahim523@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 group border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Email Me</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">shuaibuibrahim523@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shuaibu-ibrahim-76970b279/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 group border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Connect on LinkedIn</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Let&apos;s build your network</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/ShuaibuPassionateProgrammer/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 group border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">View My Work</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Explore my portfolio</p>
              </div>
            </motion.a>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-700 shadow-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Response Time</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I typically respond within 24-48 hours for new opportunities and project inquiries.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Your message has been received. I&apos;ll get back to you within 24-48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company/Organization
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+2349032509699"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Project Type *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select project type</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-time Position</option>
                      <option value="contract">Contract Work</option>
                      <option value="consultation">Consultation</option>
                      <option value="collaboration">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Timeline
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="month">Within a month</option>
                    <option value="3months">1-3 months</option>
                    <option value="flexible">Flexible</option>
                    <option value="ongoing">Ongoing partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Details *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and what you&apos;re looking for in a developer... Be as detailed as possible."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}