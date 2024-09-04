// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Si usas el botón de shadcn/ui

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.h1
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Portfolio
          </motion.h1>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href}>
                <span className="hover:text-gray-400 transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center mt-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
              <span className="text-lg hover:text-gray-400 transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
