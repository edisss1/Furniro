import Share from "../../assets/Share.svg"
import Compare from "../../assets/Compare.svg"
import Like from "../../assets/Like.svg"

import { Link } from "react-router-dom"
import { useDisplay } from "../../context/ItemsDisplayContext"

interface ProductCardProps {
  imgURL: string | undefined
  title: string | undefined
  smallDescription: string | undefined
  price: number | undefined
  id: string | undefined
}

const ProductCard = ({
  imgURL,
  title,
  smallDescription,
  price,
  id,
}: ProductCardProps) => {
  const { display } = useDisplay()

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`rounded-md max-w-[300px] ${
        display === "grid"
          ? ` flex flex-col   bg-[#eeeeee] hover:shadow-2xl max-md:hover:shadow-none  relative z-[10] max-md:after:hidden after:rounded-md after:content['*'] after:bg-[#3A3A3A] after:bg-opacity-0 after:absolute after:inset-0 after:block after:z-[15] group hover:after:bg-opacity-80 after:transition-all after:ease-linear after:duration-200 `
          : `flex justify-between items-center max-w-[70%] self-center bg-[#F9F1E7] mt-4 `
      }   `}>
      <img
        className={`rounded-md ${
          display === "grid"
            ? "w-full  aspect-square object-cover z-[-1] rounded-md "
            : "max-w-24"
        }`}
        src={imgURL}
        alt={title}
        loading='lazy'
      />
      <div className='flex flex-col'>
        <div className='p-4 max-md:p-2'>
          {display === "grid" ? (
            <h4 className='text-base font-bold w-[calc(100%)] overflow-hidden whitespace-nowrap inline-block text-ellipsis '>
              {title}
            </h4>
          ) : (
            <Link
              className='text-base font-bold break-words underline'
              to={`/product/${id}`}>
              {title}
            </Link>
          )}

          <p className='text-sm text-[#898989] inline-block text-ellipsis w-[calc(100%)] whitespace-nowrap overflow-hidden'>
            {smallDescription}
          </p>
          <p className='text-lg font-semibold'>${price}</p>
        </div>
        <div className='max-md:hidden max-md:pointer-events-none  absolute inset-0 flex z-20  flex-col items-center pointer-events-none justify-center opacity-0 transition-all group-hover:pointer-events-auto  group-hover:opacity-100 ease-linear duration-200'>
          <div className='z-20 flex flex-col justify-center items-center gro '>
            <Link
              to={`/product/${id}`}
              className='bg-white px-14 py-3 text-[#B88E2F] max-md:text-sm max-md:px-6 '>
              More
            </Link>
            <div className='text-white text-sm flex gap-4 mt-6 max-sm:flex-col flex-wrap justify-center '>
              <button
                onClick={handleButtonClick}
                className='flex gap-1 justify-center items-center  '>
                <img src={Share} alt='share' />
                <p>Share</p>
              </button>
              <button
                onClick={handleButtonClick}
                className='flex gap-1 justify-center items-center'>
                <img src={Compare} alt='compare' />
                <p>Compare</p>
              </button>
              <button
                onClick={handleButtonClick}
                className='flex gap-1 justify-center items-center'>
                <img src={Like} alt='like' />
                <p>Like</p>
              </button>
            </div>
          </div>
        </div>
        <div className='md:hidden self-center border-2 border-black mb-4 px-4 rounded-lg z-50'>
          <Link to={`/product/${id}`}>More</Link>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
