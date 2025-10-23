# Vyva - Plataforma de Gestión de Suscripciones

![Vyva Logo](assets/images/vyva_logo_black.svg)

## 📋 Descripción

Vyva es una **plataforma integral de gestión de suscripciones** que transforma cualquier negocio en una máquina de ingresos recurrentes. Diseñada para crear, gestionar y optimizar modelos de suscripción, con capacidades adicionales de punto de venta para una experiencia completa.

### 🎯 Propósito Principal

Vyva es la **plataforma que convierte clientes únicos en ingresos predecibles** permitiendo a los negocios:

- Crear y gestionar suscripciones de cualquier tipo
- Automatizar cobros y comunicaciones con clientes
- Transformar productos/servicios en modelos recurrentes
- Analizar el rendimiento de suscripciones en tiempo real

## ✨ Características Principales

### 🔄 Gestión de Suscripciones (Core)

- **Creación de Planes**: Diseña suscripciones mensuales, trimestrales o anuales
- **Cobro Automático**: Procesamiento automático de pagos recurrentes
- **Comunicación Automática**: Recordatorios, confirmaciones y alertas de pago
- **Gestión de Clientes**: Base de datos completa con historial de suscripciones

### 🛒 Capacidades de Punto de Venta

- **Ventas Únicas**: Procesa ventas puntuales con múltiples métodos de pago
- **Control de Inventario**: Registro preciso de productos con alertas de stock
- **Links de Pago**: Envío directo de enlaces de pago por correo electrónico
- **Integración Total**: POS integrado con el sistema de suscripciones

### 📊 Dashboard Analítico

- **Métricas de Suscripciones**: Seguimiento de ingresos recurrentes y retención
- **Análisis de Clientes**: Valor de vida del cliente (LTV) y tasas de cancelación
- **Gráficos Interactivos**: Visualización de datos con Chart.js
- **Filtros de Período**: Análisis de 30 y 90 días para optimizar estrategias

### 🔐 Seguridad y Cumplimiento

- **PCI DSS**: Cumplimiento con estándares de seguridad para pagos
- **Encriptación**: Protección de datos sensibles
- **GDPR**: Cumplimiento con regulaciones de protección de datos
- **Integración Epayco**: Procesador de pagos certificado

## 🚀 Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos personalizados con variables CSS
- **JavaScript (ES6+)**: Funcionalidad interactiva y dinámica
- **Tailwind CSS**: Framework de utilidades para diseño responsivo

### Librerías y APIs

- **Chart.js**: Gráficos interactivos para el dashboard
- **Chart.js Data Labels**: Etiquetas en gráficos
- **Ionicons**: Iconografía moderna
- **Google Fonts (Inter)**: Tipografía profesional

### Integración de Pagos

- **Epayco**: Pasarela de pagos principal
- **Google OAuth**: Autenticación segura
- **Google Calendar API**: Funcionalidades de agendamiento

### Deployment

- **AWS Amplify**: Hosting y CI/CD
- **Git**: Control de versiones

## 📁 Estructura del Proyecto

```
vyvaweb/
├── index.html              # Landing page - Plataforma de Suscripciones
├── privacy.html            # Política de privacidad
├── amplify.yml             # Configuración de AWS Amplify
├── assets/
│   ├── images/
│   │   ├── Vyva_favicon.svg
│   │   ├── vyva_logo_black.svg
│   │   └── vyva_logo_white.svg
│   ├── styles.css          # Estilos personalizados
│   └── scripts.js          # Demo interactivo de suscripciones y dashboard
└── README.md               # Este archivo
```

## 🎨 Diseño y UX

### Paleta de Colores

- **Primary**: `#7b8be9` (Azul principal)
- **Primary Light**: `#bfc7f4` (Azul claro)
- **Primary Soft**: `#eeeffc` (Azul suave)
- **Dark**: `#32325d` (Gris oscuro)
- **Light**: `#f0f2f5` (Gris claro)
- **Success**: `#61b197` (Verde)
- **Danger**: `#ff3f3f` (Rojo)

### Componentes de UI

- **Cards**: Bordes redondeados (20px)
- **Botones**: Bordes redondeados (8px)
- **Campos**: Altura estándar (40px)
- **Transiciones**: Suaves (300ms ease-in)

### Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación a tablet y desktop
- **Touch Friendly**: Elementos táctiles optimizados

## 💼 Casos de Uso

### 🏋️ Gimnasios y Fitness

- **Membresías Recurrentes**: Planes mensuales, trimestrales o anuales
- **Paquetes de Clases**: Suscripciones a entrenamientos especializados
- **Cobro Automático**: Gestión de cuotas sin intervención manual

### 🍽️ Restaurantes y Alimentación

- **Club de Suscriptores**: Recargas automáticas y descuentos exclusivos
- **Kits de Comida**: Suscripciones semanales o mensuales
- **Menús VIP**: Acceso exclusivo para miembros suscritos

### 👕 Retail y E-commerce

- **Cajas de Suscripción**: Envíos mensuales personalizados
- **Acceso Anticipado**: Nuevas colecciones para suscriptores
- **Programas de Fidelidad**: Descuentos y beneficios exclusivos

### 💆‍♀️ Belleza y Bienestar

- **Planes de Tratamiento**: Suscripciones a servicios de belleza
- **Productos de Cuidado**: Renovación automática de cosméticos
- **Mantenimiento Personalizado**: Seguimiento y recordatorios automáticos

### 🦷 Salud y Servicios Médicos

- **Planes de Prevención**: Suscripciones a servicios de salud
- **Paquetes de Tratamiento**: Planes de cuidado dental
- **Cobertura Familiar**: Suscripciones para toda la familia

## 💰 Modelo de Precios

### Plan Esencial

- **Precio**: Gratis
- **Comisión**: 5% por transacción
- **Límite**: Hasta $45M mensuales en suscripciones
- **Funciones**: Gestión completa de suscripciones, dashboard, POS integrado, gestión de clientes

### Plan Premium

- **Precio**: Tarifas especiales
- **Comisión**: Condiciones preferenciales
- **Límite**: $45M - $80M mensuales en suscripciones
- **Funciones**: Todo lo anterior + múltiples usuarios, API access, soporte dedicado, analytics avanzados

## 🔧 Instalación y Configuración

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- Cuenta de Google (para autenticación)

### Instalación Local

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/vyvaweb.git
cd vyvaweb
```

2. Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

3. Visita `http://localhost:8000` en tu navegador

### Deployment en AWS Amplify

1. Conecta tu repositorio GitHub a AWS Amplify
2. El archivo `amplify.yml` ya está configurado para deployment automático
3. Amplify detectará automáticamente los cambios y desplegará la aplicación

## 📱 Funcionalidades Interactivas

### Dashboard Demo

- **Gráficos Dinámicos**: Cambio entre períodos de 30 y 90 días
- **KPIs de Suscripciones**: Métricas de retención y LTV actualizadas automáticamente
- **Responsive Charts**: Adaptación a diferentes tamaños de pantalla

### Demo de Suscripciones

- **Carrito Interactivo**: Añadir/quitar productos y suscripciones
- **Simulación de Suscripción**: Demostración automática del flujo de suscripción
- **Modal de Confirmación**: Feedback visual de operaciones exitosas

### Navegación

- **Smooth Scrolling**: Navegación suave entre secciones
- **Mobile Menu**: Menú hamburguesa para dispositivos móviles
- **FAQ Accordion**: Preguntas frecuentes expandibles

## 🔒 Seguridad y Privacidad

### Medidas de Seguridad

- **Encriptación SSL/TLS**: Todas las comunicaciones encriptadas
- **Autenticación OAuth**: Inicio de sesión seguro con Google
- **Protección de Datos**: Cumplimiento con estándares internacionales
- **Monitoreo Continuo**: Detección de amenazas en tiempo real

### Política de Privacidad

- **Transparencia Total**: Uso claro de datos personales
- **Derechos GDPR**: Acceso, rectificación, eliminación y portabilidad
- **Retención de Datos**: Políticas claras de conservación
- **Contacto**: `contact@solaradev.com` para consultas de privacidad

## 🚀 Roadmap y Futuras Características

### Próximas Integraciones

- **Múltiples Pasarelas**: Stripe, PayPal, Mercado Pago
- **API REST**: Integración con sistemas externos de suscripciones
- **App Móvil**: Aplicación nativa para gestión de suscripciones
- **Multi-idioma**: Soporte para inglés y otros idiomas

### Mejoras Planificadas

- **Inteligencia Artificial**: Optimización automática de planes de suscripción
- **Automatización Avanzada**: Workflows de retención de clientes
- **Reportes Avanzados**: Análisis predictivo de cancelaciones
- **Integración CRM**: Conexión con sistemas de gestión de clientes

## 🤝 Contribución

### Cómo Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- **HTML**: Semántico y accesible
- **CSS**: Uso de variables CSS y metodología BEM
- **JavaScript**: ES6+ con comentarios descriptivos
- **Commits**: Mensajes claros y descriptivos

## 📞 Soporte y Contacto

### Soporte Técnico

- **Email**: `contact@solaradev.com`
- **Sitio Web**: [https://vyvapos.com](https://vyvapos.com)
- **Documentación**: Disponible en el sitio web

### Comunidad

- **GitHub Issues**: Para reportar bugs y sugerir mejoras
- **Discord**: Comunidad de desarrolladores (próximamente)
- **LinkedIn**: Actualizaciones y noticias del producto

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Epayco**: Por su excelente servicio de procesamiento de pagos
- **Chart.js**: Por las increíbles librerías de visualización
- **Tailwind CSS**: Por el framework de utilidades CSS
- **Ionicons**: Por los iconos modernos y consistentes
- **Google**: Por los servicios de autenticación y fuentes

---

**© 2024 Vyva. Todos los derechos reservados.**

_La plataforma que convierte cualquier negocio en una máquina de ingresos recurrentes._
