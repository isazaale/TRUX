import Head from 'next/head'
import Link from 'next/link'

const flowSteps = [
  {
    title: 'Recepción inteligente',
    description:
      'Conecta proveedores y centros de distribución con órdenes automáticas, validaciones documentales y alertas instantáneas.'
  },
  {
    title: 'Asignación dinámica',
    description:
      'Algoritmos de ruteo distribuyen cargas según capacidad, SLA y ventanas horarias en cuestión de segundos.'
  },
  {
    title: 'Ejecución monitoreada',
    description:
      'Visualiza en tiempo real el estado de cada entrega con telemetría IoT, chat operativo y automatización de incidencias.'
  },
  {
    title: 'Cierre y retroalimentación',
    description:
      'Confirma PODs digitales, genera reportes de performance y alimenta modelos predictivos para la siguiente operación.'
  }
]

export default function Flujos() {
  return (
    <>
      <Head>
        <title>Flujos operativos | TRUX</title>
        <meta
          name="description"
          content="Descubre cómo TRUX orquesta cada fase de tu operación logística con flujos automatizados y observables."
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_transparent_65%)]" />
        <header className="border-b border-white/10 bg-black/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Flujos TRUX</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">Diseña y automatiza tus operaciones de punta a punta</h1>
              <p className="mt-4 max-w-2xl text-sm text-white/70">
                Cada flujo está construido sobre la infraestructura serverless de Vercel para ofrecer resiliencia, observabilidad
                y velocidad sin sacrificar la experiencia de tus operadores.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Volver al inicio
              <span aria-hidden>→</span>
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Flujos operativos conectados</h2>
              <p className="text-sm text-white/70">
                Con TRUX puedes configurar flujos compuestos que integran proveedores, almacenes, flotas y clientes finales en un
                único panel de control. Cada paso se orquesta mediante reglas configurables que escalan con tu operación.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Solicitar demo
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid gap-4">
              {flowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-300/60 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-300/10 font-semibold text-white">
                      {index + 1}
                    </span>
                    Etapa
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Integraciones</p>
                <h2 className="mt-2 text-2xl font-semibold">Conecta tus herramientas favoritas</h2>
                <p className="mt-4 text-sm text-white/70">
                  Los flujos de TRUX se integran con ERPs, TMS y plataformas de mensajería líderes para sincronizar datos y
                  mantener a todos los equipos alineados.
                </p>
              </div>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                Explorar documentación
                <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} TRUX. Desplegado en Vercel.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-white">
                Privacidad
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Términos
              </Link>
              <Link href="/status" className="transition hover:text-white">
                Status
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
