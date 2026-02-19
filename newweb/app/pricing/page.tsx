import React from 'react';
import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const metadata: Metadata = {
  title: 'Planes | Vyva - Sistema de Agendamiento y Gestión',
  description:
    'Planes personalizados de Vyva para tu salón, estética o spa. Sistema todo-en-uno de agendamiento, gestión de clientes, punto de venta y reportes.',
};

export default function PricingPage() {
  const features = [
    {
      category: 'Agendamiento y Gestión de Citas',
      icon: '📅',
      items: [
        {
          title: 'Página de reservas personalizada',
          desc: 'Página optimizada para que tus clientes reserven 24/7. Comparte tu link único.',
        },
        {
          title: 'Sincronización con Google Calendar',
          desc: 'Mantén todos tus calendarios actualizados automáticamente.',
        },
        {
          title: 'Gestión de horarios',
          desc: 'Configura tu disponibilidad por día, empleado y servicio.',
        },
        {
          title: 'Recordatorios automáticos',
          desc: 'Reduce ausencias con notificaciones automáticas por email.',
        },
        {
          title: 'Asignación de empleados',
          desc: 'Asigna citas a cada miembro de tu equipo según especialidad.',
        },
        {
          title: 'Vista de timeline/calendario',
          desc: 'Visualiza todas tus citas en un calendario interactivo.',
        },
      ],
    },
    {
      category: 'Gestión de Clientes (Fidelización)',
      icon: '👥',
      items: [
        {
          title: 'Base de datos completa',
          desc: 'Información de contacto, preferencias y notas de cada cliente.',
        },
        {
          title: 'Historial de citas',
          desc: 'Ve qué servicios ha tomado cada cliente y cuándo.',
        },
        {
          title: 'Historial de compras',
          desc: 'Conoce el valor de cada cliente y qué productos prefiere.',
        },
        {
          title: 'Estadísticas y métricas',
          desc: 'Clientes nuevos, recurrentes, promedio de gasto y más.',
        },
      ],
    },
    {
      category: 'Punto de Venta',
      icon: '💳',
      items: [
        {
          title: 'Gestión de pagos',
          desc: 'Procesa pagos de servicios y productos de manera segura.',
        },
        {
          title: 'Carrito integrado',
          desc: 'Vende productos y servicios juntos fácilmente.',
        },
        {
          title: 'Facturación',
          desc: 'Gestión completa de órdenes de venta y facturación.',
        },
        {
          title: 'Múltiples métodos de pago',
          desc: 'Acepta tarjetas, transferencias y otros métodos.',
        },
      ],
    },
    {
      category: 'Dashboard y Reportes',
      icon: '📊',
      items: [
        {
          title: 'KPIs en tiempo real',
          desc: 'Ventas del día, clientes nuevos, promedio de ticket.',
        },
        {
          title: 'Reportes de ventas',
          desc: 'Por día, semana, mes o rango personalizado.',
        },
        {
          title: 'Análisis por método de pago',
          desc: 'Sabe cuánto entra por cada canal de pago.',
        },
        {
          title: 'Gráficos visuales',
          desc: 'Entiende tu negocio de un vistazo con visualizaciones.',
        },
      ],
    },
    {
      category: 'Gestión de Equipo',
      icon: '👨‍💼',
      items: [
        {
          title: 'Perfiles de empleados',
          desc: 'Con fotos, especialidades y horarios personalizados.',
        },
        {
          title: 'Asignación de citas',
          desc: 'Distribuye el trabajo equitativamente en tu equipo.',
        },
        {
          title: 'Roles y permisos',
          desc: 'Controla quién ve y hace qué en la plataforma.',
        },
        {
          title: 'Seguimiento de desempeño',
          desc: 'Citas atendidas y ventas generadas por empleado.',
        },
      ],
    },
  ];

  const useCases = [
    {
      icon: '💇‍♀️',
      title: 'Salones de Belleza',
      description:
        'Gestiona cortes, tintes, peinados. Asigna estilistas según especialidad.',
    },
    {
      icon: '✨',
      title: 'Estéticas Faciales',
      description:
        'Agenda tratamientos, lleva historial de clientes y vende productos.',
    },
    {
      icon: '🧖‍♀️',
      title: 'Spas y Centros de Bienestar',
      description:
        'Coordina múltiples salas, terapeutas y tratamientos desde una sola plataforma.',
    },
    {
      icon: '💉',
      title: 'Clínicas Estéticas',
      description:
        'Gestiona consultas, procedimientos y seguimiento de tratamientos.',
    },
    {
      icon: '💈',
      title: 'Barberías',
      description:
        'Cortes y arreglos de barba. Gestión de turnos y clientes recurrentes.',
    },
    {
      icon: '💆‍♀️',
      title: 'Centros de Masajes',
      description:
        'Diferentes tipos de masajes y terapeutas especializados en una sola agenda.',
    },
  ];

  const pricingFaqs = [
    {
      question: '¿Cómo funcionan los precios de Vyva?',
      answer:
        'El equipo de Vyva trabajará contigo para determinar un precio simple y personalizado, basado en el tipo de servicios que ofreces y el tamaño de tu negocio. Un precio que incluye acceso a todas las características y herramientas de la plataforma.',
    },
    {
      question: '¿Por qué debo contactar a ventas?',
      answer:
        'Cada negocio es único y tiene necesidades diferentes. Al contactar a nuestro equipo de ventas, podemos entender las necesidades específicas de tu salón, estética o spa, personalizar un plan que se ajuste a tu volumen de citas y clientes, ofrecerte el mejor precio según tus requerimientos, brindarte asesoría sobre cómo implementar Vyva en tu negocio y responder todas tus preguntas antes de que tomes una decisión.',
    },
    {
      question: '¿Puedo probar Vyva antes de comprometerme?',
      answer:
        '¡Absolutamente! Puedes probar Vyva gratuitamente durante 1 año completo haciendo clic en "Probar Gratis". Explora todas las funcionalidades y descubre cómo puede transformar la gestión de tu negocio sin ningún compromiso.',
    },
    {
      question: '¿Qué incluye el servicio?',
      answer:
        'Todos nuestros planes incluyen acceso completo a: sistema de agendamiento con página pública, gestión de clientes, punto de venta, reportes y dashboard, gestión de equipo, sincronización con Google Calendar, y soporte técnico.',
    },
    {
      question: '¿Hay costos ocultos o tarifas adicionales?',
      answer:
        'No hay costos ocultos. El precio que acordamos incluye todas las funcionalidades de la plataforma.',
    },
    {
      question: '¿Cuáles son los requisitos para empezar a utilizar Vyva?',
      answer:
        'Solo necesitas ponerte en contacto con nuestro equipo de ventas para conocer las necesidades de tu negocio. Te brindaremos toda la información sobre funcionalidades y las mejores alternativas para tus procesos. Durante la implementación y el uso de la plataforma te brindaremos soporte y atención personalizada.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Sistema de Gestión{' '}
            <span className="text-primary">Todo-en-Uno</span>
          </h1>
          <p className="text-xl text-dark/70 mb-4">
            Vyva ofrece planes simples y personalizados para tu negocio, que
            incluyen todas las funcionalidades para gestionar citas, clientes,
            ventas y mucho más.
          </p>
          <div className="inline-block bg-green-50 border border-green-200 rounded-btn px-6 py-3 mb-8">
            <p className="text-green-800 font-semibold">
              ✨ Prueba gratuita de 1 año completo
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              size="lg"
            >
              Probar Gratis
            </Button>
            <Button
              href="https://calendly.com/victorguzber/conoce-vyva-pos"
              target="_blank"
              variant="outline"
              size="lg"
            >
              Contactar a Ventas
            </Button>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Funcionalidades Incluidas en Vyva
          </h2>
          <p className="text-lg text-dark/70">
            Todo lo que necesitas para gestionar tu salón, estética o spa
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    {feature.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-dark">
                            {item.title}
                          </h4>
                          <p className="text-sm text-dark/60">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Diseñado para Negocios como el Tuyo
          </h2>
          <p className="text-lg text-dark/70">
            Vyva se adapta perfectamente a diferentes tipos de servicios de
            belleza y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} variant="default" hover className="p-6">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="font-bold text-xl text-dark mb-2">
                {useCase.title}
              </h3>
              <p className="text-dark/70">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {pricingFaqs.map((faq, index) => (
              <Card key={index} variant="elevated" className="p-6">
                <h3 className="font-semibold text-lg text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-dark/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-lg text-dark/70 mb-8">
            Únete a los salones, estéticas y spas que ya están optimizando su
            gestión con Vyva. Prueba gratis o contacta a nuestro equipo para un
            plan personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              size="lg"
            >
              Probar Gratis
            </Button>
            <Button
              href="https://calendly.com/victorguzber/conoce-vyva-pos"
              target="_blank"
              variant="outline"
              size="lg"
            >
              Contactar a Ventas
            </Button>
          </div>
          <p className="text-sm text-dark/50 mt-6">
            Prueba gratuita de 1 año • Sin compromisos • Soporte personalizado
          </p>
        </div>
      </Section>
    </>
  );
}
