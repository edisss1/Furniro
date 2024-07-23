import { createContext, useEffect, useState } from "react"
import { CartItem } from "../types/CartItem"
import { useAuth } from "./AuthContext"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem, quantity: number) => void
  removeFromCart: (id: string | undefined) => void
  getCartTotalPrice: () => number
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const cartRef = collection(db, "cart")
      const userCartRef = doc(cartRef, user.uid)

      const unsubscribe = onSnapshot(userCartRef, (doc) => {
        if (doc.exists()) {
          setCartItems(doc.data().items || [])
        } else {
          setCartItems([])
        }
      })
      return () => unsubscribe()
    } else {
      const storedCartItems = localStorage.getItem("cartItems")
      if (storedCartItems) {
        try {
          setCartItems(JSON.parse(storedCartItems))
        } catch (err) {
          console.error(err)
          localStorage.removeItem("cartItems")
        }
      }
    }
  }, [user])

  useEffect(() => {
    if (user) {
      const userCartRef = doc(collection(db, "cart"), user.uid)
      setDoc(userCartRef, { items: cartItems })
    } else {
      try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
      } catch (error) {
        console.error("Error saving cart items to localStorage:", error)
      }
    }
  }, [cartItems, user])

  const addToCart = (item: CartItem, quantity: number) => {
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
