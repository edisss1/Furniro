import { createContext, useContext, useState, useEffect } from "react"
import { ProductContext } from "./ProductsContext"
import { ProductWithId } from "../components/producRelatedComponents/Products"

interface FilterContextProps {
  handleFilterChange: (newFilters: {
    category: string
    priceRange: [number, number]
  }) => void
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  openFilters: () => void
  opened: boolean
  maxPrice: number
  priceRange: [number, number]
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>
  categories: string[]
  category: string
  filteredProducts: ProductWithId[]
}

const FilterContext = createContext<FilterContextProps | null>(null)

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider")
  }
  return context
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ProductContext)
  if (!context) return null
  const { products } = context

  const highestPrice = () => {
    if (products.length === 0) return 0
    let maxPrice = products[0].price
    for (let i = 1; i < products.length; i++) {
      if (maxPrice < products[i].price) {
        maxPrice = products[i].price
      }
    }
    return maxPrice
  }

  const maxPrice = highestPrice()
  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ]

  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice])
  const [category, setCategory] = useState("All")
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [0, maxPrice],
  })
  const [opened, setOpened] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  const openFilters = () => {
    setOpened(!opened)
  }

  const handleFilterChange = (newFilters: {
    category: string
    priceRange: [number, number]
  }) => {
    setFilters(newFilters)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
    handleFilterChange({ category: e.target.value, priceRange })
  }

  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === "All" || product.category === filters.category
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      return matchesCategory && matchesPrice
    })
    setFilteredProducts(filtered)
  }

  useEffect(() => {
    applyFilters()
  }, [filters])

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: priceRange,
    }))
  }, [priceRange])

  return (
    <FilterContext.Provider
      value={{
        setPriceRange,
        handleFilterChange,
        handleCategoryChange,
        openFilters,
        maxPrice,
        opened,
        priceRange,
        categories,
        category,
        filteredProducts,
      }}>
      {children}
    </FilterContext.Provider>
  )
}
