import { createContext, useEffect, useState } from "react"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem, quantity: number) => void
  removeFromCart: (id: string | undefined) => void
  getCartTotalPrice: () => number
}

interface CartItem {
  id: string
  name: string | undefined
  price: number | undefined
  img: string | undefined
  quantity: number | undefined
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem("cartItems")
    if (storedCartItems) {
      try {
        return JSON.parse(storedCartItems)
      } catch (error) {
        console.error("Error parsing stored cart items:", error)
        localStorage.removeItem("cartItems")
        return []
      }
    }
    return []
  })

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    } catch (error) {
      console.error("Error saving cart items to localStorage:", error)
    }
  }, [cartItems])

  const addToCart = (item: CartItem, quantity: number) => {
    console.log("Adding to cart:", item, "Quantity:", quantity)
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Number(cartItem?.quantity) + quantity,
              }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantity }])
    }
  }

  const removeFromCart = (id: string | undefined) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === id)
    if (isItemInCart?.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Number(cartItem?.quantity) - 1 }
            : cartItem
        )
      )
    }
  }

  const getCartTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item?.price) * Number(item?.quantity),
      0
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
