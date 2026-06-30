"use client"

import Navbar from "../components/Navbar"
import { products } from "../data/products"

type Product = {
  id: string
  name: string
  name_cn: string
  category: string
  size: string
  img: string
}

export default function Products() {
  const baked = products.filter(
    (product: Product) => product.category === "baked"
  )

  const s160 = products.filter(
    (product: Product) => product.category === "s160"
  )

  const s80 = products.filter(
    (product: Product) => product.category === "s80"
  )

  const Card = ({ item }: { item: Product }) => (
    <a
      href={`/products/${item.id}`}
      className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-[#C8A24A]/50 transition-all duration-500 block"
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg text-white group-hover:text-[#C8A24A] transition">
          {item.name}
        </h3>

        <p className="text-white/50 text-sm mt-1">
          {item.name_cn}
        </p>

        <p className="text-[#C8A24A] text-sm mt-3">
          {item.size}
        </p>
      </div>
    </a>
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#12060A] to-black text-white">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#6B0F1A]/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="tracking-[6px] text-[#C8A24A] text-sm mb-4">
            H2ONCE COLLECTION
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product Portfolio
          </h1>

          <p className="text-white/60 max-w-3xl mx-auto leading-loose">
            Premium handcrafted mooncakes and festive delicacies,
            crafted with tradition, quality, and modern presentation.
          </p>
        </div>

        {/* Baked */}
        <Section
          title="Traditional Baked Mooncake"
          subtitle="传统烤皮月饼"
          items={baked}
          Card={Card}
        />

        {/* Snowskin 160g */}
        <Section
          title="Snowskin Mooncake 160g"
          subtitle="160克色皮月饼"
          items={s160}
          Card={Card}
        />

        {/* Snowskin 80g */}
        <Section
          title="Snowskin Mooncake 80g"
          subtitle="80克色皮月饼"
          items={s80}
          Card={Card}
        />
      </div>
    </main>
  )
}

function Section({
  title,
  subtitle,
  items,
  Card,
}: {
  title: string
  subtitle: string
  items: Product[]
  Card: any
}) {
  return (
    <section className="mb-24">
      <div className="mb-10">
        <h2 className="text-3xl text-[#C8A24A] mb-2">
          {title}
        </h2>

        <p className="text-white/50">
          {subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}