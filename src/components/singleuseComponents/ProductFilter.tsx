import Slider from "react-slider"
import { useFilter } from "../../context/FilterContext"

const ProductFilter = () => {
  const {
    maxPrice,
    opened,
    priceRange,
    setPriceRange,
    categories,
    handleCategoryChange,
  } = useFilter()

  return (
    <div
      className={`${opened ? "block" : "hidden"} absolute top-[25rem] max-lg:top-[40%] max-: max-lg:left-[10%] max-md:w-full w-[calc(25%+20px)]  max-lg:w-[calc(45%+20px)] max-md:static  z-[100] flex flex-col items-center bg-secondary shadow-lg border-primary border px-6 py-6 rounded-md gap-4 `}>
      <div>
        <h3>Choose a category</h3>
        <select
          className="px-4 py-2 w-full rounded-md bg-card text-faint"
          onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full items-center flex flex-col">
        <h3>Set price range</h3>
        <p>
          {priceRange[0]} - {priceRange[1]}
        </p>
        <Slider
          min={0}
          max={maxPrice}
          value={priceRange}
          className="h-[1rem] w-full bg-white rounded-md flex items-center"
          onChange={setPriceRange}
        />
      </div>
    </div>
  )
}

export default ProductFilter
