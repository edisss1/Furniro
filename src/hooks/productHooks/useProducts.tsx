// hooks/productHooks/useProducts.ts
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { ProductWithId } from "../../components/producRelatedComponents/Products"

export function useProducts(category?: string) {
  const [products, setProducts] = useState<ProductWithId[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q
        if (category) {
          q = query(
            collection(db, "products"),
            where("category", "==", category)
          )
        } else {
          q = collection(db, "products")
        }

        const querySnapshot = await getDocs(q)
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        })) as ProductWithId[]

        setProducts(productsData)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  return { products, loading }
}
