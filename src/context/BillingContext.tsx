import { createContext, useState } from "react"
import { BillingDetailsProps } from "../types/BillingDetails"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { CartItem } from "../types/CartItem"

interface BillingContextType {
  billingDetails: BillingDetailsProps
  placeOrder: (
    billingData: BillingDetailsProps,
    e: React.ChangeEvent<HTMLFormElement>
  ) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOrderedProducts: (value: CartItem[]) => void
}

export const BillingContext = createContext<BillingContextType | null>(null)

export const BillingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [billingData, setBillingData] = useState<BillingDetailsProps>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    orderedProducts: [],
    paymentMethod: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    console.log(e.target)
    const newValue = type === "checkbox" ? checked : value
    setBillingData({
      ...billingData,
      [name]: newValue,
    })
  }

  const handleOrderedProducts = (value: CartItem[]) => {
    const orderedProducts = value.map((item) => item.name)
    setBillingData((prevData) => ({
      ...prevData,
      orderedProducts: orderedProducts as string[],
    }))
  }

  const placeOrder = async (
    billingData: BillingDetailsProps,
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "orders"), {
        billingData,
      })
    } catch (err) {
      console.error("Error ordering products", err)
    }
  }

  return (
    <BillingContext.Provider
      value={{
        billingDetails: billingData,
        placeOrder,
        handleChange,
        handleOrderedProducts,
      }}>
      {children}
    </BillingContext.Provider>
  )
}
