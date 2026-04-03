# Guía de Componentes - Nurax Landing

## 🎯 Estructura de Componentes

### Shared Components (Reutilizables base)

#### Button
```typescript
import { Button } from '@/components/shared';

<Button variant="primary" size="lg" icon={<ArrowIcon />}>
  Empezar gratis
</Button>
```

**Props:**
- `variant`: 'primary' | 'outline' | 'ghost' | 'white'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `icon`: React.ReactNode
- `disabled`: boolean
- Extends: All HTMLButtonProps

**Ejemplos:**
```typescript
// Variantes
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="white">White</Button>

// Tamaños
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Con loading
<Button isLoading>Enviando...</Button>

// Con icon
<Button icon={<ChevronRightIcon />}>Next</Button>
```

---

#### Card
```typescript
import { Card } from '@/components/shared';

<Card variant="elevated">
  <h3>Contenido</h3>
</Card>
```

**Props:**
- `variant`: 'base' | 'elevated' | 'flat'
- `children`: React.ReactNode
- `className`: string (extensiones custom)

**Ejemplos:**
```typescript
// Variants
<Card variant="base">Base Card</Card>
<Card variant="elevated">Elevated (sombra)</Card>
<Card variant="flat">Flat (fondo gris)</Card>

// Con contenido complejo
<Card variant="elevated">
  <div className="p-6">
    <h3>Feature Title</h3>
    <p>Description</p>
  </div>
</Card>
```

---

#### Badge
```typescript
import { Badge } from '@/components/shared';

<Badge variant="success">Nuevos!</Badge>
```

**Props:**
- `variant`: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
- `children`: React.ReactNode
- `className`: string

**Ejemplos:**
```typescript
<Badge variant="success">✓ En stock</Badge>
<Badge variant="danger">⚠ Agotado</Badge>
<Badge variant="warning">⏱ Últimas unidades</Badge>
<Badge variant="info">ℹ Información</Badge>
<Badge variant="neutral">Etiqueta</Badge>
```

---

#### Input
```typescript
import { Input } from '@/components/shared';

<Input 
  label="Tu email" 
  placeholder="usuario@ejemplo.com"
  error={errors.email}
  icon={<EnvelopeIcon />}
/>
```

**Props:**
- `label`: string (opcional)
- `error`: string (muestra error si existe)
- `icon`: React.ReactNode (ícono izquierdo)
- Extends: All HTMLInputProps

**Ejemplos:**
```typescript
// Básico
<Input placeholder="Nombre" />

// Con label
<Input label="Email" placeholder="user@email.com" />

// Con error
<Input label="Contraseña" error="Muy corta" type="password" />

// Con icon
<Input icon={<SearchIcon />} placeholder="Buscar..." />
```

---

#### Spinner
```typescript
import { Spinner } from '@/components/shared';

<Spinner size="md" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'

**Ejemplos:**
```typescript
<Spinner size="sm" />  {/* Para botones */}
<Spinner size="md" />  {/* Default */}
<Spinner size="lg" />  {/* Para full-page loading */}
```

---

### Composite Components (Ensamblados)

#### FeatureCard
```typescript
import { FeatureCard } from '@/components/composite';

<FeatureCard
  icon="📦"
  title="Inventario en tiempo real"
  description="Nunca más..."
  items={['Alertas', 'Escaneo', 'Excel']}
  imageUrl="/images/feature.png"
  reverse={false}
/>
```

**Props:**
- `icon`: emoji o string
- `title`: string
- `description`: string
- `items`: string[] (lista de features)
- `imageUrl`: string (opcional)
- `reverse`: boolean (alterna layout left/right)

---

#### StatCard
```typescript
import { StatCard } from '@/components/composite';

<StatCard icon="⏱️" num="80%" label="Menos tiempo" />
```

**Props:**
- `icon`: emoji
- `num`: string (número o porcentaje)
- `label`: string

---

#### StepCard
```typescript
import { StepCard } from '@/components/composite';

<StepCard 
  number={1}
  icon="📝"
  title="Crea tu cuenta"
  desc="Sin tarjeta de crédito"
/>
```

**Props:**
- `number`: 1 | 2 | 3
- `icon`: emoji
- `title`: string
- `desc`: string

---

### Section Components

#### Navbar
```typescript
import { Navbar } from '@/components/sections';

<Navbar />  {/* Todo incluido: logo, links, mobile menu */}
```

**Features:**
- Logo responsivo
- Navigation links automáticas (desde constants)
- Mobile hamburger menu
- Scrolled state (backdrop blur)
- Accesibilidad completa

---

#### Hero (Próximo)
```typescript
import { Hero } from '@/components/sections';

<Hero />
```

**Incluye:**
- Animated mesh gradient background
- Título + subtítulo principal
- Dual CTA buttons
- Hero image con floating cards
- Reveal animations

---

## 💡 Buenas Prácticas

### ✅ Cómo Usar Componentes

```typescript
// ✅ CORRECTO - Clean imports
import { Button, Card } from '@/components/shared';
import { FeatureCard } from '@/components/composite';

export function Features() {
  return (
    <Card variant="elevated">
      <FeatureCard {...props} />
      <Button variant="primary">Learn more</Button>
    </Card>
  );
}
```

### ❌ Cómo NO Usar

```typescript
// ❌ INCORRECTO - Import directo
import Button from '@/components/shared/Button.tsx';

// ❌ INCORRECTO - Hardcoding estilos
<button className="bg-[#0d4a2e] px-[24px] rounded-[12px]">Click</button>

// ❌ INCORRECTO - Props explosivos
<Button size="lg" color="green" elevated filled shadow dark>
```

---

## 🎨 Design Tokens (Usar siempre)

### Colores
```typescript
import { colors } from '@/lib/theme';

// ✅ Usar para styles dinámicos
style={{ color: colors.primary[700] }}

// Para Tailwind - usar clases directamente
className="text-primary-700 bg-primary-50"
```

### Espaciado
```typescript
import { spacing } from '@/lib/theme';

// ✅ Para calcular dinámico
<div style={{ padding: spacing.lg }}>

// Para Tailwind
className="p-lg"  {/* 24px */}
```

### Animaciones
```typescript
import { animations } from '@/lib/theme';

// ✅ Con Framer Motion
<motion.div initial={animations.fadeIn.initial} animate={animations.fadeIn.animate}>
```

---

## 📱 Responsive Breakpoints

### Convención Mobile-First
```typescript
// ✅ CORRECTO
className="w-full md:w-1/2 lg:w-1/3"  

// ❌ INCORRECTO
className="w-1/3 md:w-1/2 lg:w-full"
```

### Breakpoints Disponibles
```
Default: < 640px  (mobile)
md:      640px+   (tablet)  
lg:      1024px+  (desktop)
```

---

## ♿ Accesibilidad

### Cada Componente Debe Tener

```typescript
// ✅ Semantic HTML
<button>...</button>  {/* NO <div onClick> */}
<nav>...</nav>
<section>...</section>

// ✅ ARIA Labels
<button aria-label="Toggle menu">
<label htmlFor="email">Email:<input id="email" /></label>

// ✅ Focus visible  
ouInput:focus-visible { outline: 2px solid; }

// ✅ Keyboard nav
onKeyDown={(e) => e.key === 'Enter' && action()}
```

---

## 🔄 State Management

### Local State (Hooks)
```typescript
import { useMobileMenu } from '@/hooks';

const { isOpen, toggle, close } = useMobileMenu();
```

### Context (Future)
```typescript
// Cuando needed:
- UserContext
- ThemeContext
- NotificationContext
```

---

## 📊 Performance Tips

### ✅ DO
```typescript
// Code splitting automático
const LazyComponent = lazy(() => import('@/components/Heavy'));

// Lazy loading de imágenes
<img loading="lazy" src={...} />

// Memoization cuando complejidad es alta
export const ComplexCard = memo(Card);
```

### ❌ DON'T
```typescript
// Crear componentes gigantes (> 200 lines)
// Memoizar TODOS los componentes
// Usar Context para todo
// Hardcodear valores mágicos
```

---

## 🚀 Próximas Acciones

1. **Completar Hero section**
2. **Crear Features section**
3. **QR Scanner demo**
4. **Stats & How It Works**
5. **Contact & Footer**
6. **Framer Motion animations**
7. **SEO metadata**
8. **Performance audit**

---

**Última actualización**: 2026-04-01  
**Status**: En desarrollo
