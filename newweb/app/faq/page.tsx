import React from 'react';
import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';
import { FAQItem } from '../components/ui/FAQItem';
import { Button } from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Vyva POS',
  description:
    'Preguntas frecuentes sobre Vyva POS. Resuelve todas tus dudas sobre nuestra plataforma de punto de venta y gestión de suscripciones.',
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Preguntas Generales',
      items: [
        {
          question: '¿Qué es Vyva POS?',
          answer:
            'Vyva POS es una plataforma integral que combina un punto de venta tradicional con gestión de suscripciones. Te permite manejar ventas diarias y crear ingresos recurrentes a través de suscripciones, todo en una sola herramienta.',
        },
        {
          question: '¿Cómo funciona el sistema de suscripciones?',
          answer:
            'Puedes crear planes de suscripción con diferentes frecuencias (mensual, trimestral, anual). El sistema cobra automáticamente a tus clientes y envía recordatorios de pago. También gestiona fallos de pago y permite pausar o cancelar suscripciones fácilmente.',
        },
        {
          question: '¿Necesito conocimientos técnicos para usar Vyva?',
          answer:
            'No necesitas conocimientos técnicos. Vyva está diseñado para ser increíblemente intuitivo. Puedes configurar tus productos, crear suscripciones y empezar a vender en minutos. Nuestro equipo de soporte está disponible para ayudarte en cada paso.',
        },
        {
          question: '¿Qué tipos de negocios pueden usar Vyva?',
          answer:
            'Vyva es perfecto para cualquier negocio que quiera crear ingresos recurrentes: gimnasios, restaurantes, tiendas de ropa, estéticas, odontología, academias, spas, servicios de limpieza, consultorías y muchos más. Si tu servicio se puede repetir, se puede suscribir con Vyva.',
        },
      ],
    },
    {
      title: 'Precios y Planes',
      items: [
        {
          question: '¿Cuáles son los precios de Vyva?',
          answer: (
            <>
              Vyva ofrece diferentes planes para adaptarse a tu negocio. Para
              conocer todos los precios, comisiones y características detalladas
              de cada plan, visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
        {
          question: '¿Puedo cambiar de plan en cualquier momento?',
          answer:
            '¡Sí! Puedes subir o bajar de plan cuando lo necesites directamente desde tu panel de control. Los cambios se aplicarán en tu siguiente ciclo de facturación. Si subes de plan, tendrás acceso inmediato a las nuevas características.',
        },
        {
          question: '¿Por qué se cobran comisiones?',
          answer: (
            <>
              Las comisiones cubren el uso de la plataforma Vyva POS, incluyendo
              todas las funcionalidades del plan que tengas. Las tarifas incluyen
              el cobro de la pasarela de pagos. Para conocer los detalles
              específicos de comisiones, visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
        {
          question: '¿Hay costos ocultos o tarifas adicionales?',
          answer: (
            <>
              No hay costos ocultos. Solo pagas la comisión por transacción y
              las tarifas estándar del procesador de pagos. No cobramos por
              configuración, mantenimiento mensual o tarifas de cancelación. Para
              conocer todos los costos detallados, visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
        {
          question: '¿Ofrecen descuentos por pago anual?',
          answer: (
            <>
              Sí, ofrecemos descuentos por pago anual en algunos de nuestros
              planes. Para conocer los descuentos específicos y las condiciones,
              visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
      ],
    },
    {
      title: 'Características y Funcionalidades',
      items: [
        {
          question: '¿Qué incluye el plan Essential?',
          answer: (
            <>
              El plan Essential incluye características básicas como una sola
              sede, página de venta personalizada, clientes ilimitados, productos
              ilimitados, servicios ilimitados, suscripciones ilimitadas, ventas
              ilimitadas, agendamientos ilimitados, usuarios ilimitados y
              resúmenes por correo para pagos online. Para conocer todos los
              detalles y comparar planes, visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
        {
          question:
            '¿Qué diferencia hay entre el plan Premium y Essential?',
          answer: (
            <>
              El plan Premium incluye todo lo del Essential, pero permite hasta 3
              sedes y envía resúmenes por correo para todos los tipos de pagos
              (no solo online). También incluye soporte prioritario y
              características avanzadas de gestión. Para una comparación
              detallada de todos los planes, visita nuestra{' '}
              <a
                href="/pricing"
                className="text-primary hover:underline font-semibold"
              >
                página de precios
              </a>
              .
            </>
          ),
        },
        {
          question: '¿Puedo tener múltiples sedes?',
          answer:
            'Sí, pero depende de tu plan: El plan Essential permite una sola sede, el Premium permite hasta 3 sedes, y el Enterprise permite sedes ilimitadas. Cada sede puede tener sus propios productos, precios y configuraciones.',
        },
        {
          question:
            '¿Cómo funciona la página de venta tutienda.vyvapos.com?',
          answer:
            'Cada cuenta tiene su propia página web donde los clientes pueden ver tus productos y servicios, hacer compras y suscribirse. La URL será tutienda.vyvapos.com donde tutienda es el nombre que elijas para tu negocio.',
        },
        {
          question: '¿Las suscripciones están disponibles en todos los países?',
          answer:
            'Las suscripciones están disponibles únicamente para Colombia. Para cobrar en otros países, debes contactar a nuestro equipo de ventas. Todas las otras funcionalidades (POS, productos, servicios, etc.) siguen vigentes independientemente del país.',
        },
      ],
    },
    {
      title: 'Aspectos Técnicos',
      items: [
        {
          question:
            '¿Necesito comprar algún equipo especial para usar el POS?',
          answer:
            'No. El Punto de Venta de Vyva funciona en cualquier dispositivo con un navegador web: tu computador, una tablet o incluso tu celular. No necesitas invertir en hardware costoso.',
        },
        {
          question: '¿Qué tan seguros están los datos de mis clientes?',
          answer:
            'La seguridad es nuestra máxima prioridad. Utilizamos procesadores de pago que cumplen con los más altos estándares de seguridad PCI DSS. La información de las tarjetas de tus clientes está encriptada y nunca se almacena en nuestros servidores.',
        },
        {
          question: '¿Qué procesadores de pago están disponibles?',
          answer:
            'Actualmente utilizamos MercadoPago como nuestra pasarela de pagos principal. Estamos trabajando para integrar más opciones en el futuro. MercadoPago acepta tarjetas de crédito, débito, PSE y otros métodos de pago populares en Colombia.',
        },
        {
          question: '¿Tienen API disponible?',
          answer:
            'Sí, pero solo está disponible en el plan Enterprise. La API te permite integrar Vyva con otros sistemas, automatizar procesos y crear integraciones personalizadas según las necesidades de tu negocio.',
        },
        {
          question: '¿Cómo funciona el sistema de respaldos?',
          answer:
            'Todos los datos se respaldan automáticamente en la nube con múltiples copias de seguridad. Los respaldos se realizan diariamente y se mantienen por períodos extendidos para garantizar la recuperación de datos en caso de cualquier incidente.',
        },
      ],
    },
    {
      title: 'Soporte y Ayuda',
      items: [
        {
          question: '¿Qué tipo de soporte ofrecen?',
          answer:
            'Todos los planes incluyen soporte por email. El plan Premium incluye ejecutivo de cuenta dedicado. El plan Enterprise incluye soporte prioritario 24/7 y capacitación dedicada.',
        },
        {
          question: '¿Puedo probar el servicio antes de comprometerme?',
          answer:
            'Absolutamente. El plan Essential es completamente gratuito y puedes usarlo sin límite de tiempo. También ofrecemos demos personalizadas para que conozcas todas las funcionalidades antes de decidir.',
        },
        {
          question: '¿Cómo puedo contactar soporte?',
          answer:
            'Puedes contactarnos por email a contact@solaradev.com o a través de nuestro sitio web. También puedes agendar una demo personalizada para resolver dudas específicas sobre tu negocio.',
        },
        {
          question: '¿Ofrecen capacitación para mi equipo?',
          answer:
            'Sí, todos los planes incluyen capacitación básica. El plan Premium incluye capacitación estándar, y el plan Enterprise incluye capacitación dedicada personalizada para tu equipo y necesidades específicas.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Preguntas{' '}
            <span className="text-primary">Frecuentes</span>
          </h1>
          <p className="text-xl text-dark/70 mb-8">
            Encuentra respuestas a las preguntas más comunes sobre Vyva POS
          </p>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-dark mb-8 text-center">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <FAQItem
                    key={itemIndex}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="text-center bg-primary-soft p-8 rounded-card mt-16">
            <h2 className="text-2xl font-bold text-dark mb-4">
              ¿No encontraste la respuesta que buscabas?
            </h2>
            <p className="text-dark/70 mb-6">
              Nuestro equipo está listo para ayudarte con cualquier pregunta
              específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:contact@solaradev.com" variant="primary" size="md">
                Contactar Soporte
              </Button>
              <Button
                href="https://calendly.com/victorguzber/conoce-vyva-pos"
                target="_blank"
                variant="outline"
                size="md"
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-lg text-dark/70 mb-8">
            Únete a cientos de negocios que ya están transformando sus ingresos
            con Vyva POS. Empieza gratis hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              size="lg"
            >
              Empezar Gratis Ahora
            </Button>
            <Button
              href="https://app.vyvapos.com/plans/premium"
              target="_blank"
              variant="outline"
              size="lg"
            >
              Empezar Premium
            </Button>
          </div>
          <p className="text-sm text-dark/50 mt-6">
            Sin compromisos • Configuración en minutos • Soporte incluido
          </p>
        </div>
      </Section>
    </>
  );
}
