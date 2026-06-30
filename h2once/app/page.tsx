"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  const images = [
    "/products/newcake1.jpg",
    "/products/newcake2.jpg",
    "/products/newcake3.jpg",
    "/products/newcake4.jpg",
    "/products/newcake5.jpg",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(timer)

  }, [images.length])

  return (

    <main className="bg-[#0B0B0D] text-white overflow-hidden">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >

          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />

        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0B0B0D]"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-24">

          <p className="tracking-[10px] uppercase text-[#C8A24A] text-xs md:text-sm mb-8">

            MODERN ASIAN FOOD BRAND

          </p>

          <h1 className="text-5xl md:text-7xl xl:text-[100px] font-semibold leading-[0.92] tracking-[-3px] max-w-5xl mx-auto">

            Redefining
            <br />
            Traditional
            <br />
            Asian Flavors

          </h1>

          <div className="w-24 h-[1px] bg-[#C8A24A] mx-auto my-10"></div>

          <p className="text-white/75 text-lg md:text-xl leading-[2] max-w-3xl mx-auto">

            H2ONCE reimagines traditional delicacies
            through refined craftsmanship,
            modern aesthetics,
            and in-house manufacturing —
            creating meaningful gifting experiences
            for today's generation.

          </p>

          <p className="text-white/40 text-sm md:text-base leading-[2.2] max-w-3xl mx-auto mt-8">

            H2ONCE 以现代美学重新演绎亚洲传统食品，
            从研发、制作到礼盒呈现，
            坚持内部打造每一个细节，
            重新定义属于这个时代的亚洲风味。

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <a
              href="/products"
              className="px-10 py-4 bg-[#C8A24A] text-black rounded-full font-medium hover:scale-105 transition duration-300"
            >
              Explore Collection
            </a>

            <a
              href="https://wa.me/60173393012"
              className="px-10 py-4 border border-white/20 rounded-full text-white/80 hover:border-[#C8A24A] hover:text-[#C8A24A] transition duration-300"
            >
              OEM Inquiry
            </a>

          </div>

        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0D] to-transparent"></div>

      </section>
{/* ================= TRUST SECTION ================= */}

<section className="py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 text-center">

        <h3 className="text-4xl font-bold text-[#C8A24A] mb-3">
          20+
        </h3>

        <p className="text-white/80">
          Signature Flavours
        </p>

      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 text-center">

        <h3 className="text-4xl font-bold text-[#C8A24A] mb-3">
          OEM
        </h3>

        <p className="text-white/80">
          Manufacturing
        </p>

      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 text-center">

        <h3 className="text-4xl font-bold text-[#C8A24A] mb-3">
          180
        </h3>

        <p className="text-white/80">
          Days Shelf Life
        </p>

      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 text-center">

        <h3 className="text-4xl font-bold text-[#C8A24A] mb-3">
          100%
        </h3>

        <p className="text-white/80">
          In-House Production
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================= PRODUCTS ================= */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="tracking-[8px] uppercase text-[#C8A24A] text-xs mb-5">

              SIGNATURE COLLECTION

            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">

              Modern Asian
              <br />
              Delicacies

            </h2>

            <p className="text-white/50 max-w-2xl mx-auto leading-[2]">

              A curated collection of premium mooncakes
              and delicacies crafted through tradition,
              innovation,
              and refined presentation.

            </p>

          </div>

          {/* MAIN IMAGE */}
          <div className="max-w-2xl mx-auto">

            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5">

              <img
                src={images[index]}
                alt="product"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* THUMBNAILS */}
            <div className="flex justify-center flex-wrap gap-4 mt-8">

              {images.map((img, i) => (

                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`overflow-hidden rounded-2xl border transition duration-300 ${
                    i === index
                      ? "border-[#C8A24A] scale-105"
                      : "border-white/10 opacity-60"
                  }`}
                >

                  <img
                    src={img}
                    alt="product"
                    className="w-20 h-20 md:w-24 md:h-24 object-cover"
                  />

                </button>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= STORY ================= */}

      <section className="py-32 px-6 border-t border-white/5">

        <div className="max-w-5xl mx-auto text-center">

          <p className="tracking-[8px] uppercase text-[#C8A24A] text-xs mb-5">

            OUR STORY

          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-12">

            Tradition Should
            <br />
            Never Be Forgotten

          </h2>

          <p className="text-white/65 text-lg leading-[2.2] max-w-4xl mx-auto">

            Traditional Asian delicacies carry memories
            of celebration,
            family,
            and connection.

            As lifestyles evolve,
            we believe these familiar flavors
            deserve a more modern and refined expression.

            H2ONCE preserves the authentic soul
            of traditional delicacies
            while introducing contemporary aesthetics,
            premium craftsmanship,
            and thoughtful presentation.

          </p>

          <p className="text-white/40 text-base leading-[2.2] max-w-4xl mx-auto mt-10">

            亚洲传统食品，
            承载着节日、家庭与人与人之间的情感。

            随着时代改变，
            我们相信这些熟悉的味道，
            值得拥有更现代、更精致的表达方式。

            H2ONCE 保留传统食品最真实的灵魂，
            同时融入现代设计、美学与新的生活方式。

          </p>

        </div>

      </section>

{/* ================= OEM SERVICES ================= */}

<section className="py-32 px-6 border-t border-white/5">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-20">

      <p className="tracking-[8px] uppercase text-[#C8A24A] text-xs mb-5">
        OEM / ODM SERVICES
      </p>

      <h2 className="text-4xl md:text-6xl font-semibold mb-8">
        Build Your Own
        <br />
        Food Brand
      </h2>

      <p className="text-white/65 max-w-3xl mx-auto leading-[2]">
        We partner with retailers, distributors,
        corporate gifting companies and food brands
        to develop premium mooncakes, biscuits,
        festive gifts and private label products.
      </p>

      <p className="text-white/40 max-w-3xl mx-auto leading-[2] mt-6">
        我们与零售商、经销商、企业送礼公司及食品品牌合作，
        提供月饼、饼干、节庆礼盒及品牌定制产品开发服务，
        协助客户打造属于自己的食品品牌。
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-8">

        <h3 className="text-[#C8A24A] text-xl mb-5">
          Private Label
        </h3>

        <p className="text-white/65 leading-[2]">
          Launch your own brand with custom recipes,
          packaging and product positioning.
        </p>

        <p className="text-white/40 leading-[2] mt-4">
          提供品牌定制、专属配方、
          包装设计及市场定位服务。
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-8">

        <h3 className="text-[#C8A24A] text-xl mb-5">
          Corporate Gifting
        </h3>

        <p className="text-white/65 leading-[2]">
          Premium festive gifting solutions
          for corporations, events and campaigns.
        </p>

        <p className="text-white/40 leading-[2] mt-4">
          企业送礼、节庆礼盒、
          活动赠礼及品牌礼品方案。
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-8">

        <h3 className="text-[#C8A24A] text-xl mb-5">
          OEM Manufacturing
        </h3>

        <p className="text-white/65 leading-[2]">
          Large-scale production with quality control,
          consistency and reliable supply.
        </p>

        <p className="text-white/40 leading-[2] mt-4">
          稳定生产能力、
          严格品质控制、
          长期供应合作。
        </p>

      </div>

    </div>

    <div className="text-center mt-14">

      <a
        href="https://wa.me/60173393012"
        className="inline-flex px-10 py-4 bg-[#C8A24A] text-black rounded-full font-medium hover:scale-105 transition duration-300"
      >
        Start OEM Project ｜ 开始合作
      </a>

    </div>

  </div>

</section>

      {/* ================= MANUFACTURING ================= */}

      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <div className="overflow-hidden rounded-[36px] border border-white/10">

              <img
                src="/products/newcake1.jpg"
                alt="manufacturing"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="tracking-[8px] uppercase text-[#C8A24A] text-xs mb-5">

              CRAFTED IN-HOUSE

            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-10">

              Development
              <br />
              Manufacturing
              <br />
              Innovation

            </h2>

            <p className="text-white/65 leading-[2.1] text-lg">

              From mooncake development
              to premium biscuit manufacturing,
              H2ONCE operates with its own
              in-house production and R&D capabilities.

              We collaborate with retailers,
              distributors,
              corporate gifting companies,
              and modern food brands
              to create refined Asian delicacies
              for today's market.

            </p>

            <p className="text-white/40 leading-[2.1] mt-8">

              从月饼研发到高端饼干制作，
              H2ONCE 坚持内部研发与生产。

              我们与零售品牌、
              企业送礼公司、
              经销商及现代食品品牌合作，
              共同打造属于新一代的亚洲食品体验。

            </p>

            {/* CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-12">

              <div className="border border-white/10 rounded-3xl p-5 bg-white/5">
                <p className="text-white/80">OEM / ODM</p>
              </div>

              <div className="border border-white/10 rounded-3xl p-5 bg-white/5">
                <p className="text-white/80">Mooncake Production</p>
              </div>

              <div className="border border-white/10 rounded-3xl p-5 bg-white/5">
                <p className="text-white/80">Premium Biscuits</p>
              </div>

              <div className="border border-white/10 rounded-3xl p-5 bg-white/5">
                <p className="text-white/80">Corporate Gifting</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="py-36 px-6 border-t border-white/5">

        <div className="max-w-4xl mx-auto text-center">

          <p className="tracking-[8px] uppercase text-[#C8A24A] text-xs mb-5">

            OUR PHILOSOPHY

          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-12">

            More Than Food
            <br />
            A Refined Experience

          </h2>

          <p className="text-white/65 text-lg leading-[2.2]">

            We believe great food
            is more than taste alone.

            It should create warmth,
            memories,
            and meaningful moments of sharing.

            From flavor development
            to packaging presentation,
            every detail reflects our philosophy.

          </p>

          <p className="text-white/40 leading-[2.2] mt-10">

            我们相信，
            真正好的食品，
            不只是味道。

            它应该拥有温度、
            记忆与分享的价值。

            从口味研发到包装设计，
            每一个细节，
            都是品牌理念的一部分。

          </p>

        </div>

      </section>

      <Footer />

    </main>

  )

}