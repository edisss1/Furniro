import { useContext } from "react"
import { SpecificProductContext } from "../../context/SpecificProductContext"

const AdditionalInfoList = () => {
  const context = useContext(SpecificProductContext)
  const { specificProduct } = context

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p>Category</p>
        <p>{specificProduct?.category}</p>
      </div>
      <div className="[&>*]:flex [&>*]:justify-between">
        <p>Dimensions</p>
        <div>
          <p>Depth</p>
          <p>{specificProduct?.details.dimensions.depth}</p>
        </div>
        <div>
          <p>Height</p>
          <p>{specificProduct?.details.dimensions.height}</p>
        </div>
        <div>
          <p>Width</p>
          <p>{specificProduct?.details.dimensions.width}</p>
        </div>
      </div>
    </div>
  )
}
export default AdditionalInfoList
