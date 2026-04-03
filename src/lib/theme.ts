/**
 * Theme System - Single source of truth for all design tokens
 * Nunca hardcodear colores, espaciado, fuentes, etc. - usar desde aquí
 */

export const typography = {
  fontFamily: {
    sans: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    tight: '120%',
    normal: '145%',
    relaxed: '160%',
  },
  letterSpacings: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const;

export const colors = {
  primary: {
    50: '#f0faf5',
    100: '#dceee4',
    200: '#c8e3cf',
    300: '#9ccfaa',
    400: '#70ba82',
    500: '#4a9e6f',
    600: '#1a6b42',
    700: '#0d4a2e',
    800: '#051f17',
  },
  accent: {
    green: '#22875a',
    lime: '#84cc16',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    150: '#f0f0f0',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#1a1a1a',
  },
} as const;

/**
 * Hero Section Colors - Easy to customize
 */
export const heroColors = {
  headlineText: '#000000', // Color de texto para Hero Headlines (cambiar aquí si necesitas otro color)
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
} as const;

export const transitions = {
  fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  slowSmooth: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
  md: '0 2px 8px rgba(0, 0, 0, 0.1)',
  lg: '0 6px 24px rgba(13, 74, 46, 0.15)',
  xl: '0 12px 48px rgba(13, 74, 46, 0.2)',
} as const;

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '999px',
} as const;

/**
 * Component Presets - Tailwind classes que se reutilizan
 */
export const componentClasses = {
  // Buttons
  buttonBase: 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer border-0',
  buttonPrimary: 'bg-primary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
  buttonOutline: 'bg-transparent text-primary-700 border-1.5 border-primary-200 hover:text-white hover:bg-primary-700',
  buttonGhost: 'bg-transparent text-primary-700 hover:bg-primary-50',
  
  // Cards
  cardBase: 'rounded-lg overflow-hidden transition-all duration-300',
  cardElevated: 'shadow-md hover:shadow-lg',
  cardFlat: 'bg-neutral-50 border border-neutral-200',
  
  // Inputs
  inputBase: 'w-full px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent',
  
  // Typography
  headingLarge: 'text-5xl font-bold text-neutral-900 -tracking-0.5',
  headingMedium: 'text-3xl font-bold text-neutral-900',
  headingSmall: 'text-2xl font-semibold text-neutral-900',
  bodyLarge: 'text-lg text-neutral-600 leading-relaxed',
  bodyBase: 'text-base text-neutral-700 leading-relaxed',
  bodySmall: 'text-sm text-neutral-600 leading-relaxed',
} as const;

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInFromRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
} as const;

export default {
  colors,
  spacing,
  transitions,
  shadows,
  borderRadius,
  componentClasses,
  animations,
};
