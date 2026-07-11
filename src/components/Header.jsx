import React from 'react'

export default function Header(){
  return (
    <header className="max-w-6xl mx-auto px-6 py-4 sm:py-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Veloce IT Solutions</h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-1xl">Expert Software Architecture & Development</p>
        </div>
        <a href="https://nivedh-cloud.github.io/my-profile/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20">Developer Profile</a>
      </div>
    </header>
  )
}
