import { WishlistItem } from "../../context/WishlistContext"

interface WishlistBodyProps {
  sortedProducts: WishlistItem[]
}

const WishlistBody = ({ sortedProducts }: WishlistBodyProps) => {
  return (
    <div>
      {sortedProducts.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  )
}
export default WishlistBody
