import { motion } from "framer-motion";
import HeroImg from "../assets/Karthik.jpg";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Junior Web Developer
          </h2>

          <p className="text-muted max-w-xl mb-6">
            I build clean, responsive web applications using HTML, CSS,
            JavaScript, React, and MERN stack.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-primaryHover px-6 py-2 rounded transition"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/karthikeyandev/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary px-6 py-2 rounded transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* soft glow */}
            <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-2xl"></div>

            <img
              src={HeroImg}
              alt="Karthikeyan"
              className="
                relative
                w-56 h-56
                md:w-72 md:h-72
                rounded-full
                object-cover
                object-top
                border-4 border-primary
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
