// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center text-white">
      <Parallax speed={-10} className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-30" />
      </Parallax>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I´m a <span className="text-indigo-500">Web Programmer</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I create incredible digital solutions for the web.
        </motion.p>
      </div>
    </section>
  );
};
