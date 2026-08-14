import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <nav className="w-full px-6 md:px-10 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-white"
          >
            SR<span className="text-red-500">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium text-white">

            <a
              href="#home"
              className="hover:text-red-400 transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-red-400 transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-red-400 transition-colors duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-red-400 transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-red-400 transition-colors duration-300"
            >
              Contact
            </a>

          </div>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="
              hidden md:block
              px-6 py-2.5
              rounded-full
              bg-red-500
              text-white
              font-semibold
              hover:bg-red-400
              hover:scale-105
              transition-all duration-300
            "
          >
            Let's Talk
          </a>

        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;