export default function SignalStackApp() { const models = [ { title: "Inversion", category: "Decision-Making", summary: "Instead of asking how to win, ask how to fail, then remove those failure paths.", use: "Planning, exams, business ideas, risky decisions", }, { title: "Opportunity Cost", category: "Wealth", summary: "Every yes quietly kills a different option. Time is not free just because money is not spent.", use: "Scheduling, purchases, career choices", }, { title: "Second-Order Thinking", category: "Strategy", summary: "Do not stop at the first consequence. Ask what happens after that, and after that.", use: "Long-term planning, habits, relationships", }, ];

const insights = [ { title: "Being busy is not the same as building leverage.", tag: "Productivity", body: "A packed day can still be a low-value day. The right question is not 'Did I work hard?' but 'Did this create future advantage?'", }, { title: "Confidence often comes from preparation, not personality.", tag: "Psychology", body: "People worship charisma like it fell from the sky. Usually it was built in private through repetition, pattern recognition, and lowered uncertainty.", }, { title: "Most bad decisions feel efficient at the start.", tag: "Decision-Making", body: "Fast relief is seductive. Good decisions often feel slower because they force you to face tradeoffs instead of hiding from them.", }, ];

const resources = [ { title: "Poor Charlie's Almanack", type: "Book", why: "Classic mental-model thinking and multidisciplinary reasoning.", }, { title: "The Psychology of Money", type: "Book", why: "Useful for understanding behavior around wealth, risk, and long-term thinking.", }, { title: "How to Take Smart Notes", type: "Book", why: "Great for turning information into usable ideas instead of mental soup.", }, ];

return ( <div className="min-h-screen bg-neutral-950 text-neutral-100"> <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"> <div> <div className="text-lg font-semibold tracking-[0.2em] text-white">SIGNALSTACK</div> <div className="text-xs text-neutral-400">Think better. Decide sharper.</div> </div> <nav className="hidden gap-6 text-sm text-neutral-300 md:flex"> <a href="#models" className="transition hover:text-white">Models</a> <a href="#insights" className="transition hover:text-white">Insights</a> <a href="#tool" className="transition hover:text-white">Tool</a> <a href="#pricing" className="transition hover:text-white">Pricing</a> </nav> <button className="rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"> Get Access </button> </div> </header>

<main>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,160,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(80,255,190,0.12),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Mental models, insights, and decision tools
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Upgrade your thinking without drowning in intellectual wallpaper.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            SignalStack is a premium library of mental models, high-signal insights, and practical tools for ambitious people who want better decisions, better judgment, and fewer clown-level mistakes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]">
              Explore Models
            </button>
            <button className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/5">
              View Pricing
            </button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-400">
            <div>25+ models</div>
            <div>50+ insights</div>
            <div>1 practical tool</div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-400">Today’s card</div>
              <div className="text-2xl font-semibold">Inversion</div>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              Decision-Making
            </div>
          </div>
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-neutral-900/90 p-5">
            <div>
              <div className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-500">What it is</div>
              <p className="text-neutral-200">Ask how this could fail before asking how it could succeed.</p>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Why it matters</div>
              <p className="text-neutral-300">It exposes blind spots faster than optimism. Your brain loves fantasies. Inversion brings a flashlight.</p>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Action step</div>
              <p className="text-neutral-300">Write 3 ways your current goal could fail. Remove one today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="models" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Library</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Mental models that actually do something</h2>
        </div>
        <button className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-neutral-300 hover:bg-white/5">
          View all
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {models.map((model) => (
          <div key={model.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">{model.category}</span>
              <span className="text-neutral-500">→</span>
            </div>
            <h3 className="text-2xl font-semibold">{model.title}</h3>
            <p className="mt-3 leading-7 text-neutral-300">{model.summary}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-900/80 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Best used for</div>
              <div className="mt-2 text-sm text-neutral-300">{model.use}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="insights" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Feed</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">High-signal ideas, minus the guru soup</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.title} className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-6">
              <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                {insight.tag}
              </div>
              <h3 className="text-xl font-semibold leading-8">{insight.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{insight.body}</p>
              <button className="mt-6 text-sm text-neutral-400 transition hover:text-white">Save insight →</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="tool" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Tool</div>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Inversion tool</h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
          Simple on purpose. Fancy nonsense can wait. This block shows how one interactive framework could sit inside the product.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-sm text-neutral-400">Goal</div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-4 text-neutral-500">
            Launch my study brand / prepare for an exam / make a smarter decision...
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "I get distracted and never start.",
              "I overplan and delay action.",
              "I choose the flashy option, not the useful one.",
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-red-400/10 bg-red-400/5 p-4 text-sm text-neutral-200">
                {item}
              </div>
            ))}
          </div>
          <button className="mt-6 rounded-2xl bg-white px-5 py-3 font-medium text-black">Generate safeguards</button>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-neutral-900/90 p-6">
          <div className="text-sm text-neutral-400">Suggested safeguards</div>
          <ul className="mt-4 space-y-4 text-neutral-200">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Use a 25-minute start rule for friction-heavy tasks.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Ship version 1 before collecting 17 aesthetic opinions from the void.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Set one decision metric before choosing between options.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Resources</div>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Curated inputs worth your brain cells</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-neutral-400">{resource.type}</div>
            <h3 className="mt-2 text-2xl font-semibold">{resource.title}</h3>
            <p className="mt-4 leading-7 text-neutral-300">{resource.why}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="pricing" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Pricing</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Start simple. Sell clarity.</h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8">
            <div className="text-sm text-neutral-400">Starter</div>
            <div className="mt-4 text-5xl font-semibold">Free</div>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li>5 mental models</li>
              <li>10 insights</li>
              <li>Bookmarks</li>
            </ul>
            <button className="mt-8 w-full rounded-2xl border border-white/10 px-5 py-3 font-medium text-white hover:bg-white/5">
              Start Free
            </button>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 shadow-xl shadow-emerald-950/20">
            <div className="text-sm text-emerald-300">Lifetime Access</div>
            <div className="mt-4 text-5xl font-semibold text-white">$59</div>
            <ul className="mt-6 space-y-3 text-neutral-100">
              <li>All models and insights</li>
              <li>Decision tools</li>
              <li>Vault and notes</li>
              <li>Future updates</li>
            </ul>
            <button className="mt-8 w-full rounded-2xl bg-white px-5 py-3 font-medium text-black hover:scale-[1.01]">
              Get Lifetime Access
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

); }