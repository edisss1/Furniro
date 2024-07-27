import trashcan from "../../../assets/Trashcan.svg"
import { useWishlist } from "../../../context/WishlistContext"

const Clear = () => {
  const { clearWishlist } = useWishlist()

  console.log("Component Clear mounted")
  return (
    <div className='flex gap-2 items-center justify-center'>
      <img src={trashcan} alt='' />
      <button onClick={clearWishlist}>Clear wishlist</button>
    </div>
  )
}
export default Clear
