import { collection, onSnapshot, query } from "firebase/firestore"
import { useCallback, useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig"
import { Product } from "../types/ProductType"
import ProductCard from "./ProductCard"
import { useLoading } from "../context/LoadingContext"

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const [itemsToShow, setItemsToShow] = useState(8)
  const { loading, setLoading } = useLoading()

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
          setVisibleProducts(productsArray.slice(0, 8))
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

  const loadMoreProducts = () => {
    const newItemsToShow = itemsToShow + 8
    setItemsToShow(newItemsToShow)
    setVisibleProducts(products.slice(0, newItemsToShow))
  }

  return (
    <div className='flex flex-col justify-center items-center m-8'>
      <h1 className='font-bold text-3xl'>Our Products</h1>
      <div className='grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-2 max-lg:grid-cols-3'>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              smallDescription={product.smallDescription}
              imgURL={product.imageURL}
              price={product.price}
            />
          ))
        ) : (
          <h1>Error!</h1>
        )}
      </div>
      {visibleProducts.length < products.length && (
        <button
          onClick={loadMoreProducts}
          className='mt-8 border-2 px-20 py-[0.75rem] text-[#B88E2F] border-[#B88E2F]'>
          Show More
        </button>
      )}
    </div>
  )
}

export default Products
