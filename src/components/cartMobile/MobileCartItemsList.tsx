import { CartItemsListProps } from "../CartItemsList"
import Delete from "../../assets/Delete.svg"

const MobileCartItemsList = ({
  cartItems,
  removeFromCart,
}: CartItemsListProps) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div className='gap-4 lg:hidden sm:flex-col flex mx-2'>
          <img
            className='max-w-[105px] aspect-square self-start rounded-md'
            src={item.img}
            alt=''
          />
          <div>
            <h4 className='font-bold'>{item.name}</h4>
            <div className='flex gap-2'>
              <p className='font-semibold'>Quantity: </p>
              <span>{item.quantity}</span>
            </div>
            <div className='flex gap-2'>
              <p className='font-semibold'>Price:</p>
              <span>{item.price}</span>
            </div>
            <div className='flex gap-2'>
              <p className='font-semibold'>Total price:</p>
              <span>
                {item.price && item.quantity ? item.price * item.quantity : 0}
              </span>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <img src={Delete} alt='' />
          </button>
        </div>
      ))}
    </div>
  )
}
export default MobileCartItemsList
