"use client"
import DashboardLayout from "@/components/dashboard-layout"
import KPICards from "@/components/kpi-cards"
import DataSourcesSection from "@/components/data-sources-section"
import ViolationsTable from "@/components/violations-table"
import TicketPreview from "@/components/ticket-preview"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* KPI Cards */}
        <KPICards />

        {/* Data Ingestion Sources */}
        <DataSourcesSection />

        {/* Violations Table */}
        <ViolationsTable />

        {/* Draft Ticket Preview */}
        <TicketPreview />
      </div>
    </DashboardLayout>
  )
}
