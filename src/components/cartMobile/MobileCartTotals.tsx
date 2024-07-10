import { CartTotalsProps } from "../singleuseComponents/CartTotals"

const MobileCartTotals = ({ total }: CartTotalsProps) => {
  return (
    <div className='lg:hidden w-full flex flex-col justify-center items-center mt-4 bg-[#F9F1E7] py-5'>
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
