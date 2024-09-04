// components/AboutMe.tsx
"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const AboutMe = () => {
  return (
    <section className="relative py-20 bg-gray-800 bg-opacity-70 text-gray-300">
      <Parallax speed={5}>
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            About me
          </h2>
          <p className="text-lg text-center md:text-xl leading-relaxed">
            I am a passionate web programmer with experience in creating modern
            and scalable web applications. I specialize in frontend development
            with technologies such as React, Next.js, and TailwindCSS.
            Furthermore, I love solving complex problems and learn new
            technologies to continually improve my skills.
          </p>
          <p className="text-lg text-center md:text-xl leading-relaxed mt-4">
            When I'm not programming, I enjoy exploring the world of technology,
            contributing to open source projects and experimenting with new
            tools that can improve the user experience on the web.
          </p>
        </motion.div>
      </Parallax>
    </section>
  );
};
