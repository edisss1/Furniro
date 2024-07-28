import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { BillingContext } from "../../../context/BillingContext"

const Order = () => {
  const cartContext = useContext(CartContext)
  const billingContext = useContext(BillingContext)
  if (!billingContext) return
  if (!cartContext) return

  const { cartItems, getCartTotalPrice } = cartContext
  const { handleChange, billingDetails, handleOrderedProducts } = billingContext
  const totalPrice = getCartTotalPrice()

  return (
    <div className="w-[50%] *:flex *:justify-between relative  mt-4 max-lg:w-full">
      <div className=" font-medium text-xl  mb-4  ">
        <h3>Product</h3>
        <h3>Subtotal</h3>
      </div>
      <div className="flex flex-col">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between w-full">
            <div className="flex gap-1">
              <span className="text-product">{item.name}</span>
              <span>X</span>
              <span>{item.quantity}</span>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-4 mb-8 gap-6 relative after:content['*'] after:w-full after:h-[1px] after:bg-[#D9D9D9] after:absolute after:right-0 after:top-[120%]">
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p className="text-xl text-primary">${totalPrice}</p>
        </div>
      </div>
      <div>
        <fieldset className="flex flex-col gap-4">
          <div className="group">
            <div className="flex gap-2 items-center  ">
              <label className="custom-radio-btn peer">
                <input
                  required
                  className="group"
                  type="radio"
                  name="paymentMethod"
                  id="directTransfer"
                  value="directTransfer"
                  onChange={handleChange}
                  checked={billingDetails.paymentMethod === "directTransfer"}
                />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="directTransfer">Direct Bank Transfer</label>
            </div>

            <p
              className={`${billingDetails.paymentMethod === "directTransfer" ? "opacity-100 pointer-events-auto static" : "opacity-0 pointer-events-none absolute"} transition-all duration-100 ease-in text-product`}>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <label className="custom-radio-btn">
                <input
                  required
                  className="group/direct-transfer "
                  type="radio"
                  name="paymentMethod"
                  id="cashOnDelivery"
                  value="cashOnDelivery"
                  onChange={handleChange}
                  checked={billingDetails.paymentMethod === "cashOnDelivery"}
                />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="cashOnDelivery">Cash On Delivery</label>
            </div>
            <p
              className={`${billingDetails.paymentMethod === "cashOnDelivery" ? "opacity-100 pointer-events-auto static" : "opacity-0 pointer-events-none absolute"} transition-all duration-100 ease-in text-product`}>
              Cash on delivery
            </p>
          </div>
          <div className="flex flex-col">
            <p className="w-[105%]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold text-base">privacy policy</span>.
            </p>
            <button
              onClick={() => {
                handleOrderedProducts(cartItems)
                alert("This feature is not quite there yet")
              }}
              className="mt-9 w-fit self-center py-[3%] rounded-xl px-[15%] border-2 border-black "
              type="submit">
              Place order
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
export default Order
