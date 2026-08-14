import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "College Attendance",
      description:
        "A college attendance management application for managing and tracking student attendance.",
      technologies: ["Python", "Flask", "PostgreSQL"],
      github: "#",
      live: "https://clgattendance-0ova.onrender.com/",
    },
    {
      id: 2,
      title: "Pocket RC Cars",
      description:
        "An online Shopify store focused on Pocket RC Cars and remote-controlled car products.",
      technologies: ["Shopify", "E-commerce", "Web Development"],
      github: "#",
      live: "https://sushanth-rai.myshopify.com/",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-red-400 uppercase tracking-[0.3em] text-sm mb-4">
            My Work
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Featured
            <br />
            <span className="text-red-500">Projects.</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-xl text-lg">
            A collection of projects I've built using modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-sm
                hover:border-red-500/50
                transition-all
              "
            >
              <div className="text-red-500 text-sm font-bold mb-6">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-bold group-hover:text-red-400 transition">
                {project.title}
              </h3>

              <p className="mt-4 text-white/60 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-red-500/10
                      border border-red-500/20
                      text-red-300
                      text-xs
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-red-500
                      text-sm
                      font-semibold
                      hover:bg-red-600
                      hover:scale-105
                      transition
                    "
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;