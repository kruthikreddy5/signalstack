export default function Home() {
  const models = [
    {
      title: "Inversion",
      desc: "Ask how this could fail before asking how it could succeed.",
    },
    {
      title: "Opportunity Cost",
      desc: "Every decision eliminates alternative futures.",
    },
    {
      title: "Second Order Thinking",
      desc: "Trace consequences beyond the first visible outcome.",
    },
    {
      title: "Circle of Competence",
      desc: "Know where your judgment is strong and where it becomes decorative nonsense.",
    },
    {
      title: "Leverage",
      desc: "Small actions matter more when systems, code, capital, or media amplify them.",
    },
    {
      title: "Pareto Principle",
      desc: "A minority of inputs usually drives the majority of outcomes.",
    },
  ];

  const insights = [
    "Being busy is not the same as building leverage.",
    "Most bad decisions feel efficient in the first 10 minutes.",
    "Clarity usually comes from subtraction, not addition.",
    "If a system depends on motivation, it is already unstable.",
    "Speed without direction is just stylish confusion.",
    "Good judgment is compressed experience plus clean thinking.",
  ];

  const features = [
    {
      title: "Mental Models Library",
      desc: "A premium archive of decision frameworks, biases, and strategic lenses.",
    },
    {
      title: "Insight Feed",
      desc: "Short high-signal ideas designed to sharpen judgment without wasting attention.",
    },
    {
      title: "Decision Tools",
      desc: "Interactive frameworks for inversion, prioritization, tradeoffs, and planning.",
    },
    {
      title: "Personal Vault",
      desc: "Save ideas, collect notes, and build your own private operating system.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050508] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/25 via-indigo-500/15 to-pink-600/25 blur-[180px]" />
        <div className="absolute top-32 right-[-120px] h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute left-[-120px] top-[420px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="text-sm font-semibold tracking-[0.4em]">
            SIGNALSTACK
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#models" className="transition hover:text-white">
              Models
            </a>
            <a href="#insights" className="transition hover:text-white">
              Insights
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
          </nav>

          <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]">
            Enter App
          </button>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            Mental models, insights, decision tools, and judgment systems
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Upgrade your thinking system.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            A premium library of mental models, insight cards, and decision tools
            designed for ambitious builders who want sharper judgment, better
            decisions, and long-term leverage.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
              Explore Models
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
              View Insights
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/50">
            <span>25+ models</span>
            <span>100+ insights</span>
            <span>Decision tools</span>
            <span>Private vault</span>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/45">Featured model</div>
                <h2 className="mt-2 text-3xl font-semibold">Inversion</h2>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Decision-Making
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
                  What it is
                </div>
                <p className="text-sm leading-7 text-white/75">
                  Instead of asking how to win, ask how to fail, then eliminate
                  those paths.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
                  Why it matters
                </div>
                <p className="text-sm leading-7 text-white/75">
                  It reveals hidden risks before they become expensive little
                  disasters.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
                  Action step
                </div>
                <p className="text-sm leading-7 text-white/75">
                  Write 3 ways your plan could fail. Remove one today.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
            <div className="text-sm text-white/45">Daily spark</div>
            <h3 className="mt-2 text-2xl font-semibold">One idea. One shift.</h3>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                Today’s prompt
              </div>
              <p className="mt-3 text-white/80">
                Which decision are you postponing because the tradeoff is
                emotionally annoying?
              </p>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]">
              Open Dashboard
            </button>
          </div>
        </div>
      </section>

      <section id="models" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/35">
              Models
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              A library for better judgment
            </h2>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10">
            View all models
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                Mental Model
              </div>

              <h3 className="text-2xl font-semibold">{model.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{model.desc}</p>

              <div className="mt-8 text-sm text-white/40 transition group-hover:text-white/70">
                Open model →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="insights" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/35">
              Insights
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              High signal. Zero guru sludge.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight) => (
              <div
                key={insight}
                className="rounded-[1.75rem] border border-white/10 bg-black/30 p-7 backdrop-blur-xl"
              >
                <div className="mb-4 inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
                  Insight Card
                </div>

                <p className="text-xl font-medium leading-9 text-white/90">
                  {insight}
                </p>

                <button className="mt-8 text-sm text-white/45 transition hover:text-white">
                  Save insight →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/35">
            Features
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            A private operating system for ambitious people
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Most products dump information on you. This one is designed to
            sharpen judgment, reduce noise, and help you make cleaner decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2">
            <div className="text-sm uppercase tracking-[0.25em] text-white/35">
              Why it works
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Collecting ideas is easy. Applying them is where the game changes.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              SignalStack is built around practical compression: fewer ideas,
              better organization, stronger usability, and more direct action.
              The internet is full of intellectual wallpaper. This is supposed
              to be a weapon.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/35">
              Built for
            </div>
            <ul className="mt-4 space-y-4 text-white/75">
              <li>Students with ambition</li>
              <li>Founders and creators</li>
              <li>Builders who hate fluff</li>
              <li>People upgrading judgment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl md:p-14">
          <div className="text-sm uppercase tracking-[0.25em] text-white/35">
            Final CTA
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Stop collecting random ideas. Start building sharper judgment.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            SignalStack is your private library for cleaner thinking, stronger
            decisions, and long-term leverage.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
              Enter SignalStack
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
              Explore Free Preview
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}