"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeNav, setActiveNav] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-semibold text-gray-900 tracking-tight">
              Sentra
            </Link>
            <nav className="flex items-center gap-1">
              <button
                onClick={() => setActiveNav("dashboard")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeNav === "dashboard"
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveNav("violations")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeNav === "violations"
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Violations
              </button>
              <button
                onClick={() => setActiveNav("repos")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeNav === "repos"
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Repos
              </button>
              <button
                onClick={() => setActiveNav("settings")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeNav === "settings"
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">
              Scan Repos
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}
