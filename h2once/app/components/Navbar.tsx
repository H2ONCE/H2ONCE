export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
  
        <div className="flex justify-between items-center px-8 py-5">
  
          <div className="text-[#C8A24A] font-bold text-xl tracking-widest">
            H2ONCE
          </div>
  
          <nav className="hidden md:flex space-x-8 text-sm text-white/70">
  
            <a href="/" className="hover:text-[#C8A24A]">首页</a>
            <a href="/products" className="hover:text-[#C8A24A]">产品</a>
            <a href="/about" className="hover:text-[#C8A24A]">关于</a>
            <a href="/contact" className="hover:text-[#C8A24A]">联系</a>
  
          </nav>
  
          <a
            href="https://wa.me/60128186358"
            className="px-4 py-2 bg-[#7A1E2C] rounded-full text-sm hover:bg-[#8B2433]"
          >
            WhatsApp
          </a>
  
        </div>
  
      </header>
    )
  }