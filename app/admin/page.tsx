"use client"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-4">
            Admin Panel
          </h1>

          <p className="text-zinc-400 text-xl">
            NETRUNFIBER network management dashboard.
          </p>

        </div>

        {/* ANALYTICS */}

        <div className="grid lg:grid-cols-4 gap-8 mb-20">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Total Users
            </p>

            <h2 className="text-5xl font-black text-blue-500">
              250K
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Active Connections
            </p>

            <h2 className="text-5xl font-black text-green-400">
              243K
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Monthly Revenue
            </p>

            <h2 className="text-5xl font-black text-cyan-400">
              ₹4.2Cr
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Network Uptime
            </p>

            <h2 className="text-5xl font-black text-purple-400">
              99.99%
            </h2>

          </div>

        </div>

        {/* USER MANAGEMENT */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-5xl font-black">
              User Management
            </h2>

            <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-bold">
              Add User
            </button>

          </div>

          <div className="space-y-6">

            {[
              {
                name: "Sharath",
                plan: "Ultra 1Gbps",
                status: "ACTIVE",
              },
              {
                name: "Rahul",
                plan: "Gamer 500Mbps",
                status: "ACTIVE",
              },
              {
                name: "Priya",
                plan: "Enterprise",
                status: "PENDING",
              },
            ].map((user, i) => (

              <div
                key={i}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800 pb-6"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {user.name}
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    {user.plan}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <span className="text-green-400 font-bold">
                    {user.status}
                  </span>

                  <button className="bg-zinc-800 hover:bg-zinc-700 transition px-5 py-3 rounded-xl">
                    Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-500 transition px-5 py-3 rounded-xl">
                    Suspend
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* SUPPORT TICKETS */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <h2 className="text-5xl font-black mb-10">
            Support Tickets
          </h2>

          <div className="space-y-6">

            {[
              "Internet outage in Hyderabad",
              "Billing issue for enterprise user",
              "Router replacement request",
            ].map((ticket, i) => (

              <div
                key={i}
                className="flex items-center justify-between border-b border-zinc-800 pb-6"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {ticket}
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Open Ticket
                  </p>

                </div>

                <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-bold">
                  Resolve
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* NETWORK STATUS */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-14 text-black">

          <h2 className="text-5xl font-black mb-6">
            AI Network Monitoring
          </h2>

          <p className="text-xl mb-10 max-w-3xl">
            Real-time intelligent monitoring system tracking
            outages, latency, bandwidth usage, and infrastructure health.
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold">
            Open Monitoring Center
          </button>

        </div>

      </div>

    </main>
  )
}