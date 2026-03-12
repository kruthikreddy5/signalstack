export default function DashboardPage() {
  const recentModels = [
    {
      title: "Inversion",
      category: "Decision-Making",
      desc: "Ask how this could fail before asking how it could succeed.",
    },
    {
      title: "Opportunity Cost",
      category: "Strategy",
      desc: "Every yes quietly kills another option.",
    },
    {
      title: "Second Order Thinking",
      category: "Systems",
      desc: "Trace consequences beyond the first visible result.",
    },
  ];

  const savedInsights = [
    "Being busy is not the same as building leverage.",
    "Clarity usually comes from subtraction, not addition.",
    "If a system depends on motivation, it is already unstable.",
  ];

  const quickActions = [
    "Open model library",
    "Review saved insights",
    "Write decision note",
    "Use inversion tool",
  ];

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-white/[0.03] backdrop-blur-xl lg:block">
          <div className="px-6 py-6">
            <div className="text-sm font-semibold tracking-[0.4em] text-white">
              SIGNALSTACK
            </div>
            <div className="mt-2 text-sm text-white/45">
              Private judgment system
            </div>
          </div>

          <nav className="px-4 pb-6">
            <div className="space-y-2">
              {[
                "Dashboard",
                "Models",
                "Insights",
                "Vault",
                "Decision Tools",
                "Settings",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                    index === 0
                      ? "bg-white text-black font-semibold"
                      : "bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          <div className="mx-4 mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/35">
              Daily spark
            </div>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Which decision are you avoiding because the tradeoff is emotionally
              annoying?
            </p>
            <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Reflect
            </button>
          </div>
        </aside>

        <section className="flex-1">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-8">
              <div className="w-full max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/40">
                  Search models, insights, notes...
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.08]">
                  Notifications
                </button>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                  S
                </div>
              </div>
            </div>
          </header>

          <div className="px-6 py-8 md:px-8">
            <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[90px]" />

              <div className="relative">
                <div className="text-sm text-white/45">Welcome back</div>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                  Build sharper judgment, not just bigger bookmarks.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  Your dashboard is where models, insights, and decisions stop
                  being decoration and start becoming leverage.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.03]">
                    Open Models
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.08]">
                    Go to Vault
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { label: "Models explored", value: "12" },
                { label: "Saved insights", value: "28" },
                { label: "Decision notes", value: "07" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="text-sm text-white/45">{stat.label}</div>
                  <div className="mt-3 text-4xl font-semibold">{stat.value}</div>
                </div>
              ))}
            </section>

            <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/45">Recent models</div>
                    <h2 className="mt-2 text-2xl font-semibold">
                      Continue thinking
                    </h2>
                  </div>
                  <button className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.08]">
                    View all
                  </button>
                </div>

                <div className="space-y-4">
                  {recentModels.map((model) => (
                    <div
                      key={model.title}
                      className="rounded-[1.3rem] border border-white/10 bg-black/20 p-5 transition hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/50">
                            {model.category}
                          </div>
                          <h3 className="mt-3 text-xl font-semibold">
                            {model.title}
                          </h3>
                          <p className="mt-2 max-w-2xl leading-7 text-white/60">
                            {model.desc}
                          </p>
                        </div>
                        <button className="text-sm text-white/40 transition hover:text-white">
                          Open →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                  <div className="text-sm text-white/45">Saved insights</div>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Your signal pile
                  </h2>

                  <div className="mt-5 space-y-4">
                    {savedInsights.map((insight) => (
                      <div
                        key={insight}
                        className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/75"
                      >
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                  <div className="text-sm text-white/45">Quick actions</div>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Move fast, think clean
                  </h2>

                  <div className="mt-5 grid gap-3">
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-left text-sm text-white/75 transition hover:bg-white/[0.05] hover:text-white"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-7">
              <div className="text-sm text-white/45">Decision journal</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Today’s thinking prompt
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">
                What are you optimizing for right now — comfort, speed, status,
                or actual long-term advantage?
              </p>

              <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-black/20 p-5 text-white/35">
                Write your note here...
              </div>

              <button className="mt-5 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.03]">
                Save Note
              </button>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}