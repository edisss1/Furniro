import { useEffect, useState } from "react"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import { useFirebase } from "../../context/FirebaseContext"

interface Product {
  id: string
  name: string
  category: string
}

export function useProducts(category?: string): {
  products: Product[]
  loading: boolean
} {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { db } = useFirebase() // получаем db из контекста

  useEffect(() => {
    const fetchData = async () => {
      if (!db) {
        console.error("Firestore db is not initialized")
        setLoading(false)
        return
      }

      setLoading(true)
      let q

      console.log("Using db:", db) // добавлено логирование

      if (category) {
        q = query(collection(db, "products"), where("category", "==", category))
      } else {
        q = query(collection(db, "products"))
      }

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productsData: Product[] = []
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() } as Product)
        })
        setProducts(productsData)
        setLoading(false)
      })

      return () => unsubscribe()
    }

    fetchData()
  }, [category, db])

  return { products, loading }
}
