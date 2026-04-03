import { motion } from 'framer-motion';
import { Button } from '@/components/shared';
import { useInView } from '@/hooks';
import { LINKS } from '@/lib/constants';
import { Box } from '@mui/material';

/**
 * Hero Section
 * Animated mesh gradient, title, CTA, hero image con floating cards
 */
export const Hero = () => {
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section ref={ref} className="relative min-h-[120vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-neutral-50 to-primary-50">
      {/* Brightness Overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight text-hero-headline">
              <Box>
                Deja de perder dinero.
              </Box>
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0d4a2e 0%, #22c55e 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Controla todo.
              </Box>
              <Box>
                Desde un solo lugar.
              </Box>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg">
              Nurax es el sistema de inventario inteligente que pequeños y medianos negocios necesitan para crecer sin
              complicaciones. Ventas, stock, proveedores y reportes — todo en tiempo real.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" onClick={() => (window.location.href = LINKS.login)}>
                Empezar gratis hoy
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver cómo funciona
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Video with Fade Edges */}
          <motion.div variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="relative h-96 md:h-full flex items-center justify-center">
            <div
              className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden"
              style={{
                maskImage: `linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)`,
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            >
              <video
                className="w-full h-full object-cover brightness-150"
                autoPlay
                muted
                loop
                src="/videos/hero_nurax.mp4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
