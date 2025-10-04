"use client"

export default function KPICards() {
  const kpis = [
    {
      label: "Open Critical Issues",
      value: "12",
      change: "+3 from last scan",
      trend: "up",
      color: "red",
    },
    {
      label: "Open High Issues",
      value: "28",
      change: "-5 from last scan",
      trend: "down",
      color: "amber",
    },
    {
      label: "Compliance Score",
      value: "87%",
      change: "+2% this week",
      trend: "up",
      color: "green",
    },
    {
      label: "Last Scan",
      value: "2h ago",
      change: "Next scan in 22h",
      trend: "neutral",
      color: "gray",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
            <div
              className={`w-2 h-2 rounded-full ${
                kpi.color === "red"
                  ? "bg-red-500"
                  : kpi.color === "amber"
                    ? "bg-amber-500"
                    : kpi.color === "green"
                      ? "bg-green-500"
                      : "bg-gray-400"
              }`}
            />
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">{kpi.value}</p>
          <p className="text-xs text-gray-500">{kpi.change}</p>
        </div>
      ))}
    </div>
  )
}
