"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl z-50">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="text-4xl font-black">
            NETRUNFIBER
          </h1>

          <div className="hidden md:flex gap-8 text-zinc-400">

            <Link href="/plans">
              Plans
            </Link>

            <Link href="/coverage">
              Coverage
            </Link>

            <Link href="/support">
              Support
            </Link>

            <Link href="/login">
              Login
            </Link>

          </div>

          <Link
            href="/signup"
            className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-bold"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* HERO */}

      <section className="min-h-screen flex items-center px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900 mb-8 mt-20">

              <div className="w-3 h-3 rounded-full bg-blue-500" />

              <span className="text-sm text-zinc-300">
                India's Next Generation Fiber Network
              </span>

            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">

              Premium
              <br />
              Ultra Fast
              <br />
              Internet.

            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10">

              Experience blazing-fast fiber internet designed for gamers,
              creators, streamers, smart homes, and businesses.

            </p>

            <div className="flex gap-5">

              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-5 rounded-2xl font-bold"
              >
                Start Now
              </Link>

              <Link
                href="/plans"
                className="border border-zinc-700 hover:border-white transition px-8 py-5 rounded-2xl font-bold"
              >
                View Plans
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-bold">
                  NETRUN HUB
                </h2>

                <p className="text-zinc-500 mt-2">
                  Smart Dashboard
                </p>

              </div>

              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="bg-black rounded-3xl p-6 border border-zinc-800">

                <p className="text-zinc-500 mb-3">
                  Download
                </p>

                <h3 className="text-6xl font-black text-blue-500">
                  942
                </h3>

                <p className="text-xl font-bold mt-2">
                  Mbps
                </p>

              </div>

              <div className="bg-black rounded-3xl p-6 border border-zinc-800">

                <p className="text-zinc-500 mb-3">
                  Upload
                </p>

                <h3 className="text-6xl font-black text-cyan-400">
                  884
                </h3>

                <p className="text-xl font-bold mt-2">
                  Mbps
                </p>

              </div>

            </div>

            <div className="bg-black rounded-3xl p-6 border border-zinc-800">

              <div className="flex justify-between mb-4">

                <p className="text-zinc-500">
                  Connection Status
                </p>

                <p className="text-green-400 font-bold">
                  ACTIVE
                </p>

              </div>

              <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">

                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[90%]" />

              </div>

            </div>

          </div>

        </div>

      </section>
  

{/* STATS */}

<section className="max-w-7xl mx-auto px-8 py-24">

  <div className="grid lg:grid-cols-4 gap-8">

    {[
      {
        number: "250K+",
        label: "Active Customers",
      },
      {
        number: "99.99%",
        label: "Network Uptime",
      },
      {
        number: "120+",
        label: "Cities Covered",
      },
      {
        number: "24/7",
        label: "AI Monitoring",
      },
    ].map((item, i) => (

      <div
        key={i}
        className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10 hover:-translate-y-2 transition"
      >

        <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {item.number}
        </h2>

        <p className="text-zinc-400 text-lg">
          {item.label}
        </p>

      </div>

    ))}

  </div>

</section>

{/* FEATURES */}

<section className="max-w-7xl mx-auto px-8 py-24">

  <h2 className="text-5xl font-black mb-16">
    Why NETRUNFIBER?
  </h2>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">
      <h3 className="text-3xl font-bold mb-4">
        Ultra Low Latency
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Built for gaming, streaming, cloud computing,
        and real-time ultra-fast performance.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">
      <h3 className="text-3xl font-bold mb-4">
        AI Smart Network
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Intelligent traffic routing and smart optimization
        powered by AI monitoring systems.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">
      <h3 className="text-3xl font-bold mb-4">
        Enterprise Security
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Advanced encrypted infrastructure designed
        for modern businesses and smart homes.
      </p>
    </div>

  </div>

</section>

{/* FOOTER */}

<footer className="border-t border-zinc-900 py-10 mt-20">

  <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between gap-10">

    <div>

      <h2 className="text-3xl font-black mb-4">
        NETRUNFIBER
      </h2>

      <p className="text-zinc-500 max-w-md">
        India's next-generation premium fiber internet platform
        for modern homes and businesses.
      </p>

    </div>

    <div className="flex gap-10 text-zinc-400">

      <Link href="/plans">Plans</Link>
      <Link href="/support">Support</Link>
      <Link href="/coverage">Coverage</Link>
      <Link href="/profile">Profile</Link>

    </div>

  </div>

</footer>

    </main>
  )
}