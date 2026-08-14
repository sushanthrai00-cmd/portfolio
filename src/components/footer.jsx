import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Sushanth Rai. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <motion.a
            href="#home"
            whileHover={{ color: "#ef4444" }}
            className="text-white/60 transition"
          >
            Home
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ color: "#ef4444" }}
            className="text-white/60 transition"
          >
            About
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ color: "#ef4444" }}
            className="text-white/60 transition"
          >
            Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ color: "#ef4444" }}
            className="text-white/60 transition"
          >
            Contact
          </motion.a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;