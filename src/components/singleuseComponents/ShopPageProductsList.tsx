import { useMemo, useState, useEffect } from "react"
import { useDisplay } from "../../context/ItemsDisplayContext"

import Pagination from "../utilityComponents/Pagination"

import ShopHeader from "./ShopHeader"

import ProductCard from "../producRelatedComponents/ProductCard"
import ProductCardSkeleton from "../producRelatedComponents/ProductCardSkeleton"
import { quickSort } from "../../functions/quickSort"
import { useLoading } from "../../context/LoadingContext" // Импортируем хук
import { ProductWithId } from "../producRelatedComponents/Products"

interface ShopPageProductsListProps {
  products: ProductWithId[]
}

const ShopPageProductsList = ({ products }: ShopPageProductsListProps) => {
  const [sortValue, setSortValue] = useState("default")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(8)
  const [search, setSearch] = useState("")
  const { display } = useDisplay()

  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    if (products && products.length > 0) {
      setLoading(false)
    }
  }, [products, setLoading])

  const handlePagination = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = (currentPage: number) => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [sortValue, setLoading])

  useEffect(() => {
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [sortValue, setLoading])

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [products, search])

  const sortedProducts = useMemo(() => {
    switch (sortValue) {
      case "cheap-first":
        return quickSort(filteredProducts, (a, b) => a?.price - b?.price)
      case "expensive-first":
        return quickSort(filteredProducts, (a, b) => b.price - a.price)
      case "aToZ":
        return quickSort(filteredProducts, (a, b) =>
          a.name.localeCompare(b.name)
        )
      case "zToA":
        return quickSort(filteredProducts, (a, b) =>
          b.name.localeCompare(a.name)
        )
      default:
        return filteredProducts
    }
  }, [filteredProducts, sortValue])

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage

    return sortedProducts?.slice(indexOfFirstProduct, indexOfLastProduct)
  }, [sortedProducts, currentPage, itemsPerPage])

  return (
    <div className="flex flex-col items-center w-full">
      <ShopHeader
        setSearch={setSearch}
        onSortChange={setSortValue}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <div
        className={`px-4 gap-6 ${
          display === "flex"
            ? `flex  flex-col w-full `
            : `grid grid-cols-4 max-w-fit max-md:max-w-[90%]  justify-center place-items-center gap-14  mt-10 max-lg:grid-cols-3 max-md:grid-cols-2 `
        }`}>
        {loading && products.length !== 0
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : currentProducts.map((product) => (
              <ProductCard
                id={product.docId}
                key={product.id}
                imgURL={product.imageURL}
                smallDescription={product.smallDescription}
                price={product.price}
                title={product.name}
              />
            ))}
        {!products.length ? (
          <p className="text-center self-center absolute">
            No products with these filters were found
          </p>
        ) : null}
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
