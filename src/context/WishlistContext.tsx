import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { ProviderProps } from "../types/ProviderProps"

export interface WishlistItem {
  id: string
  name: string
  price: number
  img: string
}

interface WishlistContextProps {
  wishlistItems: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string | undefined) => void
}

export const WishlistContext = createContext<WishlistContextProps | null>(null)

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider")
  }
  return context
}

export const WishlistProvider = ({ children }: ProviderProps) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const wishlistRef = collection(db, "wishlist")
      const userWishlistRef = doc(wishlistRef, user.uid)

      const unsubscribe = onSnapshot(userWishlistRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data()?.items || []
          setWishlistItems(data)
        } else {
          setWishlistItems([])
        }
      })
      return () => unsubscribe()
    } else {
      setWishlistItems([])
    }
  }, [user])

  useEffect(() => {
    if (user) {
      const userWishlistRef = doc(collection(db, "wishlist"), user.uid)
      setDoc(userWishlistRef, { items: wishlistItems }).catch((error) => {
        console.error("Error updating wishlist:", error)
      })
    }
  }, [wishlistItems, user])

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems((prevItems) => {
      const isItemInWishlist = prevItems.find(
        (wishlistItem) => wishlistItem.id === item.id
      )

      if (!isItemInWishlist) {
        return [...prevItems, item]
      }
      return prevItems
    })

    console.log("Adding item to wishlist: ", item)
  }

  const removeFromWishlist = (id: string | undefined) => {
    if (!id) return

    setWishlistItems((prevItems) =>
      prevItems.filter((wishlistItem) => wishlistItem.id !== id)
    )
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}
