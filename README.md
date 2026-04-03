# Nurax Landing Page - Production-Ready Next-Gen Landing

> 🚀 **Moderna, Rápida, Accesible y Hecha para Convertir**

## 📋 Descripción

Landing page profesional para **Nurax**, software de gestión de inventario para pequeños/medianos negocios. Construida con **React 19 + TypeScript + Tailwind CSS + Framer Motion**.

### 🎯 Objetivos
- ⚡ **Performance**: < 2.5s LCP, < 0.1s CLS, < 100ms FID
- 🎨 **Diseño Hermoso**: Componentes con animaciones suaves
- ♿ **Accesible**: WCAG 2.1 AA, keyboard navigation
- 📱 **Responsive**: Mobile-first, todos los breakpoints
- 🔍 **SEO Potente**: Metadata, OG images, schema.org
- 🧹 **Código Limpio**: Zero hardcoding, DRY principle

---

## 🏗️ Estructura del Proyecto

```
nurax_landing/
├── src/
│   ├── app/                 # Setup global
│   ├── components/          # Biblioteca de componentes
│   │   ├── shared/          # Botones, tarjetas, inputs  
│   │   ├── sections/        # Navbar, Hero, Features, etc
│   │   └── composite/       # Componentes compuestos
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilidades & design tokens
│   ├── styles/              # CSS global
│   └── types/               # TypeScript interfaces
├── docs/                    # Documentación técnica
├── public/                  # Assets estáticos
├── AGENT.md                 # ⭐ Mi configuración como ingeniero
└── tailwind.config.ts       # Design system
```

---

## ✨ Features Completadas

### ✅ Arquitectura & Setup
- [x] TypeScript strict mode
- [x] Path aliases (`@/*`)
- [x] Tailwind CSS con design tokens
- [x] Structure folder perfecta

### ✅ Design System
- [x] `theme.ts` - Colores, espaciado, animaciones centralizadas
- [x] `constants.ts` - URLs, datos estáticos
- [x] `cn.ts` - Classname utilities

### ✅ Componentes Base
- [x] **Button** - 5 variantes (primary, outline, ghost, white)
- [x] **Card** - 3 variantes (base, elevated, flat)
- [x] **Badge** - 5 variantes colores
- [x] **Input** - Con label, error, iconos
- [x] **Spinner** - Loading states

### ✅ Hooks Custom
- [x] **useScrolled** - Detecta scroll position
- [x] **useInView** - Reveal animations (IntersectionObserver)
- [x] **useMobileMenu** - Toggle menu mobile

### ✅ Secciones Iniciadas
- [x] **Navbar** - Logo, links, mobile menu, scrolled state
- [ ] **Hero** - Mesh gradient + CTA buttons
- [ ] **Features** - Feature cards + mini grid
- [ ] **QR Scanner** - Phone mockup + 3 estados  
- [ ] **Stats** - Stats cards
- [ ] **How It Works** - 3 steps
- [ ] **Contact** - Profile + form + comments
- [ ] **CTA Final** - Call to action
- [ ] **Footer** - Brand + links

---

## 🚀 Cómo Empezar

### 1️⃣ Instalar dependencias
```bash
npm install
```

### 2️⃣ Ejecutar dev server
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

### 3️⃣ Build para producción
```bash
npm run build
npm run preview
```

---

## 📚 Convenciones de Código

### ✅ Siempre
- Usar design tokens de `lib/theme.ts`
- Type hints en todos los props
- Componentes reutilizables sin prop drilling  
- Imports desde exports barril (`index.ts`)

### ❌ Nunca
- Hardcodear colores, espaciado, etc
- Crear componentes gigantes (> 200 líneas)
- Prop drilling innecesario
- Ignorar TypeScript (`any`, `@ts-ignore`)

---

## 🎨 Design System

### Colores Principales
```typescript
primary: {
  50: '#f0faf5',   // Lightest
  700: '#0d4a2e',  // Main (botones, headers)
  800: '#051f17',  // Darkest
}
```

### Espaciado
```typescript
xs: '4px'   sm: '8px'   md: '16px'  lg: '24px'  xl: '32px'
```

### Animaciones
- **Fade In**: opacity 0 → 1
- **Slide Up**: translate Y con opacity
- **Scale In**: scale 0.95 → 1
- **Stagger**: delay incremental

---

## 📞 Contacto & Soporte

**Desarrollador**: Uziel Tzab  
**Email**: uzieltzab8@gmail.com  
**Status**: 🟢 En construcción (50%)

---

## 📄 Documentación Adicional

- [AGENT.md](./AGENT.md) - Mi rol, personalidad, proceso de trabajo
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Detalles técnicos
- [docs/COMPONENT_GUIDE.md](./docs/COMPONENT_GUIDE.md) - Cómo usar componentes
- [docs/ANIMATIONS.md](./docs/ANIMATIONS.md) - Guía de animaciones

---

**Made with 💚 by Nurax Team**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
