"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Flowsate Company Website",
    description: "Official website for Flowsate showcasing services, projects, and company portfolio.",
    image: "/images/project 6.jpeg",
    liveDemo: "https://flowsate.com", // your real project
    github: "",
    tags: ["Company", "Web App"],
  },
  {
    title: "Kyriantech company Website",
    description: "Where you get your Afforadable and Quality Gadgets .",
    image: "/images/project 7.jpeg",
    liveDemo: "https://kyriantech.net",
    github: "",
    tags: ["E-commerce"],
  },
  {
    title: "Financial App",
    description: "Mobile banking application with secure transactions and budgeting tools.",
    image: "/images/project.png",
    liveDemo: "",
    github: "",
    tags: ["Fintech"],
  },
  {
    title: "Learning Management System",
    description: "Educational platform connecting students and instructors worldwide.",
    image: "/images/project.png",
    liveDemo: "",
    github: "",
    tags: ["EdTech"],
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our most successful projects that showcase our expertise and innovation
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="relative flex flex-col rounded-xl shadow-lg overflow-hidden bg-white group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition duration-300">

                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-500 text-white rounded">
                      Coming Soon
                    </span>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">

                {/* Tags */}
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <p className="text-lg font-semibold text-gray-800">
                  {project.title}
                </p>

                <p className="text-sm text-gray-600">
                  {project.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsSection