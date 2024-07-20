import { useContext, useEffect, useReducer } from "react"

import Loading from "../utilityComponents/Loading"
import { CartContext } from "../../context/CartContext"
import { reducerStates } from "../../hooks/reducerStates"

interface ProductDisplayProps {
  id: string | undefined
  img: string | undefined
  price: number | undefined
  name: string | undefined
  reviews: string[] | undefined
  category: string | undefined
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
  const [state, dispatch] = useReducer(reducerStates, { count: 0 })
  const cartContext = useContext(CartContext)
  if (!cartContext) return null

  const { addToCart } = cartContext

  const product = {
    id: id,
    name: name,
    price: price,
    img: img,
    quantity: state.count,
  }

  useEffect(() => {
    if (name === undefined) {
      document.title = "Loading..."
    } else {
      document.title = name
    }
  }, [name])

  if (loading) return <Loading />

  return (
    <div className='flex mt-8 mx-auto  gap-[5%] flex-wrap max-md:items-center max-md:px-2 '>
      <div className='w-[40%] max-md:w-full'>
        <img className='w-full rounded-md' src={img} alt={name} />
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h3 className='text-[clamp(1rem,5vw,2.25rem)] font-semibold'>
            {name}
          </h3>
          <p className='text-product'>${price}</p>
        </div>
        <div className='flex'>
          <div></div>
          <p>{reviews?.length ? reviews.length : 0} Customer review</p>
        </div>
        <div>
          <div className='flex gap-4 justify-between w-full text-[clamp(12px,4vw,20px)]'>
            <div className='border-2 flex items-center  justify-between rounded-md select-none'>
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
              className=' border-2 text-[clamp(12px,4vw,20px)] border-black px-2  rounded-md hover:text-white hover:bg-black hover:border-white transition-colors duration-[200]'>
              Add to Cart
            </button>

            <button className='flex gap-2 items-center text-[clamp(12px,4vw,20px)] border-2 px-3 py-2 border-black rounded-md hover:text-white hover:bg-black hover:border-white transition-colors'>
              <span>&#43;</span>
              <p>Compare</p>
            </button>
          </div>
          <div className="mt-28 max-lg:mt-8 relative before:content['*'] before:w-full before:h-[2px] before:bg-[#D9D9D9] before:block before:absolute before:-top-[20%] ">
            <p>Category: {category}</p>
            <p>Tags: </p>
            <p>Share: </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
