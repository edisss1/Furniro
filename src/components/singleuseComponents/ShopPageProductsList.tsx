import { useMemo, useState } from "react"
import { useDisplay } from "../../context/ItemsDisplayContext"

import Pagination from "../utilityComponents/Pagination"

import ShopHeader from "./ShopHeader"

import ProductCard from "../producRelatedComponents/ProductCard"
import { quickSort } from "../../functions/quickSort"
import { useProducts } from "../../hooks/productHooks/useProducts"

const ShopPageProductsList = () => {
  const [sortValue, setSortValue] = useState("default")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(8)
  const { display } = useDisplay()
  const { products } = useProducts()

  const handlePagination = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    console.log("Changed page")
  }

  const handleNextPage = (currentPage: number) => {
    setCurrentPage(currentPage + 1)
    console.log("Changed")
  }

  const sortedProducts = useMemo(() => {
    console.log("sorting...")
    switch (sortValue) {
      case "cheap-first":
        return quickSort(products, (a, b) => a.price - b.price)
      case "expensive-first":
        return quickSort(products, (a, b) => b.price - a.price)
      case "aToZ":
        return quickSort(products, (a, b) => a.name.localeCompare(b.name))
      case "zToA":
        return quickSort(products, (a, b) => b.name.localeCompare(a.name))
      default:
        return products
    }
  }, [products, sortValue])

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage

    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  }, [sortedProducts, currentPage, itemsPerPage])

  return (
    <div className='flex flex-col items-center'>
      <ShopHeader
        onSortChange={setSortValue}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <div
        className={`px-4 gap-6 ${
          display === "flex"
            ? `flex  flex-col`
            : `grid grid-cols-4 max-w-[75%] justify-center  mt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:max-w-[85%]`
        }`}>
        {currentProducts.map((product) => (
          <ProductCard
            id={product.docId}
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
