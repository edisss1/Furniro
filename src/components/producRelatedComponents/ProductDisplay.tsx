import { useContext, useEffect, useReducer, useState } from "react"

import Loading from "../utilityComponents/Loading"
import { CartContext } from "../../context/CartContext"
import { reducerStates } from "../../hooks/reducerStates"
import Copy from "../../svgs/Copy"
import { useLocation } from "react-router-dom"
import Copied from "../utilityComponents/Copied"
import Like from "../../svgs/Like"
import { useWishlist } from "../../context/WishlistContext"
import { useReviews } from "../../context/ReviewsContext"

interface ProductDisplayProps {
  id: string
  img: string
  price: number
  name: string
  reviews: string[]
  category: string
  loading: boolean
}

const ProductDisplay = ({
  id,
  img,
  price,
  name,
  reviews,
  category,
  loading,
}: ProductDisplayProps) => {
  const location = useLocation()
  const [state, dispatch] = useReducer(reducerStates, { count: 0 })
  const [copied, setCopied] = useState(false)
  const cartContext = useContext(CartContext)
  if (!cartContext) return null
  const { acquiredReviews } = useReviews()

  const { addToCart } = cartContext
  const { addToWishlist } = useWishlist()

  const ratings = acquiredReviews.map((review) => {
    return review.rating
  })

  const avgRating = (ratings: number[]): number => {
    if (ratings.length === 0) return 0
    const sum = ratings.reduce((a, b) => a + b, 0)
    return sum / ratings.length
  }

  const product = {
    id: id,
    name: name,
    price: price,
    img: img,
    quantity: state.count,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("http://localhost:5173" + location.pathname)
    setCopied(true)
    setTimeout(() => setCopied(false), 5000)
  }

  useEffect(() => {
    document.title = name ? name : "Loading..."
  }, [name])

  if (loading) return <Loading />

  return (
    <div className="flex mt-8 max-md:mb-8 mx-[10%]  gap-[5%] flex-wrap  justify-start max-md:px-2 ">
      <div className="w-[30%] max-md:w-full">
        <img className="w-full rounded-md" src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[clamp(1rem,5vw,2.25rem)] font-semibold">
            {name}
          </h3>
          <p className="text-product">${price}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p className="text-primary">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  className={`${avgRating(ratings) >= star ? "text-primary" : "text-faint"}`}>
                  ★
                </span>
              ))}
            </p>
            <p>{avgRating(ratings).toFixed(1)}</p>
          </div>
          <p>
            {acquiredReviews?.length ? acquiredReviews.length : 0} Customer
            {acquiredReviews.length === 1 || acquiredReviews.length === 0
              ? " review"
              : " reviews"}
          </p>
        </div>
        <div>
          <div className="flex gap-8  w-full text-[clamp(12px,4vw,20px)]">
            <div className="border-2  flex items-center w-[50%] max-w-[150px] min-w-[100px]  py-3 justify-around rounded-md select-none">
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: 1 })}>
                -
              </button>
              <span>{state.count}</span>
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: 1 })}>
                +
              </button>
            </div>
            <button
              onClick={() => {
                if (state.count > 0) {
                  addToCart(product, state.count)
                }
              }}
              className=" border-2 w-max whitespace-nowrap text-[clamp(12px,4vw,20px)] border-black px-2  rounded-md hover:text-white hover:bg-black hover:border-white transition-colors duration-[200]">
              Add to Cart
            </button>
          </div>
          <div className="mt-28 relative flex flex-col justify-center gap-4 max-lg:mt-8  before:content['*'] before:w-full before:h-[2px] before:bg-[#D9D9D9] before:block before:absolute before:-top-[20%] ">
            <p>Category: {category}</p>
            <div className="flex flex-col items-start gap-6 ">
              <div className="flex gap-4">
                <p>Share:</p>
                <button className="" onClick={copyToClipboard}>
                  <Copy />
                </button>
              </div>
              <div className="flex">
                <p>Add to wishlist: </p>
                <button onClick={() => addToWishlist(product)}>
                  <Like className="w-12 aspect-square " />
                </button>
              </div>
            </div>
            <Copied copied={copied} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
