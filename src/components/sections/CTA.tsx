import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared';
import { useInView } from '@/hooks';
import { LINKS } from '@/lib/constants';

/**
 * CTA Section
 * Final call to action
 */
export const CTA: React.FC = () => {
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section py-20 md:py-32 relative overflow-hidden bg-primary-900">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-600 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 text-center space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            ¿Listo para transformar
            <br />
            tu negocio hoy?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-300">
            Únete a más negocios que ya dejaron de perder tiempo y dinero con hojas de cálculo desactualizadas.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <Button variant="primary" size="lg" onClick={() => (window.location.href = LINKS.login)}>
              🎉 Empieza gratis — sin tarjeta de crédito
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-neutral-400">
            14 días gratis · Sin compromiso · Cancela cuando quieras
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';

export default CTA;
