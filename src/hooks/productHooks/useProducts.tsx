// useProducts.ts
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { Product } from "../../types/ProductType"

interface ProductWithId extends Product {
  docId: string
}

export function useProducts() {
  const [products, setProducts] = useState<ProductWithId[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"))
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        })) as ProductWithId[]
        setProducts(productsData)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return { products }
}
