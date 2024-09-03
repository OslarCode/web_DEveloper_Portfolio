// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tu-perfil" },
  { label: "GitHub", href: "https://github.com/tu-usuario" },
  { label: "Twitter", href: "https://twitter.com/tu-usuario" },
];

export const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <motion.p
              className="text-sm"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              © {new Date().getFullYear()} Mi Portfolio. Todos los derechos
              reservados.
            </motion.p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
