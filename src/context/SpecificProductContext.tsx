import { createContext, ReactNode } from "react"

import { useParams } from "react-router-dom"
import { useSpecificProduct } from "../hooks/productHooks/useSpecificProduct"
import { ProductWithId } from "../components/producRelatedComponents/Products"

const specificProductContextDefaultState = {
  specificProduct: undefined,
  isLoading: false,
}

interface SpecificProductContextType {
  specificProduct: ProductWithId | undefined
  isLoading: boolean
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
  const { data: specificProduct, isLoading } = useSpecificProduct(productId!)

  return (
    <SpecificProductContext.Provider value={{ specificProduct, isLoading }}>
      {children}
    </SpecificProductContext.Provider>
  )
}
