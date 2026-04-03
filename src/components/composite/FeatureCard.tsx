import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import type { FeatureCardProps } from '@/types';

/**
 * FeatureCard - Versión simplificada
 * Solo título y descripción, intercalado izquierda/derecha
 */
export const FeatureCard: React.FC<FeatureCardProps & { index?: number }> = ({
  title,
  description,
  index = 0,
}) => {
  const isAlternate = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 3, lg: 5 },
          alignItems: 'center',
          mb: 8,
        }}
      >
        {/* Content Side */}
        <Box
          sx={{
            order: { xs: 0, lg: isAlternate ? 1 : 0 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1rem' },
              color: 'text.secondary',
              lineHeight: 1.6,
              maxWidth: '500px',
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Empty Right Side (Placeholder for alternating layout) */}
        <Box sx={{ display: { xs: 'none', lg: 'block' }, height: '300px' }} />
      </Box>
    </motion.div>
  );
};

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
