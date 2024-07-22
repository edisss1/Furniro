import { useEffect, useState } from "react"
import { Product } from "../../types/ProductType"
import ProductCard from "./ProductCard"
import ProductCardSkeleton from "./ProductCardSkeleton"
import { useLoading } from "../../context/LoadingContext" // Импортируем хук

export interface ProductWithId extends Product {
  docId: string
}

interface ProductsProps {
  products: ProductWithId[] | undefined
}

const Products = ({ products }: ProductsProps) => {
  const [visibleProducts, setVisibleProducts] = useState<
    ProductWithId[] | undefined
  >([])
  const [itemsToShow, setItemsToShow] = useState(8)
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    if (products && products.length > 0) {
      setVisibleProducts(products.slice(0, itemsToShow))
      setLoading(false)
    }
  }, [products, itemsToShow, setLoading])

  const loadMoreProducts = () => {
    const newItemsToShow = itemsToShow + 8
    setItemsToShow(newItemsToShow)
    setVisibleProducts(products?.slice(0, newItemsToShow))
  }

  return (
    <div className='flex flex-col justify-center items-center m-8'>
      <h1 className='font-semibold text-3xl'>Our Products</h1>
      <div className='grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-2 max-lg:grid-cols-3'>
        {loading
          ? Array.from({ length: itemsToShow }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : visibleProducts?.map((product) => (
              <ProductCard
                id={product?.docId}
                key={product?.docId}
                title={product?.name}
                smallDescription={product?.smallDescription}
                imgURL={product?.imageURL}
                price={product?.price}
              />
            ))}
      </div>
      {visibleProducts &&
        products &&
        visibleProducts?.length < products?.length &&
        visibleProducts?.length < 48 && (
          <button
            onClick={loadMoreProducts}
            className='mt-8 border-2 px-20 py-[0.75rem] text-primary border-primary'>
            Show More
          </button>
        )}
    </div>
  )
}

export default Products
