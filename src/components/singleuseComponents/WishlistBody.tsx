import { useWishlist } from "../../context/WishlistContext"

const WishlistBody = () => {
  const { wishlistItems } = useWishlist()
  return (
    <div>
      {wishlistItems.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}
export default WishlistBody
