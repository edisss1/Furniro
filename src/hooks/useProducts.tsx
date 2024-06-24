import { useEffect, useState } from "react"
import { Product } from "../types/ProductType"
import { useLoading } from "../context/LoadingContext"
import { db } from "../firebase/firebaseConfig"
import { collection, onSnapshot, query } from "firebase/firestore"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const q = query(collection(db, "products"))
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const productsArray: Product[] = []
          querySnapshot.forEach((doc) => {
            const productData = doc.data() as Product
            productsArray.push({ ...productData, id: doc.id })
          })
          setProducts(productsArray)

          setLoading(false)
        },
        (error) => {
          console.error("Error fetching products: ", error)
          setLoading(false)
        }
      )
      return () => unsubscribe()
    }

    fetchData()
  }, [setLoading])

  return products
}
