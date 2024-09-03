// components/AboutMe.tsx
"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const AboutMe = () => {
  return (
    <section className="relative py-20 bg-gray-800 text-gray-300">
      <Parallax speed={5}>
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Sobre Mí
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Soy un programador web apasionado con experiencia en crear
            aplicaciones web modernas y escalables. Me especializo en el
            desarrollo frontend con tecnologías como React, Next.js, y
            TailwindCSS. Además, me encanta resolver problemas complejos y
            aprender nuevas tecnologías para mejorar continuamente mis
            habilidades.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Cuando no estoy programando, disfruto explorando el mundo de la
            tecnología, contribuyendo a proyectos de código abierto y
            experimentando con nuevas herramientas que puedan mejorar la
            experiencia del usuario en la web.
          </p>
        </motion.div>
      </Parallax>
    </section>
  );
};
