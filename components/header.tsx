"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-center p-6">
      <nav className="flex items-center">
        <Link
          href="/graph"
          className="px-6 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all duration-200"
        >
          Graph
        </Link>
      </nav>
    </header>
  )
}
