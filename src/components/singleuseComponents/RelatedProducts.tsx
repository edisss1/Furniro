import { useEffect, useState } from "react"
import { useProducts } from "../../hooks/productHooks/useProducts"

import ProductCard from "../producRelatedComponents/ProductCard"
import { ProductWithId } from "../producRelatedComponents/Products"

interface RelatedProductsType {
  currentProduct: ProductWithId | null
}

const RelatedProducts = ({ currentProduct }: RelatedProductsType) => {
  const { products, loading } = useProducts(currentProduct?.category)
  const [relatedProducts, setRelatedProducts] = useState<ProductWithId[]>([])
  const limit = 4

  useEffect(() => {
    if (!loading && products.length > 0 && currentProduct) {
      const shuffledProducts = products
        .filter((product) => product.docId !== currentProduct.docId)
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
            key={product.docId}
            id={product.docId}
            title={product.name}
            smallDescription={product.smallDescription}
            imgURL={product.imageURL}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
