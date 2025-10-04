"use client"

import Link from "next/link"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">AI-Powered Insider Intelligence</span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">Hawkeye</span>
          <br />
          <span className="font-light tracking-tight text-white">Uncover insider trading patterns</span>
        </h1>

        <p className="text-xs font-light text-white/70 mb-6 leading-relaxed max-w-xl">
          Track stock trades from politicians and top executives in real-time. AI-powered analysis reveals hidden
          connections and trading patterns through continuous graph intelligence.
        </p>

        <div className="mb-6">
          <p className="text-xs font-light text-white/50 mb-3">Powered by</p>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-white/70 text-xs font-light">Structify</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-white/70 text-xs font-light">TrueFoundry AI</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-white/70 text-xs font-light">Airia</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
