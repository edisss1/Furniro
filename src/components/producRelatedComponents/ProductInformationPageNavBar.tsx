const ProductInformationPageNavBar = ({
  currentProduct,
}: {
  currentProduct: string | undefined
}) => {
  return (
    <div className='bg-secondary px-[10%] py-8 flex gap-[1%] items-center text-product'>
      <div className='flex justify-between items-center gap-3'>
        <p>Home</p>
        <span> {">"} </span>
      </div>
      <div className='flex justify-between items-center gap-3'>
        <p>Shop</p>
        <span> {">"} </span>
      </div>
      <p className='text-black text-overflow-ellipsis w-[calc(100%)] '>
        {currentProduct}
      </p>
    </div>
  )
}
export default ProductInformationPageNavBar
