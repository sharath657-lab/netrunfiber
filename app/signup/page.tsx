"use client"

import { useState } from "react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await res.json()

    console.log(data)

    if (data.success) {
      alert("Signup Success")
    } else {
      alert(data.message)
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-5xl font-black text-white mb-2">
          Create Account
        </h1>

        <p className="text-zinc-500 mb-8">
          Join NETRUNFIBER
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-4 rounded-xl font-bold text-white"
          >
            Create Account
          </button>

        </form>
      </div>
    </main>
  )
}