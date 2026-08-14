import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "React",
      level: "Frontend",
    },
    {
      name: "JavaScript",
      level: "Frontend",
    },
    {
      name: "HTML & CSS",
      level: "Web",
    },
    {
      name: "Python",
      level: "Programming",
    },
    {
      name: "Flask",
      level: "Backend",
    },
    {
      name: "MySQL",
      level: "Database",
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-white text-black px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Decorative star */}
      <div className="absolute top-16 right-12 text-black/10 text-7xl">
        ✦
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            My Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Things I
            <br />
            <span className="text-red-500">work with.</span>
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                border border-black/10
                rounded-2xl
                p-7
                bg-[#f7f7f7]
                hover:bg-[#f51f3d]
                hover:text-white
                transition-all
                duration-300
              "
            >
              <p className="text-sm text-black/40 group-hover:text-white/70 mb-5">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              <p className="mt-2 text-sm text-black/50 group-hover:text-white/70">
                {skill.level}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;