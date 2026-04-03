/**
 * Project constants - URLs, IDs, static data
 */

export const LOGOS = {
  /** Main app logo - dark variant */
  app: '/images/nurax_logo_app.png',
  /** App icon 192px for PWA manifest */
  icon192: '/images/nurax_logo_app_192.png',
  /** Full brand logo */
  full: '/images/nurax_logo.png',
} as const;

export const SITE = {
  name: 'Nurax',
  description: 'Sistema inteligente de gestión de inventario para pequeños y medianos negocios',
  url: 'https://nurax.app',
} as const;

export const LINKS = {
  api: import.meta.env.VITE_API_URL || 'https://api.nurax.app/v1',
  login: '/auth/login',
  signup: '/auth/signup',
  whatsapp: `https://wa.me/${import.meta.env.VITE_WA_PHONE || '529842345678'}?text=${encodeURIComponent(import.meta.env.VITE_WA_MESSAGE || 'Hola, estoy interesado en Nurax')}`,
  email: import.meta.env.VITE_CONTACT_EMAIL || 'uzieltzab8@gmail.com',
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Funciones', href: '#features' },
  { label: 'Resultados', href: '#stats' },
  { label: 'Cómo funciona', href: '#how-it-works' },
] as const;

export const FEATURES_DATA = [
  {
    icon: '�',
    title: 'Deja de perder dinero.',
    description: 'Controla todo.',
    items: [],
    imageUrl: undefined,
  },
  {
    icon: '🎯',
    title: 'Controla todo.',
    description: 'Desde un solo lugar.',
    items: [],
    imageUrl: undefined,
  },
  {
    icon: '🚀',
    title: 'Desde un solo lugar.',
    description: 'Nurax es el sistema de inventario inteligente que pequeños y medianos negocios necesitan para crecer sin complicaciones. Ventas, stock, proveedores y reportes — todo en tiempo real.',
    items: [],
    imageUrl: undefined,
  },
];

export const MINI_FEATURES = [
  { icon: '📊', title: 'Reportes detallados', desc: 'Visualiza el rendimiento con gráficas claras y en tiempo real.' },
  { icon: '🔔', title: 'Alertas inteligentes', desc: 'Nunca olvides pedir mercancía. Te avisamos antes de tiempo.' },
  { icon: '📱', title: 'Scanner QR móvil', desc: 'Escanea con la cámara de tu teléfono. Sin hardware extra.' },
  { icon: '🔒', title: 'Seguridad garantizada', desc: 'Tus datos están protegidos con cifrado de nivel bancario.' },
  { icon: '📤', title: 'Exportar a Excel', desc: 'Descarga tu inventario en Excel para análisis externos.' },
  { icon: '🤝', title: 'Soporte prioritario', desc: 'Nuestro equipo está disponible cuando lo necesites.' },
] as const;

export const STATS = [
  { icon: '⏱️', num: '80%', label: 'Menos tiempo en inventario' },
  { icon: '📈', num: '3x', label: 'Más ventas registradas' },
  { icon: '💸', num: '$12K', label: 'Ahorro promedio mensual' },
  { icon: '🚀', num: '2 min', label: 'Para empezar a usarlo' },
] as const;

export const STEPS = [
  {
    icon: '📝',
    title: 'Crea tu cuenta',
    desc: 'Regístrate gratis en menos de 2 minutos. Sin tarjeta necesaria.',
  },
  {
    icon: '📦',
    title: 'Carga tu inventario',
    desc: 'Agrega productos uno a uno o importa desde tu Excel existente.',
  },
  {
    icon: '💰',
    title: '¡Empieza a vender!',
    desc: 'Registra ventas, controla stock y haz crecer tu negocio desde el primer día.',
  },
] as const;

export default {
  SITE,
  LINKS,
  NAVIGATION_LINKS,
  FEATURES_DATA,
  MINI_FEATURES,
  STATS,
  STEPS,
};
