import Image from "next/image"

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless user experience.",
      image: "/images/project.png",
      liveDemo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce-platform",
    },
    {
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time analytics.",
      image: "/images/project.png",
      liveDemo: "https://healthcare-demo.com",
      github: "https://github.com/username/healthcare-dashboard",
    },
    {
      title: "Financial App",
      description: "Mobile banking application with secure transactions and budgeting tools.",
      image: "/images/project.png",
      liveDemo: "https://financial-app-demo.com",
      github: "https://github.com/username/financial-app",
    },
    {
      title: "Learning Management System",
      description: "Educational platform connecting students and instructors worldwide.",
      image: "/images/project.png",
      liveDemo: "https://lms-demo.com",
      github: "https://github.com/username/learning-management-system",
    },
  ];


const ProjectsSection = () => {
  return (
   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Featured Projects
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover some of our most successful projects that showcase our
        expertise and innovation
      </p>
    </div>

    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white group"
        >
          {/* Card Image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src="/images/project.png"
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500"
            />

            {/* Overlay for Live Demo / GitHub */}
            <div className="flex flex-col items-center justify-center text-white text-center p-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 rounded mb-2 hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Tags & Title */}
          <div className="flex flex-col gap-2 p-4">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                SaaS
              </span>
              <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                Fintech
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {project.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default ProjectsSection