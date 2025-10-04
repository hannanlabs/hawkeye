"use client"

import Link from "next/link"

export default function ViolationsTable() {
  const violations = [
    {
      id: "1",
      severity: "critical",
      rule: "HIPAA §164.312(a)(1) - Encryption at Rest",
      resource: "users_table.sql",
      file: "db/schemas/users_table.sql",
      status: "open",
    },
    {
      id: "2",
      severity: "critical",
      rule: "SOC2 CC6.1 - Access Control",
      resource: "api_gateway.tf",
      file: "terraform/api_gateway.tf",
      status: "open",
    },
    {
      id: "3",
      severity: "high",
      rule: "HIPAA §164.308(a)(4) - Audit Logging",
      resource: "deployment.yaml",
      file: "k8s/deployment.yaml",
      status: "open",
    },
    {
      id: "4",
      severity: "high",
      rule: "SOC2 CC7.2 - Data Retention",
      resource: "config.json",
      file: "config/config.json",
      status: "in_progress",
    },
    {
      id: "5",
      severity: "critical",
      rule: "HIPAA §164.312(e)(1) - Transmission Security",
      resource: "load_balancer.tf",
      file: "terraform/load_balancer.tf",
      status: "open",
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Compliance Violations</h2>
          <div className="flex items-center gap-2">
            <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option>All Severities</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
            </select>
            <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option>All Statuses</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Severity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resource
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {violations.map((violation) => (
              <tr key={violation.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      violation.severity === "critical" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {violation.severity}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{violation.rule}</p>
                  <p className="text-xs text-gray-500 mt-1">{violation.file}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900 font-mono">{violation.resource}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      violation.status === "open" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {violation.status === "open" ? "Open" : "In Progress"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link
                    href={`/violations/${violation.id}`}
                    className="text-violet-600 hover:text-violet-800 font-medium"
                  >
                    View Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
