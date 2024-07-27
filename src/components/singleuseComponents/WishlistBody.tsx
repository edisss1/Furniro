import { useWishlist, WishlistItem } from "../../context/WishlistContext"
import { Link } from "react-router-dom"
import Unlike from "../../svgs/Unlike/Unlike"

interface WishlistBodyProps {
  sortedProducts: WishlistItem[]
}

const WishlistBody = ({ sortedProducts }: WishlistBodyProps) => {
  const { removeFromWishlist } = useWishlist()
  console.log("Wishlist body mounted with: ", sortedProducts)
  return (
    <div className='mt-5 flex flex-col w-[80%] mx-auto items-center '>
      {sortedProducts && sortedProducts.length > 0 ? (
        sortedProducts.map((item) => (
          <div
            key={item.id}
            className='w-full flex justify-between pe-12 bg-card'>
            <div className='flex items-center gap-2'>
              <img
                className='max-w-[10%] rounded-md'
                src={item.img}
                alt={item.name}
              />
              <div className='flex flex-col'>
                <h5 className='self-start'>{item.name}</h5>
                <p>${item.price}</p>
              </div>
            </div>
            <button onClick={() => removeFromWishlist(item.id)}>
              <Unlike />
            </button>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center gap-4'>
          <h4>Your wishlist is empty</h4>
          <Link
            className='rounded-md border-primary border-2 transition-all duration-100 hover:bg-primary hover:px-5 hover:text-white px-4 py-2'
            to={"/shop"}>
            Go to shop
          </Link>
        </div>
      )}
    </div>
  )
}
export default WishlistBody
