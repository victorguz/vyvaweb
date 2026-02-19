import React from 'react';
import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Vyva POS',
  description:
    'Política de privacidad de Vyva POS. Conoce cómo protegemos y utilizamos tu información personal y la de tus clientes.',
  keywords: 'política de privacidad, protección de datos, GDPR, Vyva POS, privacidad',
  authors: [{ name: 'Vyva' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Política de Privacidad | Vyva POS',
    description:
      'Política de privacidad de Vyva POS. Conoce cómo protegemos y utilizamos tu información personal y la de tus clientes.',
    type: 'website',
    url: 'https://vyvapos.com/privacy',
    siteName: 'Vyva POS',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidad | Vyva POS',
    description:
      'Política de privacidad de Vyva POS. Conoce cómo protegemos y utilizamos tu información personal y la de tus clientes.',
  },
};

export default function PrivacyPage() {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-dark/80">
            Última actualización: Diciembre 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-light p-6 rounded-default mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">
              Resumen Ejecutivo
            </h2>
            <p className="text-dark/80">
              En Vyva POS, LLC respetamos tu privacidad y nos comprometemos a
              proteger tu información personal. Esta política explica cómo
              recopilamos, utilizamos, almacenamos y protegemos tus datos
              cuando utilizas nuestros servicios.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Información que Recopilamos
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                1.1 Información de Empresas (Usuarios)
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  Datos de contacto: nombre, correo electrónico, teléfono
                </li>
                <li>
                  Información comercial: nombre de la empresa, dirección, NIT
                </li>
                <li>Datos de facturación y pagos</li>
                <li>Información de productos y servicios ofrecidos</li>
                <li>Datos de transacciones y ventas</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                1.2 Información de Clientes
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información de citas agendadas</li>
                <li>Historial de servicios y compras</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                1.3 Datos Recopilados mediante Google OAuth
              </h3>
              <p className="text-dark/80 mb-3">
                Cuando eliges iniciar sesión con tu cuenta de Google,
                recopilamos únicamente la siguiente información:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>ID único de Google:</strong> Identificador para
                  autenticar tu cuenta
                </li>
                <li>
                  <strong>Correo electrónico:</strong> Para crear tu cuenta y
                  comunicaciones
                </li>
                <li>
                  <strong>Nombre completo:</strong> Nombre y apellidos de tu
                  perfil de Google
                </li>
                <li>
                  <strong>Foto de perfil (opcional):</strong> Si decides
                  mostrarla en tu perfil
                </li>
              </ul>
              <p className="text-dark/80 mt-4 mb-2">
                <strong>Integración con Google Calendar</strong> (Solo si el
                usuario lo autoriza):
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Acceso a Google Calendar:</strong> Únicamente para
                  sincronizar las citas que creas en Vyva con tu calendario de
                  Google
                </li>
                <li>
                  <strong>Eventos de calendario:</strong> Solo los eventos
                  relacionados con citas de Vyva
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Cómo Utilizamos tu Información
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                2.1 Para Empresas (Usuarios)
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Funcionalidades básicas:</strong> Gestión de citas,
                  ventas, inventario y clientes
                </li>
                <li>
                  <strong>Comunicaciones de utilidad:</strong> Reportes de
                  ventas, confirmaciones de citas, notificaciones importantes
                </li>
                <li>
                  <strong>Comunicaciones comerciales:</strong> Información
                  sobre nuevas funcionalidades y mejoras del servicio
                </li>
                <li>
                  <strong>Facturación:</strong> Envío de facturas y
                  confirmaciones de pagos
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                2.2 Para Clientes
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Agendamientos:</strong> Gestión de citas y servicios
                  programados
                </li>
                <li>
                  <strong>Comunicaciones de utilidad:</strong> Confirmaciones
                  de pagos, recordatorios de citas, facturas
                </li>
                <li>
                  <strong>Marketing:</strong> Comunicaciones promocionales de
                  las empresas a las cuales se hayan registrado
                </li>
                <li>
                  <strong>Servicio al cliente:</strong> Soporte y resolución
                  de consultas
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                2.3 Mejora de la Experiencia
              </h3>
              <p className="text-dark/80 mb-3">
                Utilizamos datos agregados y anónimos para:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Mejorar la funcionalidad de la plataforma</li>
                <li>Desarrollar nuevas características</li>
                <li>Optimizar el rendimiento del sistema</li>
                <li>Personalizar la experiencia del usuario</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                2.4 Uso Específico de Datos de Google
              </h3>
              <p className="text-dark/80 mb-3">
                Los datos obtenidos a través de Google OAuth se utilizan
                <strong> EXCLUSIVAMENTE</strong> para:
              </p>

              <div className="bg-green-50 p-4 rounded-default mb-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✅ Usos Permitidos:
                </h4>
                <ul className="list-disc pl-6 text-green-900/80 space-y-2">
                  <li>Autenticación y acceso seguro a la plataforma</li>
                  <li>Creación y gestión de tu cuenta de usuario</li>
                  <li>
                    Sincronización de citas con Google Calendar (solo si
                    autorizas esta integración)
                  </li>
                  <li>Mejorar tu experiencia dentro de la aplicación Vyva</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-default mb-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  ❌ NO utilizamos tus datos de Google para:
                </h4>
                <ul className="list-disc pl-6 text-red-900/80 space-y-2">
                  <li>Publicidad dirigida o personalizada</li>
                  <li>
                    Venta o transferencia a terceros con fines comerciales
                  </li>
                  <li>Creación de bases de datos para marketing externo</li>
                  <li>Entrenamiento de modelos de inteligencia artificial</li>
                  <li>Determinación de crédito o elegibilidad</li>
                  <li>
                    Cualquier propósito que no sea proporcionar o mejorar la
                    funcionalidad de Vyva
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-default">
                <p className="text-blue-900">
                  <strong>Importante:</strong> Google Calendar solo se
                  sincroniza si tú explícitamente conectas tu cuenta. Puedes
                  desconectarla en cualquier momento desde tu panel de
                  configuración.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Compartir Información con Terceros
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                3.1 Empresas Registradas
              </h3>
              <p className="text-dark/80 mb-3">
                Las empresas registradas en Vyva tendrán acceso a:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Nombre completo de sus clientes</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>
                  Información relevante recopilada durante la relación
                  comercial
                </li>
                <li>Datos de transacciones y suscripciones</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                3.2 Procesadores de Pago
              </h3>
              <p className="text-dark/80 mb-3">
                Utilizamos procesadores de pago seguros para procesar
                transacciones. Estos servicios tienen sus propias políticas de
                privacidad y cumplen con estándares de seguridad.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                3.3 Entidades Gubernamentales
              </h3>
              <p className="text-dark/80 mb-3">
                Compartimos información con la DIAN y otras entidades
                gubernamentales cuando es requerido legalmente, especialmente
                para:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Facturación electrónica nacional</li>
                <li>Cumplimiento de obligaciones fiscales</li>
                <li>Auditorías gubernamentales</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                3.4 Servicios de Análisis
              </h3>
              <p className="text-dark/80 mb-3">
                Utilizamos Google Analytics y Meta Ads para:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Analizar el uso de la plataforma</li>
                <li>Mejorar nuestros servicios</li>
                <li>Crear campañas publicitarias dirigidas</li>
                <li>Medir la efectividad de nuestras comunicaciones</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                3.5 Datos de Google - No Compartimos
              </h3>
              <p className="text-dark/80 mb-3">
                Los datos obtenidos mediante Google OAuth
                <strong> NO se comparten con terceros</strong>, excepto:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Google Inc.:</strong> Para mantener la funcionalidad
                  de autenticación y sincronización de calendario
                </li>
              </ul>

              <p className="text-dark/80 mt-4 mb-3">
                <strong>No vendemos, alquilamos ni compartimos tu información de
                  Google con:</strong>
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Anunciantes</li>
                <li>Agencias de marketing</li>
                <li>Brokers de datos</li>
                <li>Otras aplicaciones o servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Tus Derechos (GDPR)
              </h2>
              <p className="text-dark/80 mb-4">
                De acuerdo con el Reglamento General de Protección de Datos
                (GDPR), tienes los siguientes derechos:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Derecho de Acceso
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Puedes solicitar información sobre qué datos personales
                    tenemos sobre ti.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Derecho de Rectificación
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Puedes solicitar la corrección de datos inexactos o
                    incompletos.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Derecho de Eliminación
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Puedes solicitar la eliminación de tus datos personales.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Derecho de Portabilidad
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Puedes solicitar una copia de tus datos en formato
                    estructurado.
                  </p>
                </div>
              </div>

              <div className="bg-primary-soft p-6 rounded-default mt-6">
                <h4 className="font-semibold text-primary mb-2">
                  Solicitar Eliminación de Datos
                </h4>
                <p className="text-dark/80 mb-3">
                  Para ejercer cualquiera de estos derechos o solicitar la
                  eliminación de tus datos, puedes contactarnos en:
                </p>
                <p className="font-semibold text-primary">
                  📧 contact@solaradev.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Retención de Datos
              </h2>
              <p className="text-dark/80 mb-4">
                Conservamos tus datos personales durante el tiempo necesario
                para cumplir con los propósitos descritos en esta política, a
                menos que la ley requiera un período de retención más largo.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3">
                Datos Conservados por Requerimientos Legales
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  Información de facturación electrónica (según normativa
                  DIAN)
                </li>
                <li>Registros de transacciones comerciales</li>
                <li>Datos requeridos para auditorías fiscales</li>
                <li>Información necesaria para cumplimiento regulatorio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Seguridad de los Datos
              </h2>
              <p className="text-dark/80 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas
                apropiadas para proteger tus datos personales contra acceso no
                autorizado, alteración, divulgación o destrucción.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Encriptación
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Todos los datos sensibles se transmiten y almacenan de
                    forma encriptada.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Acceso Controlado
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Solo personal autorizado tiene acceso a los datos
                    personales.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Monitoreo
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Monitoreamos continuamente nuestros sistemas para detectar
                    amenazas.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Cumplimiento PCI DSS
                  </h4>
                  <p className="text-dark/80 text-sm">
                    Cumplimos con los estándares de seguridad para datos de
                    tarjetas de pago.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Cookies y Tecnologías Similares
              </h2>
              <p className="text-dark/80 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu
                experiencia en nuestra plataforma. Puedes controlar el uso de
                cookies a través de la configuración de tu navegador.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3">
                Tipos de Cookies que Utilizamos
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el
                  funcionamiento básico de la plataforma
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Para analizar cómo
                  los usuarios interactúan con nuestro sitio
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Para recordar tus
                  preferencias y configuraciones
                </li>
                <li>
                  <strong>Cookies de marketing:</strong> Para mostrar anuncios
                  relevantes y medir su efectividad
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                8. Gestión de tu Cuenta de Google
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                Desconectar Google Calendar
              </h3>
              <p className="text-dark/80 mb-3">
                Puedes desconectar la sincronización con Google Calendar en
                cualquier momento desde:
              </p>
              <ol className="list-decimal pl-6 text-dark/80 space-y-2 mb-4">
                <li>Panel de control &gt; Integraciones</li>
                <li>Seleccionar &quot;Desconectar Google Calendar&quot;</li>
              </ol>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                Revocar Acceso de Google
              </h3>
              <p className="text-dark/80 mb-3">
                Puedes revocar el acceso de Vyva a tu cuenta de Google
                visitando:
              </p>
              <p className="text-dark/80 mb-4">
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  https://myaccount.google.com/permissions
                </a>
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                Eliminación de Datos
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2 mb-4">
                <li>
                  Si desconectas Google Calendar, se elimina el token de
                  acceso inmediatamente
                </li>
                <li>
                  Si eliminas tu cuenta de Vyva, eliminamos todos los datos
                  asociados a tu cuenta de Google
                </li>
                <li>
                  Datos de transacciones se retienen solo por requisitos
                  legales (no incluyen datos de Google)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                Retención
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>
                  <strong>Datos de autenticación:</strong> Mientras tu cuenta
                  esté activa
                </li>
                <li>
                  <strong>Tokens de Google Calendar:</strong> Mientras
                  mantengas la integración activa
                </li>
                <li>
                  <strong>Después de eliminar tu cuenta:</strong> 30 días para
                  recuperación, luego eliminación permanente
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                9. Transferencias Internacionales
              </h2>
              <p className="text-dark/80 mb-4">
                Algunos de nuestros proveedores de servicios pueden estar
                ubicados fuera de Colombia. Cuando transferimos datos
                internacionalmente, nos aseguramos de que existan salvaguardas
                adecuadas para proteger tu información personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                10. Menores de Edad
              </h2>
              <p className="text-dark/80 mb-4">
                Nuestros servicios no están dirigidos a menores de 18 años. No
                recopilamos intencionalmente información personal de menores
                de edad. Si descubrimos que hemos recopilado información de un
                menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                11. Cambios a esta Política
              </h2>
              <p className="text-dark/80 mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente.
                Te notificaremos sobre cambios significativos a través de
                nuestro sitio web o por correo electrónico. Te recomendamos
                revisar esta política periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                12. Consentimiento
              </h2>
              <div className="bg-primary-soft p-6 rounded-default">
                <p className="text-dark/80 mb-4">
                  <strong>Al usar Vyva, aceptas que:</strong>
                </p>
                <ul className="list-disc pl-6 text-dark/80 space-y-2">
                  <li>
                    Vyva POS, LLC y las empresas registradas puedan usar tu información
                    para enviar comunicaciones de marketing y utilidad
                  </li>
                  <li>
                    Tus datos serán tratados para el mejoramiento de la
                    experiencia en Vyva
                  </li>
                  <li>
                    Las empresas puedan descargar y procesar la información
                    que recopilen de los clientes
                  </li>
                  <li>
                    Se compartan datos con entidades gubernamentales cuando
                    sea requerido legalmente
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                13. Contacto
              </h2>
              <div className="bg-light p-6 rounded-default">
                <p className="text-dark/80 mb-4">
                  Si tienes preguntas sobre esta política de privacidad o
                  sobre cómo manejamos tus datos personales, puedes
                  contactar a Vyva POS, LLC:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dark">
                    📧 Correo electrónico: contact@solaradev.com
                  </p>
                  <p className="font-semibold text-dark">
                    🌐 Sitio web: https://vyvapos.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Section>
  );
}
