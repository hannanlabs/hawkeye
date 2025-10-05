"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { Network } from "vis-network"

export default function GraphPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const nodes = [
      { id: "NVDA", label: "NVIDIA\n(NVDA)", group: "company", size: 30 },

      { id: "pelosi", label: "Nancy Pelosi\nSpeaker", group: "politician" },
      { id: "paul_pelosi", label: "Paul Pelosi\nSpouse", group: "spouse" },
      { id: "exec1", label: "Tech Executive\nAnonymous", group: "executive" },
      { id: "senator1", label: "Senator A\nTech Committee", group: "politician" },
      { id: "lobbyist1", label: "Tech Lobbyist\nK Street", group: "lobbyist" },
      { id: "fund_mgr", label: "Hedge Fund Mgr\nWall Street", group: "finance" },
    ]

    const edges = [
      { from: "pelosi", to: "NVDA", value: 10, label: "$5M Buy\n2024-06-15" },
      { from: "paul_pelosi", to: "NVDA", value: 10, label: "$3M Buy\n2024-06-14" },
      { from: "senator1", to: "NVDA", value: 8, label: "$2M Buy\n2024-06-16" },
      { from: "fund_mgr", to: "NVDA", value: 7, label: "$10M Buy\n2024-06-15" },

      { from: "pelosi", to: "paul_pelosi", value: 9, label: "Family\nSame Day Trade", dashes: true },
      { from: "pelosi", to: "senator1", value: 6, label: "Meeting\n2 days prior", dashes: true },
      { from: "pelosi", to: "lobbyist1", value: 5, label: "Lunch\n1 week prior", dashes: true },
      { from: "lobbyist1", to: "exec1", value: 7, label: "Client\nRelationship", dashes: true },
      { from: "exec1", to: "NVDA", value: 4, label: "Inside Info", dashes: true },
      { from: "senator1", to: "fund_mgr", value: 6, label: "Phone Call\nSame Day", dashes: true },
      { from: "fund_mgr", to: "lobbyist1", value: 5, label: "Donor\nRelationship", dashes: true },
    ]

    const data = {
      nodes: nodes,
      edges: edges,
    }

    const options = {
      nodes: {
        shape: "dot",
        size: 20,
        font: {
          size: 12,
          color: "#000000",
        },
        borderWidth: 2,
      },
      groups: {
        company: {
          color: { border: "#000000", background: "#1F2937" },
          size: 40,
        },
        politician: {
          color: { border: "#000000", background: "#DC2626" },
        },
        spouse: {
          color: { border: "#000000", background: "#EF4444" },
        },
        executive: {
          color: { border: "#000000", background: "#991B1B" },
        },
        lobbyist: {
          color: { border: "#000000", background: "#B91C1C" },
        },
        finance: {
          color: { border: "#000000", background: "#DC2626" },
        },
      },
      edges: {
        width: 1,
        color: {
          color: "#404040",
          highlight: "#DC2626",
        },
        smooth: {
          enabled: true,
          type: "continuous",
          roundness: 0.5,
        },
        font: {
          size: 10,
          align: "middle",
          color: "#000000",
        },
        scaling: {
          min: 1,
          max: 5,
        },
      },
      physics: {
        barnesHut: {
          gravitationalConstant: -8000,
          springConstant: 0.01,
          springLength: 200,
        },
        stabilization: {
          iterations: 2500,
        },
      },
      interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true,
      },
    }

    const network = new Network(containerRef.current, data, options)

    return () => {
      network.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 border-b border-gray-200">
        <Link href="/" className="text-2xl font-semibold text-black tracking-tight hover:text-red-600 transition-colors">
          Hawkeye
        </Link>
      </header>
      <div ref={containerRef} className="w-full h-[calc(100vh-80px)]"></div>
    </div>
  )
}
