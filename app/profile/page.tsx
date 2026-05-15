"use client"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-4">
            My Profile
          </h1>

          <p className="text-zinc-400 text-xl">
            Manage your NETRUNFIBER account and services.
          </p>

        </div>

        {/* PROFILE CARD */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-10">

          <div className="flex items-center gap-6 mb-10">

            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-black">
              S
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Sharath
              </h2>

              <p className="text-zinc-400 mt-2">
                sharath@gmail.com
              </p>

            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">
                Current Plan
              </p>

              <h3 className="text-3xl font-black text-blue-500">
                Ultra 1Gbps
              </h3>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">
                Monthly Bill
              </p>

              <h3 className="text-3xl font-black text-cyan-400">
                ₹1499
              </h3>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">
                Connection Status
              </p>

              <h3 className="text-3xl font-black text-green-400">
                ACTIVE
              </h3>

            </div>

          </div>

        </div>

        {/* ACCOUNT SETTINGS */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">

          <h2 className="text-4xl font-bold mb-10">
            Account Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="block text-zinc-400 mb-3">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Sharath"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
              />

            </div>

            <div>

              <label className="block text-zinc-400 mb-3">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="sharath@gmail.com"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
              />

            </div>

          </div>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold">
            Save Changes
          </button>

        </div>

      </div>

    </main>
  )
}