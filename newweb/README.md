# Vyva Web - Next.js

Sitio web moderno y rediseñado para Vyva POS, construido con Next.js 16, React 19, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Totalmente adaptable a todos los dispositivos
- **Componentes Reutilizables**: Arquitectura modular con componentes genéricos
- **TypeScript**: Tipado estático para mayor seguridad y productividad
- **SEO Optimizado**: Metadata completa para mejor posicionamiento
- **Performance**: Optimizado para velocidad y rendimiento

## 📁 Estructura del Proyecto

```
app/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Barra de navegación principal
│   │   └── Footer.tsx      # Pie de página
│   └── ui/
│       ├── Button.tsx       # Botón reutilizable
│       ├── Card.tsx         # Tarjeta contenedor
│       ├── Section.tsx      # Sección de página
│       ├── FeatureCard.tsx  # Tarjeta de característica
│       └── FAQItem.tsx      # Item de FAQ interactivo
├── pricing/
│   └── page.tsx            # Página de planes y precios
├── faq/
│   └── page.tsx            # Página de preguntas frecuentes
├── terms/
│   └── page.tsx            # Términos de servicio
├── privacy/
│   └── page.tsx            # Política de privacidad
├── layout.tsx              # Layout principal
├── page.tsx                # Página de inicio
└── globals.css             # Estilos globales
```

## 🎨 Componentes Genéricos

### Button
Botón reutilizable con múltiples variantes y tamaños.

```tsx
<Button variant="primary" size="lg" href="/pricing">
  Ver Planes
</Button>
```

Variantes: `primary`, `secondary`, `outline`, `ghost`
Tamaños: `sm`, `md`, `lg`

### Card
Contenedor flexible con variantes de estilo.

```tsx
<Card variant="elevated" hover>
  Contenido de la tarjeta
</Card>
```

Variantes: `default`, `elevated`, `outlined`

### Section
Sección de página con fondos configurables.

```tsx
<Section background="white" id="features">
  Contenido de la sección
</Section>
```

Fondos: `white`, `light`, `gradient`

### FeatureCard
Tarjeta especializada para mostrar características.

```tsx
<FeatureCard
  icon="📅"
  title="Agendamiento Online"
  description="Gestiona tus citas 24/7"
/>
```

### FAQItem
Item interactivo para preguntas frecuentes.

```tsx
<FAQItem
  question="¿Cómo funciona?"
  answer="Vyva es una plataforma..."
/>
```

## 🎨 Estilos Globales

El proyecto utiliza variables CSS personalizadas para mantener consistencia:

- **Colores**: Primary, secondary, success, danger, etc.
- **Border Radius**: Card, default, button, field
- **Espaciado**: Container padding, font sizes
- **Transiciones**: Animaciones suaves y consistentes

## 🚀 Desarrollo

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construir para producción

```bash
npm run build
```

### Iniciar servidor de producción

```bash
npm start
```

## 📝 Páginas Disponibles

- `/` - Página principal con hero, características y casos de uso
- `/pricing` - Planes y precios
- `/faq` - Preguntas frecuentes
- `/terms` - Términos de servicio
- `/privacy` - Política de privacidad

## 🛠️ Tecnologías

- **Next.js 16** - Framework React con SSR
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Inter Font** - Tipografía moderna

## 📄 Licencia

© 2024 Vyva POS, LLC. Todos los derechos reservados.
