import { CartTotalsProps } from "../singleuseComponents/cart/CartTotals"

const MobileCartTotals = ({ total }: CartTotalsProps) => {
  return (
    <div className='lg:hidden w-full flex flex-col justify-center items-center mt-4 bg-secondary py-5'>
      <h2 className='font-semibold text-lg'>Cart Totals</h2>
      <div className='mx-auto w-full flex flex-col  mt-4'>
        <div className='flex justify-evenly w-full'>
          <span className=''>Subtotal</span>
          <span className=''>${total}</span>
        </div>
        <div className='flex justify-evenly w-full'>
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  )
}
export default MobileCartTotals
