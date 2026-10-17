function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-indigo-400">Dalibor</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-400">
          Aspiring software developer building projects with React, TypeScript,
          PHP, and Laravel.
        </p>
        <a
          href="#projects"
          className="mt-4 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
        >
          View my work
        </a>
      </div>
    </main>
  )
}

export default App
