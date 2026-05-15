"use client"
import sidebar from "../../components/sidebar"
export default function DashboardPage() {
  return (
   <main className="min-h-screen bg-black text-white flex">
<>
  <sidebar />

  <div className="flex-1 p-10">


        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-4">
            Dashboard
          </h1>

          <p className="text-zinc-400 text-xl">
            Welcome back to NETRUNFIBER.
          </p>

        </div>

        {/* STATS */}

        <div className="grid lg:grid-cols-4 gap-8 mb-20">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Current Plan
            </p>

            <h2 className="text-4xl font-black text-blue-500">
              Ultra 1Gbps
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Monthly Bill
            </p>

            <h2 className="text-4xl font-black text-cyan-400">
              ₹1499
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Connected Devices
            </p>

            <h2 className="text-4xl font-black text-green-400">
              12
            </h2>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8">

            <p className="text-zinc-500 mb-4">
              Network Status
            </p>

            <h2 className="text-4xl font-black text-purple-400">
              ACTIVE
            </h2>

          </div>

        </div>

        {/* USAGE */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-5xl font-black mb-3">
                Monthly Usage
              </h2>

              <p className="text-zinc-400">
                Real-time bandwidth consumption.
              </p>

            </div>

            <div className="text-right">

              <p className="text-zinc-500 mb-2">
                Total Used
              </p>

              <h3 className="text-4xl font-black text-blue-500">
                842 GB
              </h3>

            </div>

          </div>

          <div className="w-full h-6 bg-black rounded-full overflow-hidden">

            <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="grid lg:grid-cols-3 gap-8 mb-20">

          <button className="bg-blue-600 hover:bg-blue-500 transition rounded-[32px] p-10 text-left">

            <h2 className="text-3xl font-black mb-4">
              Pay Bill
            </h2>

            <p className="text-blue-100">
              Quickly pay and manage invoices.
            </p>

          </button>

          <button className="bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition rounded-[32px] p-10 text-left">

            <h2 className="text-3xl font-black mb-4">
              Upgrade Plan
            </h2>

            <p className="text-zinc-400">
              Switch to higher speed plans instantly.
            </p>

          </button>

          <button className="bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition rounded-[32px] p-10 text-left">

            <h2 className="text-3xl font-black mb-4">
              Restart Router
            </h2>

            <p className="text-zinc-400">
              Remotely restart your smart router.
            </p>

          </button>

        </div>

        {/* DEVICES */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">

          <h2 className="text-5xl font-black mb-12">
            Connected Devices
          </h2>

          <div className="space-y-6">

            {[
              "Gaming PC",
              "iPhone 15 Pro",
              "Smart TV",
              "PlayStation 5",
              "MacBook Pro",
            ].map((device, i) => (

              <div
                key={i}
                className="flex items-center justify-between border-b border-zinc-800 pb-5"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {device}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    Connected securely
                  </p>

                </div>

                <div className="w-4 h-4 rounded-full bg-green-400" />

              </div>

            ))}

          </div>

        </div>

        </div>
</>
</main>
  )
}