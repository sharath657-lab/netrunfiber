"use client"

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-20">

          <h1 className="text-6xl font-black mb-6">
            Coverage Network
          </h1>

          <p className="text-zinc-400 text-xl">
            NETRUNFIBER is expanding across India with ultra-fast fiber infrastructure.
          </p>

        </div>

        {/* COVERAGE STATS */}

        <div className="grid lg:grid-cols-4 gap-8 mb-20">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-5xl font-black text-blue-500 mb-4">
              120+
            </h2>

            <p className="text-zinc-400 text-lg">
              Cities Covered
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-5xl font-black text-cyan-400 mb-4">
              250K+
            </h2>

            <p className="text-zinc-400 text-lg">
              Active Users
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-5xl font-black text-green-400 mb-4">
              99.99%
            </h2>

            <p className="text-zinc-400 text-lg">
              Uptime
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h2 className="text-5xl font-black text-purple-400 mb-4">
              24/7
            </h2>

            <p className="text-zinc-400 text-lg">
              AI Monitoring
            </p>

          </div>

        </div>

        {/* CITIES */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <h2 className="text-5xl font-black mb-12">
            Available Cities
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "Hyderabad",
              "Bangalore",
              "Mumbai",
              "Delhi",
              "Chennai",
              "Pune",
              "Kolkata",
              "Ahmedabad",
              "Vijayawada",
              "Warangal",
              "Visakhapatnam",
              "Coimbatore",
            ].map((city, i) => (

              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >

                <h3 className="text-2xl font-bold">
                  {city}
                </h3>

                <p className="text-green-400 mt-2">
                  Service Available
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* CHECK COVERAGE */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-14 text-black">

          <h2 className="text-5xl font-black mb-6">
            Check Coverage In Your Area
          </h2>

          <p className="text-xl mb-10 max-w-2xl">
            Enter your city or locality to see if NETRUNFIBER
            is available near you.
          </p>

          <div className="flex flex-col lg:flex-row gap-6">

            <input
              type="text"
              placeholder="Enter your city..."
              className="flex-1 px-6 py-5 rounded-2xl bg-white text-black outline-none"
            />

            <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold">
              Check Availability
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}