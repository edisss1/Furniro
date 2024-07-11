import { CartItem } from "../../../types/CartItem"
import Delete from "../../../assets/Delete.svg"

export interface CartItemsListProps {
  cartItems: CartItem[]
  removeFromCart: (id: string | undefined) => void
}

const CartItemsList = ({ cartItems, removeFromCart }: CartItemsListProps) => {
  return (
    <div className='max-lg:hidden w-[820px] max-w-[50%] self-start mx-auto '>
      <div className='w-full  grid grid-cols-6 bg-[#F9F1E7] place-items-center py-4'>
        <p className='col-span-2'>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div>
        {cartItems.map((item) => (
          <div className='w-full grid grid-cols-6 items-center place-items-center mt-14'>
            <div className='flex self-start mx-0 items-center  col-span-2 gap-3'>
              <img className='max-w-[105px] rounded-md' src={item.img} alt='' />
              <p className=''>{item.name}</p>
            </div>
            <p>${item.price}</p>
            <div className='border-[1px] rounded-sm border-[#9F9F9F] aspect-square w-8 flex justify-center items-center'>
              <p>{item.quantity}</p>
            </div>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              <img src={Delete} alt='' />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CartItemsList
