import React from 'react';
import { Section } from './components/ui/Section';
import { FeatureCard } from './components/ui/FeatureCard';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { FAQItem } from './components/ui/FAQItem';

export default function HomePage() {
  const agendamientoFeatures = [
    {
      icon: '📅',
      title: 'Página de Reservas Personalizada',
      description:
        'Comparte tu link único y recibe reservas automáticamente. Tu página personalizada con tu marca y servicios.',
    },
    {
      icon: '🔄',
      title: 'Sincronización con Google Calendar',
      description:
        'Mantén todos tus calendarios actualizados automáticamente. Las citas de Vyva aparecen en tu Google Calendar.',
    },
    {
      icon: '👥',
      title: 'Gestión de Equipo',
      description:
        'Asigna citas a cada miembro de tu equipo según su especialidad y disponibilidad.',
    },
    {
      icon: '⏰',
      title: 'Horarios Flexibles',
      description:
        'Configura tu disponibilidad por día, empleado y servicio. Control total sobre tu tiempo.',
    },
    {
      icon: '📧',
      title: 'Recordatorios Automáticos',
      description:
        'Reduce las ausencias con notificaciones automáticas por email antes de cada cita.',
    },
    {
      icon: '📱',
      title: 'Totalmente Responsive',
      description:
        'Tus clientes pueden reservar desde cualquier dispositivo: móvil, tablet o computador.',
    },
  ];

  const clientesFeatures = [
    {
      icon: '📊',
      title: 'Base de Datos Completa',
      description:
        'Información de contacto, preferencias y notas personalizadas de cada cliente.',
    },
    {
      icon: '📜',
      title: 'Historial de Citas',
      description:
        'Ve qué servicios ha tomado cada cliente, cuándo fue su última visita y más.',
    },
    {
      icon: '💰',
      title: 'Historial de Compras',
      description:
        'Conoce el valor de cada cliente y qué productos o servicios prefiere.',
    },
    {
      icon: '📈',
      title: 'Estadísticas',
      description:
        'Clientes nuevos, recurrentes, promedio de gasto y más métricas importantes.',
    },
  ];

  const posFeatures = [
    {
      icon: '💳',
      title: 'Gestión de ventas',
      description:
        'Procesa las ventas de tus servicios y productos de manera rápida y segura.',
    },
    {
      icon: '🛒',
      title: 'Carrito Integrado',
      description:
        'Vende productos y servicios juntos. Combina tratamientos con productos fácilmente.',
    },
    {
      icon: '🧾',
      title: 'Facturación',
      description:
        'Gestión completa de órdenes de venta y facturación para tu negocio.',
    },
    {
      icon: '📊',
      title: 'Control Total',
      description:
        'Registra todas tus transacciones y mantén control sobre tu flujo de caja.',
    },
  ];

  const equipoFeatures = [
    {
      icon: '👨‍💼',
      title: 'Perfiles de Empleados',
      description:
        'Crea perfiles con fotos, especialidades y horarios de cada miembro del equipo.',
    },
    {
      icon: '📅',
      title: 'Asignación de Citas',
      description:
        'Distribuye el trabajo equitativamente y asigna especialistas según el servicio.',
    },
    {
      icon: '🔐',
      title: 'Roles y Permisos',
      description:
        'Controla quién ve y hace qué. Define permisos según el rol de cada empleado.',
    },
    {
      icon: '📊',
      title: 'Seguimiento de Desempeño',
      description:
        'Citas atendidas, ventas generadas y desempeño de cada miembro del equipo.',
    },
  ];

  const useCases = [
    {
      icon: '💇‍♀️',
      title: 'Salones de Belleza',
      description:
        'Gestiona cortes, tintes y peinados. Asigna estilistas según especialidad y mantén tu agenda llena con reservas online.',
    },
    {
      icon: '✨',
      title: 'Estéticas Faciales',
      description:
        'Agenda tratamientos faciales, lleva el historial completo de cada cliente y vende productos de cuidado de la piel.',
    },
    {
      icon: '🧖‍♀️',
      title: 'Spas y Centros de Bienestar',
      description:
        'Masajes, tratamientos corporales, múltiples salas y terapeutas. Coordina todo desde una sola plataforma.',
    },
    {
      icon: '💉',
      title: 'Clínicas Estéticas',
      description:
        'Consultas, procedimientos y seguimiento de tratamientos. Gestiona tu clínica con herramientas profesionales.',
    },
    {
      icon: '💈',
      title: 'Barberías',
      description:
        'Cortes y arreglos de barba. Gestión de turnos rápidos y base de datos de clientes recurrentes.',
    },
    {
      icon: '💆‍♀️',
      title: 'Centros de Masajes',
      description:
        'Diferentes tipos de masajes, duración variable de sesiones y terapeutas especializados en una sola agenda.',
    },
  ];

  const faqs = [
    {
      question: '¿Mis clientes pueden reservar citas online?',
      answer:
        '¡Sí! Tienes una página de reservas personalizada con tu marca. Comparte tu link único y tus clientes pueden reservar citas 24/7 desde cualquier dispositivo. Tú mantienes el control total de tu agenda.',
    },
    {
      question: '¿Se sincroniza con mi Google Calendar?',
      answer:
        'Sí. Las citas que se crean en Vyva se sincronizan automáticamente con tu Google Calendar. Puedes ver todas tus citas en un solo lugar y mantener tus calendarios siempre actualizados.',
    },
    {
      question: '¿Puedo agregar a todos los miembros de mi equipo?',
      answer:
        'Sí. Puedes agregar a todos los miembros de tu equipo, crear sus perfiles con fotos y especialidades, asignarles citas y controlar sus permisos de acceso según su rol.',
    },
    {
      question: '¿Cómo funcionan los recordatorios de citas?',
      answer:
        'Vyva envía automáticamente recordatorios por email a tus clientes antes de cada cita. Esto ayuda a reducir las ausencias y mantiene a tus clientes informados.',
    },
    {
      question: '¿Qué tan seguros están los datos de mis clientes?',
      answer:
        'La seguridad es nuestra máxima prioridad. Todos los datos están encriptados y almacenados de forma segura. La información de tus clientes está protegida con los más altos estándares de seguridad.',
    },
    {
      question: '¿Puedo personalizar mi página de reservas?',
      answer:
        'Sí. Puedes personalizar los colores de tu marca, agregar tu logo y fotos de tu negocio. Tu página de reservas reflejará la identidad de tu salón, estética o spa.',
    },
    {
      question: '¿Qué reportes puedo ver?',
      answer:
        'Puedes ver reportes de ventas, citas completadas, clientes nuevos, ingresos por empleado, métodos de pago y más. Todo en tiempo real desde tu dashboard.',
    },
    {
      question: '¿Necesito descargar algo o es web?',
      answer:
        'Es 100% web. No necesitas descargar ni instalar nada. Funciona en cualquier navegador desde tu computador, tablet o celular. Siempre actualizado y accesible desde cualquier lugar.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center py-24 sm:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_30%,_#eeeffc_0%,_#f8fafc_100%)] -z-10" />
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark tracking-tight">
            Sistema de Agendamiento y Gestión{' '}
            <br className="hidden md:block" />
            para tu{' '}
            <span className="text-primary">
              Servicio de Belleza y Bienestar
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-dark/70">
            Gestiona tus citas, atiende a tus clientes y haz crecer tu negocio
            con una plataforma todo-en-uno diseñada para servicios de belleza y
            bienestar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto">
            {[
              'Agenda online 24/7',
              'Google Calendar',
              'Gestión de clientes',
              'Punto de venta',
              'Reportes en tiempo real',
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-dark/70"
              >
                <span className="text-primary text-xl">✓</span>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              size="lg"
            >
              Empezar Gratis
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#agendamiento" className="text-primary text-4xl">
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* Agendamiento Section */}
      <Section id="agendamiento" background="white">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Agenda Inteligente
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Tus Clientes Reservan, Tú te Enfocas en Atenderlos
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Sistema completo de agendamiento online que permite a tus clientes
            reservar citas 24/7, mientras tú mantienes el control total de tu
            agenda.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendamientoFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Gestión de Clientes Section */}
      <Section id="clientes" background="light">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Construye Lealtad
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Conoce a tus Clientes, Construye Lealtad
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Una base de datos completa de tus clientes con historial de citas y
            compras. Todo lo que necesitas para fidelizar y ofrecer un servicio
            personalizado.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientesFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Punto de Venta Section */}
      <Section id="pos" background="white">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Pagos y Ventas
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Cobra Fácil, Vende Más
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Punto de venta integrado para procesar pagos, vender productos y
            servicios, todo desde una sola plataforma.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Gestión de Equipo Section */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Tu Equipo
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Coordina tu Equipo sin Complicaciones
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Gestiona a todo tu equipo desde una sola plataforma. Asigna citas,
            controla permisos y haz seguimiento del desempeño.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipoFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Dashboard Section */}
      <Section id="dashboard" background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Tu Negocio, en Tiempo Real
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Reportes de ventas, clientes nuevos, ingreso promedio y gráficos
            interactivos. Todo lo que necesitas para tomar decisiones
            inteligentes desde tu dashboard.
          </p>
        </div>
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-card shadow-2xl border border-slate-200">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-dark">
              Dashboard de Ventas
            </h3>
            <div className="flex gap-2">
              <span className="bg-primary text-white px-4 py-2 rounded-btn font-semibold text-sm">
                Últimos 30 días
              </span>
              <span className="bg-white text-dark/80 px-4 py-2 rounded-btn font-semibold text-sm border border-slate-200">
                Últimos 90 días
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-light p-4 rounded-default">
              <span className="text-sm text-dark/50 font-medium">
                Ingresos Totales
              </span>
              <p className="text-2xl font-bold text-primary">$7,100,000</p>
            </div>
            <div className="bg-light p-4 rounded-default">
              <span className="text-sm text-dark/50 font-medium">
                Nuevos Clientes
              </span>
              <p className="text-2xl font-bold text-primary">42</p>
            </div>
            <div className="bg-light p-4 rounded-default">
              <span className="text-sm text-dark/50 font-medium">
                Ingreso Prom./Cliente
              </span>
              <p className="text-2xl font-bold text-primary">$169,047</p>
            </div>
          </div>
          <div className="h-48 bg-light rounded-default flex items-center justify-center">
            <p className="text-dark/40 font-medium">
              📊 Gráficos interactivos disponibles en la plataforma
            </p>
          </div>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section id="use-cases" background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Diseñado para Negocios como el Tuyo
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Vyva está especializado en servicios de belleza y bienestar.
            Descubre cómo optimizar tu negocio con agendamiento inteligente.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} variant="elevated" hover className="p-6">
              <div className="text-3xl mb-3">{useCase.icon}</div>
              <h3 className="font-bold text-lg text-dark mb-2">
                {useCase.title}
              </h3>
              <p className="text-dark/70 text-sm">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dark mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
            ¿Listo para llevar tu salón al siguiente nivel?
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Únete a los salones, estéticas y spas que ya están optimizando su
            gestión con Vyva. La configuración es rápida y nuestro equipo está
            listo para ayudarte en cada paso.
          </p>
          <div className="mt-8">
            <Button
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              size="lg"
            >
              Empezar Gratis
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
