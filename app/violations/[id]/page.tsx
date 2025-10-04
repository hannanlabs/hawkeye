"use client"

import DashboardLayout from "@/components/dashboard-layout"
import Link from "next/link"

export default function ViolationDetailPage() {
  // Mock data - in real app this would come from params and API
  const violation = {
    id: "1",
    severity: "critical",
    rule: "HIPAA §164.312(a)(1) - Encryption at Rest",
    resource: "users_table.sql",
    file: "db/schemas/users_table.sql",
    status: "open",
    detectedAt: "2024-01-15 14:32:00 UTC",
    evidence: {
      snippet: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  medical_record_id VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- No encryption configuration detected
-- Sensitive fields: email, phone_number, medical_record_id`,
      parsedValues: [
        { field: "email", type: "VARCHAR(255)", classification: "PII/PHI" },
        { field: "phone_number", type: "VARCHAR(20)", classification: "PII/PHI" },
        { field: "medical_record_id", type: "VARCHAR(50)", classification: "PHI" },
      ],
    },
    citation: {
      standard: "HIPAA",
      section: "§164.312(a)(1)",
      requirement:
        "Implement technical policies and procedures for electronic information systems that maintain electronic protected health information to allow access only to those persons or software programs that have been granted access rights.",
      fullText:
        "Standard: Encryption and decryption (Addressable). Implement a mechanism to encrypt and decrypt electronic protected health information.",
    },
    suggestedFix: {
      description: "Enable transparent data encryption (TDE) for the users table or implement column-level encryption.",
      patch: `-- Option 1: Enable TDE for entire table
ALTER TABLE users 
ENABLE ENCRYPTION;

-- Option 2: Column-level encryption
ALTER TABLE users 
  ALTER COLUMN email TYPE bytea USING pgp_sym_encrypt(email, 'encryption_key'),
  ALTER COLUMN phone_number TYPE bytea USING pgp_sym_encrypt(phone_number, 'encryption_key'),
  ALTER COLUMN medical_record_id TYPE bytea USING pgp_sym_encrypt(medical_record_id, 'encryption_key');

-- Add pgcrypto extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;`,
    },
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-gray-900">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/dashboard" className="hover:text-gray-900">
            Violations
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{violation.id}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    violation.severity === "critical" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {violation.severity.toUpperCase()}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {violation.status === "open" ? "Open" : "In Progress"}
                </span>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">{violation.rule}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Resource: {violation.resource}</span>
                <span>•</span>
                <span>Detected: {violation.detectedAt}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Panel */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Evidence</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">File Path</p>
              <code className="block px-4 py-2 bg-gray-50 rounded-lg text-sm font-mono text-gray-900 border border-gray-200">
                {violation.file}
              </code>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Code Snippet</p>
              <pre className="px-4 py-3 bg-gray-900 rounded-lg text-sm font-mono text-gray-100 overflow-x-auto border border-gray-700">
                {violation.evidence.snippet}
              </pre>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Parsed Sensitive Fields</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Classification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {violation.evidence.parsedValues.map((field, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm font-mono text-gray-900">{field.field}</td>
                        <td className="px-4 py-3 text-sm font-mono text-gray-600">{field.type}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {field.classification}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Citations Panel */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Compliance Citations</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="px-3 py-1 bg-violet-100 text-violet-800 rounded-lg text-sm font-semibold">
                {violation.citation.standard}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">{violation.citation.section}</p>
                <p className="text-sm text-gray-600 mb-3">{violation.citation.requirement}</p>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border-l-4 border-violet-500">
                  <p className="text-sm text-gray-700 italic">{violation.citation.fullText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Fix Panel */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggested Fix</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-700">{violation.suggestedFix.description}</p>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Patch / Diff</p>
                <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors">
                  Copy Code
                </button>
              </div>
              <pre className="px-4 py-3 bg-gray-900 rounded-lg text-sm font-mono text-gray-100 overflow-x-auto border border-gray-700">
                {violation.suggestedFix.patch}
              </pre>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">
                Generate Fix
              </button>
              <button className="px-6 py-3 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors">
                Create Ticket
              </button>
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                Approve PR
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                Mark as False Positive
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                Snooze
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
