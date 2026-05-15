"use client";

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-6">
          Fiber Plans
        </h1>

        <p className="text-zinc-400 text-xl mb-16">
          Choose the perfect ultra-fast internet experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">Starter</h2>

            <p className="text-5xl font-bold mb-6">
              ₹799
            </p>

            <ul className="space-y-4 text-zinc-300">
              <li>300 Mbps Speed</li>
              <li>Unlimited Data</li>
              <li>WiFi Router</li>
              <li>24/7 Support</li>
            </ul>

            <button className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-bold">
              Choose Plan
            </button>
          </div>

          <div className="bg-blue-600 rounded-3xl p-10 scale-105">
            <h2 className="text-3xl font-bold mb-4">Ultra</h2>

            <p className="text-5xl font-bold mb-6">
              ₹1499
            </p>

            <ul className="space-y-4">
              <li>1 Gbps Fiber</li>
              <li>Ultra Low Latency</li>
              <li>WiFi 6 Router</li>
              <li>Premium Support</li>
            </ul>

            <button className="w-full mt-10 bg-black py-4 rounded-2xl font-bold">
              Most Popular
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">Enterprise</h2>

            <p className="text-5xl font-bold mb-6">
              ₹4999
            </p>

            <ul className="space-y-4 text-zinc-300">
              <li>10 Gbps Dedicated</li>
              <li>SLA Guarantee</li>
              <li>Static IP</li>
              <li>Priority Support</li>
            </ul>

            <button className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-bold">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}