import { useWishlist, WishlistItem } from "../../context/WishlistContext"
import { Link } from "react-router-dom"
import Unlike from "../../svgs/Unlike"

interface WishlistBodyProps {
  sortedProducts: WishlistItem[]
}

const WishlistBody = ({ sortedProducts }: WishlistBodyProps) => {
  const { removeFromWishlist } = useWishlist()
  return (
    <div className="mt-5 flex flex-col w-[80%] gap-4 mx-auto items-center justify-center">
      {sortedProducts && sortedProducts.length > 0 ? (
        sortedProducts.map((item) => (
          <div key={item.id} className="relative w-full">
            <Link
              aria-label={`Go to ${item.name} page `}
              to={`/product/${item.id}`}
              key={item.id}
              className="w-full flex justify-between pe-12 bg-card group relative">
              <div className="flex items-center gap-2 w-full">
                <img
                  className="w-[10%] aspect-square  min-w-[80px] rounded-md self-start"
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex flex-col gap-4 max-w-[40%] ">
                  <p
                    aria-label={`Go to ${item.name} page `}
                    className="font-medium relative inline-block  text-overflow-ellipsis after:content['*'] after:w-full after:h-[2px] after:absolute after:bottom-0 after:bg-black after:right-0 group-hover:after:scale-0 after:origin-left  group-hover:after:invisible after:transition-all ">
                    {item.name}
                  </p>
                  <p className="text-primary font-semibold">${item.price}</p>
                </div>
              </div>
            </Link>
            <button
              className="absolute top-[50%] right-3 -translate-y-[50%]"
              onClick={() => removeFromWishlist(item.id)}>
              <Unlike />
            </button>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h4>Your wishlist is empty</h4>
          <Link
            aria-label={`Go to shop page `}
            className="rounded-md border-primary border-2 transition-all duration-100 hover:bg-primary hover:px-5 hover:text-white px-4 py-2 "
            to={"/shop"}>
            Go to shop
          </Link>
        </div>
      )}
    </div>
  )
}
export default WishlistBody
