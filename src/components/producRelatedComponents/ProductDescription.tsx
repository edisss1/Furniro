import { useContext } from "react"
import { SpecificProductContext } from "../../context/SpecificProductContext"

const ProductDescription = () => {
  const { specificProduct } = useContext(SpecificProductContext)
  return (
    <div className='flex max-w-[50%] mx-auto  text-[#9F9F9F]'>
      <p>{specificProduct?.fullDescription}</p>
    </div>
  )
}
export default ProductDescription
