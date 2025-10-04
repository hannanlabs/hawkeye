import Link from "next/link"
import Image from "next/image"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 border-b border-gray-200">
        <Link href="/" className="text-2xl font-semibold text-black tracking-tight hover:text-red-600 transition-colors">
          Hawkeye
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-semibold text-black mb-12 text-center">Architecture</h1>

        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <Image
              src="/structify.png"
              alt="Structify Architecture"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-5xl"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/aria.png"
              alt="Aria Architecture"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-5xl"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
