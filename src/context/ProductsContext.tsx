import { createContext } from "react"
import { ProductWithId } from "../components/producRelatedComponents/Products"
import { useProducts } from "../hooks/productHooks/useProducts"

interface ProductContextProps {
  products: ProductWithId[]
  isLoading: boolean
}

export const ProductContext = createContext<ProductContextProps | null>(null)

interface ProductProviderProps {
  children: React.ReactNode
  category?: string
}
export const ProductProvider = ({
  children,
  category,
}: ProductProviderProps) => {
  const { data: products, isLoading } = useProducts(category)

  if (!products) return

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  )
}
