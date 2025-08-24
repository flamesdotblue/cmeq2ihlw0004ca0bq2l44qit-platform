export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-blur fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon.green to-neon.blue shadow-lg"></div>
            <span className="text-lg font-bold tracking-tight">Tesla Robot Factory</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a className="hover:text-gray-900" href="#capabilities">Capabilities</a>
            <a className="hover:text-gray-900" href="#automation">Automation</a>
            <a className="hover:text-gray-900" href="#safety">Safety</a>
            <a className="btn-secondary" href="#contact">Request Access</a>
          </nav>
        </div>
      </header>

      <section className="relative flex flex-col justify-center pt-28 md:pt-32 pb-10 lg:pb-16 overflow-hidden hero-grid">
        <div className="absolute inset-0 gradient-accent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="py-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Building the future of humanoid robotics
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Precision manufacturing at scale. AI-driven assembly lines. A factory designed to evolve.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-primary" href="#contact">
                Get early access
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn-secondary" href="#capabilities">Explore capabilities</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#39FF14' }} />
                <span>Realtime systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#00C2FF' }} />
                <span>AI orchestration</span>
              </div>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[640px] xl:h-[720px]">
            <div className="absolute inset-0 rounded-3xl border border-gray-200/70 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="h-full w-full animate-pulse" style={{
                    background:
                      'radial-gradient(60% 60% at 70% 20%, rgba(57,255,20,0.25), transparent 60%), radial-gradient(50% 50% at 20% 30%, rgba(0,194,255,0.25), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.9), rgba(243,244,246,0.9))'
                  }} />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10 blur-2xl" aria-hidden>
              <div className="h-full w-full rounded-[3rem] opacity-40" style={{
                background:
                  'radial-gradient(closest-side, rgba(57,255,20,0.35), transparent), radial-gradient(closest-side, rgba(0,194,255,0.35), transparent)'
              }} />
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-8">
        <Feature iconBg="#39FF14" title="Autonomous Cells" desc="Self-optimizing assembly cells adapt to task complexity with AI feedback loops." />
        <Feature iconBg="#00C2FF" title="Precision Fabrication" desc="Sub-millimeter tolerances across composites, alloys, and micro-actuation systems." />
        <Feature iconBg="#a1a1aa" title="Safety by Design" desc="Human-in-the-loop systems with predictive safety envelopes and instant shutdown paths." />
      </section>

      <footer id="contact" className="mt-auto border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Request a private demo</h2>
            <p className="mt-2 text-gray-600">Partner with Tesla to deploy humanoid robotics in your operations.</p>
          </div>
          <form className="grid sm:grid-cols-3 gap-3" method="post" action="#">
            <input required name="email" type="email" placeholder="Work email" className="sm:col-span-2 w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm outline-none focus:border-gray-400" />
            <button className="btn-primary" style={{ ['--btn-bg' as any]: '#39FF14' }}>Request access</button>
          </form>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-gray-500">© {new Date().getFullYear()} Tesla. Concept landing for demonstration.</div>
      </footer>
    </main>
  );
}

function Feature({ iconBg, title, desc }: { iconBg: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-lg" style={{ background: iconBg }} />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
