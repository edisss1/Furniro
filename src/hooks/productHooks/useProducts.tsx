import { useEffect, useState } from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { Product } from "../../types/ProductType"
import { useLoading } from "../../context/LoadingContext"
import { db } from "../../firebase/firebaseConfig"

export function useProducts(category?: string): {
  products: Product[]
  loading: boolean
} {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { setLoading: setGlobalLoading } = useLoading()

  useEffect(() => {
    setGlobalLoading(true)
    const fetchData = async () => {
      let q
      if (category) {
        q = query(collection(db, "products"), where("category", "==", category))
      } else {
        q = query(collection(db, "products"))
      }

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
          setGlobalLoading(false)
        },
        (error) => {
          console.error("Error fetching products: ", error)
          setLoading(false)
          setGlobalLoading(false)
        }
      )

      return () => unsubscribe()
    }

    fetchData()
  }, [category, setGlobalLoading])

  return { products, loading }
}
