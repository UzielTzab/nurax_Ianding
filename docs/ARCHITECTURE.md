# Guía de Arquitectura - Nurax Landing

## 🏗️ Principios Arquitectónicos

### 1. DRY (Don't Repeat Yourself)
Cada token de diseño existe en **UN solo lugar**: `lib/theme.ts`

```typescript
❌ MALO: Hardcoding repetido
className="bg-[#0d4a2e] px-[24px] py-[16px] rounded-[12px]"

✅ BUENO: Design tokens centralizados
className="bg-primary-700 px-lg py-md rounded-lg"
```

### 2. Single Responsibility
Cada componente tiene UNA responsabilidad clara:

```
Button.tsx       → Renderizar un botón (eso es TODO)
Card.tsx         → Contenedor con estilos (eso es TODO)
FeatureCard.tsx  → ENSAMBLAR Button + Card (composición)
```

### 3. Composición sobre Herencia
Construimos componentes complejos composando simples:

```typescript
// ✅ BUENO: Composición
<Card variant="elevated">
  <Button variant="primary">Click me</Button>
</Card>

// ❌ MALO: Props explosivos
<Button elevated variant="primaryInCard" size="lg" cardStyle>
```

---

## 🎯 Component Hierarchy

```
App.tsx (root)
  ├── Navbar (section)
  │   ├── Button (shared)
  │
  ├── Hero (section)
  │   ├── Motion (framer-motion)
  │   ├── Button (shared)
  │   ├── Badge (shared)
  │
  ├── Features (section)
  │   ├── FeatureCard (composite)
  │   │   ├── Card (shared)
  │   │   ├── Button (shared)
  │   │   └── Badge (shared)
  │   │
  │   └── Mini Features Grid
  │       ├── mini-card (composite)
  │
  ├── QRScanner (section)
  │   ├── PhoneFrame (SVG)
  │   ├── Motion
  │
  ├── Stats (section)
  │   └── StatCard (composite)
  │       └── Card (shared)
  │
  ├── HowItWorks (section)
  │   └── StepCard (composite)
  │
  ├── Contact (section)
  │   ├── Input (shared)
  │   └── Button (shared)
  │
  ├── CTA (section)
  │   └── Button (shared)
  │
  └── Footer (section)
```

---

## 📦 Carpeta: `components/shared/`

Componentes **atómicos**, **reutilizables**, **sin lógica de negocio**

### Button.tsx
```typescript
Props: variant, size, isLoading, icon, disabled, children
Sin: Lógica de navegación, fetch data, estado complejo
```

### Card.tsx  
```typescript
Props: variant, children, className
Sin: Animaciones (esas van en section), estado
```

### Badge.tsx
```typescript
Props: variant, children, className
Sin: Interactividad, cambiar estado
```

### Input.tsx
```typescript
Props: label, error, icon, ...HTMLInputProps
Sin: Validación compleja (eso va en context), API calls
```

---

## 📦 Carpeta: `components/composite/`

Componentes **especializados** que ensamblan compartidos

### FeatureCard.tsx
```typescript
Props: icon, title, description, items, imageUrl, reverse
Compone: Card + Button + Badge
- Layout complejo
- Estilos específicos para features
- Reutilizable en varios lugares
```

### StatCard.tsx
```typescript
Props: icon, num, label
Compone: Card
- Mini card para stats
- Grid-friendly
```

### StepCard.tsx
```typescript
Props: icon, title, desc, number
Compone: Card + Badge
- Indicador de número
- Conector visual
```

---

## 📦 Carpeta: `components/sections/`

Componentes **grandes** que representan secciones de la landing

### Navbar.tsx
```typescript
Features:
- Logo responsivo
- Navigation links
- Mobile hamburger menu  
- Scrolled state (backdrop blur)
- Accesibilidad (aria-label)

Hooks: useScrolled, useMobileMenu, useInView (revelación)
```

### Hero.tsx
```typescript
Features:
- Mesh gradient animated orbs
- Main title + CTA
- Hero image com floating cards
- Reveal animations (staggered)

Hooks: useInView
Lib: Framer Motion animations
```

### Features.tsx
```typescript
Features:
- 3 large feature cards (alternating layout)
- 6 mini-features grid
- Icons + descriptions
- Reveal animations

Composites: FeatureCard (repeated)
```

---

## 🎨 Capa: `lib/`

### theme.ts
```typescript
Export: colors, spacing, transitions, shadows, borderRadius
        componentClasses, animations
Propósito: Single source of truth para TODOS los tokens
```

### constants.ts
```typescript
Export: SITE, LINKS, NAVIGATION_LINKS, FEATURES_DATA, STATS, STEPS
Propósito: Datos estáticos centralizados (evitar magic strings)
```

### cn.ts
```typescript
Función: Merge classnames de forma tipada
Alternativa: A 'classnames' pero más simple
```

---

## 🪝 Capa: `hooks/`

### useScrolled.ts
```typescript
Return: boolean (isScrolled)
Propósito: Detectar scroll para cambiar navbar state
Optimización: addEventListener con passive flag
```

### useInView.ts
```typescript
Return: { ref, isInView }
Propósito: Reveal animations (IntersectionObserver)
Optimización: Entrega solo 1 intersection por elemento
```

### useMobileMenu.ts
```typescript
Return: { isOpen, toggle, close }
Propósito: Manejo de estado mobile menu
No deps: Sin Redux, Context necesario aquí (local state)
```

---

## 🔄 Data Flow

### Props Down, Events Up
```
App
  ├── Navbar
  │   └── useMobileMenu (local state)
  │       └── onMobileMenuToggle → setOpen
  │
  ├── Hero
  │   └── useInView
  │       └── Trigger animation onIntersect
```

### Centralized State (Future)
```
Context (opcional)
├── ThemeContext (dark/light mode)
├── ScrollContext (shared scroll state)
└── UserContext (login status)
```

---

## 📐 Breakpoints (Tailwind)

```
Mobile:   < 640px (sm)    ← Mobile-first
Tablet:   640px (md)
Desktop:  1024px (lg)
```

### Estrategia Mobile-First
```typescript
❌ MALO
className="w-full md:w-1/2"  // INCORRECTO! Empieza en escritorio

✅ BUENO  
className="w-1/2 md:w-full"  // Empieza mobile (menos estilos)
```

---

## ♿ Accesibilidad

### Checklist por Componente
- [ ] Semantic HTML (`<button>`, `<nav>`, `<section>`)
- [ ] ARIA labels donde necesario
- [ ] Focus visible (`:focus-visible`)
- [ ] Keyboard navigation (Tab, Enter)
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Alt text en imágenes

### En Contexto
```typescript
// ✅ Accesible
<button onClick={toggle} aria-label="Toggle menu">
  <HamburgerIcon />
</button>

// ❌ Inaccesible
<div onClick={toggle} className="cursor-pointer">
  <HamburgerIcon />
</div>
```

---

## 🚀 Performance Optimizations

### 1. Code Splitting
Vite automático con `import()`

### 2. Lazy Images
```typescript
<img loading="lazy" src={...} />
```

### 3. Memoization (Sparingly)
```typescript
// Solo si prop complexity > 2
export const FeatureCard = React.memo(
  ({ ... }: Props) => { ... }
)
```

### 4. Animations (GPU)
```typescript
// ✅ BUENO - GPU accelerated
transform: translateY(-20px)
opacity: 0 → 1

// ❌ MALO - CPU heavy
margin-top: -20px
top: -20px
```

---

## 📋 Checklist: Nueva Sección

1. **Crear archivo** en `components/sections/`
2. **Definir props interface** en `types/`
3. **Importar compartidos** necesarios
4. **Usar hooks** si necesitas interactividad
5. **Aplicar reveal animations** con `useInView`
6. **Accesibilidad**: Semantic HTML + ARIA
7. **Mobile testing**: Todos los breakpoints
8. **Re-export** en `sections/index.ts`

---

## 🔗 Imports Correctos

```typescript
// ✅ CORRECTO
import { Button, Card } from '@/components/shared';
import { FeatureCard } from '@/components/composite';
import { Hero } from '@/components/sections';
import { useInView } from '@/hooks';
import { colors } from '@/lib/theme';

// ❌ INCORRECTO
import Button from '@/components/shared/Button';
import { colors } from '@/lib/theme/colors';
import { Hero } from '@/components/sections/Hero';
```

---

**Este documento es vivo - actualízalo cuando cambies la arquitectura**
