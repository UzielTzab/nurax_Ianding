import React from 'react';
import { motion } from 'framer-motion';
import { StepCard } from '@/components/composite';
import { useInView } from '@/hooks';
import { STEPS } from '@/lib/constants';

/**
 * HowItWorks Section
 * 3 steps to get started
 */
export const HowItWorks: React.FC = () => {
  const { ref, isInView } = useInView();

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="how-it-works" ref={ref} className="section container py-20 md:py-32">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={titleVariants}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Empieza a vender
          <br />
          <span className="bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
            en 3 pasos
          </span>
        </h2>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stepVariants}
          >
            <StepCard {...step} number={i + 1} />
          </motion.div>
        ))}
      </div>

      {/* Connectors */}
      <div className="hidden md:flex justify-center gap-4 mt-12 text-2xl text-primary-700">
        <span>→</span>
        <span>→</span>
      </div>
    </section>
  );
};

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
