export default function Home() {
return (
<main className="min-h-screen bg-[#050508] text-white overflow-hidden">

  {/* GRADIENT GLOW */}
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[160px] rounded-full"></div>

  {/* NAVBAR */}
  <div className="relative flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-xl">
    <h2 className="tracking-[6px] font-semibold text-lg">SIGNALSTACK</h2>

    <div className="flex gap-6 items-center">
      <button className="text-white/60 hover:text-white transition">Models</button>
      <button className="text-white/60 hover:text-white transition">Insights</button>

      <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
        Get Access
      </button>
    </div>
  </div>

  {/* HERO */}
  <div className="relative px-10 pt-40 pb-32 max-w-5xl">
    <h1 className="text-7xl font-semibold leading-tight">
      Upgrade your thinking system.
    </h1>

    <p className="text-white/60 mt-6 text-lg max-w-2xl">
      A premium library of mental models, insights, and decision tools
      designed for ambitious builders who want sharper judgment,
      leverage, and long-term advantage.
    </p>

    <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
      Explore Models
    </button>
  </div>

  {/* FEATURE GRID */}
  <div className="relative grid md:grid-cols-3 gap-6 px-10 pb-40">

    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2">
      <h3 className="text-2xl font-semibold">Inversion</h3>
      <p className="text-white/60 mt-4">
        Ask how this could fail before asking how it could succeed.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2">
      <h3 className="text-2xl font-semibold">Opportunity Cost</h3>
      <p className="text-white/60 mt-4">
        Every decision eliminates alternative futures.
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2">
      <h3 className="text-2xl font-semibold">Second Order Thinking</h3>
      <p className="text-white/60 mt-4">
        Trace consequences beyond the first visible outcome.
      </p>
    </div>

  </div>

</main>

);
}