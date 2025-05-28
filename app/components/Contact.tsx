export default function Contact() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl sm:text-5xl font-heading font-semibold">Hi, I’m Your Name</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300">I build modern, accessible, and performant web experiences.</p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="#projects" className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition">View Projects</a>
        <a href="/resume.pdf" target="_blank" className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-800 transition">Download Resume</a>
      </div>
    </section>
  );
}