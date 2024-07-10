import React, { useState, useEffect, lazy } from "react"
import { Product } from "../../types/ProductType"
import { useProducts } from "../../hooks/productHooks/useProducts"

const ProductCard = lazy(() => import("../producRelatedComponents/ProductCard"))

interface RelatedProductsType {
  currentProduct: Product | null
}

const RelatedProducts = ({ currentProduct }: RelatedProductsType) => {
  const { products, loading } = useProducts(currentProduct?.category)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const limit = 4

  useEffect(() => {
    if (!loading && products.length > 0 && currentProduct) {
      const shuffledProducts = products
        .filter((product) => product.id !== currentProduct.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, limit)
      setRelatedProducts(shuffledProducts)
    }
  }, [products, currentProduct, loading])

  return (
    <div className='flex flex-col items-center mt-[10%]'>
      <h1 className='font-medium text-2xl'>Related Products</h1>
      <div className='flex gap-8 w-full justify-center mt-6'>
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            id={product.id}
            smallDescription={product.smallDescription}
            imgURL={product.imageURL}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(RelatedProducts)
