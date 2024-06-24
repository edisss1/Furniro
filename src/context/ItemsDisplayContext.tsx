import { createContext, useContext, useState } from "react"

interface ItemsDisplayContextType {
  display: "grid" | "flex"
  setDisplay: (display: "grid" | "flex") => void
}

const ItemsDisplayContext = createContext<ItemsDisplayContextType | undefined>(
  undefined
)

export const useDisplay = () => {
  const context = useContext(ItemsDisplayContext)
  if (!context) {
    throw new Error("useDisplay must be used within a ItemsDisplayProvider")
  }

  return context
}

export const ItemsDisplayProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [display, setDisplay] = useState<"grid" | "flex">("grid")

  return (
    <ItemsDisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </ItemsDisplayContext.Provider>
  )
}
