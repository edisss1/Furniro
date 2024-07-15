import { createContext, ReactNode } from "react"

import { useParams } from "react-router-dom"
import { useSpecificProduct } from "../hooks/productHooks/useSpecificProduct"
import { ProductWithId } from "../components/producRelatedComponents/Products"

const specificProductContextDefaultState = {
  specificProduct: null,
  loading: false,
}

interface SpecificProductContextType {
  specificProduct: ProductWithId | null
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
