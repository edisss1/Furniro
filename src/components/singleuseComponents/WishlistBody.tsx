import { useWishlist, WishlistItem } from "../../context/WishlistContext"
import { Link } from "react-router-dom"
import Unlike from "../../svgs/Unlike"

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
            className='w-full flex justify-between pe-12 bg-card relative'>
            <div className='flex items-center gap-2'>
              <img
                className='max-w-[10%] min-w-[80px] rounded-md self-start'
                src={item.img}
                alt={item.name}
              />
              <div className='flex flex-col gap-4 max-w-[40%] '>
                <Link
                  to={`/product/${item.id}`}
                  className='font-medium  text-overflow-ellipsis'>
                  {item.name}
                </Link>
                <p className='text-primary font-semibold'>${item.price}</p>
              </div>
            </div>
            <button
              className='absolute top-[50%] right-3 -translate-y-[50%]'
              onClick={() => removeFromWishlist(item.id)}>
              <Unlike />
            </button>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center gap-4'>
          <h4>Your wishlist is empty</h4>
          <Link
            className='rounded-md border-primary border-2 transition-all duration-100 hover:bg-primary hover:px-5 hover:text-white px-4 py-2 '
            to={"/shop"}>
            Go to shop
          </Link>
        </div>
      )}
    </div>
  )
}
export default WishlistBody
