import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-[600px] overflow-hidden bg-[#f51f3d] text-white"
    >
      {/* Decorative stars */}
      <div className="absolute top-20 right-10 text-black/40 text-5xl">
        ✦
      </div>

      <div className="absolute bottom-20 left-8 text-black/50 text-5xl">
        ✦
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">

        {/* PHOTO LEFT + INTRO RIGHT */}
        <div className="flex flex-row items-center gap-16">

          {/* ================= PHOTO — LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <div className="relative">

              {/* Hanging string */}
              <div className="absolute -top-24 left-1/2 w-1 h-24 bg-black/60 -translate-x-1/2" />

              {/* Photo frame */}
              <div
                className="
                  relative
                  w-52 h-72
                  bg-[#151515]
                  p-3
                  rounded-xl
                  shadow-[0_25px_40px_rgba(0,0,0,0.35)]
                "
              >
                <div className="w-full h-full overflow-hidden rounded-lg bg-black">
                  <img
                    src={heroImage}
                    alt="Sushanth Rai"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Hanging point */}
              <div
                className="
                  absolute
                  -top-4
                  left-1/2
                  -translate-x-1/2
                  w-4 h-4
                  rounded-full
                  bg-black
                "
              />
            </div>
          </motion.div>

          {/* ================= INTRO — RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">
              Hello!
            </h2>

            <p className="text-black/80 text-base md:text-lg leading-8 max-w-xl">
              Hi, my name is{" "}
              <strong>Sushanth Rai</strong>, a passionate Full Stack Developer
              developer who enjoys creating modern, functional and
              interactive web experiences.
            </p>

            {/* Technologies */}
            <div className="flex gap-7 mt-8">

              {/* React */}
              <div className="text-center">
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-white/20
                    flex items-center justify-center
                    text-2xl
                  "
                >
                  ⚛️
                </div>

                <p className="text-xs text-black mt-2 font-semibold">
                  REACT
                </p>
              </div>

              {/* JavaScript */}
              <div className="text-center">
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-white/20
                    flex items-center justify-center
                    text-xl font-bold
                  "
                >
                  JS
                </div>

                <p className="text-xs text-black mt-2 font-semibold">
                  JAVASCRIPT
                </p>
              </div>

              {/* Web */}
              <div className="text-center">
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-white/20
                    flex items-center justify-center
                    text-xl
                  "
                >
                  &lt;/&gt;
                </div>

                <p className="text-xs text-black mt-2 font-semibold">
                  WEB
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Curved bottom */}
      <div
        className="
          absolute
          bottom-[-45px]
          left-[-5%]
          w-[110%]
          h-24
          bg-white
          rounded-[50%]
          z-10
        "
      />
    </section>
  );
}

export default About;