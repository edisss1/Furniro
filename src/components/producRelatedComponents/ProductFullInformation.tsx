import { useState } from "react"
import ProductDescription from "./ProductDescription"
import ProductAdditionalInformation from "./ProductAdditionalInformation"
import ProductsReviews from "./ProductsReviews"

interface ProductFullInfoProps {
  fullDescription: string | undefined
}

const ProductFullInformation = ({ fullDescription }: ProductFullInfoProps) => {
  const [section, setSection] = useState<
    "description" | "additionalInfo" | "reviews"
  >("description")

  return (
    <div>
      <div>
        <button onClick={() => setSection("description")}>Description</button>
        <button onClick={() => setSection("additionalInfo")}>
          Additional Info
        </button>
        <button onClick={() => setSection("reviews")}>Reviews</button>
      </div>
      <div>
        {section === "description" && <ProductDescription />}
        {section === "additionalInfo" && <ProductAdditionalInformation />}
        {section === "reviews" && <ProductsReviews />}
      </div>
    </div>
  )
}
export default ProductFullInformation
