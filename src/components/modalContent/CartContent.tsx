import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ModalHeader } from "../ModalHeader"
import RemoveFromCart from "../../assets/RemoveFromCart.svg"
import { Link } from "react-router-dom"

interface CartContentProps {
  toggleDialog: () => void
}

const CartContent = ({ toggleDialog }: CartContentProps) => {
  const context = useContext(CartContext)
  if (!context) return
  const { cartItems, removeFromCart, getCartTotalPrice } = context
  const totalPrice = getCartTotalPrice()

  return (
    <>
      <div className='flex flex-col gap-4 relative  '>
        <ModalHeader modalTitle='Shopping Cart' toggleDialog={toggleDialog} />
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div key={crypto.randomUUID()} className='flex gap-4'>
              <img
                className='w-[105px] aspect-square rounded-md'
                src={cartItem.img}
                alt=''
              />
              <div className='flex justify-between items-center w-full'>
                <div className=''>
                  <p>{cartItem.name}</p>
                  <p className='flex justify-around w-[50%]'>
                    <span>{cartItem.quantity}</span> <span>X</span>
                    <span className='text-[#B88E2F]'>${cartItem.price}</span>
                  </p>
                </div>
                <button onClick={() => removeFromCart(cartItem.id)}>
                  <img src={RemoveFromCart} alt='' />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className='self-center my-10'>There are no items!</h1>
        )}
      </div>
      <div className='sticky bottom-0 left-0 bg-white'>
        <div className='flex border-b-2  justify-between py-5 w-auto  '>
          <p>Subtotal</p>
          <span>${totalPrice}</span>
        </div>
        <div className='mt-4 '>
          <ul className='flex justify-around gap-4   [&>*]:border-2 [&>*]:border-black [&>*]:rounded-full [&>*]:px-4  '>
            <li>
              <Link to={"/"}>Cart</Link>
            </li>
            <li>
              <Link to={"/"}>Checkout</Link>
            </li>
            <li>
              <Link to={"/"}>Comparison</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default CartContent
