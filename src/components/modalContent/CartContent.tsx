import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ModalHeader } from "../singleuseComponents/ModalHeader"
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
      <div className="flex flex-col gap-4 relative   ">
        <ModalHeader modalTitle="Shopping Cart" toggleDialog={toggleDialog} />
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div key={crypto.randomUUID()} className="flex gap-4">
              <img
                className="w-[105px] aspect-square rounded-md"
                src={cartItem.img}
                alt=""
              />
              <div className="flex justify-between items-center w-full">
                <div className="group flex flex-col items-start gap-4">
                  <Link
                    aria-label={`Go to ${cartItem.name} page`}
                    className="font-medium relative   after:content-[''] after:w-full after:h-[2px] after:absolute after:bottom-0 after:bg-black after:right-0 group-hover:after:scale-0 after:origin-left group-hover:after:invisible after:transition-all block w-full"
                    to={`/product/${cartItem.id}`}>
                    <p className="text-overflow-ellipsis max-w-[230px]">
                      {cartItem.name}
                    </p>
                  </Link>

                  <p className="flex justify-around w-[50%]">
                    <span>{cartItem.quantity}</span> <span>X</span>
                    <span className="text-primary">${cartItem.price}</span>
                  </p>
                </div>
                <button onClick={() => removeFromCart(cartItem.id)}>
                  <img src={RemoveFromCart} alt="" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="self-center m-10 flex flex-col items-center gap-4">
            <h3>Your cart is empty</h3>
            <Link
              className="border border-faint px-4 py-2 rounded-md"
              to={"/shop"}>
              Go to shop
            </Link>
          </div>
        )}
      </div>
      <div className="sticky top-[100%] mb-4  bg-white">
        <div className="flex border-b-2  justify-around py-5 w-auto  ">
          <p>Subtotal</p>
          <span className="text-primary font-semibold">${totalPrice}</span>
        </div>
        <div className="mt-4 ">
          <ul className="flex justify-around gap-4  [&>*]:border [&>*]:border-faint [&>*]:rounded-full [&>*]:px-4  ">
            <li>
              <Link aria-label="Go to cart" to={"/cart"}>
                Cart
              </Link>
            </li>
            <li>
              <Link aria-label="Go to checkout" to={"/checkout"}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default CartContent
