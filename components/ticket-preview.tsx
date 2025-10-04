"use client"

import { useState } from "react"

export default function TicketPreview() {
  const [ticketText, setTicketText] = useState(
    `**Title:** [CRITICAL] HIPAA Violation - Missing Encryption at Rest for users_table

**Description:**
A critical compliance violation has been detected in the database schema configuration.

**Evidence:**
- File: db/schemas/users_table.sql
- Issue: The users table stores PHI (Protected Health Information) without encryption at rest
- Detected fields: email, phone_number, medical_record_id

**Compliance Citation:**
HIPAA §164.312(a)(1) requires: "Implement technical policies and procedures for electronic information systems that maintain electronic protected health information to allow access only to those persons or software programs that have been granted access rights."

**Suggested Fix:**
Enable transparent data encryption (TDE) for the users table or implement column-level encryption for sensitive fields.

\`\`\`sql
ALTER TABLE users 
ENABLE ENCRYPTION;
\`\`\`

**Priority:** Critical
**Estimated Effort:** 2-4 hours`,
  )

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Draft Ticket Preview</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Auto-generated for human approval</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
        <textarea
          value={ticketText}
          onChange={(e) => setTicketText(e.target.value)}
          className="w-full h-64 bg-transparent text-sm text-gray-700 font-mono resize-none focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            <option>Create in Jira</option>
            <option>Create in GitHub Issues</option>
            <option>Create in Linear</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
            Reject
          </button>
          <button className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">
            Approve & Create Ticket
          </button>
        </div>
      </div>
    </div>
  )
}
