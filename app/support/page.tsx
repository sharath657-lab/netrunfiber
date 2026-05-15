"use client"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-20">

          <h1 className="text-6xl font-black mb-6">
            Support Center
          </h1>

          <p className="text-zinc-400 text-xl">
            24/7 premium customer support for all NETRUNFIBER users.
          </p>

        </div>

        {/* SUPPORT CARDS */}

        <div className="grid lg:grid-cols-3 gap-8 mb-20">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-3xl font-bold mb-4">
              Technical Support
            </h2>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Get help with internet issues, router setup,
              outages, and connectivity problems.
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-500 transition py-4 rounded-2xl font-bold">
              Contact Support
            </button>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-3xl font-bold mb-4">
              Billing Support
            </h2>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Questions about invoices, payments,
              subscriptions, and plan renewals.
            </p>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
              View Billing Help
            </button>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-3xl font-bold mb-4">
              Enterprise Support
            </h2>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Dedicated priority support for enterprise
              and business customers.
            </p>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold">
              Contact Enterprise Team
            </button>

          </div>

        </div>

        {/* FAQ */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">

          <h2 className="text-5xl font-black mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div className="border-b border-zinc-800 pb-6">

              <h3 className="text-2xl font-bold mb-3">
                How long does installation take?
              </h3>

              <p className="text-zinc-400">
                Most installations are completed within 24-48 hours.
              </p>

            </div>

            <div className="border-b border-zinc-800 pb-6">

              <h3 className="text-2xl font-bold mb-3">
                Is the router included?
              </h3>

              <p className="text-zinc-400">
                Yes, premium WiFi routers are included with selected plans.
              </p>

            </div>

            <div className="border-b border-zinc-800 pb-6">

              <h3 className="text-2xl font-bold mb-3">
                Do you offer unlimited data?
              </h3>

              <p className="text-zinc-400">
                All NETRUNFIBER plans include unlimited high-speed data.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}