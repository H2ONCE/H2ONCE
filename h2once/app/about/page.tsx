import Navbar from "../components/Navbar"

export default function AboutPage() {

  return (
    <main className="min-h-screen bg-[#060606] text-white overflow-hidden">

      {/* ✅ 顶部菜单 */}
      <Navbar />

      {/* 🔥 背景光 */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[#6B0F1A]/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* 🏆 HERO */}
        <div className="text-center mb-28">

          <p className="tracking-[8px] text-[#C8A24A] text-sm mb-6">
            PREMIUM MOONCAKE BRAND
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">

            <span className="text-white">
              匠心传承
            </span>

            <br />

            <span className="text-[#C8A24A]">
              打造现代节庆味道
            </span>

          </h1>

          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-loose">
            H2ONCE 专注于传统月饼与节庆食品，
            结合现代审美与传统工艺，
            将每一份味道化作人与人之间最真挚的情感连接。
          </p>

        </div>

        {/* 🟤 品牌故事 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">

          {/* 左边 */}
          <div>

            <p className="tracking-[5px] text-[#C8A24A] text-sm mb-4">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              不只是月饼，
              <br />
              更是一份传承
            </h2>

            <div className="space-y-6 text-white/65 leading-loose">

              <p>
                H2ONCE 的开始，
                源自于对传统味道的一份坚持。
              </p>

              <p>
                我们相信，
                真正好的月饼，
                不只是外表精致，
                更应该保留传统工艺中的温度与灵魂。
              </p>

              <p>
                从选料、烘焙到包装，
                每一道工序都经过细致把控，
                让传统节庆食品，
                在现代市场中依然保有高级感与文化价值。
              </p>

              <p>
                如今，
                H2ONCE 不仅服务零售市场，
                也为企业礼盒、OEM、批发客户提供完整解决方案，
                持续将马来西亚的节庆文化推广至更多市场。
              </p>

            </div>

          </div>

          {/* 右边 */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#C8A24A]/10 blur-2xl rounded-full"></div>

            <img
              src="/products/baked1.jpg"
              className="relative rounded-3xl h-[600px] w-full object-cover border border-white/10 shadow-2xl"
            />

          </div>

        </div>

        {/* ✨ 品牌理念 */}
        <div className="mb-24">

          <div className="text-center mb-14">

            <p className="tracking-[5px] text-[#C8A24A] text-sm mb-4">
              BRAND VALUES
            </p>

            <h2 className="text-4xl font-bold">
              品牌理念
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-6">
                ✨
              </div>

              <h3 className="text-2xl text-[#C8A24A] mb-4">
                品质坚持
              </h3>

              <p className="text-white/60 leading-loose">
                严选原料，
                坚持稳定品质，
                让每一份产品都保有最佳口感与细节。
              </p>

            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-6">
                🏮
              </div>

              <h3 className="text-2xl text-[#C8A24A] mb-4">
                文化传承
              </h3>

              <p className="text-white/60 leading-loose">
                保留传统节庆文化，
                让经典味道继续陪伴每一次团圆时刻。
              </p>

            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl text-[#C8A24A] mb-4">
                创新升级
              </h3>

              <p className="text-white/60 leading-loose">
                结合现代审美与市场趋势，
                打造更符合年轻消费者的节庆体验。
              </p>

            </div>

          </div>

        </div>

        {/* 🏢 服务 */}
        <div className="bg-gradient-to-r from-[#14070A] to-[#0A0A0A] border border-white/10 rounded-[40px] p-12 mb-24">

          <div className="text-center mb-12">

            <p className="tracking-[5px] text-[#C8A24A] text-sm mb-4">
              BUSINESS SERVICES
            </p>

            <h2 className="text-4xl font-bold">
              企业合作服务
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 text-white/70">

            <div className="space-y-5">

              <p>• 企业礼盒定制</p>
              <p>• OEM 代工生产</p>
              <p>• 节庆包装设计</p>
              <p>• 大量批发供应</p>

            </div>

            <div className="space-y-5">

              <p>• 传统烤皮月饼</p>
              <p>• 冰皮 / 馅中馅系列</p>
              <p>• 节庆食品开发</p>
              <p>• 零售与线上销售</p>

            </div>

          </div>

        </div>

        {/* 🌐 社媒 */}
        <div className="mb-24">

          <div className="text-center mb-12">

            <p className="tracking-[5px] text-[#C8A24A] text-sm mb-4">
              CONNECT WITH US
            </p>

            <h2 className="text-4xl font-bold">
              官方平台
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <a
              href="https://shopee.com.my/h2once"
              target="_blank"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#C8A24A] hover:-translate-y-1 transition duration-300"
            >
              <p className="text-2xl mb-2">🛍️ Shopee</p>
              <p className="text-white/50">
                官方线上商店
              </p>
            </a>

            <a
              href="https://s.lazada.com.my/s.ZbrOpx"
              target="_blank"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#C8A24A] hover:-translate-y-1 transition duration-300"
            >
              <p className="text-2xl mb-2">🛒 Lazada</p>
              <p className="text-white/50">
                浏览更多产品系列
              </p>
            </a>

            <a
              href="https://www.instagram.com/h.twoonce"
              target="_blank"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#C8A24A] hover:-translate-y-1 transition duration-300"
            >
              <p className="text-2xl mb-2">📸 Instagram</p>
              <p className="text-white/50">
                最新产品与品牌动态
              </p>
            </a>

            <a
              href="https://www.facebook.com/share/1Jsrd7hzYe/?mibextid=wwXIfr"
              target="_blank"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#C8A24A] hover:-translate-y-1 transition duration-300"
            >
              <p className="text-2xl mb-2">📘 Facebook</p>
              <p className="text-white/50">
                关注品牌最新资讯
              </p>
            </a>

          </div>

        </div>

        {/* 💬 END */}
        <div className="text-center border-t border-white/10 pt-16">

          <p className="text-[#C8A24A] text-3xl mb-6">
            不只是月饼
          </p>

          <p className="max-w-3xl mx-auto text-white/55 leading-loose text-lg">
            我们希望通过每一份产品，
            传递人与人之间的温度，
            让传统文化在现代生活中继续被看见、被分享、被记住。
          </p>

        </div>

      </div>

    </main>
  )
}