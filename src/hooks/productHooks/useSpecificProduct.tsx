import { useEffect, useState } from "react"

import { doc, getDoc } from "firebase/firestore"
import { Product } from "../../types/ProductType"
import { db } from "../../firebase/firebaseConfig"

export function useSpecificProduct(id: string) {
  const [specificProduct, setSpecificProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setSpecificProduct({ ...docSnap.data(), id: docSnap.id } as Product)
        }
      } catch (error) {
        console.error("Error fetching products: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  return { specificProduct, loading }
}
