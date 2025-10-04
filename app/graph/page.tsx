import Link from "next/link"

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 border-b border-gray-200">
        <Link href="/" className="text-2xl font-semibold text-black tracking-tight hover:text-red-600 transition-colors">
          Hawkeye
        </Link>
      </header>
    </div>
  )
}
