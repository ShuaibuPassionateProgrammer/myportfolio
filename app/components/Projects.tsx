"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star, Users, Code } from "lucide-react";

const projects = [
	{
		title: "MyPortfolio",
		description:
			"Personal portfolio website built with Next.js and Tailwind CSS, featuring a modern design, dark mode, and seamless mobile responsiveness.",
		image: "/projects/portfolio.jpg",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		category: "Web Development",
		demo: "https://myportfolio.vercel.app",
		code: "https://github.com/ShuaibuPassionateProgrammer/myportfolio",
		featured: true,
		stats: { stars: 24, users: "500+" },
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
		code: "https://github.com/ShuaibuPassionateProgrammer/weather-app",
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

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section id="projects" className="space-y-16">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center space-y-4"
			>
				<h2 className="text-4xl sm:text-5xl font-heading font-semibold">
					Featured Projects
				</h2>
				<p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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

				<div className="grid lg:grid-cols-3 gap-8">
					{featuredProjects.map((project) => (
						<motion.div
							key={project.title + "-featured"}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="group relative"
						>
							<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
								{/* Project Image */}
								<div className="relative overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										width={640}
										height={360}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
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
													className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-md"
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
												className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
											>
												<ExternalLink className="w-4 h-4" /> Live Demo
											</a>
											<a
												href={project.code}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline"
											>
												<Github className="w-4 h-4" /> Source Code
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
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								selectedCategory === category
									? "bg-indigo-600 text-white"
									: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
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
							<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
								{/* Project Image */}
								<div className="relative overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										width={640}
										height={360}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
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
													className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-md"
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
												className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
											>
												<ExternalLink className="w-4 h-4" /> Live Demo
											</a>
											<a
												href={project.code}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline"
											>
												<Github className="w-4 h-4" /> Source Code
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









// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "DevFinder",
//     description: "A GitHub profile search app using the GitHub API, built with Next.js and Tailwind.",
//     image: "/projects/devfinder.jpg",
//     tech: ["Next.js", "Tailwind", "API"],
//     demo: "https://devfinder.vercel.app",
//     code: "https://github.com/your-username/devfinder",
//   },
//   {
//     title: "Taskify",
//     description: "A drag-and-drop kanban board for task management, built with React and Zustand.",
//     image: "/projects/taskify.jpg",
//     tech: ["React", "Zustand", "Framer Motion"],
//     demo: "https://taskify.vercel.app",
//     code: "https://github.com/your-username/taskify",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="space-y-10">
//       <motion.h2
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-heading font-semibold text-center"
//       >
//         Projects
//       </motion.h2>

//       <div className="grid sm:grid-cols-2 gap-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={640}
//               height={360}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
//               <ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium">
//                 {project.tech.map((tech, idx) => (
//                   <li key={idx} className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-md">
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-auto flex gap-4">
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
//                 >
//                   <ExternalLink className="w-4 h-4" /> Live Demo
//                 </a>
//                 <a
//                   href={project.code}
//                   target="_blank"
//                   className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline"
//                 >
//                   <Github className="w-4 h-4" /> Source
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }