import { useMemo, useState } from "react"
import { useDisplay } from "../context/ItemsDisplayContext"
import { useProducts } from "../hooks/useProducts"
import Pagination from "./Pagination"
import ProductCard from "./ProductCard"
import ShopHeader from "./ShopHeader"

const ShopPageProductsList = () => {
  const [sortValue, setSortValue] = useState("default")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(8)
  const { display } = useDisplay()
  const products = useProducts()

  const handlePagination = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = (currentPage: number) => {
    setCurrentPage(currentPage + 1)
  }

  const totalPages = Math.ceil(products.length / itemsPerPage)

  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const sortedProducts = useMemo(() => {
    switch (sortValue) {
      case "cheap-first":
        return [...currentProducts].sort((a, b) => a.price - b.price)
      case "expensive-first":
        return [...currentProducts].sort((a, b) => b.price - a.price)
      case "aToZ":
        return [...currentProducts].sort((a, b) => a.name.localeCompare(b.name))
      case "zToA":
        return [...currentProducts].sort((a, b) => b.name.localeCompare(a.name))
      default:
        return currentProducts
    }
  }, [currentProducts, sortValue])

  return (
    <div>
      <ShopHeader
        onSortChange={setSortValue}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <div
        className={`px-4 ${
          display === "flex"
            ? `flex  flex-col`
            : `grid grid-cols-4 [&>*]:justify-self-center gap-4 mt-10 max-sm:grid-cols-2`
        }`}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            imgURL={product.imageURL}
            smallDescription={product.smallDescription}
            price={product.price}
            title={product.name}
          />
        ))}
      </div>
      <div>
        <Pagination
          length={products.length}
          itemsPerPage={itemsPerPage}
          handlePagination={handlePagination}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
}
export default ShopPageProductsList
