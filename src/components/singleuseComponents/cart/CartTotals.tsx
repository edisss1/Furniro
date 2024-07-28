import { Link } from "react-router-dom"

export interface CartTotalsProps {
  total: number
}

const CartTotals = ({ total }: CartTotalsProps) => {
  return (
    <div className="max-lg:hidden flex flex-col justify-between items-center px-[5%] pt-[1%] max-w-fit bg-secondary flex-wrap rounded-sm">
      <h1 className="font-semibold text-3xl mb-[15%] mt-[10%] text-center">
        Cart Totals
      </h1>
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-between ">
          <span className="font-medium">Subtotal</span>
          <span className="text-product">${total}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="text-primary font-medium text-xl">${total}</span>
        </div>
      </div>
      <Link
        aria-label={`Link to checkout `}
        className={`text-xl border-[1px] border-black  px-[15%] py-4 rounded-md mt-[10%] mb-[20%]`}
        to={"/checkout"}>
        Checkout
      </Link>
    </div>
  )
}
export default CartTotals
