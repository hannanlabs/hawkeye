"use client"

export default function DataSourcesSection() {
  const sources = [
    { name: "Database Schemas", status: "connected", lastSync: "2h ago", icon: "🗄️" },
    { name: "Terraform", status: "connected", lastSync: "2h ago", icon: "🏗️" },
    { name: "Kubernetes", status: "connected", lastSync: "2h ago", icon: "☸️" },
    { name: "Config Files", status: "warning", lastSync: "5d ago", icon: "⚙️" },
  ]

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Ingestion Sources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sources.map((source, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-violet-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{source.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{source.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      source.status === "connected" ? "bg-green-500" : "bg-amber-500"
                    }`}
                  />
                  <span className={`text-xs ${source.status === "connected" ? "text-green-700" : "text-amber-700"}`}>
                    {source.status === "connected" ? "Connected" : "Needs Attention"}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Last sync: {source.lastSync}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
