"use client"

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-4">
            Billing & Payments
          </h1>

          <p className="text-zinc-400 text-xl">
            Manage invoices, subscriptions, and payment history.
          </p>

        </div>

        {/* CURRENT BILL */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-14 text-black mb-20">

          <p className="text-xl mb-4">
            Current Outstanding Bill
          </p>

          <h2 className="text-7xl font-black mb-6">
            ₹1499
          </h2>

          <p className="text-xl mb-10">
            Due Date: 28 May 2026
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold">
            Pay Now
          </button>

        </div>

        {/* PAYMENT METHODS */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 mb-20">

          <h2 className="text-5xl font-black mb-10">
            Payment Methods
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                Credit Card
              </h3>

              <p className="text-zinc-400">
                Visa • Mastercard • RuPay
              </p>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                UPI
              </h3>

              <p className="text-zinc-400">
                PhonePe • Google Pay • Paytm
              </p>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                Net Banking
              </h3>

              <p className="text-zinc-400">
                All major Indian banks supported
              </p>

            </div>

          </div>

        </div>

        {/* PAYMENT HISTORY */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">

          <h2 className="text-5xl font-black mb-10">
            Payment History
          </h2>

          <div className="space-y-6">

            {[
              {
                month: "April 2026",
                amount: "₹1499",
                status: "PAID",
              },
              {
                month: "March 2026",
                amount: "₹1499",
                status: "PAID",
              },
              {
                month: "February 2026",
                amount: "₹1499",
                status: "PAID",
              },
            ].map((bill, i) => (

              <div
                key={i}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800 pb-6"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    {bill.month}
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Ultra 1Gbps Plan
                  </p>

                </div>

                <div className="flex items-center gap-8">

                  <span className="text-2xl font-bold">
                    {bill.amount}
                  </span>

                  <span className="text-green-400 font-bold">
                    {bill.status}
                  </span>

                  <button className="bg-zinc-800 hover:bg-zinc-700 transition px-5 py-3 rounded-xl">
                    Download Invoice
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  )
}