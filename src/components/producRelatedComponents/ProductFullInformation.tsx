import { useState } from "react"
import ProductDescription from "./ProductDescription"
import ProductAdditionalInformation from "./ProductAdditionalInformation"
import ProductsReviews from "./ProductsReviews"

const ProductFullInformation = () => {
  const [section, setSection] = useState<
    "description" | "additionalInfo" | "reviews"
  >("description")

  const buttonClass = (currentSection: string) => {
    return currentSection === section ? "text-black" : "text-product"
  }

  return (
    <div className="flex flex-col justify-center w-full mt-[5%]">
      <div className="flex justify-center gap-[5%] font-medium text-2xl flex-wrap max-md:gap-6">
        <button
          className={buttonClass("description")}
          onClick={() => setSection("description")}>
          Description
        </button>
        <button
          className={buttonClass("additionalInfo")}
          onClick={() => setSection("additionalInfo")}>
          Additional Info
        </button>
        <button
          className={buttonClass("reviews")}
          onClick={() => setSection("reviews")}>
          Reviews
        </button>
      </div>
      <div className="mt-4 overflow-hidden mx-auto w-full">
        {section === "description" && <ProductDescription />}
        {section === "additionalInfo" && <ProductAdditionalInformation />}
        {section === "reviews" && <ProductsReviews />}
      </div>
    </div>
  )
}
export default ProductFullInformation
