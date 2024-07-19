import { createContext } from "react"
import { ProductWithId } from "../components/producRelatedComponents/Products"
import { useProducts } from "../hooks/productHooks/useProducts"

interface ProductContextProps {
  products: ProductWithId[]
  loading: boolean
}

export const ProductContext = createContext<ProductContextProps | null>(null)

interface ProductProviderProps {
  children: React.ReactNode
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const { products, loading } = useProducts()

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  )
}
