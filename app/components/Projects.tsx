"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star, Users, Code } from "lucide-react";

const projects = [
	{
		title: "CartoCraft",
		description:
			"CartoCraft website built with Next.js and Tailwind CSS, featuring a modern design, dark mode, and seamless mobile responsiveness.",
		image: "/projects/cartocraft.png",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		category: "Web Development",
		demo: "https://carto-craft.vercel.app",
		code: "https://github.com/ShuaibuPassionateProgrammer/CartoCraft",
		featured: true,
		stats: { stars: 24, users: "500+" },
	},
	{
		title: "ReactMind",
		description:
			"A fun & responsive quiz app crafted with React, TypeScript, and Tailwind CSS, featuring engaging UI, smooth animations, and an intuitive user experience.",
		image: "/projects/reactmind.png",
		tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		category: "Web Development",
		demo: "http://reactmind.netlify.app",
		code: "https://github.com/ShuaibuPassionateProgrammer/reactmind",
		featured: true,
		stats: { stars: 30, users: "600+" },
	},
	{
		title: "Taskify",
		description:
			"Cross-platform productivity app built with Flutter and Firebase, enabling real-time collaboration, project management, and offline access.",
		image: "/projects/taskify.jpg",
		tech: ["Flutter", "Dart", "Firebase", "Provider"],
		category: "Mobile Development",
		demo: "https://taskify-app.com",
		code: "https://github.com/ShuaibuPassionateProgrammer/taskify",
		featured: true,
		stats: { stars: 42, users: "1K+" },
	},
	{
		title: "E-Shop Backend",
		description:
			"RESTful API for an e-commerce platform utilizing Express.js, MongoDB, and JWT authentication for secure transactions and user management.",
		image: "/projects/eshop.jpg",
		tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
		category: "Backend Development",
		demo: "https://eshop-api.herokuapp.com",
		code: "https://github.com/ShuaibuPassionateProgrammer/e-shop-backend",
		featured: true,
		stats: { stars: 35, users: "800+" },
	},
	{
		title: "DevConnect",
		description:
			"Social platform for developers to connect, share projects, and collaborate. Built with React, Node.js, and Socket.io for real-time features.",
		image: "/projects/devconnect.jpg",
		tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
		category: "Full-Stack",
		demo: "https://devconnect.live",
		code: "https://github.com/ShuaibuPassionateProgrammer/devconnect",
		featured: false,
		stats: { stars: 18, users: "300+" },
	},
	{
		title: "Weather App",
		description:
			"Beautiful weather application with location-based forecasts, built using React Native and integrated with multiple weather APIs.",
		image: "/projects/weather.jpg",
		tech: ["React Native", "JavaScript", "Weather API"],
		category: "Mobile Development",
		demo: "https://play.google.com/store/weather-app",
		code: "https://github.com/ShuaibuPassionateProgrammer/reactnative-weather-app",
		featured: false,
		stats: { stars: 28, users: "2K+" },
	},
	{
		title: "Laravel Blog CMS",
		description:
			"Content management system for blogs with admin dashboard, user management, and SEO optimization. Built with Laravel and MySQL.",
		image: "/projects/blog-cms.jpg",
		tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
		category: "Web Development",
		demo: "https://blog-cms.example.com",
		code: "https://github.com/ShuaibuPassionateProgrammer/laravel-blog-cms",
		featured: false,
		stats: { stars: 15, users: "400+" },
	},
	// New projects added below
	{
		title: "Advanced Role Based Flutter Firebase",
		description:
			"A Flutter app utilizing Firebase for role-based authentication, providing dynamic admin and user access control.",
		image: "/projects/taskify.jpg",
		tech: ["Flutter", "Dart", "Firebase", "Role-Based Auth"],
		category: "Mobile Development",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/advanced_role_based_flutter_firebase",
		featured: false,
		stats: { stars: 22, users: "300+" },
	},
	{
		title: "X Clone RN TS",
		description:
			"A modern React Native + TypeScript clone of X (Twitter), featuring a responsive UI and type-safe state management.",
		image: "/projects/twitter_clone.jpg",
		tech: ["React Native", "TypeScript", "Redux", "REST API"],
		category: "Mobile Development",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/x-clone-rn-ts",
		featured: false,
		stats: { stars: 38, users: "750+" },
	},
	{
		title: "LinkedIn Clone TS",
		description:
			"A LinkedIn clone built with Next.js and TypeScript, offering optimized fonts, fast refresh, and seamless Vercel deployment.",
		image: "/projects/linkedin_clone.jpg",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
		category: "Web Development",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/linkedin-clone-ts",
		featured: false,
		stats: { stars: 45, users: "1.2K+" },
	},
	{
		title: "MessageFlow",
		description:
			"A real-time MERN stack chat application with JWT authentication, Zustand for state management, TailwindCSS for styling, Cloudinary for image uploads, and robust error handling. Production-ready.",
		image: "/projects/devconnect.jpg",
		tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
		category: "Full-Stack",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/MessageFlow",
		featured: true,
		stats: { stars: 67, users: "2.1K+" },
	},
	{
		title: "Snapchat Clone TS",
		description:
			"A full-stack Snapchat clone built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI, featuring webcam capture, snap previews, and real-time chat through MongoDB.",
		image: "/projects/snapchat_clone.jpg",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "WebRTC"],
		category: "Full-Stack",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/snapchat-clone-ts",
		featured: true,
		stats: { stars: 52, users: "1.5K+" },
	},
	{
		title: "WhatsApp Clone TS",
		description:
			"A real-time WhatsApp clone built with TypeScript, React, and Socket.IO, featuring modern UI, media sharing, and secure chat functionality.",
		image: "/projects/whatsapp_clone.jpg",
		tech: ["React", "TypeScript", "Socket.IO", "Node.js", "Express.js"],
		category: "Full-Stack",
		demo: "#",
		code: "https://github.com/ShuaibuPassionateProgrammer/whatsapp-clone-ts",
		featured: true,
		stats: { stars: 58, users: "1.8K+" },
	},
];

const categories = [
	"All",
	"Web Development",
	"Mobile Development",
	"Backend Development",
	"Full-Stack",
];

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	const featuredProjects = projects.filter((project) => project.featured);

	// Only render motion components on the client side to prevent hydration errors
	if (!isClient) {
		return (
			<section id="projects" className="space-y-16">
				<div className="text-center space-y-4">
					<h2 className="text-4xl sm:text-5xl font-heading font-semibold">
						Featured Projects
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
						Showcasing my best work across web development, mobile apps, and
						full-stack solutions. Each project demonstrates different aspects of my
						technical expertise.
					</p>
				</div>
				{/* Featured Projects Carousel */}
				<div className="space-y-8">
					<h3 className="text-2xl font-semibold flex items-center gap-2">
						<Star className="w-6 h-6 text-yellow-500" />
						Featured Work
					</h3>
					<div className="grid lg:grid-cols-3 gap-8">
						{featuredProjects.map((project) => (
							<div
								key={project.title + "-featured"}
								className="group relative"
							>
								<div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-full flex flex-col">
									{/* Project Image */}
									<div className="relative overflow-hidden">
										<div className="relative w-full h-48">
											<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
										</div>
										<div className="absolute top-4 left-4">
											<span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
												{project.category}
											</span>
										</div>
										<div className="absolute top-4 right-4 flex gap-2">
											{project.featured && (
												<Star className="w-5 h-5 text-yellow-400 fill-current" />
											)}
										</div>
									</div>
									{/* Project Content */}
									<div className="p-6 flex flex-col gap-4 flex-1">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold">
												{project.title}
											</h3>
											<p className="text-slate-600 dark:text-slate-300 text-sm">
												{project.description}
											</p>
											<ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
												{project.tech.map((tech) => (
													<li
														key={project.title + "-featured-tech-" + tech}
														className="bg-indigo-100/80 dark:bg-indigo-900/80 dark:text-indigo-300 px-2 py-1 rounded-md"
													>
														{tech}
													</li>
												))}
											</ul>
											<div className="mt-auto flex gap-4">
												<a
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												>
													<ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
												</a>
												<a
													href={project.code}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
												>
													<Github className="w-4 h-4" aria-hidden="true" /> Source Code
												</a>
											</div>
										</div>
										<div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
											<span className="flex items-center gap-1">
												<Users className="w-4 h-4" />
												{project.stats.users}
											</span>
											<span className="flex items-center gap-1">
												<Star className="w-4 h-4 text-yellow-500" />
												{project.stats.stars}
											</span>
											<span className="flex items-center gap-1">
												<Code className="w-4 h-4" />
												{project.tech.length} Techs
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Project Categories */}
				<div className="space-y-8">
					<h3 className="text-2xl font-semibold flex items-center gap-2">
						<Code className="w-6 h-6 text-blue-500" />
						Project Categories
					</h3>
					<div className="flex flex-wrap gap-4">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
										? "bg-indigo-600 text-white"
										: "bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
									}`}
								type="button"
								aria-pressed={selectedCategory === category}
							>
								{category}
							</button>
						))}
					</div>
					{/* Filtered Projects */}
					<div className="grid lg:grid-cols-3 gap-8">
						{filteredProjects.map((project) => (
							<div
								key={project.title + "-filtered"}
								className="group relative"
							>
								<div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-full flex flex-col">
									{/* Project Image */}
									<div className="relative overflow-hidden">
										<div className="relative w-full h-48">
											<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
										</div>
										<div className="absolute top-4 left-4">
											<span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
												{project.category}
											</span>
										</div>
										<div className="absolute top-4 right-4 flex gap-2">
											{project.featured && (
												<Star className="w-5 h-5 text-yellow-400 fill-current" />
											)}
										</div>
									</div>
									{/* Project Content */}
									<div className="p-6 flex flex-col gap-4 flex-1">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold">
												{project.title}
											</h3>
											<p className="text-slate-600 dark:text-slate-300 text-sm">
												{project.description}
											</p>
											<ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
												{project.tech.map((tech) => (
													<li
														key={project.title + "-filtered-tech-" + tech}
														className="bg-indigo-100/80 dark:bg-indigo-900/80 dark:text-indigo-300 px-2 py-1 rounded-md"
													>
														{tech}
													</li>
												))}
											</ul>
											<div className="mt-auto flex gap-4">
												<a
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												>
													<ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
												</a>
												<a
													href={project.code}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
												>
													<Github className="w-4 h-4" aria-hidden="true" /> Source Code
												</a>
											</div>
										</div>
										<div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
											<span className="flex items-center gap-1">
												<Users className="w-4 h-4" />
												{project.stats.users}
											</span>
											<span className="flex items-center gap-1">
												<Star className="w-4 h-4 text-yellow-500" />
												{project.stats.stars}
											</span>
											<span className="flex items-center gap-1">
												<Code className="w-4 h-4" />
												{project.tech.length} Techs
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="projects" className="space-y-12 sm:space-y-16">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center space-y-4"
			>
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold">
					Featured Projects
				</h2>
				<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
					Showcasing my best work across web development, mobile apps, and
					full-stack solutions. Each project demonstrates different aspects of my
					technical expertise.
				</p>
			</motion.div>

			{/* Featured Projects Carousel */}
			<div className="space-y-8">
				<motion.h3
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-2xl font-semibold flex items-center gap-2"
				>
					<Star className="w-6 h-6 text-yellow-500" />
					Featured Work
				</motion.h3>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{featuredProjects.map((project) => (
						<motion.div
							key={project.title + "-featured"}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="group relative"
						>
							<div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
								{/* Project Image */}
								<div className="relative overflow-hidden">
									<div className="relative w-full h-40 sm:h-48">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											loading="lazy"
											quality={70}
										/>
									</div>
									<div className="absolute top-4 left-4">
										<span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
											{project.category}
										</span>
									</div>
									<div className="absolute top-4 right-4 flex gap-2">
										{project.featured && (
											<Star className="w-5 h-5 text-yellow-400 fill-current" />
										)}
									</div>
								</div>
								{/* Project Content */}
								<div className="p-6 flex flex-col gap-4 flex-1">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
											{project.title}
										</h3>
										<p className="text-slate-600 dark:text-slate-300 text-sm">
											{project.description}
										</p>
										<ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
											{project.tech.map((tech) => (
												<li
													key={project.title + "-featured-tech-" + tech}
													className="bg-indigo-100/80 dark:bg-indigo-900/80 dark:text-indigo-300 px-2 py-1 rounded-md"
												>
													{tech}
												</li>
											))}
										</ul>
										<div className="mt-auto flex gap-4">
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											>
												<ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
											</a>
											<a
												href={project.code}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
											>
												<Github className="w-4 h-4" aria-hidden="true" /> Source Code
											</a>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
										<span className="flex items-center gap-1">
											<Users className="w-4 h-4" />
											{project.stats.users}
										</span>
										<span className="flex items-center gap-1">
											<Star className="w-4 h-4 text-yellow-500" />
											{project.stats.stars}
										</span>
										<span className="flex items-center gap-1">
											<Code className="w-4 h-4" />
											{project.tech.length} Techs
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			{/* Project Categories */}
			<div className="space-y-8">
				<motion.h3
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-2xl font-semibold flex items-center gap-2"
				>
					<Code className="w-6 h-6 text-blue-500" />
					Project Categories
				</motion.h3>

				<div className="flex flex-wrap gap-4">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
									? "bg-indigo-600 text-white"
									: "bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
								}`}
							type="button"
							aria-pressed={selectedCategory === category}
						>
							{category}
						</button>
					))}
				</div>

				{/* Filtered Projects */}
				<div className="grid lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<motion.div
							key={project.title + "-filtered"}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="group relative"
						>
							<div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
								{/* Project Image */}
								<div className="relative overflow-hidden">
									<div className="relative w-full h-48">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											loading="lazy"
											quality={70}
										/>
									</div>
									<div className="absolute top-4 left-4">
										<span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
											{project.category}
										</span>
									</div>
									<div className="absolute top-4 right-4 flex gap-2">
										{project.featured && (
											<Star className="w-5 h-5 text-yellow-400 fill-current" />
										)}
									</div>
								</div>
								{/* Project Content */}
								<div className="p-6 flex flex-col gap-4 flex-1">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
											{project.title}
										</h3>
										<p className="text-slate-600 dark:text-slate-300 text-sm">
											{project.description}
										</p>
										<ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
											{project.tech.map((tech) => (
												<li
													key={project.title + "-filtered-tech-" + tech}
													className="bg-indigo-100/80 dark:bg-indigo-900/80 dark:text-indigo-300 px-2 py-1 rounded-md"
												>
													{tech}
												</li>
											))}
										</ul>
										<div className="mt-auto flex gap-4">
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											>
												<ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
											</a>
											<a
												href={project.code}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
											>
												<Github className="w-4 h-4" aria-hidden="true" /> Source Code
											</a>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
										<span className="flex items-center gap-1">
											<Users className="w-4 h-4" />
											{project.stats.users}
										</span>
										<span className="flex items-center gap-1">
											<Star className="w-4 h-4 text-yellow-500" />
											{project.stats.stars}
										</span>
										<span className="flex items-center gap-1">
											<Code className="w-4 h-4" />
											{project.tech.length} Techs
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}