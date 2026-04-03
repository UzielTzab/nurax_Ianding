import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/composite';
import { useInView } from '@/hooks';
import { STATS } from '@/lib/constants';

/**
 * Stats Section
 * Impact numbers with staggered reveal
 */
export const Stats: React.FC = () => {
  const { ref, isInView } = useInView();

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="stats" ref={ref} className="section container py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={titleVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Números que hablan
            <br />
            <span className="bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
              por sí solos
            </span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Los negocios que usan Nurax reportan mejoras significativas en su operación desde el primer mes de uso.
          </p>
        </motion.div>

        {/* Right: Stats Grid */}
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-2 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div key={i} custom={i} variants={cardVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

Stats.displayName = 'Stats';

export default Stats;
