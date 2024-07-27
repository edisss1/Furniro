import { Link } from "react-router-dom"
import { useWishlist } from "../../context/WishlistContext"
import Like from "../../svgs/Like"

interface ProductHoverProps {
  id: string
  name: string
  price: number
  imgURL: string
}

const ProductCardHover = ({ id, name, price, imgURL }: ProductHoverProps) => {
  const { addToWishlist, liked } = useWishlist()

  const wishlistProduct = {
    id: id, // Используйте идентификатор товара
    name: name,
    price: price,
    img: imgURL,
  }

  return (
    <div className='max-md:hidden md:pointer-events-none absolute inset-0 flex z-20 flex-col items-center pointer-events-auto justify-center opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100 ease-linear duration-200'>
      <div className='z-20 flex flex-col justify-center items-center gro '>
        <Link
          to={`/product/${id}`}
          className='bg-white px-14 py-3 text-primary max-md:text-sm max-md:px-6 '>
          More
        </Link>
        <div className='text-white text-sm flex gap-4 mt-6 max-sm:flex-col flex-wrap justify-center '>
          <button
            onClick={() => addToWishlist(wishlistProduct)}
            className='flex gap-1 justify-center items-center'>
            <Like className={`${liked ? "fill-white" : ""}`} />
            <p>Like</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCardHover
