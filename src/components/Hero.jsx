import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import talkingVideo from "../assets/talking-sushanth.mp4";

function Hero() {
  const [stage, setStage] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 3000),
      setTimeout(() => setStage(3), 4500),
      setTimeout(() => setStage(4), 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const enableAudio = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      // Start from the beginning when the user clicks
      video.pause();
      video.currentTime = 0;

      // Enable the actual audio track
      video.muted = false;
      video.volume = 1;

      await video.play();

      setAudioEnabled(true);
    } catch (error) {
      console.error("Unable to play video audio:", error);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* RED BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="font-bold text-lg">
            Sushanth Rai<span className="text-black">.</span>
          </h2>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-black transition">
              Home
            </a>

            <a href="#about" className="hover:text-black transition">
              About
            </a>

            <a href="#skills" className="hover:text-black transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-black transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-white/40 text-sm hover:bg-white hover:text-red-600 transition"
          >
            Hire Me
          </a>
        </div>
      </motion.nav>

      {/* TALKING VIDEO */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src={talkingVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* VIDEO GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
      </motion.div>

      {/* PLAY INTRO BUTTON */}
      <AnimatePresence>
        {!audioEnabled && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.4,
            }}
            onClick={enableAudio}
            className="
              absolute
              right-6
              top-24
              md:right-12
              md:top-28
              z-50
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              bg-white
              text-black
              font-semibold
              shadow-2xl
              hover:bg-red-500
              hover:text-white
              hover:scale-105
              transition-all
            "
          >
            <span className="text-lg">🔊</span>
            Play Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className="relative z-20 min-h-screen flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-16">

          <AnimatePresence mode="wait">

            {/* INTRO */}
            {stage >= 1 && (
              <motion.div
                key="intro"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="max-w-xl"
              >
                <p className="text-white text-lg md:text-xl font-semibold">
                  Hi, I'm
                </p>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                  Sushanth Rai
                  <span className="text-red-300">.</span>
                </h1>
              </motion.div>
            )}

            {/* PROFESSION */}
            {stage >= 2 && (
              <motion.div
                key="profession"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="mt-2"
              >
                <p className="text-xl md:text-3xl font-bold">
                  I'm a{" "}
                  <span className="text-red-300">
                    Full Stack Developer
                  </span>
                </p>
              </motion.div>
            )}

            {/* DESCRIPTION */}
            {stage >= 3 && (
              <motion.p
                key="description"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="mt-4 text-white/80 max-w-lg text-sm md:text-base leading-6"
              >
                I build modern, responsive and interactive web
                experiences using modern technologies.
              </motion.p>
            )}

            {/* BUTTONS */}
            {stage >= 4 && (
              <motion.div
                key="buttons"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="flex gap-3 mt-6"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-white/50 hover:bg-white hover:text-black transition"
                >
                  Contact Me
                </a>
              </motion.div>
            )}

          </AnimatePresence>

          {/* SCROLL */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-xs"
          >
            ↓ Scroll
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;