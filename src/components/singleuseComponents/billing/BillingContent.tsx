import React, { useContext } from "react"
import BillingForm from "./BillingForm"
import Order from "./Order"
import { BillingContext } from "../../../context/BillingContext"

export const BillingContent = () => {
  const context = useContext(BillingContext)
  if (!context) return
  const { billingDetails, placeOrder } = context
  return (
    <div className=' max-w-[80%] mx-auto mt-16 justify-between '>
      <form
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
          placeOrder(billingDetails, e)
        }>
        <fieldset className='flex justify-between mt-6 max-xl:flex-col max-xl:items-center gap-[5%]'>
          <BillingForm />
          <Order />
        </fieldset>
      </form>
    </div>
  )
}
