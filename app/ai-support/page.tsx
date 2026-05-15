"use client"

import { useState } from "react"

export default function AISupportPage() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I'm the NETRUNFIBER AI Assistant. How can I help you today?"
    }
  ])

  const [input, setInput] = useState("")

  const handleSend = () => {

    if (!input.trim()) return

    const userMessage = {
      role: "user",
      text: input
    }

    let aiReply = "I'm checking that for you."

    if (input.toLowerCase().includes("slow")) {
      aiReply =
        "Your network may be congested. Try restarting your router or running a speed test."
    }

    else if (input.toLowerCase().includes("bill")) {
      aiReply =
        "Your current bill is ₹1499 and due on 28 May 2026."
    }

    else if (input.toLowerCase().includes("plan")) {
      aiReply =
        "The Ultra 1Gbps plan is our most recommended package for gaming and streaming."
    }

    else if (input.toLowerCase().includes("router")) {
      aiReply =
        "You can restart your router from the dashboard under Quick Actions."
    }

    const aiMessage = {
      role: "ai",
      text: aiReply
    }

    setMessages((prev) => [...prev, userMessage, aiMessage])

    setInput("")
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-16 text-center">

          <h1 className="text-6xl font-black mb-6">
            AI Support Assistant
          </h1>

          <p className="text-zinc-400 text-xl">
            Smart AI-powered customer support for NETRUNFIBER users.
          </p>

        </div>

        {/* CHAT BOX */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8 h-[600px] flex flex-col">

          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto space-y-6 mb-8 pr-2">

            {messages.map((msg, i) => (

              <div
                key={i}
                className={`max-w-[80%] p-5 rounded-3xl ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600"
                    : "bg-black border border-zinc-800"
                }`}
              >

                <p className="text-lg leading-relaxed">
                  {msg.text}
                </p>

              </div>

            ))}

          </div>

          {/* INPUT */}

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
                flex-1
                bg-black
                border
                border-zinc-800
                rounded-2xl
                px-6
                py-5
                outline-none
              "
            />

            <button
              onClick={handleSend}
              className="
                bg-blue-600
                hover:bg-blue-500
                transition
                px-10
                rounded-2xl
                font-bold
              "
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}