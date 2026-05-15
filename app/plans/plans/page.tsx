"use client"

import Link from "next/link"

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <h1 className="text-6xl font-black mb-6">
            NETRUNFIBER Plans
          </h1>

          <p className="text-zinc-400 text-xl">
            Ultra-fast premium fiber plans for every lifestyle.
          </p>

        </div>

        {/* PLANS */}

        <div className="grid lg:grid-cols-4 gap-8">

          {/* BASIC */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">
              Basic
            </h2>

            <h3 className="text-5xl font-black mb-6">
              ₹499
            </h3>

            <div className="space-y-4 text-zinc-400 mb-10">

              <p>100 Mbps Speed</p>
              <p>Unlimited Data</p>
              <p>Free Installation</p>
              <p>WiFi Router Included</p>

            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
              Choose Plan
            </button>

          </div>

          {/* GAMER */}

          <div className="bg-zinc-950 border border-blue-500 rounded-[32px] p-8 relative">

            <div className="absolute top-4 right-4 bg-blue-500 px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Gamer
            </h2>

            <h3 className="text-5xl font-black mb-6">
              ₹999
            </h3>

            <div className="space-y-4 text-zinc-400 mb-10">

              <p>500 Mbps Speed</p>
              <p>Ultra Low Latency</p>
              <p>Unlimited Data</p>
              <p>Gaming Optimization</p>
              <p>Dual Band Router</p>

            </div>

            <button className="w-full bg-blue-600 py-4 rounded-2xl font-bold">
              Choose Plan
            </button>

          </div>

          {/* ULTRA */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">
              Ultra Fiber
            </h2>

            <h3 className="text-5xl font-black mb-6">
              ₹1499
            </h3>

            <div className="space-y-4 text-zinc-400 mb-10">

              <p>1 Gbps Speed</p>
              <p>Unlimited Data</p>
              <p>OTT Bundle Included</p>
              <p>AI Smart Routing</p>
              <p>Premium Router</p>

            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
              Choose Plan
            </button>

          </div>

          {/* ENTERPRISE */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">
              Enterprise
            </h2>

            <h3 className="text-5xl font-black mb-6">
              Custom
            </h3>

            <div className="space-y-4 text-zinc-400 mb-10">

              <p>Dedicated Fiber</p>
              <p>Static IP</p>
              <p>24/7 Priority Support</p>
              <p>AI Network Monitoring</p>
              <p>Enterprise SLA</p>

            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
              Contact Sales
            </button>

          </div>

        </div>

        {/* BACK */}

        <div className="mt-20 text-center">

          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  )
}