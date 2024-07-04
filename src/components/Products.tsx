import { useEffect, useState } from "react"

import { Product } from "../types/ProductType"
import ProductCard from "./ProductCard"

import { useProducts } from "../hooks/useProducts"

const Products = () => {
  const products = useProducts()
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const [itemsToShow, setItemsToShow] = useState(8)

  useEffect(() => {
    setVisibleProducts(products.slice(0, 8))
  }, [products])

  const loadMoreProducts = () => {
    const newItemsToShow = itemsToShow + 8
    setItemsToShow(newItemsToShow)
    setVisibleProducts(products.slice(0, newItemsToShow))
  }

  return (
    <div className='flex flex-col  justify-center items-center m-8'>
      <h1 className='font-bold text-3xl'>Our Products</h1>
      <div className='grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-2 max-lg:grid-cols-3'>
        {visibleProducts.length > 0 ? (
          visibleProducts?.map((product) => (
            <ProductCard
              id={product.id}
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
      {visibleProducts.length < products.length &&
        visibleProducts.length < 48 && (
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
