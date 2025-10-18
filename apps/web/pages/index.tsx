import Head from 'next/head'
import Link from 'next/link'

const navigation = [
  { label: 'Producto', href: '#producto' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Precios', href: '#precios' }
]

const benefits = [
  {
    title: 'Visibilidad sin fricción',
    description:
      'Paneles en vivo con métricas claves, alertas inteligentes y vistas personalizadas para cada rol operativo.'
  },
  {
    title: 'Automatización end-to-end',
    description:
      'Orquesta asignaciones, documentos y coberturas en minutos con flujos que escalan junto a tu operación.'
  },
  {
    title: 'Experiencia del cliente',
    description:
      'Notificaciones en tiempo real, portales de seguimiento y SLA comprobables para tu red de clientes.'
  }
]

const pillars = [
  {
    eyebrow: 'Orquestación inteligente',
    title: 'Controla cada entrega con datos en tiempo real',
    copy:
      'Configura reglas, automatiza decisiones y conecta flotas internas y externas con la infraestructura de TRUX.'
  },
  {
    eyebrow: 'Insights accionables',
    title: 'Analiza desempeño y anticipa riesgos',
    copy:
      'Dashboards comparativos, reportes exportables y recomendaciones proactivas listas para tu comité operativo.'
  },
  {
    eyebrow: 'Escala global',
    title: 'Infraestructura desplegada en Vercel',
    copy:
      'Distribución automática, seguridad enterprise y rendimiento óptimo soportado por la plataforma de Vercel.'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>TRUX | Plataforma logística creada con Vercel</title>
        <meta
          name="description"
          content="Gestiona y escala operaciones logísticas con la velocidad y resiliencia de la infraestructura de Vercel."
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_65%)]" />
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5">
                T
              </span>
              TRUX Logistics Cloud
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Link
                href="/login"
                className="rounded-full border border-white/20 px-4 py-2 font-medium text-white/80 transition hover:text-white"
              >
                Ingresar
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-zinc-200"
              >
                Crear cuenta
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                Powered by Vercel Edge
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Logística moderna desplegada con la velocidad de Vercel.
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                Diseñada para equipos de operaciones que necesitan visibilidad en tiempo real, automatización confiable y
                la flexibilidad de una plataforma serverless.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-zinc-200"
                >
                  Comenzar gratis
                  <span aria-hidden className="text-lg">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:text-white"
                >
                  Hablar con un experto
                </Link>
                <Link
                  href="/flujos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:text-white"
                >
                  Ver flujos operativos
                  <span aria-hidden className="text-lg">→</span>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_0_45px_rgba(59,130,246,0.2)]">
              <div className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
                  Deploy
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-6 font-mono text-[13px] leading-6 text-emerald-300">
                  <p>pnpm trux deploy --target=vercel</p>
                  <p className="text-white/60">▶ build completed in 32s</p>
                  <p className="text-white/60">▶ edge config synced</p>
                  <p className="text-white/60">▶ preview URL ready</p>
                </div>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/60 p-6 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>Tiempo de actividad</span>
                    <span className="font-semibold text-white">99.99%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Latencia promedio</span>
                    <span className="font-semibold text-white">38 ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Entregas monitoreadas</span>
                    <span className="font-semibold text-white">+2.5M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
          <section id="producto" className="space-y-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Capacidades</p>
                <h2 className="text-3xl font-semibold md:text-4xl">Todo lo que necesitas para ejecutar sin límites</h2>
              </div>
              <Link href="/docs" className="text-sm text-white/60 transition hover:text-white">
                Explorar documentación
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-4 text-sm text-white/70">{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="soluciones" className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">Arquitectura</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Infraestructura preparada para escalar en Vercel</h2>
              <p className="text-base text-white/60 md:w-3/4">
                Cada módulo de TRUX está optimizado para ejecutarse en la red edge de Vercel, acercando la experiencia a
                tus operadores y clientes sin sacrificar seguridad o performance.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">{pillar.eyebrow}</span>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-white/70">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="precios" className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Planes flexibles</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Paga solo por lo que utilizas</h2>
              <p className="text-base text-white/65">
                Empieza gratis, escala con uso y agrega módulos avanzados cuando tu operación lo requiera. Sin costos
                ocultos ni implementaciones eternas.
              </p>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> SLA premium y soporte 24/7.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Integraciones listas con tu stack actual.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Auditorías y cumplimiento desde el día uno.
                </li>
              </ul>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
              >
                Ver todos los planes <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-10">
              <div className="absolute -right-16 top-12 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -left-10 bottom-6 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-white">Plan Escala</h3>
                <p className="text-sm text-white/60">
                  Ideal para redes logísticas regionales que requieren coordinación multi-bodega, capacidades de
                  planificación dinámica y analítica de costos detallada.
                </p>
                <div className="space-y-2 rounded-2xl border border-white/10 bg-black/60 p-6 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>Usuarios incluidos</span>
                    <span className="font-semibold text-white">50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Workflows automáticos</span>
                    <span className="font-semibold text-white">Ilimitados</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Implementación promedio</span>
                    <span className="font-semibold text-white">14 días</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  Solicitar propuesta
                  <span aria-hidden>→</span>
                </Link>
              </div>
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
