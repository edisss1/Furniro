import { useContext } from "react"
import { SpecificProductContext } from "../../context/SpecificProductContext"

const ProductAdditionalInformation = () => {
  const context = useContext(SpecificProductContext)
  if (!context) return null
  const { specificProduct } = context
  return (
    <div className="w-[50%] max-md:w-full px-4 mx-auto mt-8 flex flex-col gap-6">
      <div className="flex justify-between">
        <p>Category</p>
        <p className="text-faint">{specificProduct?.category}</p>
      </div>
      <div className="[&>*]:text-faint">
        <p className="!text-black">Dimensions</p>
        <div className="flex justify-between">
          <p>Depth</p>
          <p>{specificProduct?.details.dimensions.depth}</p>
        </div>
        <div className="flex justify-between">
          <p>Height</p>
          <p>{specificProduct?.details.dimensions.height}</p>
        </div>
        <div className="flex justify-between">
          <p>Width</p>
          <p>{specificProduct?.details.dimensions.width}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Country of origin</p>
        <p className="text-faint">{specificProduct?.details.countryOfOrigin}</p>
      </div>
      <div className="flex justify-between">
        <p>Features</p>
        <div className="flex gap-4 text-faint flex-wrap">
          {specificProduct?.details.features.map((feature, index) => (
            <p>{`${feature}${index != specificProduct.details.features.length - 1 ? "," : ""}`}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p>Made of</p>
        <p className="text-faint">{specificProduct?.details.material}</p>
      </div>
      <div className="flex justify-between">
        <p>Subcategory</p>
        <p className="text-faint">{specificProduct?.subcategory}</p>
      </div>
    </div>
  )
}
export default ProductAdditionalInformation
