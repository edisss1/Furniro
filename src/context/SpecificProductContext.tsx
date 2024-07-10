import { createContext, ReactNode } from "react"
import { Product } from "../types/ProductType"

import { useParams } from "react-router-dom"
import { useSpecificProduct } from "../hooks/productHooks/useSpecificProduct"

const specificProductContextDefaultState = {
  specificProduct: null,
  loading: false,
}

interface SpecificProductContextType {
  specificProduct: Product | null
  loading: boolean
}

export const SpecificProductContext = createContext<SpecificProductContextType>(
  specificProductContextDefaultState
)

export const SpecificProductProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { productId } = useParams<{ productId: string }>()
  const { specificProduct, loading } = useSpecificProduct(productId!)

  return (
    <SpecificProductContext.Provider value={{ specificProduct, loading }}>
      {children}
    </SpecificProductContext.Provider>
  )
}
