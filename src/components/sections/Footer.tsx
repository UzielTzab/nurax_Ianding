import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks';
import { LOGOS } from '@/lib/constants';
/**
 * Footer Section
 * Brand info + links + copyright
 */
export const Footer: React.FC = () => {
  const { ref, isInView } = useInView();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const navLinks = [
    {
      title: 'Producto',
      links: [
        { label: 'Funciones', href: '#features' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Resultados', href: '#stats' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contacto', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ];

  return (
    <footer ref={ref} className="bg-primary-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={LOGOS.app}
                alt="Nurax Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
                loading="eager"
              />
              <span className="text-2xl font-bold">Nurax</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Gestión inteligente para negocios inteligentes.
            </p>
          </motion.div>

          {/* Nav Columns */}
          {navLinks.map((column, i) => (
            <motion.div key={i} variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-white">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-neutral-300 py-8">
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center text-white text-sm"
          >
            © 2026 Nurax by Onux Systems. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
