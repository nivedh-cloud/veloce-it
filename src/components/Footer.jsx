import React from 'react'

export default function Footer(){
  return (
    <footer className="max-w-6xl mx-auto py-16 px-6 border-t border-slate-800 text-center">
      <h2 className="text-3xl font-bold mb-12">Core Technical Capabilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">React.js & Ecosystem</div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">Ionic / Capacitor</div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">D3.js Visualization</div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">AI Agent Development</div>
      </div>
    </footer>
  )
}
