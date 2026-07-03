"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <a
          href="/"
          className="
            text-2xl
            font-bold
            tracking-[0.35em]
            bg-gradient-to-r
            from-[#5E1020]
            via-[#7A1E2C]
            to-[#A42D42]
            bg-clip-text
            text-transparent
            transition
            duration-500
            hover:scale-105
          "
        >
          H2ONCE
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">

          <a href="/" className="hover:text-[#FFB37A] transition">
            首页
          </a>

          <a href="/products" className="hover:text-[#FFB37A] transition">
            产品
          </a>

          <a href="/about" className="hover:text-[#FFB37A] transition">
            关于
          </a>

          <a href="/contact" className="hover:text-[#FFB37A] transition">
            联系
          </a>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Desktop WhatsApp */}
          <a
            href="https://wa.me/60128186358"
            className="
              hidden lg:inline-flex
              rounded-full
              bg-[#7A1E2C]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-[#7A1E2C]/30
              transition
              duration-300
              hover:scale-105
              hover:bg-[#92283A]
            "
          >
            WhatsApp
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">

          <div className="flex flex-col items-center py-8 space-y-6">

            <a
              href="/"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#FFB37A]"
            >
              首页
            </a>

            <a
              href="/products"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#FFB37A]"
            >
              产品
            </a>

            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#FFB37A]"
            >
              关于
            </a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#FFB37A]"
            >
              联系
            </a>

            <a
              href="https://wa.me/60128186358"
              className="
                mt-2
                rounded-full
                bg-[#7A1E2C]
                px-6
                py-3
                text-white
                hover:bg-[#92283A]
                transition
              "
            >
              WhatsApp
            </a>

          </div>

        </div>
      )}

    </header>
  )
}