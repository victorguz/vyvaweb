import React from 'react';
import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';

export const metadata: Metadata = {
  title: 'Términos de Servicio | Vyva POS',
  description:
    'Términos de servicio de Vyva POS. Conoce las condiciones de uso de nuestra plataforma de punto de venta y gestión de suscripciones.',
  keywords: 'términos de servicio, condiciones de uso, Vyva POS, términos legales',
  authors: [{ name: 'Vyva' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Términos de Servicio | Vyva POS',
    description:
      'Términos de servicio de Vyva POS. Conoce las condiciones de uso de nuestra plataforma de punto de venta y gestión de suscripciones.',
    type: 'website',
    url: 'https://vyvapos.com/terms',
    siteName: 'Vyva POS',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Términos de Servicio | Vyva POS',
    description:
      'Términos de servicio de Vyva POS. Conoce las condiciones de uso de nuestra plataforma de punto de venta y gestión de suscripciones.',
  },
};

export default function TermsPage() {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Términos de Servicio
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
              Estos términos de servicio rigen el uso de la plataforma Vyva POS.
              Al utilizar nuestros servicios, aceptas cumplir con estos términos.
              Te recomendamos leerlos cuidadosamente antes de comenzar a usar la plataforma.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Definiciones
              </h2>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li><strong>&quot;Vyva&quot; o &quot;Nosotros&quot;:</strong> Se refiere a Vyva POS, LLC, la plataforma Vyva y sus
                  operadores.</li>
                <li><strong>&quot;Usuario&quot; o &quot;Tú&quot;:</strong> Persona o entidad que utiliza nuestros servicios.</li>
                <li><strong>&quot;Servicios&quot;:</strong> La plataforma de agendamiento, gestión de clientes y punto de venta.
                </li>
                <li><strong>&quot;Contenido&quot;:</strong> Información, datos, textos, imágenes y otros materiales.</li>
                <li><strong>&quot;Cuenta&quot;:</strong> Perfil de usuario registrado en la plataforma.</li>
                <li><strong>&quot;Citas&quot;:</strong> Reservas de servicios agendadas a través de la plataforma.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Aceptación de los Términos
              </h2>
              <p className="text-dark/80 mb-4">
                Al acceder o utilizar Vyva POS, confirmas que:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Tienes al menos 18 años de edad o representas una entidad legalmente constituida</li>
                <li>Tienes la capacidad legal para celebrar contratos</li>
                <li>Aceptas cumplir con estos términos de servicio</li>
                <li>Proporcionarás información veraz y actualizada</li>
                <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Descripción del Servicio
              </h2>
              <p className="text-dark/80 mb-4">
                Vyva es una plataforma de agendamiento y gestión diseñada para servicios de belleza y bienestar que
                ofrece:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Sistema de Agendamiento
                  </h4>
                  <ul className="text-dark/80 text-sm space-y-1">
                    <li>• Creación y gestión de citas</li>
                    <li>• Página de reservas pública personalizada</li>
                    <li>• Recordatorios automáticos por email</li>
                    <li>• Integración con Google Calendar</li>
                  </ul>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Gestión de Clientes
                  </h4>
                  <ul className="text-dark/80 text-sm space-y-1">
                    <li>• Base de datos completa de clientes</li>
                    <li>• Historial de citas y servicios</li>
                    <li>• Historial de compras</li>
                    <li>• Estadísticas y métricas</li>
                  </ul>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Punto de Venta
                  </h4>
                  <ul className="text-dark/80 text-sm space-y-1">
                    <li>• Gestión de ventas y transacciones</li>
                    <li>• Procesamiento de pagos</li>
                    <li>• Carrito de compras integrado</li>
                    <li>• Facturación y órdenes de venta</li>
                  </ul>
                </div>
                <div className="bg-light p-6 rounded-default">
                  <h4 className="font-semibold text-dark mb-2">
                    Dashboard y Gestión
                  </h4>
                  <ul className="text-dark/80 text-sm space-y-1">
                    <li>• Reportes de ventas en tiempo real</li>
                    <li>• KPIs y métricas importantes</li>
                    <li>• Gestión de equipo y empleados</li>
                    <li>• Gestión de productos y servicios</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Registro y Cuentas de Usuario
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                4.1 Requisitos de Registro
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Información de contacto válida y actualizada</li>
                <li>Datos comerciales completos (nombre de empresa, NIT, dirección)</li>
                <li>Información de facturación precisa</li>
                <li>Verificación de identidad cuando sea requerida</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                4.2 Responsabilidades del Usuario
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Mantener la confidencialidad de las credenciales de acceso</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Actualizar la información cuando sea necesario</li>
                <li>Ser responsable de todas las actividades realizadas en su cuenta</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                4.3 Suspensión de Cuentas
              </h3>
              <p className="text-dark/80 mb-3">
                Nos reservamos el derecho de suspender o terminar cuentas que:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Violen estos términos de servicio</li>
                <li>Proporcionen información falsa o fraudulenta</li>
                <li>Realicen actividades ilegales o no autorizadas</li>
                <li>No cumplan con las obligaciones de pago</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Tarifas y Pagos
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                5.1 Estructura de Tarifas
              </h3>
              <p className="text-dark/80 mb-4">
                Vyva ofrece diferentes planes de suscripción con estructuras de tarifas específicas.
                Para conocer todos los detalles de precios, comisiones y características de cada plan,
                consulta nuestra
                <a href="/pricing" className="text-primary hover:underline font-semibold"> página de
                  precios</a>.
              </p>

              <div className="bg-primary-soft p-6 rounded-default mb-4">
                <h4 className="font-semibold text-primary mb-2">
                  Información General sobre Tarifas
                </h4>
                <ul className="text-dark/80 space-y-2">
                  <li>• Las comisiones varían según el plan seleccionado</li>
                  <li>• Algunos planes incluyen tarifas de pasarela de pagos</li>
                  <li>• Los precios pueden variar según la moneda seleccionada</li>
                  <li>• Se ofrecen descuentos por pago anual en ciertos planes</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                5.2 Facturación y Pagos
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Las comisiones se deducen automáticamente de cada transacción según el plan contratado</li>
                <li>Los pagos se procesan a través de pasarelas de pago seguras</li>
                <li>Las tarifas de procesamiento de pagos pueden estar incluidas o ser adicionales según el plan</li>
                <li>Los detalles específicos de comisiones y tarifas se encuentran en nuestra
                  <a href="/pricing" className="text-primary hover:underline"> página de precios</a>
                </li>
                <li>Nos reservamos el derecho de ajustar las tarifas con notificación previa</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                5.3 Política de Reembolsos
              </h3>

              <div className="bg-blue-50 p-6 rounded-default border border-blue-200 mb-4">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Reembolsos de Suscripciones Vyva</h4>
                <p className="text-blue-700 mb-3">
                  Para clientes que tengan su negocio en Vyva y que tengan el plan Premium:
                </p>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li>Pueden solicitar un reembolso los <strong>primeros 7 días</strong> de la suscripción</li>
                  <li>Después de este período, el empresario podrá cancelar su suscripción para que no se vuelva a
                    cobrar más el servicio, en el momento que decida</li>
                  <li>Los cobros se hacen <strong>por anticipado</strong>, es decir, pagas hoy y tienes la suscripción
                    los siguientes 30 días calendario</li>
                  <li>El siguiente cobro será al finalizar esos 30 días</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-default border border-yellow-200 mb-4">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">Reembolsos de Compras a Comercios</h4>
                <p className="text-yellow-700 mb-3">
                  Si compraste a través de Vyva a algún comercio, pero deseas un reembolso:
                </p>
                <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                  <li>Te enviaremos la información de contacto del vendedor para que lo solicites directamente</li>
                  <li>Los vendedores que utilizan Vyva son los responsables de sus productos, servicios y suscripciones
                  </li>
                  <li>Estas transacciones son gestionadas en sus propias pasarelas de pago</li>
                </ul>
              </div>

              <p className="text-dark/80 mb-3">
                Las políticas de reembolso también están sujetas a:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Las políticas de la pasarela de pagos utilizada</li>
                <li>El tipo de transacción y servicio</li>
                <li>Las circunstancias específicas del caso</li>
                <li>El cumplimiento de nuestros términos de servicio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Uso Aceptable
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                6.1 Usos Permitidos
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Gestión de citas y agendamiento de servicios</li>
                <li>Gestión de ventas y transacciones comerciales legítimas</li>
                <li>Procesamiento de pagos de clientes</li>
                <li>Generación de reportes y análisis de negocio</li>
                <li>Comunicación con clientes sobre servicios y citas agendadas</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                6.2 Usos Prohibidos
              </h3>
              <div className="bg-red-50 p-6 rounded-default border border-red-200">
                <p className="text-red-800 font-semibold mb-3">Está estrictamente prohibido:</p>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li>Actividades ilegales o fraudulentas</li>
                  <li>Venta de productos o servicios prohibidos por ley</li>
                  <li>Spam o comunicaciones no solicitadas</li>
                  <li>Violación de derechos de propiedad intelectual</li>
                  <li>Actividades que dañen o comprometan la seguridad del sistema</li>
                  <li>Uso de la plataforma para actividades de lavado de dinero</li>
                  <li>Manipulación de transacciones o reportes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Agendamiento y Citas
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                7.1 Responsabilidad del Negocio
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2 mb-4">
                <li>El negocio es responsable de confirmar y atender las citas agendadas a través de la plataforma</li>
                <li>Las políticas de cancelación son definidas por cada negocio independientemente</li>
                <li>Vyva no es responsable por ausencias de clientes (no-shows) o cancelaciones de última hora</li>
                <li>Los clientes reservan directamente con el negocio a través de la plataforma</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3">
                7.2 Funcionalidad de Reservas
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2 mb-4">
                <li>Vyva proporciona la tecnología para gestionar citas, pero no garantiza la disponibilidad del
                  servicio</li>
                <li>El negocio debe mantener actualizada su disponibilidad y horarios</li>
                <li>Los recordatorios automáticos se envían según la configuración del negocio</li>
                <li>El negocio puede cancelar o reprogramar citas según sus propias políticas</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3">
                7.3 Políticas de Cancelación
              </h3>
              <p className="text-dark/80 mb-3">
                Cada negocio establece sus propias políticas de cancelación. Vyva:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>No interviene en disputas entre negocios y clientes sobre citas canceladas</li>
                <li>No procesa reembolsos relacionados con citas canceladas</li>
                <li>Proporciona herramientas para que los negocios gestionen sus políticas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                8. Integración con Google Calendar
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                8.1 Funcionalidad Opcional
              </h3>
              <p className="text-dark/80 mb-3">
                La integración con Google Calendar es una funcionalidad opcional que permite sincronizar las citas de
                Vyva con tu calendario de Google.
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2 mb-4">
                <li>El usuario debe autorizar explícitamente el acceso a Google Calendar</li>
                <li>La integración puede desconectarse en cualquier momento desde el panel de configuración</li>
                <li>Solo se sincronizan las citas creadas en Vyva</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3">
                8.2 Responsabilidad del Usuario
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2 mb-4">
                <li>El usuario es responsable de mantener su cuenta de Google activa</li>
                <li>Vyva no es responsable por errores de sincronización causados por problemas de Google</li>
                <li>El usuario debe verificar que las citas se sincronicen correctamente</li>
                <li>Los cambios en Google Calendar no se sincronizan de vuelta a Vyva automáticamente</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3">
                8.3 Límites de Responsabilidad
              </h3>
              <p className="text-dark/80 mb-3">
                Vyva sincroniza citas con Google Calendar de buena fe, pero:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>No garantiza la disponibilidad continua del servicio de Google</li>
                <li>No es responsable por cambios en la API de Google Calendar</li>
                <li>No responde por conflictos de horarios en calendarios externos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                9. Propiedad Intelectual
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                9.1 Propiedad de Vyva
              </h3>
              <p className="text-dark/80 mb-3">
                Vyva POS y todos sus componentes son propiedad exclusiva de Vyva POS, LLC, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Software y código fuente</li>
                <li>Diseño de interfaz y experiencia de usuario</li>
                <li>Marcas comerciales y logotipos</li>
                <li>Documentación y materiales de soporte</li>
                <li>Algoritmos y metodologías propietarias</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                9.2 Contenido del Usuario
              </h3>
              <p className="text-dark/80 mb-3">
                Los usuarios mantienen la propiedad de su contenido, pero otorgan a Vyva:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Licencia para usar el contenido para proporcionar el servicio</li>
                <li>Derecho a procesar y almacenar datos necesarios</li>
                <li>Permiso para generar reportes y análisis agregados</li>
                <li>Autorización para cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                10. Privacidad y Protección de Datos
              </h2>
              <p className="text-dark/80 mb-4">
                La protección de datos se rige por nuestra Política de Privacidad, que forma parte integral de estos
                términos.
                Los usuarios deben cumplir con todas las regulaciones aplicables de protección de datos.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3">
                10.1 Responsabilidades del Usuario
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Obtener consentimiento apropiado de los clientes</li>
                <li>Cumplir con las leyes de protección de datos aplicables</li>
                <li>Proteger la información sensible de los clientes</li>
                <li>Notificar violaciones de datos según la ley</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                11. Limitación de Responsabilidad
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                11.1 Exclusiones de Garantía
              </h3>
              <p className="text-dark/80 mb-3">
                Vyva POS se proporciona &quot;tal como está&quot; sin garantías de ningún tipo, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Garantías de comerciabilidad o idoneidad para un propósito específico</li>
                <li>Garantías de disponibilidad continua del servicio</li>
                <li>Garantías de seguridad absoluta contra intrusiones</li>
                <li>Garantías de compatibilidad con todos los sistemas</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                11.2 Limitación de Daños
              </h3>
              <div className="bg-yellow-50 p-6 rounded-default border border-yellow-200">
                <p className="text-yellow-800 font-semibold mb-2">Limitación de Responsabilidad:</p>
                <p className="text-yellow-700 text-sm">
                  En ningún caso Vyva POS, LLC será responsable por daños indirectos, incidentales, especiales,
                  consecuenciales o punitivos, incluyendo pero no limitado a pérdida de beneficios,
                  datos o uso, independientemente de la teoría de responsabilidad.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                12. Disponibilidad del Servicio
              </h2>
              <p className="text-dark/80 mb-4">
                La disponibilidad del servicio Vyva POS depende de los servicios de terceros que ofrecen
                infraestructura en la nube. Aunque nos esforzamos por mantener un alto nivel de disponibilidad,
                no podemos garantizar un tiempo de actividad del 100% debido a factores externos como:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Mantenimiento programado de proveedores de servicios en la nube</li>
                <li>Interrupciones de internet o conectividad</li>
                <li>Eventos de fuerza mayor o circunstancias imprevistas</li>
                <li>Actualizaciones de seguridad críticas</li>
              </ul>
              <div className="bg-blue-50 p-6 rounded-default border border-blue-200 mt-4">
                <p className="text-blue-800 font-semibold mb-2">Compromiso de Servicio:</p>
                <p className="text-blue-700 text-sm">
                  Nos comprometemos a notificar con anticipación cualquier mantenimiento programado
                  y a trabajar diligentemente para resolver cualquier interrupción del servicio
                  lo más rápido posible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                13. Indemnización
              </h2>
              <p className="text-dark/80 mb-4">
                Los usuarios acuerdan indemnizar y eximir de responsabilidad a Vyva POS, LLC por cualquier reclamo,
                daño, pérdida, costo o gasto (incluyendo honorarios legales razonables) que surja de:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Uso de la plataforma en violación de estos términos</li>
                <li>Violación de derechos de terceros</li>
                <li>Actividades ilegales o fraudulentas</li>
                <li>Incumplimiento de obligaciones legales</li>
                <li>Contenido proporcionado por el usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                14. Terminación del Servicio
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                14.1 Terminación por el Usuario
              </h3>
              <p className="text-dark/80 mb-3">
                Los usuarios pueden terminar su cuenta en cualquier momento:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Contactando a nuestro equipo de soporte</li>
                <li>Cancelando su cuenta</li>
                <li>Liquidando todas las obligaciones pendientes</li>
                <li>Exportando sus datos antes de la terminación</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                14.2 Terminación por Vyva POS, LLC
              </h3>
              <p className="text-dark/80 mb-3">
                Podemos terminar o suspender el servicio inmediatamente si:
              </p>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>El usuario viola estos términos de servicio</li>
                <li>Se detecta actividad fraudulenta o ilegal</li>
                <li>No se cumplen las obligaciones de pago</li>
                <li>Se requiere por motivos legales o regulatorios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                15. Modificaciones de los Términos
              </h2>
              <p className="text-dark/80 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                Los cambios significativos serán notificados con al menos 30 días de anticipación.
              </p>

              <div className="bg-primary-soft p-6 rounded-default">
                <h4 className="font-semibold text-primary mb-2">
                  Notificación de Cambios
                </h4>
                <p className="text-dark/80 text-sm">
                  Los usuarios serán notificados de cambios importantes a través de:
                </p>
                <ul className="list-disc pl-6 text-dark/80 text-sm space-y-1 mt-2">
                  <li>Correo electrónico a la dirección registrada</li>
                  <li>Notificaciones en la plataforma</li>
                  <li>Actualizaciones en nuestro sitio web</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                16. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-dark/80 mb-4">
                Estos términos se rigen por las leyes de la República de Colombia.
                Cualquier disputa será resuelta en los tribunales competentes de Colombia.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3">
                16.1 Resolución de Disputas
              </h3>
              <ul className="list-disc pl-6 text-dark/80 space-y-2">
                <li>Primero intentaremos resolver disputas mediante negociación directa</li>
                <li>Si no es posible, se utilizará mediación antes de procedimientos legales</li>
                <li>Los tribunales de Colombia tendrán jurisdicción exclusiva</li>
                <li>Se aplicará la ley colombiana en todos los casos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                17. Disposiciones Generales
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                17.1 Divisibilidad
              </h3>
              <p className="text-dark/80 mb-3">
                Si alguna disposición de estos términos es declarada inválida o inaplicable,
                las demás disposiciones permanecerán en pleno vigor y efecto.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                17.2 Acuerdo Completo
              </h3>
              <p className="text-dark/80 mb-3">
                Estos términos, junto con nuestra Política de Privacidad, constituyen
                el acuerdo completo entre el usuario y Vyva POS, LLC.
              </p>

              <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
                17.3 Renuncia
              </h3>
              <p className="text-dark/80 mb-3">
                El hecho de que no ejerzamos algún derecho no constituye una renuncia
                a ese derecho en el futuro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                18. Contacto
              </h2>
              <div className="bg-light p-6 rounded-default">
                <p className="text-dark/80 mb-4">
                  Para preguntas sobre estos términos de servicio o para ejercer tus derechos,
                  puedes contactar a Vyva POS, LLC:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dark">
                    📧 Correo electrónico: contact@solaradev.com
                  </p>
                  <p className="font-semibold text-dark">
                    🌐 Sitio web: https://vyvapos.com
                  </p>
                  <p className="font-semibold text-dark">
                    📞 Soporte: Disponible a través de la plataforma
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
