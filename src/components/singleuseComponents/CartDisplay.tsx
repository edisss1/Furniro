import { lazy, useContext } from "react"
import { CartContext } from "../context/CartContext"
const CartItemsList = lazy(() => import("./CartItemsList"))
const CartTotals = lazy(() => import("./CartTotals"))
const MobileCartItemsList = lazy(
  () => import("./cartMobile/MobileCartItemsList")
)
const MobileCartTotals = lazy(() => import("./cartMobile/MobileCartTotals"))

const CartDisplay = () => {
  const context = useContext(CartContext)
  if (!context) return

  const { cartItems, getCartTotalPrice, removeFromCart } = context
  const totalPrice = getCartTotalPrice()

  return (
    <div className='flex justify-between items-center max-lg:flex-col max-lg:mx-0  mt-[5%] flex-wrap mx-[5%]'>
      <CartItemsList removeFromCart={removeFromCart} cartItems={cartItems} />
      <CartTotals total={totalPrice} />
      <MobileCartItemsList
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <MobileCartTotals total={totalPrice} />
    </div>
  )
}
export default CartDisplay
