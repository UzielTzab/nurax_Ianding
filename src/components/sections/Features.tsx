import React from 'react';
import { Box, Container } from '@mui/material';
import { FeatureCard } from '@/components/composite';
import { useInView } from '@/hooks';
import { FEATURES_DATA } from '@/lib/constants';

/**
 * Features Section - Solo Feature Cards
 */
export const Features: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <Box
      component="section"
      id="features"
      ref={ref}
      sx={{
        py: { xs: 5, md: 8 },
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        {/* Large Feature Cards - Alternated Layout */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          {FEATURES_DATA.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

Features.displayName = 'Features';

export default Features;
