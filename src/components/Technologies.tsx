// components/Technologies.tsx
"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const technologies = [
  { name: "JavaScript", icon: "/path/to/js-icon.svg" },
  { name: "React", icon: "/path/to/react-icon.svg" },
  { name: "Next.js", icon: "/path/to/nextjs-icon.svg" },
  { name: "Tailwind CSS", icon: "/path/to/tailwind-icon.svg" },
  { name: "TypeScript", icon: "/path/to/ts-icon.svg" },
];

export const Technologies = () => {
  return (
    <section className="relative py-20 bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Parallax speed={3}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-20 mb-4"
                />
              </Parallax>
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
