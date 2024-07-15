const ProductInformationPageNavBar = ({
  currentProduct,
}: {
  currentProduct: string | undefined
}) => {
  return (
    <div className='bg-[#F9F1E7] px-[10%] py-8 flex gap-[1%] items-center text-[#9F9F9F]'>
      <div className='flex justify-between items-center gap-3'>
        <p>Home</p>
        <span> {">"} </span>
      </div>
      <div className='flex justify-between items-center gap-3'>
        <p>Shop</p>
        <span> {">"} </span>
      </div>
      <p className='text-black inline-block whitespace-nowrap text-ellipsis w-[calc(100%)] overflow-hidden'>
        {currentProduct}
      </p>
    </div>
  )
}
export default ProductInformationPageNavBar
