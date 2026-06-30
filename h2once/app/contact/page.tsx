import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold text-[#C8A24A] mb-6">
          联系我们
        </h1>

        <p className="mb-2">电话：012-818 6358（Wang Ye）</p>

        <p className="mb-6">
          HTWO ONCE (M) SDN BHD<br />
          NO6, JALAN CEMPAKA SARI 1/4,<br />
          TAMAN SRI CEMPAKA, JALAN JUNID,<br />
          84000 MUAR, JOHOR
        </p>

        <a
          href="https://wa.me/60128186358"
          className="inline-block px-6 py-3 bg-[#7A1E2C] rounded-full mb-10"
        >
          WhatsApp 联系
        </a>

        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.google.com/maps?q=84000+Muar+Johor&output=embed"
        />

      </div>

    </main>
  )
}