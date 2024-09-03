// components/MyWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const works = [
  {
    title: "Proyecto 1",
    description: "Descripción breve de tu primer proyecto destacado.",
    image: "/works/pexels-markusspiske-360591.jpg",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve de tu segundo proyecto destacado.",
    image: "/works/pexels-pixabay-270557.jpg",
  },
  {
    title: "Proyecto 3",
    description: "Descripción breve de tu tercer proyecto destacado.",
    image: "/works/pexels-pixabay-270360.jpg",
  },
];

export const MyWorks = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Parallax speed={5}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </Parallax>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
                <p className="text-gray-300">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
