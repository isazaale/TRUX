import Head from 'next/head'

type FlowItem = {
  title: string
  count?: number
  accent: 'create' | 'default'
}

const flows: FlowItem[] = [
  { title: 'nuevo flujo', accent: 'create' },
  { title: 'Venta de productos', count: 18, accent: 'default' },
  { title: 'Servicio al cliente', count: 12, accent: 'default' },
  { title: 'Servicio post venta', count: 23, accent: 'default' },
  { title: 'Encuesta de servicio', count: 9, accent: 'default' },
  { title: 'Puntos de contacto', count: 15, accent: 'default' },
  { title: 'Guía de entrenamiento', count: 23, accent: 'default' },
  { title: 'Cobro de cartera', count: 12, accent: 'default' },
  { title: 'Diseño de producto', count: 14, accent: 'default' }
]

function FlowIcon({ accent }: { accent: FlowItem['accent'] }) {
  if (accent === 'create') {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 text-xl font-semibold text-white shadow-[0_6px_18px_rgba(56,189,248,0.35)]">
        +
      </span>
    )
  }

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-lg text-amber-500">
      ▶
    </span>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>TRUX | Mis flujos</title>
        <meta
          name="description"
          content="Gestiona tus flujos operativos de forma visual con TRUX. Crea, edita y ejecuta procesos en minutos."
        />
      </Head>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f5f7ff] via-white to-[#f1f4ff]">
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-40 bg-gradient-to-b from-transparent via-slate-100 to-transparent" />
        <div className="pointer-events-none absolute right-6 top-0 hidden h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-100 to-transparent sm:block" />
        <div className="relative mx-auto flex min-h-screen max-w-[420px] flex-col px-6 py-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
                <span className="text-lg font-semibold text-slate-600">MA</span>
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
              <div className="space-y-0.5 text-sm text-slate-400">
                <p className="font-medium text-slate-600">Hola, Mariana</p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">dashboard</p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur"
              aria-label="Abrir menú"
            >
              <span className="flex h-3 w-4 flex-col justify-between">
                <span className="block h-[2px] w-full rounded-full bg-slate-500" />
                <span className="block h-[2px] w-full rounded-full bg-slate-500" />
                <span className="block h-[2px] w-3/4 rounded-full bg-slate-500" />
              </span>
            </button>
          </header>

          <main className="mt-10 flex flex-1 flex-col">
            <h1 className="text-center text-2xl font-semibold lowercase tracking-wide text-slate-700">mis flujos</h1>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-100 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                placeholder="Busca o crea un flujo"
                className="flex-1 bg-transparent text-sm font-medium text-slate-600 placeholder:text-slate-300 focus:outline-none"
              />
            </div>

            <div className="mt-8 grid flex-1 grid-cols-3 gap-4">
              {flows.map((flow) => (
                <button
                  key={flow.title}
                  type="button"
                  className={`group relative flex min-h-[120px] flex-col items-start justify-between rounded-[26px] border border-white/70 bg-white/90 p-4 text-left shadow-[0_14px_45px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,23,42,0.12)] ${
                    flow.accent === 'create' ? 'ring-2 ring-cyan-200/80' : ''
                  }`}
                >
                  <FlowIcon accent={flow.accent} />
                  <span className="text-sm font-semibold capitalize leading-tight text-slate-600">
                    {flow.title}
                  </span>
                  {typeof flow.count === 'number' ? (
                    <span className="absolute right-4 top-4 inline-flex h-8 min-w-[2.25rem] items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-slate-500 shadow-[0_4px_12px_rgba(15,23,42,0.12)]">
                      {flow.count}
                    </span>
                  ) : (
                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 text-base font-semibold text-white shadow-[0_8px_25px_rgba(56,189,248,0.45)]">
                      +
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-6 pb-6">
              <button
                type="button"
                className="w-full rounded-[26px] bg-slate-900 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_30px_rgba(15,23,42,0.24)]"
              >
                flow prompts
              </button>
              <div className="flex items-center gap-1 text-base font-semibold text-slate-400">
                <span className="tracking-[0.4em] text-emerald-500">TRU</span>
                <span className="tracking-[0.4em] text-sky-500">X</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
