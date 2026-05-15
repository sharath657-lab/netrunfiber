"use client"

export default function NotificationsPage() {

  const notifications = [
    {
      title: "Scheduled Maintenance",
      message:
        "Network maintenance planned for Hyderabad on Sunday 2:00 AM.",
      type: "warning",
    },

    {
      title: "Payment Successful",
      message:
        "Your payment of ₹1499 has been received successfully.",
      type: "success",
    },

    {
      title: "Upgrade Available",
      message:
        "Upgrade to Ultra 1Gbps and get OTT bundle access.",
      type: "info",
    },

    {
      title: "High Usage Alert",
      message:
        "Your network usage exceeded 80% this month.",
      type: "alert",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">

          <h1 className="text-6xl font-black mb-6">
            Notifications
          </h1>

          <p className="text-zinc-400 text-xl">
            Stay updated with your NETRUNFIBER account and network alerts.
          </p>

        </div>

        {/* NOTIFICATIONS */}

        <div className="space-y-8">

          {notifications.map((notification, i) => (

            <div
              key={i}
              className={`
                rounded-[32px]
                p-8
                border
                ${
                  notification.type === "success"
                    ? "bg-green-500/10 border-green-500/30"
                    : notification.type === "warning"
                    ? "bg-yellow-500/10 border-yellow-500/30"
                    : notification.type === "alert"
                    ? "bg-red-500/10 border-red-500/30"
                    : "bg-blue-500/10 border-blue-500/30"
                }
              `}
            >

              <h2 className="text-3xl font-black mb-4">
                {notification.title}
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed">
                {notification.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}