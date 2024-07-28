import { useWishlist } from "../../../context/WishlistContext"
import Trashcan from "../../../svgs/Trashcan"

const Clear = () => {
  const { clearWishlist } = useWishlist()

  return (
    <div className="flex gap-2 items-center  group [&>*]:transition-all justify-center max-md:order-2">
      <Trashcan className="group-hover:[&>*]:fill-faint [&>*]:transition-all" />
      <button className="group-hover:text-faint" onClick={clearWishlist}>
        Clear wishlist
      </button>
    </div>
  )
}
export default Clear
