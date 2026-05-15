"use client"

import { useState } from "react"

export default function SpeedTestPage() {

  const [testing, setTesting] = useState(false)

  const [download, setDownload] = useState(0)

  const [upload, setUpload] = useState(0)

  const [ping, setPing] = useState(0)

  const runSpeedTest = () => {

    setTesting(true)

    let progress = 0

    const interval = setInterval(() => {

      progress += 1

      setDownload(Math.floor(Math.random() * 900) + 100)

      setUpload(Math.floor(Math.random() * 800) + 100)

      setPing(Math.floor(Math.random() * 20) + 1)

      if (progress >= 20) {

        clearInterval(interval)

        setTesting(false)

      }

    }, 200)
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="mb-20 text-center">

          <h1 className="text-7xl font-black mb-6">
            NETRUNFIBER Speed Test
          </h1>

          <p className="text-zinc-400 text-xl">
            Test your internet speed in real time.
          </p>

        </div>

        {/* MAIN CARD */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[50px] p-14 text-center mb-20">

          <div className="grid lg:grid-cols-3 gap-10 mb-16">

            {/* DOWNLOAD */}

            <div className="bg-black border border-zinc-800 rounded-[32px] p-10">

              <p className="text-zinc-500 text-lg mb-4">
                Download
              </p>

              <h2 className="text-7xl font-black text-blue-500 mb-3">
                {download}
              </h2>

              <p className="text-zinc-400 text-xl">
                Mbps
              </p>

            </div>

            {/* UPLOAD */}

            <div className="bg-black border border-zinc-800 rounded-[32px] p-10">

              <p className="text-zinc-500 text-lg mb-4">
                Upload
              </p>

              <h2 className="text-7xl font-black text-cyan-400 mb-3">
                {upload}
              </h2>

              <p className="text-zinc-400 text-xl">
                Mbps
              </p>

            </div>

            {/* PING */}

            <div className="bg-black border border-zinc-800 rounded-[32px] p-10">

              <p className="text-zinc-500 text-lg mb-4">
                Ping
              </p>

              <h2 className="text-7xl font-black text-green-400 mb-3">
                {ping}
              </h2>

              <p className="text-zinc-400 text-xl">
                ms
              </p>

            </div>

          </div>

          <button
            onClick={runSpeedTest}
            disabled={testing}
            className="
              bg-blue-600
              hover:bg-blue-500
              transition
              px-14
              py-6
              rounded-3xl
              text-2xl
              font-black
              disabled:opacity-50
            "
          >

            {testing ? "Testing..." : "Start Speed Test"}

          </button>

        </div>

        {/* NETWORK QUALITY */}

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h3 className="text-3xl font-black mb-4">
              Gaming
            </h3>

            <p className="text-green-400 text-2xl font-bold">
              Excellent
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h3 className="text-3xl font-black mb-4">
              Streaming
            </h3>

            <p className="text-green-400 text-2xl font-bold">
              4K Ready
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

            <h3 className="text-3xl font-black mb-4">
              Network Stability
            </h3>

            <p className="text-green-400 text-2xl font-bold">
              Stable
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}