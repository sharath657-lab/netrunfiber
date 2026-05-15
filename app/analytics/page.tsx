"use client"

export default function AnalyticsPage() {

  const analytics = [
    {
      title: "Average Download Speed",
      value: "942 Mbps",
      color: "text-blue-500",
    },

    {
      title: "Average Upload Speed",
      value: "884 Mbps",
      color: "text-cyan-400",
    },

    {
      title: "Network Uptime",
      value: "99.99%",
      color: "text-green-400",
    },

    {
      title: "Average Ping",
      value: "6 ms",
      color: "text-purple-400",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-6">
            Network Analytics
          </h1>

          <p className="text-zinc-400 text-xl">
            Real-time AI-powered network monitoring and insights.
          </p>

        </div>

        {/* ANALYTICS GRID */}

        <div className="grid lg:grid-cols-4 gap-8 mb-20">

          {analytics.map((item, i) => (

            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8"
            >

              <p className="text-zinc-500 mb-4">
                {item.title}
              </p>

              <h2 className={`text-5xl font-black ${item.color}`}>
                {item.value}
              </h2>

            </div>

          ))}

        </div>

        {/* BANDWIDTH SECTION */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-5xl font-black mb-3">
                Network Traffic
              </h2>

              <p className="text-zinc-400">
                Real-time bandwidth consumption.
              </p>

            </div>

            <div className="text-right">

              <p className="text-zinc-500 mb-2">
                Peak Usage
              </p>

              <h3 className="text-4xl font-black text-blue-500">
                82%
              </h3>

            </div>

          </div>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-3">

                <span>Download Traffic</span>

                <span>78%</span>

              </div>

              <div className="w-full h-5 bg-black rounded-full overflow-hidden">

                <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-cyan-400" />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-3">

                <span>Upload Traffic</span>

                <span>62%</span>

              </div>

              <div className="w-full h-5 bg-black rounded-full overflow-hidden">

                <div className="w-[62%] h-full bg-gradient-to-r from-green-400 to-cyan-400" />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-3">

                <span>AI Optimization</span>

                <span>94%</span>

              </div>

              <div className="w-full h-5 bg-black rounded-full overflow-hidden">

                <div className="w-[94%] h-full bg-gradient-to-r from-purple-500 to-pink-500" />

              </div>

            </div>

          </div>

        </div>

        {/* AI MONITORING */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-14 text-black">

          <h2 className="text-5xl font-black mb-6">
            AI Network Intelligence
          </h2>

          <p className="text-xl mb-10 max-w-3xl">
            NETRUNFIBER AI continuously monitors infrastructure,
            predicts outages, optimizes traffic routing,
            and improves network reliability in real time.
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold">
            Open AI Monitoring
          </button>

        </div>

      </div>

    </main>
  )
}