"use client"


import Link from "next/link"

export default function Sidebar() {

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Plans", href: "/plans" },
    { name: "Billing", href: "/billing" },
    { name: "Coverage", href: "/coverage" },
    { name: "Support", href: "/support" },
    { name: "Speed Test", href: "/speedtest" },
    { name: "AI Support", href: "/ai-support" },
    { name: "Notifications", href: "/notifications" },
    { name: "Analytics", href: "/analytics" },
    { name: "Admin", href: "/admin" },
  ]

  return (
    <aside className="w-[280px] min-h-screen bg-zinc-950 border-r border-zinc-800 p-8">

      <h1 className="text-3xl font-black mb-14">
        NETRUNFIBER
      </h1>

      <div className="space-y-3">

        {links.map((link, i) => (

          <Link
            key={i}
            href={link.href}
            className="
              block
              px-5
              py-4
              rounded-2xl
              text-zinc-300
              hover:bg-blue-600
              hover:text-white
              transition
            "
          >
            {link.name}
          </Link>

        ))}

      </div>

    </aside>
  )
}