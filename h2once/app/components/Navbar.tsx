"use client"

export default function Navbar() {
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

          <a
            href="/"
            className="transition duration-300 hover:text-[#FFB37A]"
          >
            首页
          </a>

          <a
            href="/products"
            className="transition duration-300 hover:text-[#FFB37A]"
          >
            产品
          </a>

          <a
            href="/about"
            className="transition duration-300 hover:text-[#FFB37A]"
          >
            关于
          </a>

          <a
            href="/contact"
            className="transition duration-300 hover:text-[#FFB37A]"
          >
            联系
          </a>

        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/60128186358"
          className="
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
            hover:shadow-[#92283A]/40
          "
        >
          WhatsApp
        </a>

      </div>

    </header>
  )
}