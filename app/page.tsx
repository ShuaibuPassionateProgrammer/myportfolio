"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModeToggler from "./components/ModeToggler";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ label: "Hero", href: "#hero" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export default function Home() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<main className="max-w-5xl mx-auto px-4 pt-6 pb-10 space-y-10 sm:space-y-14">
			<header className="sticky top-4 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 rounded-2xl shadow-xl mb-4 border border-slate-200 dark:border-slate-800 transition-all">
				{/* Logo */}
				<a
					href="#hero"
					className="flex items-center gap-2 font-extrabold text-lg sm:text-2xl text-indigo-700 dark:text-indigo-400 tracking-tight"
				>
					<span className="inline-block w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 mr-2 shadow" />
					SHUAIBU
				</a>
				{/* Desktop Nav */}
				<nav className="hidden md:flex gap-2 sm:gap-4" aria-label="Main navigation">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="relative text-slate-700 dark:text-slate-200 font-medium px-3 py-1 rounded-lg transition-all duration-150 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 hover:text-indigo-700 dark:hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
								aria-label={`Navigate to ${link.label} section`}
								role="menuitem"
							>
								<span className="relative z-10">{link.label}</span>
								<span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-full" />
							</a>
						))}
					</nav>
				{/* Mobile Nav Toggle */}
				<button
					className="md:hidden p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					aria-expanded={mobileOpen}
					aria-controls="mobile-nav-drawer"
					onClick={() => setMobileOpen((v) => !v)}
				>
					{mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
				</button>
				{/* Mode Toggler */}
				<div className="ml-2 sm:ml-4">
					<ModeToggler />
				</div>
				{/* Mobile Nav Drawer */}
				{mobileOpen && (
					<nav 
            id="mobile-nav-drawer"
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-2 py-4 shadow-2xl md:hidden animate-fade-in-down rounded-b-2xl"
            role="menu"
            aria-label="Mobile navigation"
          >
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="w-full text-center text-slate-700 dark:text-slate-200 font-medium px-4 py-2 rounded-lg transition-all duration-150 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 hover:text-indigo-700 dark:hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
								onClick={() => setMobileOpen(false)}
                role="menuitem"
                aria-label={`Navigate to ${link.label} section`}
							>
								{link.label}
							</a>
						))}
					</nav>
				)}
			</header>
			<section id="hero">
				<Hero />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</main>
	);
}