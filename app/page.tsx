"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function Home() {
	return (
		<>
			<Navbar />
			<main className="max-w-5xl mx-auto px-4 pt-6 pb-10 space-y-10 sm:space-y-14">
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
			</main>
			<Footer />
		</>
	);
}