import { Link } from "react-router-dom"

interface ProductHoverProps {
  id: string | undefined
  share: string
  compare: string
  like: string
}

const ProductCardHover = ({ id, share, compare, like }: ProductHoverProps) => {
  return (
    <div className='max-md:hidden max-md:pointer-events-none  absolute inset-0 flex z-20  flex-col items-center pointer-events-auto justify-center opacity-0 transition-all group-hover:pointer-events-auto  group-hover:opacity-100 ease-linear duration-200'>
      <div className='z-20 flex flex-col justify-center items-center gro '>
        <Link
          to={`/product/${id}`}
          className='bg-white px-14 py-3 text-[#B88E2F] max-md:text-sm max-md:px-6 '>
          More
        </Link>
        <div className='text-white text-sm flex gap-4 mt-6 max-sm:flex-col flex-wrap justify-center '>
          <button className='flex gap-1 justify-center items-center  '>
            <img src={share} alt='share' />
            <p>Share</p>
          </button>
          <button className='flex gap-1 justify-center items-center'>
            <img src={compare} alt='compare' />
            <p>Compare</p>
          </button>
          <button className='flex gap-1 justify-center items-center'>
            <img src={like} alt='like' />
            <p>Like</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCardHover
