import Clear from "./Clear"
import SortBy from "./SortBy"

interface SortByProps {
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: {
    sortBy: string
    optionText: string
  }[]
}

const SubheaderWishlist = ({ handleSortChange, options }: SortByProps) => {
  return (
    <>
      <Clear />
      <SortBy handleSortChange={handleSortChange} options={options} />
    </>
  )
}
export default SubheaderWishlist
