"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Navbar from "../../components/Navbar"
import { products } from "../../data/products"

export default function ProductPage() {
  const params = useParams()

  const id =
    typeof params.id === "string"
      ? params.id
      : params.id?.[0]

  const product = products.find(
    (p: any) => p.id === id
  )

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>
        </div>
      </main>
    )
  }

  const images = [
    product.img,
    product.img.replace(".jpg", "_detail1.jpg"),
    product.img.replace(".jpg", "_detail2.jpg"),
    product.img.replace(".jpg", "_detail3.jpg"),
  ]

  const [selectedImage, setSelectedImage] = useState(
    images[0]
  )

  const relatedProducts = products
    .filter(
      (p: any) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#12060A] to-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>

            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[550px] object-cover rounded-3xl border border-white/10"
            />

            <div className="grid grid-cols-4 gap-4 mt-4">

              {images.map((img: string) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-2xl overflow-hidden border ${
                    selectedImage === img
                      ? "border-[#C8A24A]"
                      : "border-white/10"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-[#C8A24A] tracking-[4px] mb-3">
              H2ONCE COLLECTION
            </p>

            <h1 className="text-5xl font-bold mb-3">
              {product.name}
            </h1>

            <p className="text-white/60 text-2xl mb-8">
              {product.name_cn}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

              <h2 className="text-[#C8A24A] text-xl mb-4">
                Product Description
              </h2>

              <p className="text-white/80 leading-loose mb-4">
                {product.description}
              </p>

              <p className="text-white/60 leading-loose">
                {product.description_cn}
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

              <h2 className="text-[#C8A24A] text-xl mb-4">
                Product Details
              </h2>

              <div className="space-y-3 text-white/70">

                <p>
                  <span className="text-white">
                    Product:
                  </span>{" "}
                  {product.name}
                </p>

                <p>
                  <span className="text-white">
                    Chinese Name:
                  </span>{" "}
                  {product.name_cn}
                </p>

                <p>
                  <span className="text-white">
                    Weight:
                  </span>{" "}
                  {product.size}
                </p>

                <p>
                  <span className="text-white">
                    Category:
                  </span>{" "}
                  {product.category}
                </p>

              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

              <h2 className="text-[#C8A24A] text-xl mb-4">
                Why Choose H2ONCE
              </h2>

              <div className="space-y-3 text-white/80">

                <p>✓ Premium Ingredients</p>

                <p>✓ Low Sugar Recipe</p>

                <p>✓ Soft Texture</p>

                <p>✓ Suitable For All Ages</p>

                <p>✓ OEM / ODM Available</p>

                <p>✓ Corporate Gifting Solutions</p>

              </div>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href={`https://wa.me/60128186358?text=Hi%20H2ONCE,%20I%20am%20interested%20in%20${product.name}`}
                target="_blank"
                className="bg-[#C8A24A] text-black px-8 py-4 rounded-full font-bold"
              >
                WhatsApp Inquiry
              </a>

              <a
                href="/products"
                className="border border-white/20 px-8 py-4 rounded-full"
              >
                View More Products
              </a>

            </div>

          </div>

        </div>

        <section className="mt-24">

          <h2 className="text-3xl text-[#C8A24A] mb-10">
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {relatedProducts.map((item: any) => (

              <a
                key={item.id}
                href={`/products/${item.id}`}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">

                  <div>{item.name}</div>

                  <div className="text-white/50">
                    {item.name_cn}
                  </div>

                </div>

              </a>

            ))}

          </div>

        </section>

      </div>
    </main>
  )
}