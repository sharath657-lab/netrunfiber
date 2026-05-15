"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/dashboard";

      } else {

        alert(data.message);
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h1 className="text-4xl font-black mb-3 text-center">
          Welcome Back
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Login to NETRUNFIBER account
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 px-5 py-4 rounded-2xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 px-5 py-4 rounded-2xl outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}