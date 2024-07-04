import { useEffect, useReducer } from "react"
import { reducerStates } from "../hooks/reducerStates"
import Loading from "./Loading"

interface ProductDisplayProps {
  img: string | undefined
  price: number | undefined
  name: string | undefined
  reviews: string[] | undefined
  category: string | undefined
  loading: boolean
}

const ProductDisplay = ({
  img,
  price,
  name,
  reviews,
  category,
  loading,
}: ProductDisplayProps) => {
  const [state, dispatch] = useReducer(reducerStates, { count: 0 })

  const size = ["L", "XL", "XS"]

  useEffect(() => {
    if (name === undefined) {
      document.title = "Loading..."
    } else {
      document.title = name
    }
  }, [name])

  if (loading) return <Loading />

  return (
    <>
      <div className='flex mt-8 mx-[10%] gap-[5%] flex-wrap max-md:items-center'>
        <div className='w-[35%]'>
          <div className='w-full  max-md:self-center '>
            <img className='w-full rounded-md' src={img} alt={name} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-4xl'>{name}</h3>
            <p className='text-[#9F9F9F]'>${price}</p>
          </div>
          <div className='flex'>
            <div></div>
            <p>{reviews?.length ? reviews.length : 0} Customer review</p>
          </div>
          <div>
            <p>Size</p>
            <div className='flex gap-2'>
              {size.map((size) => (
                <button className='bg-[#F9F1E7]  rounded-md w-8 aspect-square flex justify-center items-center'>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p>Color</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div className='grid grid-cols-4 gap-2 '>
              <div className='col-span-1 border-2 flex justify-between px-4 py-3 rounded-md select-none'>
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
              <button className='col-span-1 border-2 border-black rounded-md'>
                Add to Cart
              </button>
              <div>
                <button className='flex gap-2 col-span-4 border-2 py-3 px-6 border-black rounded-md'>
                  <span>&#43;</span>
                  <p>Compare</p>
                </button>
              </div>
            </div>
            <div className="mt-28 max-lg:mt-8 relative before:content['*'] before:w-full before:h-[2px] before:bg-[#D9D9D9] before:block before:absolute before:-top-10 ">
              <p>Category: {category}</p>
              <p>Tags: </p>
              <p>Share: </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDisplay
