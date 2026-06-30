import { create } from "zustand"

type CartItem = {
  id: string
  name: string
  image: string
  quantity: number
}

type CartStore = {
  cart: CartItem[]

  addToCart: (product: Omit<CartItem, "quantity">) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {

      const existing = state.cart.find(
        (item) => item.id === product.id
      )

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      }

    }),
}))