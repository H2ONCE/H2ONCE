"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-bold tracking-[6px] text-[#C8A24A]"
        >
          H2ONCE
        </a>

        {/* Desktop Menu (只在 lg 以上显示) */}
        <nav className="hidden lg:flex items-center gap-12 text-white/80">

          <a href="/" className="hover:text-[#C8A24A] transition">
            首页
          </a>

          <a href="/products" className="hover:text-[#C8A24A] transition">
            产品
          </a>

          <a href="/about" className="hover:text-[#C8A24A] transition">
            关于
          </a>

          <a href="/contact" className="hover:text-[#C8A24A] transition">
            联系
          </a>

        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/60173393012"
            className="px-7 py-3 rounded-full bg-[#7A1D2B] hover:bg-[#96263A] transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">

          <div className="flex flex-col items-center py-8 gap-6">

            <a href="/" onClick={() => setOpen(false)}>
              首页
            </a>

            <a href="/products" onClick={() => setOpen(false)}>
              产品
            </a>

            <a href="/about" onClick={() => setOpen(false)}>
              关于
            </a>

            <a href="/contact" onClick={() => setOpen(false)}>
              联系
            </a>

            <a
              href="https://wa.me/60173393012"
              className="mt-4 px-8 py-3 rounded-full bg-[#7A1D2B]"
            >
              WhatsApp
            </a>

          </div>

        </div>
      )}
    </header>
  )
}