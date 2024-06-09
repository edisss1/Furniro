import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { Product } from "../types/ProductType"

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]) // Initialize with an empty array

  useEffect(() => {
    const q = query(collection(db, "products"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsArray: Product[] = []
      querySnapshot.forEach((doc) => {
        const productData = doc.data() as Product
        productsArray.push({ ...productData, id: doc.id })
      })
      setProducts(productsArray)
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <h1>Our Products</h1>
    </div>
  )
}

export default Products
